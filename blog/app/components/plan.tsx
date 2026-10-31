// components/plan.tsx — "Our plan" as a rail line with three stops
const steps = [
  {
    title: 'Study buying Brightline',
    blurb: 'Get the state legislature to pass legislation directing state agencies to study how buying Brightline would work and support regional public transit plans.',
  },
  {
    title: 'Pass the Buy Brightline Act',
    blurb: "The law would direct the state use its reserves to buy Brightline.",
  },
  {
    title: 'Operate rail like our roads',
    blurb: 'Fund and maintain the rail as public infrastructure, just like our highways, with fares working Floridians can afford. One day, expand the rail statewide, from Pensacola to the Keys.',
  },
]

export function PlanSection() {
  return (
    <section id="plan" className="bb-sec bg-cream text-deepnavy scroll-mt-20">
      <div className="bb-wrap">
        <h2 className="bb-h2 text-center text-flameink">Our plan</h2>

        <ol className="bb-line mt-[clamp(40px,6vw,80px)]">
          {steps.map((s, i) => (
            <li key={s.title} className="bb-stop">
              <span className="bb-dot" aria-hidden="true">{i + 1}</span>
              <div className="min-w-0">
                <p className="text-[15px] font-extrabold uppercase tracking-[0.12em] text-flameink">
                  Step {i + 1}
                </p>
                <p className="mt-1.5 font-display font-black uppercase text-[clamp(22px,2.4vw,32px)] leading-[1.05]">
                  {s.title}
                </p>
                <p className="bb-stop-blurb mt-2.5 text-[clamp(16px,1.4vw,18px)] leading-normal">
                  {s.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}