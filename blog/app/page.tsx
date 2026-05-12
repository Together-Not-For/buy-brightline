import { Navbar } from './components/nav'
import Pledge from './components/pledge'

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">

      {/* Left: yellow panel */}
      <section className="lg:flex-1 bg-brand px-8 pt-2 pb-2 lg:px-16">
        <div className="max-w-xl lg:ml-auto">
          <Navbar />
          <h1 className="mb-8 text-3xl font-semibold tracking-tighter leading-tight">
            Brightline is going{' '}
            <a href="https://www.axios.com/local/miami/2026/05/04/brightline-financial-survival-bankruptcy-florida">
              bankrupt
            </a>
            .<br />
            Let's buy it, and run it the right way.
          </h1>
          <p className="mb-5 leading-relaxed text-lg">
            Millions of us rely on Brightline to travel up and down the state
            stress-free. But a $5 billion debt could wipe Brightline out.
            We've already watched Spirit collapse. We don't have to let
            Florida's only intercity railroad go out the same way.
          </p>
          <p className="mb-5 leading-relaxed text-lg">
            Florida is sitting on $16 billion in reserves — a fraction of that
            could erase Brightline's debt and, for the first time, give the
            people who ride it a say in how it runs.
          </p>
          <p className="mb-5 leading-relaxed text-lg">
            We could have:<br />
            🎟️ Discounted fares for Florida residents<br />
            📍 Connections built based on input from riders<br />
            💺 Seats that actually recline
          </p>
          <p className="mb-4 text-xl font-semibold leading-relaxed">
            This is our money. Let's tell the State to put it to work.
          </p>
        </div>
      </section>

      {/* Right: white form panel */}
      <aside className="lg:w-[480px] bg-white px-12 pt-16 pb-16">
        <Pledge />
      </aside>

    </div>
  )
}