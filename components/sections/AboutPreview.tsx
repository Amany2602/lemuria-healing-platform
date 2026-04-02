"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function AboutPreview() {
    return (
        <section id="philosophy" className="py-24 relative overflow-hidden bg-white">
            {/* Texture Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-premium z-10 max-w-[400px] mx-auto">
                            <Image
                                src="/lemuria-assets/services/singing-bowls.jpg"
                                alt="Celestial Singing Bowls in Lemuria Sanctuary"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 400px"
                                className="object-cover transition-transform duration-[15s] hover:rotate-1 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-teal/5 mix-blend-multiply"></div>
                        </div>
                        
                        {/* Gold Accent Ring */}
                        <div className="absolute -top-12 -left-12 w-40 h-40 border-2 border-brand-gold/20 rounded-full pulse-glow"></div>
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 border-2 border-brand-teal/10 rounded-full float-2"></div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
                            <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase">Sacred Ethos</span>
                        </div>
                        
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-brand-text mb-8 leading-[1.1]">
                            Harmonizing at <br />
                            <span className="text-brand-teal italic font-light">Your Divine Source</span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-brand-text/70 font-light leading-relaxed">
                            <p>
                                At Lemuria Healing, we understand that wellness is not the absence of sickness, but the presence of <span className="text-brand-text font-medium italic">coherent resonance</span>. Every cell in your body is a vibrating vessel of light.
                            </p>
                            <p>
                                When life’s stresses discordant your natural rhythm, we use the ancient alchemy of sound harmonics and modern kinesiology to recalibrate your field. We don’t just heal; we return you to your original state of grace.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex items-center gap-10">
                            <div>
                                <p className="font-serif text-4xl font-bold text-brand-teal leading-none">Vibes</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mt-2">Frequency First</p>
                            </div>
                            <div className="h-12 w-[1px] bg-neutral-200"></div>
                            <div>
                                <p className="font-serif text-4xl font-bold text-brand-teal leading-none">Pure</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mt-2">Lineage Work</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
