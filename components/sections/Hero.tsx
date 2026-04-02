"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FAF9F6] pt-24">
            {/* Immersive Background: Moving Gradient */}
            <div className="absolute inset-0 z-0 animate-gradient-slow opacity-60 bg-gradient-to-br from-brand-beige via-white to-brand-teal/20"></div>
            
            {/* Floating Particles (Energy Effect) - Rendered only on client to avoid hydration mismatch with Math.random() */}
            {mounted && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div 
                            key={i}
                            className="particle bg-brand-teal/10"
                            style={{
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 8 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                animationDelay: `${Math.random() * 15}s`,
                                animationDuration: `${10 + Math.random() * 10}s`
                            }}
                        ></div>
                    ))}
                </div>
            )}



            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="text-left order-2 lg:order-1">

                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-brand-teal font-serif text-xl md:text-2xl italic font-light mb-4">Sound Therapy | Kinesiology | Intuitive Healing</h2>
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-brand-text mb-8 leading-[1.05] tracking-tight">
                                Live the Life <br />
                                <span className="text-brand-teal italic font-light">You Want</span>
                            </h1>
                        </motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="max-w-xl text-lg md:text-xl text-brand-text/60 mb-12 leading-relaxed font-light italic"
                        >
                            Reconnect with your natural frequency and restore harmony to your mind, body, and spirit.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <Link 
                                href="/book" 
                                className="group w-full sm:w-auto px-10 py-5 bg-brand-teal text-white rounded-full font-bold text-[11px] tracking-[0.2em] uppercase shadow-premium hover:shadow-premiumHover transition-smooth hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4"
                            >
                                Book a Session
                            </Link>
                            <Link 
                                href="#services" 
                                className="group w-full sm:w-auto px-10 py-5 bg-white/50 backdrop-blur-md text-brand-teal rounded-full font-bold text-[11px] tracking-[0.2em] uppercase border border-brand-teal/10 hover:bg-brand-teal transition-smooth flex items-center justify-center gap-4 hover:text-white"
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        {/* Hero Image with Slow Zoom & Arched Premium Frame */}
                        <div className="relative z-10 w-full max-w-[380px] mx-auto h-[500px] rounded-t-full rounded-b-[40px] overflow-hidden shadow-[0_20px_60px_rgba(45,90,71,0.15)] group border-4 border-white">
                            <Image 
                                src="/lemuria-assets/hero/jenny-hero.jpg" 
                                alt="Jenny Gillson - Master Vibrational Therapist" 
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 380px"
                                className="object-cover grayscale-[0.05] animate-slow-zoom transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-105"
                            />
                            {/* Inner Gold Ring highlight */}
                            <div className="absolute inset-0 rounded-t-full rounded-b-[36px] border border-brand-gold/20 pointer-events-none"></div>
                        </div>

                        {/* Professional Elite Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute top-12 -left-8 bg-white/95 backdrop-blur-md px-6 py-4 shadow-[0_10px_40px_rgba(235,190,128,0.2)] rounded-full z-20 hidden lg:flex items-center gap-4 border border-brand-gold/20"
                        >
                            <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                                <span className="text-brand-gold text-sm">✨</span>
                            </div>
                            <div>
                                <p className="font-serif text-brand-text font-bold text-sm leading-none mb-1">Master Practitioner</p>
                                <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-brand-text/50">Certified Therapy</p>
                            </div>
                        </motion.div>



                        {/* Location Badge */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute bottom-12 -right-8 bg-white/90 p-6 shadow-premium rounded-[30px] z-20 hidden lg:block border border-brand-gold/20"
                        >
                            <div className="text-center">
                                <p className="font-serif text-3xl font-bold text-brand-teal mb-1">Mount Martha</p>
                                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gold">Healing Sanctuary</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
            >
                <span className="text-[10px] font-bold text-brand-text/30 tracking-[0.4em] uppercase">Begin Journey</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"></div>
            </motion.div>
        </section>
    );
}
