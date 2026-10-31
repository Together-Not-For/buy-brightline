import { NextRequest, NextResponse } from 'next/server'

// Saves organizational pledge sign-ons to Airtable.
// Uses the same base and token as the individual pledge; the table name comes from
// AIRTABLE_TABLE_NAME_ORGS (defaults to "Organizations").
export async function POST(req: NextRequest) {
  try {
    const { org, type, county, site, members, contact, role, email, phone, authorized, commit, listPublicly } =
      await req.json()

    if (!org?.trim() || !type?.trim() || !county?.trim() || !contact?.trim() || !email?.trim() || !authorized || !commit) {
      return NextResponse.json({ data: 'error', detail: 'missing fields' }, { status: 400 })
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(
        process.env.AIRTABLE_TABLE_NAME_ORGS ?? 'Organizational Pledge',
      )}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          typecast: true, // lets Airtable add new single-select options for "Type" automatically
          fields: {
            "Organization Name": org.trim(),
            Type: type.trim(),
            'County': county.trim(),
            Website: site?.trim() || undefined,
            Members: members?.trim() || undefined,
            'POC Name': contact.trim(),
            'POC Role': role?.trim() || undefined,
            Email: email.trim(),
            Phone: phone?.trim() || undefined,
            Authorized: !!authorized,
            'Agrees to Asks': !!commit,
            'List Publicly': !!listPublicly,
          },
        }),
      },
    )

    if (!response.ok) {
      console.error('Airtable error:', await response.json().catch(() => response.status))
      return NextResponse.json({ data: 'error' }, { status: 500 })
    }

    return NextResponse.json({ data: 'ok' })
  } catch (err) {
    console.error('Org signup error:', err)
    return NextResponse.json({ data: 'error' }, { status: 500 })
  }
}