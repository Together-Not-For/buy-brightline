import Image from 'next/image'
import { Navbar } from '../components/nav'
import { AnnouncementBanner } from '../components/announcements'
import { Footer } from '../components/footer'
import OrgSignup from '../components/org-pledge'
import { endorsers } from './endorsers'

export const metadata = {
  title: "Organizational Pledge",
  description: 'Sign your organization on to the call for Florida to buy Brightline and run it for the people.',
}

const asks = [
  { title: 'Endorse publicly', body: 'Let us list your organization as an endorser.' },
  { title: 'Tell your members', body: 'Share a short statement of your pledge with your members, and inviting your members to sign on as individuals.' },
  { title: 'Contact lawmakers', body: 'Help us contact state lawmakers to secure support for the study and Buy Brightline Act.' },
  { title: 'Show up', body: 'Send at least one representative to a campaign call, lobby day, hearing or public event.' },
]

// const gets = [
//   { title: 'A spot on the coalition', body: 'Your name alongside other Florida organizations when we present the pledge to lawmakers.' },
//   { title: 'A partner toolkit', body: 'Ready-to-use graphics, palm cards, sample posts and talking points for your members.' },
//   { title: 'Campaign briefings', body: 'Regular updates on the legislation, the FDOT study and upcoming actions, plus a seat on organizer calls.' },
// ]

// Empty "Your organization here" tiles fill the wall until it has this many endorsers
const MIN_TILES = 0

export default function OrganizationsPage() {
  const emptyTiles = Math.max(0, MIN_TILES - endorsers.length)

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip text-deepnavy">
      <AnnouncementBanner />
      <Navbar />

      {/* Header */}
      <section className="bb-halftone bb-gutter pt-[clamp(24px,5vw,64px)] pb-[clamp(56px,7vw,96px)] text-center">
        <p className="font-script text-[clamp(36px,5vw,60px)] leading-none -rotate-[4deg]">For organizations</p>
        <h1 className="mt-3.5 font-display font-black uppercase text-[clamp(44px,7.4vw,104px)] leading-[0.92] -rotate-3 [text-shadow:5px_5px_0_#fff]">
          Sign the organizational pledge
        </h1>
        <p className="mt-8 mx-auto max-w-[680px] text-[clamp(18px,2vw,22px)] leading-normal">
          Unions, transit groups, neighborhood associations, student groups and local businesses: add your
          organization's name to the call for Florida to buy Brightline and run it for the people.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-3">
          <a href="#sign-on" className="bb-pill">Sign on</a>
          <a href="#pledge-text" className="bb-pill bb-pill-ghost">
            Read the pledge
          </a>
        </div>
      </section>

      {/* The pledge */}
      <section id="pledge-text" className="bb-sec bg-cream scroll-mt-20">
        <div className="bb-wrap grid grid-cols-1 min-[860px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-y-10 gap-x-[clamp(32px,5vw,72px)] items-center">
          <div className="min-w-0">
            <h2 className="bb-h2 text-flameink">The pledge</h2>
            <p className="mt-7 text-[clamp(18px,1.6vw,21px)] leading-relaxed">
              Every organization that signs on adds its name to this statement. We'll share it with Florida
              lawmakers alongside our individual pledge signers.
            </p>
          </div>
          <blockquote className="bb-r m-0 min-w-0 bg-white border-[3px] border-deepnavy shadow-[10px_10px_0_#0c2342] p-[clamp(28px,4vw,48px)] font-display italic font-semibold text-[clamp(20px,2.1vw,26px)] leading-snug">
            <p>
              “We, the undersigned organization, call on the State of Florida to buy Brightline and operate it as a
              public railroad. Floridians have already put hundreds of millions of public dollars into this system.
              It should serve the people who paid for it, not shareholders.
            </p>
            <p className="mt-4">
              We urge the Legislature to fund an FDOT study of a state purchase, pass the Buy Brightline Act,
              and run intercity rail the way we run our roads: as public infrastructure, open and affordable to all.”
            </p>
          </blockquote>
        </div>
      </section>

      {/* What we ask of signers */}
      <section className="bb-sec bg-deepnavy text-white">
        <div className="bb-wrap">
          <h2 className="bb-h2 text-sun">What we ask of signers</h2>
          <p className="mt-6 max-w-[720px] text-[clamp(18px,1.6vw,21px)] leading-relaxed text-[#e6eaf0]">
            Signing on is a commitment to help build public pressure. Here's what we ask of every partner
            organization.
          </p>
          <ol className="mt-[clamp(32px,4vw,48px)] max-w-[860px] list-none p-0 border-t-2 border-sun/45">
            {asks.map((a, i) => (
              <li key={a.title} className="flex items-baseline gap-[clamp(16px,2vw,24px)] py-[22px] border-b-2 border-sun/45">
                <span aria-hidden="true" className="flex-none w-[2ch] font-display font-black text-[clamp(22px,2vw,26px)] text-sun">
                  {i + 1}.
                </span>
                <p className="text-[clamp(17px,1.5vw,19px)] leading-relaxed text-[#e6eaf0]">
                  <strong className="font-black uppercase text-white">{a.title}.</strong> {a.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get */}
      {/* <section className="bb-sec bg-cream">
        <div className="bb-wrap">
          <h2 className="bb-h2 text-flameink">What you get</h2>
          <div className="mt-[clamp(32px,4vw,48px)] grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,28px)]">
            {gets.map((g) => (
              <div key={g.title} className="border-t-[6px] border-flame pt-5">
                <p className="font-display font-black uppercase text-[clamp(20px,1.9vw,24px)] leading-[1.1]">{g.title}</p>
                <p className="mt-2.5 text-[17px] leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Sign-on form */}
      <section id="sign-on" className="bb-sec bg-sand scroll-mt-20">
        <div className="bb-wrap max-w-[960px]">
          <h2 className="bb-h2 text-center">Sign on</h2>
          <div className="bb-r mt-[clamp(32px,4vw,48px)] bg-white border-[3px] border-deepnavy shadow-[10px_10px_0_#0c2342] p-[clamp(24px,4vw,48px)]">
            <OrgSignup />
          </div>
        </div>
      </section>

      {/* Organizations on board */}
      <section className="bb-sec bg-cream">
        <div className="bb-wrap">
          <h2 className="bb-h2 text-flameink text-center">Organizations on board</h2>
          <p className="mt-5 mx-auto max-w-[620px] text-center text-[clamp(18px,1.6vw,21px)] leading-relaxed">
            Join the organizations already calling on Florida to buy Brightline.
          </p>
          <ul className="mt-[clamp(32px,4vw,48px)] grid grid-cols-2 min-[860px]:grid-cols-4 gap-[clamp(12px,2vw,24px)] list-none p-0">
            {endorsers.map((e) => {
              const tile = e.logo ? (
                <span className="relative block w-full h-full">
                  <Image src={e.logo} alt={e.name} fill sizes="(max-width: 860px) 45vw, 260px" className="object-contain" />
                </span>
              ) : (
                <span className="font-display font-black uppercase text-[clamp(16px,1.6vw,20px)] leading-[1.1]">{e.name}</span>
              )
              const cls =
                'bb-r flex items-center justify-center text-center aspect-[3/2] p-4 bg-white border-[3px] border-deepnavy text-deepnavy no-underline'
              return (
                <li key={e.name}>
                  {e.url ? (
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className={cls} title={e.name}>
                      {tile}
                    </a>
                  ) : (
                    <div className={cls}>{tile}</div>
                  )}
                </li>
              )
            })}
            {Array.from({ length: emptyTiles }).map((_, i) => (
              <li key={`empty-${i}`}>
                <a
                  href="#sign-on"
                  className="bb-r flex items-center justify-center text-center aspect-[3/2] p-3 border-[3px] border-dashed border-deepnavy/35 text-slate font-bold text-[15px] no-underline hover:border-deepnavy hover:text-deepnavy"
                >
                  Your organization here
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}