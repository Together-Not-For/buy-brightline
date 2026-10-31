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
            Brightline is bankrupt.
          </h2>
          <p className="mt-8 text-[clamp(18px,1.6vw,21px)] leading-relaxed">
            Florida should buy it outright and run it for <u>the people</u>,{' '}
            <span className="italic font-bold">not shareholders.</span>
          </p>
          <p className="mt-5 text-[clamp(18px,1.6vw,21px)] leading-relaxed">
            A public inter-city train will reduce traffic, improve accessibility, and give us more transportation
            options. The State of Florida buying Brightline will benefit the millions of working Floridians who
            already fund the system with their taxes.
          </p>
        </div>
      </div>
    </section>
  )
}
