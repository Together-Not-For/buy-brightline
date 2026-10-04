'use client'

import { useState, type FormEvent } from 'react'
import { upcomingEvents } from '../events/events'

export default function EventSignup() {
  const [selected, setSelected] = useState<string[]>(upcomingEvents.map((e) => e.id))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [error, setError] = useState('')

  const allSelected = selected.length === upcomingEvents.length
  const chosen = upcomingEvents.filter((e) => selected.includes(e.id))

  const toggle = (id: string) => {
    setError('')
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (status === 'loading') return
    if (selected.length === 0) {
      setError('Pick at least one event to sign up for.')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/request_event_submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, consent, events: selected }),
      })
      const result = await res.json().catch(() => null)
      if (result?.data === 'ok') {
        setStatus('done')
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
        <h2 className="font-display text-4xl leading-tight mb-4">You’re in!</h2>
        <p className="text-lg mb-4">You’re signed up for:</p>
        <ul className="space-y-3 mb-6">
          {chosen.map((e) => (
            <li key={e.id} className="rounded-xl border-2 border-deepnavy bg-coolyellow/40 p-4">
              <span className="block font-bold">{e.title}</span>
              <span className="block text-sm">
                {e.dayLabel}, {e.time} on {e.location}
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
      <h2 className="font-display text-4xl leading-tight mb-6">Join us!</h2>

      {/* Event picker */}
      <fieldset className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <legend className="font-bold">Choose your events</legend>
          <button
            type="button"
            onClick={() => {
              setError('')
              setSelected(allSelected ? [] : upcomingEvents.map((e) => e.id))
            }}
            className="text-sm underline decoration-dotted hover:opacity-70"
          >
            {allSelected ? 'Clear all' : 'Select all'}
          </button>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((e) => {
            const on = selected.includes(e.id)
            return (
              <label
                key={e.id}
                className={`flex items-start gap-4 rounded-xl border-2 p-4 cursor-pointer transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-coral ${
                  on ? 'border-deepnavy bg-coolyellow/40' : 'border-deepnavy/20 hover:border-deepnavy/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggle(e.id)}
                  className="mt-1 h-5 w-5 shrink-0 accent-deepnavy"
                />
                <span>
                  <span className="block font-bold">{e.title}</span>
                  <span className="block text-sm">
                    {e.shortDate}, {e.time}
                  </span>
                  <span className="block text-sm opacity-70">{e.location}</span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* Contact fields */}
      <div className="space-y-5 mb-6">
        <label className="block">
          <span className="block font-bold mb-1.5">Name *</span>
          <input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border-2 border-deepnavy/20 px-4 py-3 focus:border-deepnavy focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="block font-bold mb-1.5">Email *</span>
          <input
            required
            type="ema"
            autoComplete="ema"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-2 border-deepnavy/20 px-4 py-3 focus:border-deepnavy focus:outline-none"
          />
          <span className="block text-sm opacity-70 mt-1.5">
            We won’t spam. This is just to keep you in the loop!
          </span>
        </label>
      </div>

      {/* SMS consent — same language as the current form */}
      <label className="flex items-start gap-3 mb-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-deepnavy"
        />
        <span className="font-semibold">
          I agree to opt-in to emails from the Buy Brightline campaign.
        </span>
      </label>
      {/* <p className="text-xs leading-relaxed opacity-70 mb-6">
        By providing your email and checking the box above, you consent to receive recurring
        SMS/MMS messages from the Buy Brightline campaign, including updates, alerts, and calls to
        action. Message and data rates may apply. Message frequency may vary. Text STOP to opt out at
        any time. Text HELP for help. Your information will not be rented, sold, or shared.{' '}
        <a href="/privacy-policy" className="underline decoration-dotted">Privacy Policy</a>.{' '}
        <a href="/sms-terms" className="underline decoration-dotted">Terms and conditions</a>.
      </p> */}

      {error && (
        <p role="alert" className="mb-4 font-semibold text-coral">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-deepnavy text-white text-sm font-bold uppercase tracking-widest py-4 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading'
          ? 'Signing up…'
          : allSelected
            ? 'Sign up for both'
            : selected.length === 1
              ? `Sign up for ${chosen[0].shortDate}`
              : 'Sign up'}
      </button>
    </form>
  )
}