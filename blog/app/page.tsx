import Image from 'next/image'
import { Navbar } from './components/nav'
import Pledge from './components/pledge'
import { AnnouncementBanner } from './components/announcements'
import { BankruptSection } from './components/bankrupt'
import { StatsSection } from './components/stats'
import { EventsStrip } from './components/events-strip'
import { ClosingBanner } from './components/closing-banner'
import { TestimonialsSection } from './components/testimonials'
import { FAQSection } from './components/faq'
import { Footer } from './components/footer'

const PLEDGE_COUNT = 325

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      <AnnouncementBanner />
      <Navbar />

      {/* Hero sized to the screen: about 60% of the viewport height, with a floor and a ceiling */}
      <section id="pledge" className="bb-halftone bb-gutter text-deepnavy min-h-[clamp(420px,calc(62vh-76px),680px)] flex flex-col">
        <div className="flex-1 bb-wrap w-full text-center flex flex-col items-center justify-center pt-2 pb-[clamp(28px,4vw,48px)]">
          <h1 className="m-0 w-full">
            <span className="block font-display font-black text-[clamp(26px,3.4vw,42px)] leading-tight -rotate-[4deg] [text-shadow:3px_3px_0_#fff]">
              Brightline is going bankrupt.
            </span>
            {/* Lockup from the palm card: "Florida needs to BUY BRIGHTLINE" with the train on the starburst */}
            <Image
              src="/hero-lockup.webp"
              alt="Florida needs to buy Brightline"
              width={1426}
              height={798}
              priority
              className="block mx-auto mt-2 w-[min(100%,720px,92vh)] h-auto"
            />
          </h1>
          <p className="mt-2 text-[clamp(19px,2vw,24px)] font-medium leading-tight">
            We already pay for it. <span className="italic font-extrabold">We should own it.</span>
          </p>
        </div>
      </section>

      {/* Pledge form on a navy band */}
      <section id="pledge-form" className="bb-sec bg-deepnavy text-white scroll-mt-20">
        <div className="bb-wrap">
          <Pledge count={PLEDGE_COUNT} />
        </div>
      </section>

      <BankruptSection />
      <StatsSection />
      <EventsStrip />
      <TestimonialsSection />
      <FAQSection />
      <ClosingBanner />
      <Footer />
    </div>
  )
}
