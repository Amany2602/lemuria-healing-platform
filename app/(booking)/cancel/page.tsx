import React from 'react';
import Link from 'next/link';
import { Home, Calendar, XCircle, Sparkles } from 'lucide-react';

export const metadata = {
  title: "Vibration Released | Lemuria Healing",
  description: "Sometimes the flow takes a different path. We are here when you are ready.",
};

export default function CancelPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg items-center justify-center pt-48 pb-32 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>

      {/* Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="w-32 h-32 bg-white rounded-[40px] flex items-center justify-center mx-auto mb-12 shadow-premium border border-red-100/50 group hover:scale-110 transition-transform duration-700">
          <XCircle className="w-16 h-16 text-red-400" />
        </div>
        
        <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-red-50 border border-red-100/50">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-[10px] font-bold text-red-400 tracking-[0.4em] uppercase">Energy Released</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-brand-text mb-8 tracking-tight leading-[1.1]">
          Resonance <br /><span className="text-red-400 italic font-light">Redirected</span>
        </h1>
        
        <p className="text-xl text-brand-text/50 font-light leading-relaxed mb-16 italic max-w-xl mx-auto border-l-2 border-red-100/50 pl-8">
          &ldquo;Sometimes the timing isn&apos;t right, and that is part of the sacred flow. We hold space for you to return whenever your resonance aligns with our circle.&rdquo;
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/" 
            className="px-12 py-5 bg-brand-teal text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium hover:shadow-premiumHover transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <Home className="w-4 h-4" />
            Return to Sanctuary
          </Link>
          <Link 
            href="/services" 
            className="px-12 py-5 bg-white text-brand-text border border-brand-teal/10 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-teal/5 transition-all flex items-center justify-center gap-3"
          >
            <Calendar className="w-4 h-4" />
            Book Another Session
          </Link>
        </div>

        <p className="mt-24 text-[10px] font-bold text-brand-text/20 uppercase tracking-[0.4em]">
          Pure Resonance • Sacred Space • Lemuria Healing
        </p>
      </div>
    </div>
  );
}
