import React from 'react';
import { Testimonials } from '@/components/sections/Testimonials';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: "Testimonials | Lemuria Healing",
  description: "Read real stories of transformation and healing from our clients at Lemuria Healing sanctuary.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pb-32">
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-white/50 border border-brand-teal/10">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="text-[10px] font-bold text-brand-teal tracking-[0.4em] uppercase">Soul Stories</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-text tracking-tight leading-[1.1] mb-8 drop-shadow-premium">
            Resonance <span className="text-brand-gold italic font-light">Feedback</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-brand-text/70 font-light leading-relaxed mb-10 italic text-center">
            &ldquo;We measure our impact by the harmony we restore. Here are the journeys of those who have stepped into the frequency of healing.&rdquo;
          </p>
        </div>
      </section>

      <div className="py-20">
        <Testimonials />
      </div>
    </div>
  );
}
