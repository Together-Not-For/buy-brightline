// import { Navbar } from '../components/nav'
// import Volunteer from '../components/volunteer'
// import { AnnouncementBanner } from '../components/announcements'

// export default function EventsPage() {
//   return (
//     <div className="flex flex-col min-h-screen">

//       {/* Navbar spans full width */}
//       <Navbar />

//       {/* Announcement */}
//       <AnnouncementBanner />

//       <div className="flex flex-col lg:flex-row flex-1 bg-coolyellow">

//         {/* Left: yellow panel */}
//         <section className="lg:flex-1 bg-coolyellow text-deepnavy px-8 lg:px-16 pt-8 pb-8">
//             <h1 className="font-display text-5xl font-black leading-none mb-8 text-deepnavy">
//               Weekly Campaign Call
//             </h1>
//             <div className="mb-5 leading-relaxed text-xl">
//               <p>🗓️ Date: October 7, 2026</p>
//               <p>⏰ Time: 7:00pm</p>
//               <p className="mb-4">📍 Location: Zoom</p>
              
//               <p className="mb-4">Join us on Wednesday for our next virtual campaign call! Drop in to learn more about the campaign and how you join us to make Brightline public.</p>
              
//               <p className="mb-4">Brightline is on the verge of <a href='https://veronews.com/2026/05/14/substantial-doubt-brightline-can-stay-in-business/'>bankruptcy</a> — and that means Floridians finally have a shot at owning it. No more wealthy shareholders calling the shots. We could have cheaper fares, expanded routes, and a rail system we dream of and deserve.</p>

//               <p className="mb-4">But we can't make Brightline public without a strong grassroots movement that pressures Florida lawmakers to act, before our window of opportunity slams shut.</p>

//               <p>All are welcome. No campaign experience is needed. We just need people like you who are willing to dream and put in the work to make Brightline public. Bring a friend (or make a new one)!</p>
//             </div>
//         </section>

//         {/* Right: white form panel */}
//         <aside className="lg:w-[480px] bg-white px-8 lg:px-16 pt-8 px-16">
//           <Volunteer />
//         </aside>
//       </div>

//     </div>
//   )
// }

import { Navbar } from '../components/nav'
import { AnnouncementBanner } from '../components/announcements'
import EventSignup from '../components/event-signup'
import { upcomingEvents } from './events'

export const metadata = {
  title: "Events | Let's Buy Brightline",
  description: 'Sign up for upcoming Buy Brightline campaign meetings and calls.',
}

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar spans full width */}
      <Navbar />

      {/* Announcement */}
      <AnnouncementBanner />

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left: yellow panel with event details */}
        <section className="lg:flex-1 bg-coolyellow text-deepnavy px-8 lg:px-16 py-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-display text-5xl font-black leading-none mb-6">Upcoming Events</h1>
            <p className="text-xl leading-relaxed mb-4">
              Two ways to plug in this week. Come to one or both, and bring a friend (or make a new one)!
            </p>
            <a
              href="#signup"
              className="lg:hidden inline-block mb-4 bg-deepnavy text-white text-sm font-bold uppercase tracking-widest px-6 py-3"
            >
              Sign up
            </a>

            <div className="space-y-6 mt-4 mb-12">
              {upcomingEvents.map((e) => (
                <article key={e.id} className="rounded-2xl border-2 border-deepnavy bg-white/50 p-6 lg:p-8">
                  <h2 className="font-display text-3xl leading-tight mb-4">{e.title}</h2>
                  <div className="text-xl leading-relaxed mb-4">
                    <p>🗓️ Date: {e.dayLabel}</p>
                    <p>⏰ Time: {e.time}</p>
                    <p>📍 Location: {e.location}</p>
                  </div>
                  <p className="text-lg leading-relaxed">{e.description}</p>
                </article>
              ))}
            </div>

            {/* <div className="text-xl leading-relaxed space-y-4">
              <p>
                Brightline is on the verge of{' '}
                <a href="https://veronews.com/2026/05/14/substantial-doubt-brightline-can-stay-in-business/">
                  bankruptcy
                </a>{' '}
                — and that means Floridians finally have a shot at owning it. No more wealthy shareholders
                calling the shots. We could have cheaper fares, expanded routes, and a rail system we dream
                of and deserve.
              </p>
              <p>
                But we can't make Brightline public without a strong grassroots movement that pressures
                Florida lawmakers to act, before our window of opportunity slams shut.
              </p>
              <p>
                All are welcome. No campaign experience is needed. We just need people like you who are
                willing to dream and put in the work to make Brightline public.
              </p>
            </div> */}
          </div>
        </section>

        {/* Right: white sign-up panel, stays in view while scrolling on desktop */}
        <aside id="signup" className="lg:w-[480px] bg-white px-8 lg:px-12 py-10 scroll-mt-24">
          <div className="lg:sticky lg:top-32">
            <EventSignup />
          </div>
        </aside>
      </div>
    </div>
  )
}