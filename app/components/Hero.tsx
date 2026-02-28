export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Du fattar 35 viktiga beslut idag. <span className="text-[#c9a84c]">Decido ger dig rätt fokus på varje ett.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Rätt fokus när det gäller — ett tydligt nästa steg, inte tio alternativ.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            className="inline-block bg-[#c9a84c] text-[#0a0a0a] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
            href="https://decido.systems"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prova gratis
          </a>
        </div>
      </div>
    </section>
  );
}
