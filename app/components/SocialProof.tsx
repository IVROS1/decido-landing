'use client'

import { useEffect, useRef, useState } from 'react'

// Räknare som animerar upp till målvärdet
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString('sv-SE')}{suffix}
    </span>
  )
}

const TESTIMONIALS = [
  {
    quote: 'Decido hjälpte mig prioritera rätt när jag hade fyra kritiska beslut på en gång. Tog bort känslan av att ha fastnat.',
    name: 'Anna K.',
    role: 'Grundare, tech-startup',
    initials: 'AK',
  },
  {
    quote: 'Äntligen ett verktyg som förstår att problemet inte är att fatta ETT beslut — utan att veta vilket man ska ta tag i FÖRST.',
    name: 'Marcus L.',
    role: 'VD, konsultbolag',
    initials: 'ML',
  },
  {
    quote: 'Jag använde Decido inför ett strategiskifte i bolaget. Det sorterade ut bruset och gav mig ett tydligt nästa steg.',
    name: 'Sofia R.',
    role: 'COO, scale-up',
    initials: 'SR',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6" id="social-proof">
      <div className="max-w-5xl mx-auto">

        {/* Räknare */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center">
            <p className="text-6xl md:text-7xl font-extrabold text-white leading-none">
              <AnimatedCounter target={3847} />
              <span className="text-[#c9a84c]">+</span>
            </p>
            <p className="text-gray-400 text-lg mt-3">beslut fattade med Decido</p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {[
            { emoji: '🎁', title: 'Gratis i 7 dagar', desc: 'Inget kreditkort behövs. Prova utan risk.' },
            { emoji: '🔓', title: 'Ingen bindningstid', desc: 'Avsluta med ett klick, när du vill.' },
            { emoji: '🇸🇪', title: 'Svenska servrar', desc: 'Din data stannar i Sverige. GDPR-compliant.' },
          ].map(({ emoji, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-[#c9a84c]/30 transition-colors"
            >
              <span className="text-3xl mb-3">{emoji}</span>
              <p className="text-white font-semibold mb-1">{title}</p>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10">
            Vad användarna säger
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, role, initials }) => (
              <div
                key={name}
                className="bg-[#141414] border border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-[#c9a84c]/20 transition-colors"
              >
                {/* Stjärnor */}
                <div className="flex gap-1 text-[#c9a84c]">
                  {Array(5).fill(null).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{`"`}{quote}{`"`}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] text-sm font-bold flex items-center justify-center shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{name}</p>
                    <p className="text-gray-600 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 text-xs mt-8">
            * Placeholders — ersätts med riktiga kundröster
          </p>
        </div>

      </div>
    </section>
  )
}
