// components/bankrupt.tsx — "Brightline is bankrupt." with the train art beside it
import Image from 'next/image'

export function BankruptSection() {
  return (
    <section className="bb-sec bg-cream text-deepnavy">
      <div className="bb-wrap grid grid-cols-1 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] gap-y-10 gap-x-[clamp(32px,5vw,72px)] items-center">
        <div className="bb-halftone bb-r w-full aspect-[1/0.92] overflow-hidden flex items-center justify-center">
          <Image
            src="/train-star.webp"
            alt="A Brightline train on an orange starburst"
            width={805}
            height={801}
            className="w-[78%] h-auto"
          />
        </div>
        <div className="min-w-0">
          <h2 className="bb-h2 text-flameink">
            Brightline is facing bankrupcy.
          </h2>
          <p className="mt-5 text-[clamp(18px,1.6vw,21px)] leading-relaxed">
            It carries more than 3 million riders a year between Miami and Orlando, but billions in high-interest private debt forced its holding company into bankruptcy. Brightline's future should be decided by Floridians, not its creditors.
          </p>
          <p className="mt-5 text-[clamp(18px,1.6vw,21px)] leading-relaxed">
            Buying Brightline could spark a statewide rail system that one day runs from Pensacola to the Keys. This is a rare chance to solve a problem every Floridian faces and build something that serves the Sunshine State for generations.
          </p>
          <p className="mt-8 text-[clamp(18px,1.6vw,21px)] leading-relaxed">
            Florida should buy Brightline and run it for <u>Floridians</u>, not shareholders. We deserve affordable, accessible ways to travel move through our state.
          </p>
        </div>
      </div>
    </section>
  )
}
