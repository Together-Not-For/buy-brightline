// components/endorsements.tsx — "Endorsed by" logo wall for organizations that signed on
import Image from 'next/image'
import Link from 'next/link'

type Endorser = {
  name: string
  url?: string   // their website or social page
  logo?: string  // path under /public, e.g. '/endorsers/example.png'; leave out to show the name as text
}

// Add organizations here as they sign the organizational pledge.
// Example: { name: 'Example Transit Coalition', url: 'https://example.org', logo: '/endorsers/example.png' },
const endorsers: Endorser[] = [{
  name: 'Walkable Volusia', url: 'https://walkablevolusia.org', logo: '/Walkable-Volusia-Logo-2.png'
}]

// Show a few empty slots while the list is short, so the wall reads as an invitation
const MIN_TILES = 1

function Tile({ e }: { e: Endorser }) {
  const inner = e.logo ? (
    <span className="relative block w-full h-full">
      <Image src={e.logo} alt={e.name} fill sizes="(max-width: 640px) 45vw, 220px" className="object-contain" />
    </span>
  ) : (
    <span className="font-display font-black uppercase text-[clamp(15px,1.4vw,18px)] leading-tight">{e.name}</span>
  )

  const className =
    'bb-r flex items-center justify-center text-center aspect-[3/2] p-5 bg-white border-[3px] border-deepnavy text-deepnavy no-underline transition-transform hover:-translate-y-0.5'

  return e.url ? (
    <a href={e.url} target="_blank" rel="noopener noreferrer" className={className} title={e.name}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  )
}

export function EndorsementsSection() {
  const empty = Math.max(0, MIN_TILES - endorsers.length)

  return (
    <section id="endorsements" className="bb-sec bg-deepnavy text-cream scroll-mt-20">
      <div className="bb-wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <h2 className="bb-h2 text-sand">Endorsed by</h2>
          <Link href="/organizations" className="bb-pill">Sign on</Link>
        </div>
        <p className="mt-6 max-w-[680px] text-[clamp(18px,1.6vw,21px)] leading-relaxed">
          Organizations across Florida are calling on the state to buy Brightline and run it for the people.
        </p>

        <ul className="mt-[clamp(32px,4vw,48px)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[clamp(12px,2vw,24px)] list-none p-0">
          {endorsers.map((e) => (
            <li key={e.name}>
              <Tile e={e} />
            </li>
          ))}
          {Array.from({ length: empty }).map((_, i) => (
            <li key={`empty-${i}`}>
              <Link
                href="/organizations"
                className="bb-r flex items-center justify-center text-center aspect-[3/2] p-4 text-slate font-bold text-[15px] no-underline hover:border-deepnavy hover:text-deepnavy"
              >
                {/* <Image
                  src="/Walkable-Volusia-Logo.png"
                  alt="Walkable Volusia x Buy Brightline"
                  width={1426}
                  height={798}
                  priority
                  className="block mx-auto mt-2 w-[min(100%,720px,92vh)] h-auto"
                /> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}