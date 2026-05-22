import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, consent } = body

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME_VOLUNTEER}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Phone: phone, 
          Consent: consent
        },
      }),
    }
  )

  const result = await response.json()
  // console.log('Airtable response status:', response.status)
  // console.log('Airtable response body:', JSON.stringify(result))

  if (!response.ok) {
    return NextResponse.json({ data: 'error', detail: result }, { status: 500 })
  }

  return NextResponse.json({ data: 'ok' })
}