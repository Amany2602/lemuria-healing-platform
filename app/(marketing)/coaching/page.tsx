import React from 'react';
import { Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import { CallToAction } from '@/components/sections/CallToAction';

export const metadata = {
  title: "Coaching & Mentoring | Lemuria Healing",
  description: "Unlock your extraordinary potential with personal coaching and mentoring sessions designed for profound transformation.",
};

export default function CoachingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pb-32">
      {/* Luxury Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-teal">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-screen" 
             style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
        
        <div className="container relative z-10 px-6 mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-md text-brand-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">The Journey Within</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-10 drop-shadow-premium">
            Growth & <br /> <span className="text-brand-gold italic font-light">Transformation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-white/70 font-light leading-relaxed mb-6 italic">
            &ldquo;At Lemuria, we believe that with the right guidance and support, you can unlock extraordinary potential.&rdquo;
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-serif text-brand-text leading-[1.1]">Personal <span className="text-brand-teal italic font-light">Coaching</span> <br/><span className="text-brand-gold">& Mentoring</span></h2>
              <p className="text-xl text-brand-text/60 leading-relaxed font-light">
                Whether you&apos;re seeking clarity in your personal goals, growth in your career, or strategies to elevate your life, our coaching and mentoring services are designed to help you achieve profound transformation.
              </p>
              
              <div className="flex flex-col gap-8 md:gap-12 mt-12 bg-brand-bg/50 p-10 rounded-[40px] border border-brand-teal/5 shadow-inner">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-[20px] bg-white shadow-premium flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl tracking-tight text-brand-text mb-2">Soul Goals</h4>
                    <p className="text-brand-text/60 font-light text-sm leading-relaxed">Identify your soul&apos;s true goals and dreams.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-[20px] bg-white shadow-premium flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl tracking-tight text-brand-text mb-2">Resilience Building</h4>
                    <p className="text-brand-text/60 font-light text-sm leading-relaxed">Overcome challenges and build deep resilience.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-[20px] bg-white shadow-premium flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl tracking-tight text-brand-text mb-2">Value Alignment</h4>
                    <p className="text-brand-text/60 font-light text-sm leading-relaxed">Align with your core values and unlock potential.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16 lg:p-20 bg-brand-bg rounded-t-full rounded-b-[40px] border border-brand-teal/5 shadow-[0_20px_60px_rgba(45,90,71,0.08)] relative overflow-hidden text-center group">
              <div className="absolute inset-2 border border-brand-gold/10 rounded-t-full rounded-b-[32px] pointer-events-none group-hover:border-brand-gold/30 transition-colors duration-1000"></div>
              
              <h3 className="text-4xl font-serif text-brand-text mb-10 italic mt-8">Supported by <br/> Excellence</h3>
              <p className="text-brand-text/60 font-light leading-relaxed mb-12 text-lg">
                With a trusted, understanding mentor by your side, equipped with an abundance of modalities, solid qualifications, and years of master-level experience, you can be confident that your journey will reach its divine target.
              </p>
              <div className="pt-10 border-t border-brand-teal/10">
                <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-gold mb-6 mt-4">Ready to Align?</p>
                <a href="/contact" className="inline-flex items-center justify-center w-full px-8 py-5 bg-brand-teal text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-text transition-colors shadow-premium hover:shadow-premiumHover">Start Your Transformation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 10. Call to Action */}
      <CallToAction />
    </div>
  );
}
