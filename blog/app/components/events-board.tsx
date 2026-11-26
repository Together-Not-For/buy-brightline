'use client'

import { useMemo, useState } from 'react'
import type { UpcomingEvent } from '../events/events'
import EventSignup from './event-signup'

// ---------- small pieces ---------- test

function ClockIcon({ color = '#c9520f' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function PinIcon({ color = '#c9520f' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

// "Wed, Nov 25" -> { dow: "Wed", month: "Nov", day: "25", monthDay: "Nov 25" }
function dateParts(e: UpcomingEvent) {
  const [dow, rest = ''] = e.shortDate.split(', ')
  const [month, day] = rest.split(' ')
  return { dow, month, day, monthDay: rest }
}

function DateBadge({ e }: { e: UpcomingEvent }) {
  const { dow, month, day } = dateParts(e)
  return (
    <div aria-hidden="true" className="flex-none w-[60px] h-[60px] rounded-xl bg-deepnavy text-white flex flex-col items-center justify-center text-center">
      <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-sun">{dow}</span>
      <span className="font-display font-black text-2xl leading-none">{day}</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.06em]">{month}</span>
    </div>
  )
}

// ---------- grouping ----------

type Series = {
  key: string
  title: string
  time: string
  location: string
  description: string
  cadence: string // "Wednesdays"
  weekly: boolean
  events: UpcomingEvent[]
}

const DAY = 24 * 60 * 60 * 1000

// Events with the same title, time, location and description are one series.
// Anything that appears only once stays a one-off.
function groupEvents(events: UpcomingEvent[]) {
  const groups = new Map<string, UpcomingEvent[]>()
  for (const e of events) {
    const key = [e.title, e.time, e.location, e.description].join('|')
    groups.set(key, [...(groups.get(key) ?? []), e])
  }

  const series: Series[] = []
  const oneOffs: UpcomingEvent[] = []
  groups.forEach((list, key) => {
    if (list.length < 2) {
      oneOffs.push(list[0])
      return
    }
    const first = list[0]
    const weekly = list.every(
      (e, i) => i === 0 || Date.parse(e.date) - Date.parse(list[i - 1].date) === 7 * DAY,
    )
    series.push({
      key,
      title: first.title,
      time: first.time,
      location: first.location,
      description: first.description,
      cadence: `${first.dayLabel.split(',')[0]}s`,
      weekly,
      events: list,
    })
  })
  return { series, oneOffs } // both stay in date order
}

// ---------- the board ----------

export default function EventsBoard({ events }: { events: UpcomingEvent[] }) {
  const { series, oneOffs } = useMemo(() => groupEvents(events), [events])
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  const toggleOpen = (id: string) =>
    setOpen((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const chosen = events.filter((e) => selected.includes(e.id))
  const barSummary = chosen.map((e) => `${e.title} (${dateParts(e).monthDay})`).join(' · ')

  return (
    <>
      <section id="events" className="bb-sec bg-cream">
        <div className="bb-wrap grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 items-start">
          {/* LEFT: events */}
          <div className="flex flex-col gap-10 min-w-0">
            {events.length === 0 && (
              <p className="text-lg leading-relaxed">
                No upcoming events right now — check back soon, or join the pledge to hear about the next one.
              </p>
            )}

            {/* Recurring events: one card each, dates as chips */}
            {series.length > 0 && (
              <div className="flex flex-col gap-3.5">
                <h2 className="text-[15px] font-bold uppercase tracking-[0.12em]">
                  {series.every((s) => s.weekly) ? 'Every week' : 'Recurring'}
                </h2>
                {series.map((s) => (
                  <article
                    key={s.key}
                    className="bb-r bg-deepnavy text-white border-[3px] border-deepnavy shadow-[8px_8px_0_#c9520f] p-[clamp(20px,3vw,32px)] flex flex-wrap items-center gap-6"
                  >
                    <div className="flex-[999_1_320px] min-w-0">
                      <h3 className="font-display font-black uppercase text-[clamp(24px,2.6vw,30px)] leading-[1.05]">
                        {s.title}
                      </h3>
                      <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-[17px] font-semibold">
                        <span className="inline-flex items-center gap-2">
                          <ClockIcon color="#f4c95d" />
                          {s.weekly ? s.cadence : 'Multiple dates'} · {s.time}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <PinIcon color="#f4c95d" />
                          {s.location}
                        </span>
                      </div>
                      <p className="mt-3 text-[17px] leading-relaxed text-white/85">{s.description}</p>
                    </div>
                    <div className="flex-[1_1_220px] flex flex-col gap-2.5">
                      <span className="text-sm font-bold uppercase tracking-[0.1em] text-sun">
                        Pick the dates you&apos;ll join
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {s.events.map((e) => {
                          const on = selected.includes(e.id)
                          return (
                            <button
                              key={e.id}
                              type="button"
                              aria-pressed={on}
                              aria-label={`${s.title}, ${e.dayLabel}`}
                              onClick={() => toggle(e.id)}
                              className={`min-h-11 px-3.5 rounded-full border-2 text-[15px] font-bold transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-sun ${
                                on ? 'bg-sun text-deepnavy border-sun' : 'bg-transparent text-white border-[#8fa0b8] hover:border-white'
                              }`}
                            >
                              {on && '✓ '}
                              {dateParts(e).monthDay}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* One-off events: slim rows, details collapsed */}
            {oneOffs.length > 0 && (
              <div className="flex flex-col gap-3.5">
                <h2 className="text-[15px] font-bold uppercase tracking-[0.12em]">Coming up</h2>
                <div className="bb-r bg-white border-[3px] border-deepnavy shadow-[6px_6px_0_#0c2342] overflow-hidden">
                  {oneOffs.map((e, i) => {
                    const on = selected.includes(e.id)
                    const isOpen = open.includes(e.id)
                    const detailsId = `details-${e.id}`
                    return (
                      <div
                        key={e.id}
                        className={`px-[22px] py-[18px] ${i > 0 ? 'border-t-2 border-[#e5dcc9]' : ''} ${on ? 'bg-[#fffaeb]' : ''}`}
                      >
                        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-3">
                          <DateBadge e={e} />
                          <div className="flex-1 basis-0 min-w-0">
                            <h3 className="font-display font-black uppercase text-[21px] leading-[1.1]">{e.title}</h3>
                            <p className="mt-1 text-base font-semibold">
                              {e.shortDate} · {e.time}
                            </p>
                            <p className="text-sm opacity-75 truncate">{e.location}</p>
                          </div>

                          {/* Desktop: right of the copy. Mobile: full row under the copy. */}
                          <div className="flex flex-none items-center gap-2.5 max-[899px]:basis-full max-[899px]:pl-[78px]">
                            <label
                              className={`min-h-11 inline-flex items-center gap-2 px-3.5 rounded-full border-2 border-deepnavy text-[15px] font-bold cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-coral ${
                                on ? 'bg-deepnavy text-white' : 'bg-white text-deepnavy'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={on}
                                onChange={() => toggle(e.id)}
                                className={`h-5 w-5 ${on ? 'accent-sun' : 'accent-deepnavy'}`}
                              />
                              {on ? 'Going' : 'Join'}
                              <span className="sr-only">
                                {' '}
                                {e.title}, {e.dayLabel}
                              </span>
                            </label>
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={detailsId}
                              onClick={() => toggleOpen(e.id)}
                              className="min-h-11 px-4 rounded-full border-2 border-deepnavy bg-[#fffdf6] text-[15px] font-bold hover:bg-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-coral"
                            >
                              {isOpen ? 'Hide' : 'Details'}
                              <span className="sr-only"> for {e.title}</span>
                            </button>
                          </div>
                        </div>

                        {isOpen && (
                          <div id={detailsId} className="mt-3.5 pl-[78px] text-[17px] leading-relaxed">
                            <p className="inline-flex items-start gap-2 font-semibold">
                              <span className="mt-1">
                                <PinIcon />
                              </span>
                              {e.location}
                            </p>
                            <p className="mt-1.5">{e.description}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: sign-up */}
          <aside id="signup" className="min-w-0 min-[900px]:sticky min-[900px]:top-24 scroll-mt-24">
            <div className="bb-r bg-white border-[3px] border-deepnavy shadow-[10px_10px_0_#0c2342] p-[clamp(24px,3.5vw,40px)]">
              <EventSignup
                events={events}
                selected={selected}
                onToggle={toggle}
                onSubmitted={() => setSubmitted(true)}
              />
            </div>
          </aside>
        </div>
      </section>

      {/* Mobile only: pinned bar once something is picked. Sticks to the bottom
          of the screen while scrolling the list, then settles above the footer. */}
      {chosen.length > 0 && !submitted && (
        <div className="min-[900px]:hidden sticky bottom-0 z-20 flex items-center justify-between gap-3 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] bg-deepnavy text-white border-t-[3px] border-sun">
          <div className="min-w-0">
            <span className="block text-[17px] font-bold">{chosen.length} selected</span>
            <span className="block text-sm text-white/80 truncate">{barSummary}</span>
          </div>
          <a
            href="#signup"
            className="flex-none min-h-12 inline-flex items-center px-[22px] rounded-full bg-sun text-deepnavy text-[17px] font-bold no-underline"
          >
            Sign up
          </a>
        </div>
      )}
    </>
  )
}