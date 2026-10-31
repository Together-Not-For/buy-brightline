import Image from 'next/image'
import { Navbar } from './components/nav'
import Pledge from './components/pledge'
import { AnnouncementBanner } from './components/announcements'
import { BankruptSection } from './components/bankrupt'
import { StatsSection } from './components/stats'
import { TestimonialsSection } from './components/testimonials'
import { FAQSection } from './components/faq'
import { Footer } from './components/footer'

const PLEDGE_COUNT = 325

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      <AnnouncementBanner />
      <Navbar />

      {/* Compact hero on the halftone background */}
      <section id="pledge" className="bb-halftone px-4 pt-2 pb-5 text-deepnavy">
        <div className="max-w-[1100px] mx-auto text-center flex flex-col items-center">
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
              className="block mx-auto mt-2 w-full max-w-[640px] h-auto"
            />
          </h1>
          <p className="mt-2 text-[clamp(19px,2vw,24px)] font-medium leading-tight">
            We already pay for it. <span className="italic font-extrabold">We should own it.</span>
          </p>
        </div>
      </section>

      {/* Pledge form on a navy band */}
      <section id="pledge-form" className="bg-deepnavy text-white px-4 py-[clamp(56px,7vw,88px)] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto">
          <Pledge count={PLEDGE_COUNT} />
        </div>
      </section>

      <BankruptSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
