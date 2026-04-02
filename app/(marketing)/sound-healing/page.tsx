import React from 'react';
import { Music, Sparkles, Wind } from 'lucide-react';
import { CallToAction } from '@/components/sections/CallToAction';

export const metadata = {
  title: "Sound Healing | Lemuria Healing",
  description: "Experience cellular restoration through intuitive sound frequencies.",
};

export default function SoundHealingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pb-32">
      {/* Luxury Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-text">
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
             style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>
        
        <div className="container relative z-10 px-6 mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-md text-brand-gold">
                <Music className="w-4 h-4" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Sacred Immersion</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-10 drop-shadow-premium">
                Sound <span className="text-brand-gold italic font-light">Healing</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/70 font-light leading-relaxed mb-6 italic">
                &ldquo;Step into the frequency. A small and intimate immersion to return your field to its original grace.&rdquo;
            </p>
        </div>
      </section>

      {/* Wednesday Sessions */}
      <section className="py-32 relative bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-brand-gold/50"></div>
              <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase">The Wednesday Circle</span>
              <div className="w-12 h-[1px] bg-brand-gold/50"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-brand-text leading-[1.1]">A One-Hour <br/><span className="text-brand-teal italic">Group Immersion</span></h2>
            
            <div className="space-y-8 text-xl text-brand-text/60 leading-relaxed font-light max-w-3xl mx-auto">
              <p>
                At Lemuria, we run regular sound sessions every Wednesday evening at <span className="text-brand-teal font-medium">6:30pm</span>. 
                This is a small and intimate immersion with a maximum of 8 participants, ensuring a powerful and concentrated field of healing.
              </p>
              <p>
                Join us for high vibrations and leave feeling refreshed, centred, and completely balanced.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 max-w-4xl mx-auto">
              <div className="p-12 rounded-t-[100px] rounded-b-[40px] bg-brand-bg/50 border border-brand-teal/5 flex flex-col items-center shadow-inner hover:shadow-[0_20px_60px_rgba(45,90,71,0.08)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="font-serif text-2xl text-brand-text mb-4">High Frequency</h4>
                <p className="text-base text-brand-text/60 font-light leading-relaxed">Pure planetary harmonics and crystal resonance designed to shift cellular blocks.</p>
              </div>
              <div className="p-12 rounded-t-[100px] rounded-b-[40px] bg-brand-bg/50 border border-brand-teal/5 flex flex-col items-center shadow-inner hover:shadow-[0_20px_60px_rgba(45,90,71,0.08)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform">
                  <Wind className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="font-serif text-2xl text-brand-text mb-4">Intimate Field</h4>
                <p className="text-base text-brand-text/60 font-light leading-relaxed">Strictly limited to 8 participants to maintain a high-focus personal healing environment.</p>
              </div>
            </div>

            <div className="mt-20 p-16 md:p-20 bg-brand-teal rounded-[60px] text-white shadow-[0_20px_60px_rgba(45,90,71,0.2)] relative overflow-hidden group max-w-4xl mx-auto">
               <div className="absolute inset-0 opacity-[0.1] pointer-events-none group-hover:scale-105 transition-transform duration-[10s] mix-blend-screen" 
                    style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
               
               <h3 className="text-4xl md:text-5xl font-serif mb-8 relative z-10 italic drop-shadow-premium">Reserve Your Space</h3>
               <p className="text-white/80 mb-12 font-light relative z-10 leading-relaxed text-xl max-w-2xl mx-auto">
                 Sessions fill quickly due to the intimate capacity. Text or call to secure your place in the circle.
               </p>
               <a href="tel:0435720595" className="inline-flex items-center gap-4 bg-brand-gold text-white px-14 py-6 rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-brand-text transition-all shadow-[0_0_40px_rgba(235,190,128,0.3)] hover:shadow-[0_0_60px_rgba(235,190,128,0.5)] relative z-10 hover:-translate-y-1">
                 Call to Book: 0435 720 595
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <CallToAction />
    </div>
  );
}
