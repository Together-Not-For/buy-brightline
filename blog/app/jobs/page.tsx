import { Navbar } from '../components/nav'
import Jobs from '../components/jobs'
import { AnnouncementBanner } from '../components/announcements'
import type { Metadata } from "next";
import { jobListings } from './jobs'

export const metadata: Metadata = {
  title: "We're Hiring! | Buy Brightline",
  description: "We're hiring two fellows to help us grow Buy Brightline's online presence.",
  openGraph: {
    title: "We're Hiring! | Buy Brightline",
    description: "We're hiring two fellows to help us grow Buy Brightline's online presence.",
    url: "https://www.buybrightline.com/jobs",
  },
};

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip text-deepnavy">

      <AnnouncementBanner />
      <Navbar />

      {/* Header band */}
      <section className="bb-halftone bb-gutter pt-[clamp(24px,4vw,48px)] pb-[clamp(48px,6vw,80px)] text-center">
        <p className="font-script text-[clamp(36px,5vw,60px)] leading-none -rotate-[4deg]">We're Hiring!</p>
        <h1 className="mt-3 font-display font-black uppercase text-[clamp(48px,8vw,112px)] leading-[0.92] -rotate-3 [text-shadow:5px_5px_0_#fff]">
          Join our team
        </h1>
        <p className="mt-7 mx-auto max-w-[620px] text-[clamp(18px,2vw,22px)] leading-normal">
          We're looking for interns and a campaign manager to help grow this campaign!
        </p>
      </section>

      {/* Events + sign-up */}
            <section id="events" className="bb-sec bg-cream">
              <div className="bb-wrap grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 items-start">
                <div className="flex flex-col gap-7 min-w-0">
                  {jobListings.map((e) => {
                    return (
                      <article
                        key={e.id}
                        className="bb-r flex items-start gap-[clamp(16px,3vw,28px)] bg-white border-[3px] border-deepnavy shadow-[8px_8px_0_#0c2342] p-[clamp(20px,3vw,32px)]"
                      >
                        <div className="min-w-0 flex-1">
                          <h2 className="font-display font-black uppercase text-[clamp(24px,2.6vw,32px)] leading-[1.05]">{e.title}</h2>
                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-base font-semibold">
                            <span className="inline-flex items-center gap-2"><a href={e.url}>Read the listing: 📄</a></span>
                          </div>
                          <p className="mt-3.5 text-lg leading-relaxed">{e.description}</p>
                        </div>
                      </article>
                    )
                  })}
                </div>
      
                <aside id="signup" className="min-w-0 min-[900px]:sticky min-[900px]:top-24 scroll-mt-24">
                  <div className="bb-r bg-white border-[3px] border-deepnavy shadow-[10px_10px_0_#0c2342] p-[clamp(24px,3.5vw,40px)]">
                    <Jobs />
                  </div>
                </aside>
              </div>
            </section>

    </div>
  )
}