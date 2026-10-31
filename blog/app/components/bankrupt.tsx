// components/bankrupt.tsx — "Brightline is bankrupt." with the train art beside it
import Image from 'next/image'

export function BankruptSection() {
  return (
    <section className="bg-cream text-deepnavy px-4 py-[clamp(72px,8vw,112px)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] gap-y-10 gap-x-[clamp(32px,5vw,72px)] items-center">
        <div className="bb-halftone w-full aspect-[1/0.92] rounded-[28px] overflow-hidden flex items-center justify-center">
          <Image
            src="/train-star.webp"
            alt="A Brightline train on an orange starburst"
            width={805}
            height={801}
            className="w-[78%] h-auto"
          />
        </div>
        <div className="min-w-0">
          <h2 className="font-display font-black uppercase text-flameink text-[clamp(44px,5.4vw,76px)] leading-[0.95] tracking-[-0.01em]">
            Brightline is bankrupt.
          </h2>
          <p className="mt-8 text-[21px] leading-relaxed">
            Florida should buy it outright and run it for <u>the people</u>,{' '}
            <span className="italic font-bold">not shareholders.</span>
          </p>
          <p className="mt-5 text-[21px] leading-relaxed">
            A public inter-city train will reduce traffic, improve accessibility, and give us more transportation
            options. The State of Florida buying Brightline will benefit the millions of working Floridians who
            already fund the system with their taxes.
          </p>
        </div>
      </div>
    </section>
  )
}
