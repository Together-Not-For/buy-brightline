import { Navbar } from './components/nav'
import Pledge from './components/pledge'
import { AnnouncementBanner } from './components/announcements'
import { TestimonialsSection } from './components/testimonials'
import { FAQSection } from './components/faq'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnnouncementBanner />

      <div className="flex flex-col lg:flex-row flex-1">

        {/* Left: bold colored panel */}
        <section className="lg:w-[620px] flex-shrink-0 bg-coolyellow text-deepnavy px-10 pt-16 pb-16 flex flex-col justify-between">
          <div>
            <h1 className="font-display text-6xl lg:text-7xl font-black uppercase leading-none mb-10 text-deepnavy">
              Let's Buy Brightline!
            </h1>
            <p className="text-xl font-bold leading-snug text-deepnavy mb-6">
              Millions of us rely on Brightline to travel up and down the state
              stress-free. But a $5 billion debt could wipe Brightline out.
              We've already watched Spirit collapse. We don't have to let
              Florida's only intercity railroad go out the same way.</p>
            <p className="text-lg leading-relaxed text-deepnavy mb-4">
              Brightline is headed toward bankruptcy. But Florida is sitting on $16 billion
              in reserves — enough to buy it outright and run it for the people, not shareholders.
            </p>
            <p className="text-lg leading-relaxed text-deepnavy mb-8">
              We need to show Florida's leaders that riders are paying attention.
            </p>
            <p className="text-xl font-bold text-deepnavy">
              Sign the pledge and join our movement. 🚆
            </p>
          </div>
        </section>

        {/* Right: counter + form */}
        <div className="flex-1 flex flex-col">

          {/* Pledge counter bar */}
          <div className="bg-white border-b border-gray-200 px-10 py-5 flex items-center justify-between">
            <p className="text-2xl font-black text-deepnavy">
              <span className="bg-deepnavy text-coolyellow px-2 py-1 mr-1">223</span>
              {' '}pledges signed
              <span className="text-gray-400 font-normal text-lg ml-1">(and counting!)</span>
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 bg-gray-50 px-10 py-10">
            <Pledge />
          </div>
          
        </div>
      </div>


      {/* Testimonials */}
      <TestimonialsSection/>

      {/* FAQ */}
      <FAQSection/>
    </div>
  )
}