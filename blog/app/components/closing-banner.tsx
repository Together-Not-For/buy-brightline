// components/closing-banner.tsx — rounded "We need you!" banner before the footer
import Image from 'next/image'

export function ClosingBanner() {
  return (
    <section className="bb-sec bg-cream text-deepnavy" style={{ paddingTop: 0 }}>
      <div className="bb-wrap bb-halftone bb-r overflow-hidden p-[clamp(32px,5vw,72px)]">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] gap-y-10 gap-x-[clamp(32px,5vw,72px)] items-center">
          <Image
            src="/train-star.webp"
            alt=""
            aria-hidden="true"
            width={805}
            height={801}
            className="block w-full max-w-[420px] h-auto mx-auto"
          />
          <div className="min-w-0">
            <p className="font-script text-[clamp(56px,7vw,96px)] leading-none -rotate-3 [text-shadow:3px_3px_0_#fff]">We need you!</p>
            <p className="mt-5 font-extrabold text-[clamp(22px,2.2vw,28px)] leading-tight">
              Sign the pledge and follow us on social.
            </p>
            <p className="mt-3 text-[clamp(17px,1.5vw,19px)] leading-relaxed">
              We need to show Florida's leaders that riders are organized, paying attention, and ready to make a
              case for a brighter future!
            </p>
            <a href="/#pledge-form" className="bb-pill mt-7">Sign the pledge</a>
          </div>
        </div>
      </div>
    </section>
  )
}
