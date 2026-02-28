import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import TestimonialsCTA from './components/TestimonialsCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Problem />
      <HowItWorks />
      <TestimonialsCTA />
    </main>
  );
}
