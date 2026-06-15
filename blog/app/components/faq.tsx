// components/faq.tsx
'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Why is Brightline going bankrupt?',
    a: 'Brightline is carrying roughly $5 billion in debt from construction costs and has struggled to reach profitability. In May 2026, the company disclosed "substantial doubt" about its ability to continue as a going concern — the same language Spirit Airlines used before it collapsed.',
  },
  {
    q: 'How would Florida buy Brightline?',
    a: 'Florida currently holds over $16 billion in budget reserves. A fraction of that could retire Brightline\'s debt and transfer ownership to a public authority — similar to how states and cities own commuter rail systems like MARC, Caltrain, and Brightline\'s predecessor, Tri-Rail.',
  },
  {
    q: 'What happens if we do nothing?',
    a: 'Brightline enters bankruptcy, gets sold off to another private operator or liquidated entirely. Floridians lose their only intercity passenger rail service, and the infrastructure built with public subsidies ends up in private hands at a discount.',
  },
  {
    q: 'Who runs Buy Brightline?',
    a: 'Buy Brightline is a grassroots campaign organized by Floridians who want mass public transit! We are not affiliated with the actual Brightline company. You can contact our lead organizer, Shelby Green, at shelby@shelbytlh.com',
  },
  {
    q: 'What does signing the pledge actually do?',
    a: 'Your name will appear alongside hundreds of Floridians when we present the pledge to Florida lawmakers like Senate President Albritton and House President Perez, who control how our tax dollars are spent. The more signers we have, the stronger our case that Floridians want public ownership, not another bankruptcy.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-coolyellow py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl font-black text-deepnavy mb-10 leading-tight">
          FAQ:
        </h2>

        <div className="divide-y-2 divide-deepnavy/10 border-t-2 border-b-2 border-deepnavy/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="font-bold text-lg text-deepnavy">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-deepnavy flex items-center justify-center text-deepnavy font-bold transition-transform ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-6 text-base leading-relaxed text-deepnavy/80">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}