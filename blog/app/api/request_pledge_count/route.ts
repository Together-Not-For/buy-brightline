import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = process.env.AIRTABLE_TABLE_NAME
    const apiKey = process.env.AIRTABLE_API_KEY

    // Airtable paginates at 100 records per page, so we count via the
    // list endpoint, fetching just record IDs to keep payload small.
    let count = 0
    let offset: string | undefined = undefined

    do {
      const url = new URL(`https://api.airtable.com/v0/${baseId}/${tableName}`)
      url.searchParams.set('pageSize', '100')
      url.searchParams.set('fields[]', 'Name') // any single field to minimize payload
      if (offset) url.searchParams.set('offset', offset)

      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${apiKey}` },
        cache: 'no-store',
      })

      if (!res.ok) {
        throw new Error(`Airtable error: ${res.status}`)
      }

      const data = await res.json()
      count += data.records.length
      offset = data.offset

    } while (offset)

    return NextResponse.json({ count })

  } catch (err) {
    console.error('Failed to fetch pledge count:', err)
    return NextResponse.json({ count: null, error: 'Failed to fetch count' }, { status: 500 })
  }
}