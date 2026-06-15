// components/stats.tsx

export function StatsSection() {
  const stats = [
    { number: "4M+", label: "Annual Brightline riders" },
    { number: "$16B", label: "Florida's reserve fund, sitting idle" },
    { number: "3", label: "Cities connected — so far" },
    { number: "1", label: "Shot to make it ours" },
  ]

  return (
    <section className="bg-deepnavy text-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl font-black text-center mb-4">
          You Are Not Riding Alone.
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Millions of Floridians depend on Brightline. The numbers make the case for us.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ number, label }) => (
            <div key={number} className="border-t-4 border-coolyellow pt-6">
              <div className="font-display text-5xl font-black text-coolyellow mb-2">
                {number}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-300">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}