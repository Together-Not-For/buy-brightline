export type UpcomingEvent = {
  id: string; // stable key — also what the sign-up form sends
  title: string;
  dayLabel: string; // "Monday, October 5"
  shortDate: string; // "Mon, Oct 5"
  date: string; // 'YYYY-MM-DD' — used for sorting and both labels
  time: string;
  location: string;
  description: string;
};

// Events now live in the Airtable "Events" table. Edit them there;
// the left column and sign-up card update within ~5 minutes.
//
// SERVER-ONLY: call getUpcomingEvents() from a server component, getStaticProps,
// or an API route — never from a "use client" component (the token isn't
// available in the browser, and shouldn't be). Client components can still
// `import type { UpcomingEvent }` from this file.

const BASE_ID = process.env.AIRTABLE_BASE_ID; // rename to match your pledge route's env vars
const TOKEN = process.env.AIRTABLE_TOKEN;
const TABLE = 'Events';
const TIME_ZONE = 'America/New_York'; // "today" means today in Florida, not UTC

type AirtableRecord = { id: string; fields: Record<string, unknown> };

const text = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

// Build labels from the date at noon UTC so no time zone can shift the day.
function labels(date: string) {
  const d = new Date(`${date}T12:00:00Z`);
  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts }).format(d);
  return {
    dayLabel: fmt({ weekday: 'long', month: 'long', day: 'numeric' }), // "Friday, December 4"
    shortDate: fmt({ weekday: 'short', month: 'short', day: 'numeric' }), // "Fri, Dec 4"
  };
}

function todayInFlorida() {
  // en-CA formats as YYYY-MM-DD, which compares correctly as a string
  return new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE }).format(new Date());
}

export async function getUpcomingEvents(): Promise<UpcomingEvent[]> {
  if (!BASE_ID || !TOKEN) throw new Error('Missing Airtable env vars');

  const params = new URLSearchParams({
    'sort[0][field]': 'Date',
    'sort[0][direction]': 'asc',
  });

  const records: AirtableRecord[] = [];
  let offset: string | undefined;
  do {
    if (offset) params.set('offset', offset);
    const res = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}?${params}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) throw new Error(`Airtable error ${res.status}: ${await res.text()}`);
    const data: { records: AirtableRecord[]; offset?: string } = await res.json();
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  const today = todayInFlorida();

  return records
    .map((r) => {
      const date = text(r.fields['Date']);
      return {
        id: text(r.fields['ID']) || r.id,
        title: text(r.fields['Title']),
        date,
        ...labels(date),
        time: text(r.fields['Time']),
        location: text(r.fields['Location']),
        description: text(r.fields['Description']),
      };
    })
    .filter((e) => e.title && /^\d{4}-\d{2}-\d{2}$/.test(e.date) && e.date >= today);
}