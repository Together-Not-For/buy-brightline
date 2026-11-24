// Shown if Airtable can't be reached, so the page never breaks.
const FALLBACK_PLEDGE_COUNT = 712

// Airtable is queried at most once per hour; every visitor in between gets the cached count.
const REVALIDATE_SECONDS = 60 * 60

export async function getPledgeCount(): Promise<number> {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = process.env.AIRTABLE_TABLE_NAME
    const token = process.env.AIRTABLE_TOKEN

    // Airtable has no count endpoint and paginates at 100 records per page,
    // so we page through the list endpoint fetching a single field.
    let count = 0
    let offset: string | undefined = undefined

    do {
      const url = new URL(`https://api.airtable.com/v0/${baseId}/${tableName}`)
      url.searchParams.set('pageSize', '100')
      url.searchParams.set('fields[]', 'Name')
      if (offset) url.searchParams.set('offset', offset)

      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: REVALIDATE_SECONDS, tags: ['pledge-count'] },
      })

      if (!res.ok) {
        throw new Error(`Airtable error: ${res.status}`)
      }

      const data = await res.json()
      count += data.records.length
      offset = data.offset
    } while (offset)

    return count
  } catch (err) {
    console.error('Failed to fetch pledge count:', err)
    return FALLBACK_PLEDGE_COUNT
  }
}
