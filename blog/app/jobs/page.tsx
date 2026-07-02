import { Navbar } from '../components/nav'
import Jobs from '../components/jobs'
import { AnnouncementBanner } from '../components/announcements'
import type { Metadata } from "next";

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
    <div className="flex flex-col min-h-screen">

      {/* Navbar spans full width */}
      <Navbar />

      {/* Announcement */}
      <AnnouncementBanner />

      <div className="flex flex-col lg:flex-row flex-1 bg-coolyellow">

        {/* Left: yellow panel */}
        <section className="lg:flex-1 bg-coolyellow text-deepnavy px-8 lg:px-16 pt-8 pb-8">
            <h1 className="font-display text-5xl font-black leading-none mb-8 text-deepnavy">
              Open Roles
            </h1>
            <div className="mb-5 leading-relaxed text-xl">
              <h3>
                We're looking for a Social Media Fellow and Graphic Design and Video Editing Fellow to help us build our campaign's online presence. <b>Both roles are remote!</b>
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/pdfs/social-media-fellow.pdf"
                target="_blank"
                style={{ textDecoration: 'none' }}
                className="inline-flex items-center gap-2.5 bg-deepnavy text-coolyellow text-sm font-semibold tracking-widest uppercase px-6 py-3.5 rounded hover:bg-opacity-90 transition"
              >📄 Social Media Fellow
              </a>
    
              <a href="/pdfs/graphic-design-fellow.pdf"
              target="_blank"
              style={{ textDecoration: 'none' }}
              className="inline-flex items-center gap-2.5 bg-deepnavy text-coolyellow text-sm font-semibold tracking-widest uppercase px-6 py-3.5 rounded hover:bg-opacity-90 transition"
              >📄 Graphic Design &amp; Video Editing Fellow
              </a>
          </div>

          <div className='mb-5 leading-relaxed text-xl mt-5'>
            <h3> Apply by filling out the form.</h3>
          </div>

        </section>

        {/* Right: white form panel */}
        <aside className="lg:w-[480px] bg-white px-8 lg:px-16 pt-8 px-16">
          <Jobs />
        </aside>
      </div>

    </div>
  )
}