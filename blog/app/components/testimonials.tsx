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
    <section className="bg-deepnavy py-16 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <h2 className="font-display text-4xl font-black text-white mb-10 leading-tight">
          Why we want to buy Brightline:
        </h2>

        {/* Card + arrows */}
        <div className="flex items-center gap-4">
          <button onClick={prev} className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:border-white transition-colors">
            ←
          </button>
          <div className="flex-1 bg-coolyellow text-deepnavy p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-deepnavy flex items-center justify-center text-2xl flex-shrink-0">
                {t.emoji}
              </div>
              <div>
                <div className="font-display text-xl font-black uppercase">{t.name}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-deepnavy/60">{t.descriptor}</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-4">"{t.quote}"</p>
            <p className="text-xs italic text-deepnavy/50">Name may have been changed.</p>
          </div>
          <button onClick={next} className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:border-white transition-colors">
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-coolyellow' : 'bg-white/20'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}