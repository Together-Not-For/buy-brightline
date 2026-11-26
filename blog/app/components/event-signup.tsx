'use client'

import { useState, type FormEvent } from 'react'
import type { UpcomingEvent } from '../events/events'

type Props = {
  events: UpcomingEvent[]
  selected: string[] // event ids picked in the list on the left
  onToggle: (id: string) => void
  onSubmitted?: () => void
}

export default function EventSignup({ events, selected, onToggle, onSubmitted }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [error, setError] = useState('')

  // Keep date order, whatever order they were picked in
  const chosen = events.filter((e) => selected.includes(e.id))

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (status === 'loading') return
    if (chosen.length === 0) {
      setError('Pick at least one event to sign up for.')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/request_event_submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, consent, events: chosen.map((e) => e.id) }),
      })
      const result = await res.json().catch(() => null)
      if (result?.data === 'ok') {
        setStatus('done')
        onSubmitted?.()
      } else {
        setStatus('idle')
        setError('Your sign-up didn’t go through. Check your name and email, then try again.')
      }
    } catch {
      setStatus('idle')
      setError('Your sign-up didn’t go through. Check your connection and try again.')
    }
  }

  if (status === 'done') {
    return (
      <div className="text-deepnavy" role="status">
        <p className="font-script text-6xl leading-none text-flameink mb-4">You’re in!</p>
        <p className="text-lg mb-4">You’re signed up for:</p>
        <ul className="space-y-3 mb-6">
          {chosen.map((e) => (
            <li key={e.id} className="rounded-xl border-2 border-deepnavy bg-[#fffdf6] p-4">
              <span className="block font-bold">{e.title}</span>
              <span className="block text-sm">
                {e.dayLabel}, {e.time} · {e.location}
              </span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed">We’ll send you the details before each event. Bring a friend!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="text-deepnavy">
      <h2 className="font-script font-normal text-[clamp(48px,5vw,64px)] leading-none -rotate-3 mb-7">Join us!</h2>

      {/* What they've picked on the left */}
      <section aria-labelledby="your-events" className="mb-7">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <h3 id="your-events" className="font-extrabold text-[17px]">
            Your events
          </h3>
          {chosen.length > 0 && (
            <span className="text-[15px] font-semibold" aria-live="polite">
              {chosen.length} selected
            </span>
          )}
        </div>

        {chosen.length === 0 ? (
          <p className="rounded-xl border-2 border-dashed border-[#9a8f7a] bg-[#fffdf6] p-[18px] leading-normal">
            Check the events you want to join, or tap a date on a weekly event. They’ll show up here.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {chosen.map((e) => (
              <li
                key={e.id}
                className="flex items-center gap-3 rounded-xl border-2 border-deepnavy bg-[#fffdf6] py-2.5 pl-3.5 pr-2.5"
              >
                <div className="min-w-0 flex-1">
                  <span className="block font-bold">{e.title}</span>
                  <span className="block text-sm truncate">
                    {e.shortDate}, {e.time} · {e.location}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onToggle(e.id)}
                  aria-label={`Remove ${e.title}, ${e.dayLabel}`}
                  className="flex-none w-11 h-11 rounded-full flex items-center justify-center hover:bg-deepnavy/10 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-coral"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Contact fields */}
      <div className="space-y-5 mb-6">
        <label className="block">
          <span className="block text-[15px] font-bold mb-1.5">Name</span>
          <input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full min-h-[52px] rounded-[10px] border-2 border-deepnavy bg-[#fffdf6] px-3.5 py-3 text-[17px] focus:outline focus:outline-[3px] focus:outline-[#fa8238] focus:outline-offset-2"
          />
        </label>
        <label className="block">
          <span className="block text-[15px] font-bold mb-1.5">Email</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full min-h-[52px] rounded-[10px] border-2 border-deepnavy bg-[#fffdf6] px-3.5 py-3 text-[17px] focus:outline focus:outline-[3px] focus:outline-[#fa8238] focus:outline-offset-2"
          />
          <span className="block text-sm opacity-70 mt-1.5">
            We won’t spam. This is just to keep you in the loop!
          </span>
        </label>
      </div>

      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-deepnavy"
        />
        <span className="font-semibold">I agree to opt-in to emails from the Buy Brightline campaign.</span>
      </label>

      {error && (
        <p role="alert" className="mb-4 font-semibold text-coral">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || chosen.length === 0}
        className="bb-pill w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading'
          ? 'Signing up…'
          : chosen.length === 0
            ? 'Pick at least one event'
            : chosen.length === 1
              ? 'Sign up for 1 event'
              : `Sign up for ${chosen.length} events`}
      </button>
    </form>
  )
}