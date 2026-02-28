const testimonials = [
  {
    quote: "Jag fattade beslut snabbare de första veckorna med Decido än under hela förra kvartalet kombinerat.",
    name: "Marcus L.",
    role: "VD, B2B SaaS-bolag",
    initials: "ML",
  },
  {
    quote: "Det är som att ha en erfaren styrelsemedlem tillgänglig dygnet runt — utan att behöva boka tid.",
    name: "Anna K.",
    role: "Grundare, konsultbolag",
    initials: "AK",
  },
  {
    quote: "Jag slösar inte längre tid på att ifrågasätta mig själv. Decido ger mig det fokus jag behöver för att gå vidare.",
    name: "Johan E.",
    role: "Delägare, teknikbolag",
    initials: "JE",
  },
];

export default function TestimonialsCTA() {
  return (
    <>
      {/* Testimonials */}
      <section className="bg-[#111111] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
            Grundare om Decido
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-16">
            Klarhet skapar rörelse.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 flex flex-col"
              >
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0a0a0a] font-bold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sluta tveka. Börja besluta.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Prova Decido gratis i 14 dagar. Inget kreditkort krävs.
          </p>
          <a
            href="https://decido.systems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c9a84c] text-[#0a0a0a] font-bold px-10 py-4 rounded-md text-lg hover:opacity-90 transition"
          >
            Kom igång gratis →
          </a>
          <p className="text-gray-600 text-xs mt-6">
            Skapad för svenska grundare och VDar som fattar beslut på riktigt.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 Decido. Beslutsstöd för grundare.</p>
          <a
            href="https://decido.systems"
            className="text-[#c9a84c] text-sm hover:underline"
          >
            decido.systems
          </a>
        </div>
      </footer>
    </>
  );
}
