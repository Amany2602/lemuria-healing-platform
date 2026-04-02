"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Newsletter() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Texture & Ambient Light */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
            <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase">The Inner Circle</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-medium text-brand-text mb-10 tracking-tight leading-tight">
            Stay Attuned to <br />
            <span className="text-brand-teal italic font-light">Our Frequency</span>
          </h2>
          
          <p className="text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-light text-lg italic mb-12">
            Join the collective to receive celestial updates, sacred moon cycle rituals, and priority access to our luxury healing retreats.
          </p>

          <div className="p-2 bg-white/50 backdrop-blur-md rounded-[30px] border border-white max-w-xl mx-auto shadow-premium">
            <div className="bg-white rounded-[26px] p-8 shadow-sm border border-brand-teal/5">
                <NewsletterForm />
                <p className="mt-8 text-[10px] text-brand-text/30 uppercase tracking-[0.2em] font-bold">
                  Pure resonance only. Your sanctuary is honored.
                </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Icon */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-100px] right-[-100px] text-brand-teal/5 select-none pointer-events-none"
      >
        <Sparkles size={400} />
      </motion.div>
    </section>
  );
}

