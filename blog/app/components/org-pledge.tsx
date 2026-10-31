'use client'

import { useState, type FormEvent } from 'react'

const ORG_TYPES = [
  'Labor union',
  'Transit or environmental group',
  'Neighborhood',
  'Civic Association',
  'Student group',
  'Faith community',
  'Local business',
  'Other',
]

const fieldClass =
  'w-full min-h-[52px] rounded-xl border-2 border-deepnavy bg-[#fffdf6] px-3.5 py-3 text-[17px] text-deepnavy focus:outline focus:outline-[3px] focus:outline-[#fa8238] focus:outline-offset-2'
const labelClass = 'block text-[15px] font-bold mb-2'
const checkLabelClass = 'flex items-start gap-2.5 text-base leading-snug cursor-pointer'
const checkClass = 'mt-px w-[22px] h-[22px] flex-none accent-deepnavy'

const empty = {
  org: '',
  type: '',
  county: '',
  site: '',
  members: '',
  contact: '',
  role: '',
  email: '',
  phone: '',
  authorized: false,
  commit: false,
  listPublicly: true,
}

export default function OrgSignup() {
  const [v, setV] = useState(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [error, setError] = useState('')

  const set = (k: keyof typeof empty) => (e: { target: { value: string; checked?: boolean; type?: string } }) =>
    setV((s) => ({ ...s, [k]: e.target.type === 'checkbox' ? !!e.target.checked : e.target.value }))

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/request_org_submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v),
      })
      const result = await res.json().catch(() => null)
      if (result?.data === 'ok') {
        setStatus('done')
        setV(empty)
      } else {
        setStatus('idle')
        setError('Your sign-on didn’t go through. Check the required fields, then try again.')
      }
    } catch {
      setStatus('idle')
      setError('Your sign-on didn’t go through. Check your connection and try again.')
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-4" role="status">
        <p className="font-script text-6xl leading-none text-flameink">Welcome aboard!</p>
        <p className="mt-5 mx-auto max-w-[520px] text-lg leading-relaxed">
          Thanks for signing on. An organizer will reach out with next steps.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="bb-pill mt-6">
          Sign on another organization
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="sm:col-span-2">
        <label htmlFor="o-name" className={labelClass}>Organization name</label>
        <input id="o-name" required autoComplete="organization" value={v.org} onChange={set('org')} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="o-type" className={labelClass}>Type of organization</label>
        <select id="o-type" required value={v.type} onChange={set('type')} className={fieldClass}>
          <option value="">Choose one</option>
          {ORG_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="o-county" className={labelClass}>County</label>
        <input id="o-county" required value={v.county} onChange={set('county')} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="o-site" className={labelClass}>Website or social link</label>
        <input id="o-site" placeholder="https://" value={v.site} onChange={set('site')} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="o-members" className={labelClass}>Approximate members</label>
        <input id="o-members" inputMode="numeric" value={v.members} onChange={set('members')} className={fieldClass} />
      </div>

      <p className="sm:col-span-2 mt-2 font-display font-black uppercase text-lg text-flameink">Point of contact</p>
      <div>
        <label htmlFor="o-contact" className={labelClass}>Name</label>
        <input id="o-contact" required autoComplete="name" value={v.contact} onChange={set('contact')} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="o-role" className={labelClass}>Role or title</label>
        <input id="o-role" autoComplete="organization-title" value={v.role} onChange={set('role')} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="o-email" className={labelClass}>Email</label>
        <input id="o-email" type="email" required autoComplete="email" value={v.email} onChange={set('email')} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="o-phone" className={labelClass}>Mobile number</label>
        <input id="o-phone" type="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} className={fieldClass} />
      </div>

      <div className="sm:col-span-2 mt-1 flex flex-col gap-3">
        <label className={checkLabelClass}>
          <input type="checkbox" required checked={v.authorized} onChange={set('authorized')} className={checkClass} />
          I'm authorized to sign on behalf of this organization.
        </label>
        <label className={checkLabelClass}>
          <input type="checkbox" required checked={v.commit} onChange={set('commit')} className={checkClass} />
          Our organization agrees to the pledge and what's asked of signers.
        </label>
        <label className={checkLabelClass}>
          <input type="checkbox" checked={v.listPublicly} onChange={set('listPublicly')} className={checkClass} />
          List our name publicly as a supporting organization.
        </label>
      </div>

      {error && (
        <p role="alert" className="sm:col-span-2 font-semibold text-coral">
          {error}
        </p>
      )}

      <div className="sm:col-span-2 mt-2">
        <button type="submit" disabled={status === 'loading'} className="bb-pill">
          {status === 'loading' ? 'Signing on…' : 'Sign on'}
        </button>
      </div>
    </form>
  )
}