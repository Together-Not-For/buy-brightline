import { Navbar } from '../components/nav'
import Volunteer from '../components/volunteer'
import { AnnouncementBanner } from '../components/announcements'

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar spans full width */}
      <Navbar />

      {/* Announcement */}
      <AnnouncementBanner />

      <div className="flex flex-col lg:flex-row flex-1 bg-coolyellow">

        {/* Left: yellow panel */}
        <section className="lg:flex-1 bg-coolyellow text-deepnavy px-8 lg:px-16 pt-8 pb-8">
            <h1 className="font-display text-5xl font-black leading-none mb-8 text-deepnavy">
              Campaign Kick-off
            </h1>
            <div className="mb-5 leading-relaxed text-xl">
              <p>🗓️ Date: Wednesday, May 20th</p>
              <p className="mb-4">⏰ Time: 6:30pm</p>
              
              <p className="mb-4">Join us on Wednesday, May 20th to kick-off the Buy Brightline Campaign!</p>
              
              <p className="mb-4">Floridians are ready for cheaper fares, expanded routes, and better service. With Brightline on the verge of bankruptcy, now is our chance to make sure Floridians -- not wealthy shareholders -- have a say in how Brightline runs.</p>

              <p className="mb-4">Help us build a strong grassroots movement to make Brightline public by attending the kick-off call!</p>

              <p>All are welcome. No campaign experience is needed. We just need people like you who are willing to dream and put in the work to make Brightline public. Bring a friend (or make a new one)!</p>
            </div>
        </section>

        {/* Right: white form panel */}
        <aside className="lg:w-[480px] bg-white px-8 lg:px-16 pt-8 px-16">
          <Volunteer />
        </aside>
      </div>

    </div>
  )
}