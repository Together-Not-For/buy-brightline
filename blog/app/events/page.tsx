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
              Weekly Campaign Call
            </h1>
            <div className="mb-5 leading-relaxed text-xl">
              <p>🗓️ Date: Wednesday, June 10th</p>
              <p className="mb-4">⏰ Time: 7:00pm</p>
              
              <p className="mb-4">Join us on Wednesday for our weekly campaign call! Drop in to get caught up on our efforts and help us refine our strategy to make Brightline public.</p>
              
              <p className="mb-4">Brightline is on the verge of <a href='https://veronews.com/2026/05/14/substantial-doubt-brightline-can-stay-in-business/'>bankruptcy</a> — and that means Floridians finally have a shot at owning it. No more wealthy shareholders calling the shots. We could have cheaper fares, expanded routes, and a rail system we dream of and deserve.</p>

              <p className="mb-4">But we can't make Brightline public without a strong grassroots movement that pressures Florida lawmakers to act, before our window of opportunity slams shut.</p>

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