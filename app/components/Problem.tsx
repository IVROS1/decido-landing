export default function Problem() {
  const problems = [
    {
      icon: "⏳",
      title: "Du drunknar i alternativ",
      desc: "Varje beslut kräver research, möten och PowerPoints. Resultatet? Handlingsförlamning — inte klarhet.",
    },
    {
      icon: "🎯",
      title: "Rätt data, fel fokus",
      desc: "Du har tillgång till all information. Men utan rätt filter pekar din kompass åt fel håll.",
    },
    {
      icon: "⚡",
      title: "Tempot ökar, marginalerna krymper",
      desc: "Marknaden väntar inte. Varje dag utan ett tydligt nästa steg är en dag din konkurrent går förbi.",
    },
  ];

  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
          Problemet
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">
          Grundaren som fattar fel beslut förlorar — inte den som saknar idéer.
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Du har kompetensen. Du har datan. Men när det gäller gäller händer det ändå att du tvekar, väljer fel, eller väljer ingenting alls.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
