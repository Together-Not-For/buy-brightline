import Link from 'next/link'

const navItems = {
  '/': {
    name: 'pledge',
  },
  '/events': {
    name: 'events',
  },
  '/jobs': {
    name: 'jobs',
  },
}

export function Navbar() {
  return (
    <aside className="w-full bg-deepnavy sticky pb-2 pt-2 top-0 z-50">

        {/* Nav Bar */}
        <nav className="flex flex-row items-center h-14 px-8 lg:px-16" id="nav">

        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🚄</span>
        </Link>

        <div className="flex flex-row ml-auto">
          {Object.entries(navItems).map(([path, { name }], i) => (
            <Link
              key={path}
              href={path}
              className="transition-all flex items-center py-2 px-4 m-1 rounded-md font-bold uppercase tracking-wide text-sm bg-coolyellow text-deepernavy"
            >
              {name}
            </Link>
          ))}
        </div>

      </nav>
    </aside>
  )
}
