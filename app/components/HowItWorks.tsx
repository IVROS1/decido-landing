const steps = [
  {
    number: "01",
    title: "Beskriv ditt beslut",
    desc: "Skriv vad du behöver besluta — på ett par meningar. Inget formulär. Inga frågeformulär. Bara du och frågan.",
  },
  {
    number: "02",
    title: "Decido analyserar kontexten",
    desc: "Systemet kartlägger risker, trade-offs och alternativ — baserat på din situation, inte generella råd.",
  },
  {
    number: "03",
    title: "Du får ett tydligt nästa steg",
    desc: "Inte tio alternativ. Ett rekommenderat nästa steg med tydligt resonemang — så du kan agera direkt.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
          Så fungerar det
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">
          Från tvekan till handling — på tre steg.
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Decido är inte ett analysverktyg. Det är ett beslutsstöd — byggt för grundare som behöver agera, inte grubbla.
        </p>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-[#2a2a2a]" />
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#c9a84c] flex items-center justify-center mb-6 z-10">
                  <span className="text-[#c9a84c] font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
