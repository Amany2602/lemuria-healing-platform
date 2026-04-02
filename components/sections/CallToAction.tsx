"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center bg-brand-teal">
            {/* Background texture layered with a dark brand color */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen" 
                 style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
            
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-12 h-[1px] bg-brand-gold/80"></div>
                        <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase">Begin Your Journey</span>
                        <div className="w-12 h-[1px] bg-brand-gold/80"></div>
                    </div>
                
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-[1.1]">
                        Ready to Return to <br />
                        <span className="text-brand-gold italic font-light">Your Natural Frequency?</span>
                    </h2>
                    
                    <p className="text-white/70 max-w-2xl mx-auto text-xl font-light leading-relaxed mb-12 italic">
                        Experience profound clarity, emotional release, and physical restoration. Step into the sanctuary and let the healing begin.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            href="/book" 
                            className="group px-12 py-5 bg-brand-gold text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(235,190,128,0.3)] hover:shadow-[0_0_60px_rgba(235,190,128,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-4"
                        >
                            Reserve Your Session
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                        <Link 
                            href="/contact" 
                            className="group px-12 py-5 bg-transparent text-white border border-white/20 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            Ask a Question
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
