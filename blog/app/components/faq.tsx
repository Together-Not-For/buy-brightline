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
    <section id="faq" className="bg-cream py-24 px-4 text-deepnavy scroll-mt-20">
      <div className="max-w-[860px] mx-auto">
        <h2 className="font-display text-[clamp(40px,5vw,60px)] font-black uppercase leading-none">
          Questions
        </h2>

        <div className="mt-8 border-t-[3px] border-deepnavy">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-[3px] border-deepnavy">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between py-6 text-left gap-4 min-h-[44px]"
              >
                <span className="font-extrabold text-[22px] leading-snug">{faq.q}</span>
                <span aria-hidden="true" className={`flex-none w-10 h-10 rounded-full bg-sun flex items-center justify-center text-[28px] font-bold transition-transform ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-6 text-lg leading-relaxed">
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
