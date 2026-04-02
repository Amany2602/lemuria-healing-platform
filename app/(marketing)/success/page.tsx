import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Vibration Transmitted | Lemuria Healing",
  description: "Your session or inquiry has been successfully received by our sacred circle.",
};

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg items-center justify-center py-20 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <div className="w-32 h-32 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-12 shadow-premium animate-in zoom-in duration-1000">
          <CheckCircle2 className="w-16 h-16 text-white" />
        </div>
        
        <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-brand-teal/5 border border-brand-teal/10">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="text-[10px] font-bold text-brand-teal tracking-[0.4em] uppercase">Energy Synchronized</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-brand-text mb-8 tracking-tight">
          Vibration <br /><span className="text-brand-teal italic font-light">Transmitted</span>
        </h1>
        
        <p className="text-xl text-brand-text/50 font-light leading-relaxed mb-16 italic">
          &ldquo;Thank you for reaching out to the Lemuria circle. Your intent has been received and the resonance is already beginning to shift.&rdquo;
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/" 
            className="px-12 py-5 bg-brand-teal text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium hover:shadow-premiumHover transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            Return to Sanctuary
          </Link>
          <Link 
            href="/services" 
            className="px-12 py-5 bg-white text-brand-text border border-brand-teal/10 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-teal/5 transition-all flex items-center justify-center gap-3"
          >
            Explore Modalities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
