// components/events-strip.tsx — "Upcoming events" row on the landing page; swipes sideways on phones
import Link from 'next/link'
import { upcomingEvents } from '../events/events'

export function EventsStrip() {
  return (
    <section id="events" className="bb-sec bg-cream text-deepnavy scroll-mt-20">
      <div className="bb-wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <h2 className="bb-h2 text-flameink">Upcoming events</h2>
          <Link href="/events" className="bb-pill">See all</Link>
        </div>

        <div className="bb-row bb-events-row mt-[clamp(32px,4vw,48px)]" aria-label="Upcoming events">
          {upcomingEvents.map((e) => {
            const [dow, rest] = e.shortDate.split(', ')
            return (
              <Link
                key={e.id}
                href="/events"
                className="bb-r flex flex-col gap-3.5 bg-white border-[3px] border-deepnavy p-[clamp(22px,2.6vw,32px)] text-deepnavy no-underline"
              >
                <span className="self-start inline-flex items-baseline gap-2 rounded-full bg-deepnavy text-white px-3.5 py-1.5 text-sm font-extrabold uppercase tracking-[0.06em]">
                  <span className="text-sun">{dow}</span>
                  {rest}
                </span>
                <span className="font-display font-black uppercase text-[clamp(22px,2.2vw,28px)] leading-[1.05]">{e.title}</span>
                <span className="text-base font-semibold text-slate">
                  {e.time} · {e.location}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
