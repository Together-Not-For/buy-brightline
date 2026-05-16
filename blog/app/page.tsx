import { Navbar } from './components/nav'
import Pledge from './components/pledge'
import { AnnouncementBanner } from './components/announcements'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar spans full width */}
      <Navbar />

      {/* Announcement */}
      <AnnouncementBanner />

      <div className="flex flex-col lg:flex-row flex-1">

        {/* Left: yellow panel */}
        <section className="lg:flex-1 bg-coolyellow text-deepnavy px-8 lg:px-16 pt-8 pb-8">
          <div className="max-w-xl lg:ml-auto">
            {/* Headline */}
            <h1 className="font-display text-5xl font-black leading-none mb-8 text-deepnavy">
              Let's Buy Brightline!
            </h1>
            <p className="mb-5 leading-relaxed text-xl">
              Millions of us rely on Brightline to travel up and down the state
              stress-free. But a $5 billion debt could wipe Brightline out.
              We've already watched Spirit collapse. We don't have to let
              Florida's only intercity railroad go out the same way.
            </p>
            <p className="mb-5 leading-relaxed text-lg">
              The State of Florida is sitting on $16 billion in reserves — a fraction of that
              could erase Brightline's debt and, for the first time, give the
              people who ride it a say in how it runs.
            </p>
            <p className="mb-5 leading-relaxed text-lg">
              We could have:<br />
              🎟️ Discounted tickets for Florida residents<br />
              📍 Connections built based on input from riders<br />
              💺 Seats that actually recline
            </p>
            <p className="mb-4 text-xl font-semibold">
              This is our money. Let's tell the State to put it to work.
            </p>
          </div>
        </section>

        {/* Right: white form panel */}
        <aside className="lg:w-[480px] bg-white px-8 lg:px-16 pt-8 px-16">
          <Pledge />
        </aside>
      </div>

    </div>
  )
}