// components/stats.tsx — "By the numbers". Three across at every width; sizes scale with the viewport.
import { Starburst } from './starburst'

const stats = [
  { number: '$500', unit: 'Million', label: 'Already given to Brightline', note: 'Public dollars Floridians have already put in.' },
  { number: '$16', unit: 'Billion', label: "In Florida's reserves", note: 'Money the state is sitting on right now.' },
  { number: '$2.2', unit: 'Billion', label: 'To buy it outright', note: 'The projected cost for Florida to own Brightline.' },
]

export function StatsSection() {
  return (
    <section id="numbers" className="bg-deepnavy text-deepnavy px-3 py-[clamp(72px,8vw,112px)] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center font-display font-black uppercase text-sun text-[clamp(40px,6vw,84px)] leading-none tracking-[-0.01em]">
          By the numbers
        </h2>

        <div className="mt-[clamp(36px,7vw,96px)] grid grid-cols-3 gap-[clamp(10px,3.5vw,48px)]">
          {stats.map(({ number, unit, label, note }) => (
            <div key={number} className="flex flex-col items-center text-center min-w-0">
              <div className="relative w-full max-w-[260px] aspect-square flex flex-col items-center justify-center">
                <Starburst fill="#ffd478" className="absolute inset-0 w-full h-full" />
                <p className="relative font-display font-black italic leading-[0.9] text-[clamp(28px,6.6vw,96px)] [text-shadow:4px_4px_0_#fff]">
                  {number}
                </p>
                <p className="relative mt-1 font-extrabold text-[clamp(12px,1.6vw,22px)]">{unit}</p>
              </div>
              <p className="mt-[clamp(16px,2.8vw,40px)] font-display font-black uppercase text-flame leading-[1.1] text-[clamp(14px,1.9vw,26px)]">
                {label}
              </p>
              <p className="mt-2 max-w-[300px] text-[#e6eaf0] leading-snug text-[clamp(13px,1.2vw,17px)]">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
