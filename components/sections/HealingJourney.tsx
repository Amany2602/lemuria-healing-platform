"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose Your Modality",
    description: "Explore our sacred offerings and select the frequency that resonates with your current needs.",
    icon: Sparkles,
  },
  {
    id: "02",
    title: "Book Your Session",
    description: "Schedule your vibrational alignment through our seamless online sanctuary portal.",
    icon: Calendar,
  },
  {
    id: "03",
    title: "Experience Alignment",
    description: "Enter the healing field and let the alchemy of sound and energy restore your harmony.",
    icon: Zap,
  },
  {
    id: "04",
    title: "Integrate & Transform",
    description: "Emerge renewed. Allow the shifts to settle as you step into your natural state of being.",
    icon: RefreshCw,
  },
];

export function HealingJourney() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-teal/5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">The Path to Resonance</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-8 tracking-tight">
            Your Healing <span className="text-brand-teal italic font-light">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold/30 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-teal/5 hidden lg:block z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative z-10 group"
            >
              <div className="bg-white rounded-t-full rounded-b-[40px] pt-16 pb-12 px-6 shadow-[0_10px_40px_rgba(45,90,71,0.04)] border border-brand-teal/5 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(45,90,71,0.1)] hover:border-brand-gold/20 transition-all duration-700 text-center flex flex-col items-center relative overflow-hidden group">
                {/* Decorative Inner Ring */}
                <div className="absolute inset-2 rounded-t-full rounded-b-[32px] border border-brand-gold/0 group-hover:border-brand-gold/10 transition-colors duration-700 pointer-events-none"></div>

                <div className="w-20 h-20 rounded-full bg-brand-bg flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-brand-teal/5 transition-all duration-700 relative z-10">
                  <step.icon className="w-8 h-8 text-brand-teal group-hover:text-brand-gold transition-colors duration-700" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif text-xs font-bold shadow-md">
                    {step.id}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl text-brand-text mb-4 transition-colors group-hover:text-brand-teal relative z-10">
                  {step.title}
                </h3>
                <p className="text-brand-text/60 text-sm font-light leading-relaxed italic relative z-10 px-4">
                  {step.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
