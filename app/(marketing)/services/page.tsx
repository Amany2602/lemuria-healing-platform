import React from 'react';
import { getServices } from '@/actions/services/getServices';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { Sparkles } from 'lucide-react';
import { CallToAction } from '@/components/sections/CallToAction';

export const metadata = {
  title: "Services | Lemuria Healing",
  description: "Explore our premium holistic and sound healing modalities tailored to elevate your energetic frequency.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pb-32">
      {/* Luxury Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center bg-[#1A362B]">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-screen" 
             style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-md text-brand-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Sacred Modalities</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-8 drop-shadow-premium">
            Healing <span className="text-brand-gold italic font-light">Sanctuary</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-white/70 font-light leading-relaxed mb-10 italic text-center">
            &ldquo;Every session is meticulously crafted. We blend ancient Lemurian soundscapes with modern bio-resonance techniques to restore harmony to your being.&rdquo;
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="py-20">
        <ServicesPreview services={services} />
      </div>

      {/* Philosophy Section */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8 bg-white p-16 md:p-20 rounded-[50px] shadow-premium border border-brand-teal/5">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text italic mb-6">Return to Balance</h2>
            <p className="text-brand-text/50 font-light text-lg leading-relaxed max-w-2xl mx-auto">
              Choose the path that resonates with your current state. Whether you seek the gentle touch of Kinesiology or the deep vibration of Crystal Diamond Light, our space is held with sacred intent.
            </p>
            <div className="pt-10 flex flex-col md:flex-row justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold items-center border-t border-brand-teal/10 mt-10">
              <span className="flex items-center gap-2">✦ Mount Martha, VIC</span>
              <span className="flex items-center gap-2">✦ Private Sanctuary</span>
              <span className="flex items-center gap-2">✦ Master Practice</span>
            </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <CallToAction />
    </div>
  );
}
