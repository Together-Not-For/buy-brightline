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
import EventSignup from '../components/event-signup'
import { upcomingEvents } from './events'

export const metadata = {
  title: "Events | Let's Buy Brightline",
  description: 'Sign up for upcoming Buy Brightline campaign meetings and calls.',
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9520f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9520f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export default function EventsPage() {
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

      {/* Events + sign-up */}
      <section id="events" className="bb-sec bg-cream">
        <div className="bb-wrap grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 items-start">
          <div className="flex flex-col gap-7 min-w-0">
            {upcomingEvents.map((e) => {
              const [dow, rest] = e.shortDate.split(', ')
              const [month, day] = rest.split(' ')
              return (
                <article
                  key={e.id}
                  className="bb-r flex items-start gap-[clamp(16px,3vw,28px)] bg-white border-[3px] border-deepnavy shadow-[8px_8px_0_#0c2342] p-[clamp(20px,3vw,32px)]"
                >
                  <div aria-hidden="true" className="flex-none w-[clamp(72px,9vw,96px)] aspect-square rounded-2xl bg-deepnavy text-white flex flex-col items-center justify-center text-center">
                    <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-sun">{dow}</span>
                    <span className="font-display font-black text-[clamp(30px,4vw,40px)] leading-none">{day}</span>
                    <span className="text-[13px] font-bold uppercase tracking-[0.06em]">{month}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display font-black uppercase text-[clamp(24px,2.6vw,32px)] leading-[1.05]">{e.title}</h2>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-base font-semibold">
                      <span className="inline-flex items-center gap-2"><ClockIcon />{e.dayLabel} · {e.time}</span>
                      <span className="inline-flex items-center gap-2"><PinIcon />{e.location}</span>
                    </div>
                    <p className="mt-3.5 text-lg leading-relaxed">{e.description}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <aside id="signup" className="min-w-0 min-[900px]:sticky min-[900px]:top-24 scroll-mt-24">
            <div className="bb-r bg-white border-[3px] border-deepnavy shadow-[10px_10px_0_#0c2342] p-[clamp(24px,3.5vw,40px)]">
              <EventSignup />
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
