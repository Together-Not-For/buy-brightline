import { NextRequest, NextResponse } from 'next/server'
import { getUpcomingEvents } from '../../events/events'

export async function POST(req: NextRequest) {
  try {
    const { name, email, consent, events } = await req.json()

    // Only accept event ids that actually exist in Airtable right now
    const upcomingEvents = await getUpcomingEvents()
    const chosen = upcomingEvents.filter((e) => Array.isArray(events) && events.includes(e.id))

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(
        process.env.AIRTABLE_TABLE_NAME_EVENTS ?? 'Event Signups',
      )}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          typecast: true, // lets Airtable add new multiple-select options automatically
          fields: {
            Name: name.trim(),
            Email: email.trim(),
            'Consent': !!consent,
            Events: chosen.map((e) => `${e.title} (${e.shortDate})`),
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
    console.error('Event signup error:', err)
    return NextResponse.json({ data: 'error' }, { status: 500 })
  }
}