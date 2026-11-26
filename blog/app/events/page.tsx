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
import { Footer } from '../components/footer'
import EventsBoard from '../components/events-board'
import { getUpcomingEvents } from './events'

// Rebuild the page with fresh Airtable data at most every 5 minutes
export const revalidate = 300

export const metadata = {
  title: "Events | Let's Buy Brightline",
  description: 'Sign up for upcoming campaign events.',
}

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents()

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip text-deepnavy">
      <AnnouncementBanner />
      <Navbar />

      {/* Header band */}
      <section className="bb-halftone bb-gutter pt-[clamp(24px,4vw,48px)] pb-[clamp(48px,6vw,80px)] text-center">
        <p className="font-script text-[clamp(36px,5vw,60px)] leading-none -rotate-[4deg]">Get involved</p>
        <h1 className="mt-3 font-display font-black uppercase text-[clamp(48px,8vw,112px)] leading-[0.92] -rotate-3 [text-shadow:5px_5px_0_#fff]">
          Upcoming events
        </h1>
        <p className="mt-7 mx-auto max-w-[620px] text-[clamp(18px,2vw,22px)] leading-normal">
          Ways to plug into the campaign. All are welcome — no experience needed.
        </p>
      </section>

      {/* Events, sign-up form and mobile sign-up bar */}
      <EventsBoard events={upcomingEvents} />

      <Footer />
    </div>
  )
}