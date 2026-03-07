'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  const monthlyPrice = 2500
  const annualMonthly = Math.round(monthlyPrice * 0.75) // 25% rabatt
  const annualTotal = annualMonthly * 12

  return (
    <section className="bg-[#0d0d0d] py-24 px-6" id="pricing">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Prissättning</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Enkelt. Transparent. Utan bindningstid.
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Ett abonnemang. Allt ingår. Avsluta när du vill.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Månadsvis</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-[#c9a84c]' : 'bg-gray-600'}`}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
            Årsvis <span className="text-[#c9a84c] font-bold">−25%</span>
          </span>
        </div>

        {/* Priskort */}
        <div className="relative bg-[#141414] border border-[#c9a84c]/30 rounded-2xl p-8 md:p-12 max-w-lg mx-auto shadow-xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Mest populär
            </span>
          </div>

          <div className="mb-8">
            <div className="flex items-end justify-center gap-2">
              <span className="text-5xl md:text-6xl font-extrabold text-white">
                {annual ? annualMonthly.toLocaleString('sv-SE') : monthlyPrice.toLocaleString('sv-SE')}
              </span>
              <span className="text-gray-400 text-lg mb-2">kr/mån</span>
            </div>
            {annual ? (
              <p className="text-gray-500 text-sm mt-1">Faktureras {annualTotal.toLocaleString('sv-SE')} kr/år</p>
            ) : (
              <p className="text-[#c9a84c] text-sm mt-1 font-medium">
                Spara {((monthlyPrice - annualMonthly) * 12).toLocaleString('sv-SE')} kr/år med årsabonnemang
              </p>
            )}
          </div>

          <ul className="text-left space-y-4 mb-10">
            <li className="flex gap-3">
              <span className="text-xl mt-0.5 shrink-0">🎯</span>
              <div>
                <p className="text-white font-semibold text-sm">Prioritera rätt bland konkurrerande beslut</p>
                <p className="text-gray-500 text-xs mt-0.5">Sluta slösa tid på fel saker — Decido sorterar åt dig.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl mt-0.5 shrink-0">⚡</span>
              <div>
                <p className="text-white font-semibold text-sm">Obegränsade beslutssessioner</p>
                <p className="text-gray-500 text-xs mt-0.5">Fatta hur många beslut du vill, när du vill.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl mt-0.5 shrink-0">📊</span>
              <div>
                <p className="text-white font-semibold text-sm">Beslutshistorik & insikter</p>
                <p className="text-gray-500 text-xs mt-0.5">Se mönster i dina beslut och förbättra över tid.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl mt-0.5 shrink-0">🔒</span>
              <div>
                <p className="text-white font-semibold text-sm">Data stannar i Sverige</p>
                <p className="text-gray-500 text-xs mt-0.5">Svenska servrar. GDPR-compliant. Dina data är dina.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl mt-0.5 shrink-0">🤝</span>
              <div>
                <p className="text-white font-semibold text-sm">Personlig onboarding ingår</p>
                <p className="text-gray-500 text-xs mt-0.5">Vi hjälper dig komma igång på 30 minuter.</p>
              </div>
            </li>
          </ul>

          <a
            href="https://app.decido.systems/signup"
            className="block w-full bg-[#c9a84c] hover:bg-[#b8933e] text-[#0a0a0a] font-bold text-center py-4 rounded-xl transition-colors duration-200 text-lg"
          >
            Testa gratis i 7 dagar — inget kreditkort
          </a>
          <p className="text-gray-600 text-xs mt-3 text-center">Ingen bindningstid. Avsluta med ett klick.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-500 text-sm">
          <span>✓ 7 dagars gratis provperiod</span>
          <span>✓ Ingen bindningstid</span>
          <span>✓ Svenska servrar</span>
          <span>✓ Avsluta när som helst</span>
        </div>
      </div>
    </section>
  )
}
