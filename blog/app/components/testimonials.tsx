// components/testimonials.tsx
'use client';

import { useState } from 'react';

const testimonials = [
  {
    emoji: '🚆',
    name: 'Alexia',
    descriptor: 'Orlando',
    quote: "I'm moving to Orlando in August and was looking forward to using the Brightline until I saw the prices. I have spent time in New Jersey and used their transit system almost daily because it was so affordable. Everyone wants this to work. We just need it to be accessible first!",
  },
  {
    emoji: '🚗',
    name: 'Gabriella',
    descriptor: 'Ocoee',
    quote: 'To make it actually affordable for Florida residents. Driving is still cheaper even with how expensive gas is.',
  },
  {
    emoji: '🏙️',
    name: 'Aaliyah',
    descriptor: 'Orlando',
    quote: 'To connect the top 5 major cities: Orlando, Miami, Tampa, Jacksonville, and our capital Tallahassee. This will allow a stronger economy of workers being able to go from city to city while being able to effectively do their work on the train.'
  },
  {
    emoji: '🛩️',
    name: 'Shelby',
    descriptor: 'Oakland',
    quote: 'Brightline saved me when my flight home from New York was cancelled. I was able to fly into Miami and then take the Brightline up to Orlando. Without Brightline, we will have even less options to travel our expansive state, and less opportunities to visit family and friends. Our taxes pay for so many things — why not use our taxes to buy Brightline and turn it into a public train that runs from Pensacola to the Keys?'
  }
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const t = testimonials[index]

  return (
    <section className="bb-sec bg-sand text-deepnavy" aria-label="Why we want to buy Brightline">
      <div className="bb-wrap max-w-[960px]">
        <h2 className="bb-h2 text-center">Why we want to buy Brightline</h2>

        {/* Desktop: one card with arrows and dots */}
        <div className="hidden md:block" aria-roledescription="carousel">
          <figure className="bb-r mt-12 bg-white border-[3px] border-deepnavy shadow-[10px_10px_0_#0c2342] p-12 min-h-[280px] flex flex-col justify-between">
            <blockquote className="font-display italic font-semibold text-[clamp(20px,2.4vw,28px)] leading-snug">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-black uppercase text-xl">{t.name}</span>
              <span className="font-script text-2xl text-flameink">{t.descriptor}</span>
              <span className="text-sm text-slate">Name may have been changed.</span>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous story" className="w-12 h-12 rounded-full border-2 border-deepnavy bg-white font-bold text-xl hover:bg-deepnavy hover:text-white transition-colors">
              ←
            </button>
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Story ${i + 1}`} aria-current={i === index}
                  className="w-11 h-11 flex items-center justify-center">
                  <span className={`block w-3.5 h-3.5 rounded-full border-2 border-deepnavy ${i === index ? 'bg-deepnavy' : 'bg-transparent'}`} />
                </button>
              ))}
            </div>
            <button onClick={next} aria-label="Next story" className="w-12 h-12 rounded-full border-2 border-deepnavy bg-white font-bold text-xl hover:bg-deepnavy hover:text-white transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Phones: swipe through every story */}
        <div className="md:hidden">
          <div className="bb-row bb-stories-row mt-8" aria-label="Stories, swipe for more">
            {testimonials.map((s) => (
              <figure key={s.name} className="bb-r m-0 bg-white border-[3px] border-deepnavy p-6 flex flex-col justify-between gap-6">
                <blockquote className="font-display italic font-semibold text-[19px] leading-snug">“{s.quote}”</blockquote>
                <figcaption className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-black uppercase text-lg">{s.name}</span>
                  <span className="font-script text-[22px] text-flameink">{s.descriptor}</span>
                  <span className="basis-full text-[13px] text-slate">Name may have been changed.</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-1 text-center text-sm font-semibold">Swipe for more stories →</p>
        </div>
      </div>
    </section>
  )
}
