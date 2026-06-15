import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, zip, phone, consent1, consent2, consent3, improvement } = body

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          "Zip Code": Number(zip),
          Phone: phone, 
          "Consent1": consent1,
          "Consent2": consent2,
          "Consent3": consent3,
          Improvement: improvement
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