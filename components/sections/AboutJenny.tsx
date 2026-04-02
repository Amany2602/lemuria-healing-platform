"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Award, Heart, ShieldCheck } from "lucide-react";

export function AboutJenny() {
    return (
        <section id="about-jenny" className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
                 style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Content Column */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full bg-brand-teal/5 border border-brand-teal/10">
                            <Sparkles className="w-4 h-4 text-brand-teal" />
                            <span className="text-[10px] font-bold text-brand-teal tracking-[0.3em] uppercase">The Practitioner</span>
                        </div>
                        
                        <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-text mb-8 leading-tight">
                            Meet Jenny <br />
                            <span className="text-brand-teal italic font-light">Gillson</span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-brand-text/70 font-light leading-relaxed mb-12">
                            <p>
                                With over 15 years of dedicated practice as a Sound Therapist, Kinesiologist, and Intuitive Healer, Jenny brings a unique synergy of science and spirituality to her sessions.
                            </p>
                            <p>
                                Her journey began with a deep calling to understand the body’s innate healing intelligence. Today, she facilitates profound transformations for clients across Australia using a curated blend of planetary harmonics, therapeutic oils, and gentle energetic touch.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <Award className="w-6 h-6 text-brand-gold shrink-0" />
                                <div>
                                    <h4 className="font-serif font-bold text-brand-text">Master Vibrationalist</h4>
                                    <p className="text-sm text-brand-text/50">Planetary frequency specialist</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Heart className="w-6 h-6 text-brand-gold shrink-0" />
                                <div>
                                    <h4 className="font-serif font-bold text-brand-text">Intuitive Healer</h4>
                                    <p className="text-sm text-brand-text/50">Personalised guidance loops</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
                                <div>
                                    <h4 className="font-serif font-bold text-brand-text">Certified Kinesiologist</h4>
                                    <p className="text-sm text-brand-text/50">Scientific muscle monitoring</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative z-10 rounded-full aspect-square overflow-hidden border-[12px] border-white shadow-premium max-w-[360px] mx-auto">
                            <Image 
                                src="/lemuria-assets/hero/jenny-hero.png" 
                                alt="Jenny Gillson portrait" 
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-gold/20 rounded-full aura-spin"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
