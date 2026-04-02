"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { usePathname } from "next/navigation";

interface ServicesPreviewProps {
  services: Service[];
}

const serviceImages = [
  "/lemuria-assets/services/sound-bowls.jpg",
  "/lemuria-assets/services/gong.png",
  "/lemuria-assets/services/singing-bowls.jpg",
  "/lemuria-assets/services/healing.jpg",
  "/lemuria-assets/services/healing-session.jpg",
];

export function ServicesPreview({ services }: ServicesPreviewProps) {
    const pathname = usePathname();
    const isServicesPage = pathname === '/services';

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Ambient Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {!isServicesPage && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
                            <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase">Vibrational Alchemy</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl font-medium text-brand-text mb-8 tracking-tight">
                            Sacred <span className="text-brand-teal italic font-light">Modalities</span>
                        </h2>
                        <p className="text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-light text-lg italic">
                            Select your portal to harmony. Each modality is a unique frequency designed to align your energetic field.
                        </p>
                    </motion.div>
                )}
 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.length === 0 ? (
                        <div className="col-span-full text-center py-20 bg-brand-bg/50 rounded-[40px] border border-brand-teal/5">
                            <p className="text-brand-text/40 font-light text-xl italic tracking-wide">Our sacred offerings are currently being refined.</p>
                        </div>
                    ) : (
                        (isServicesPage ? services : services.slice(0, 6)).map((service, index) => (
                            <motion.div
                                key={service.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.19, 1, 0.22, 1] }}
                                className="group relative h-[420px] rounded-[40px] overflow-hidden cursor-pointer shadow-premium border border-brand-teal/5"
                            >
                                {/* Background Image with Expansion Effect */}
                                <div className="absolute inset-0 z-0">
                                    <Image 
                                        src={serviceImages[index % serviceImages.length]} 
                                        alt={service.title || 'Service Image'}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                                        className="object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-brand-text/40 group-hover:bg-brand-text/20 transition-all duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 via-brand-text/20 to-transparent"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-8 z-10 flex flex-col justify-end h-full">
                                    <div className="overflow-hidden">
                                        <motion.div 
                                            className="transition-all duration-700 group-hover:translate-y-[-10px]"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <Badge className="bg-brand-gold text-white border-none py-1 px-4 rounded-full text-[10px] uppercase font-bold tracking-widest">
                                                    60 MINS
                                                </Badge>
                                                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">${service.price}</span>
                                            </div>
                                            <h3 className="font-serif text-2xl text-white mb-6 leading-tight">
                                                {(service as Record<string, unknown>).title as string || (service as Record<string, unknown>).name as string}
                                            </h3>
                                        </motion.div>
                                    </div>

                                    {/* Slide-in Description */}
                                    <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                        <p className="text-white/70 text-sm font-light leading-relaxed mb-8 line-clamp-3 italic">
                                            {service.description}
                                        </p>
                                        <Link 
                                            href={`/book?service=${service.id}`}
                                            className="inline-flex items-center gap-4 text-brand-gold font-bold text-xs tracking-widest uppercase group/link"
                                        >
                                            Book Session 
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Glowing Border on Hover */}
                                <div className="absolute inset-0 border-2 border-brand-teal/0 group-hover:border-brand-teal/40 transition-all duration-700 rounded-[40px] z-20 pointer-events-none shadow-glow-gold opacity-0 group-hover:opacity-100"></div>
                            </motion.div>
                        ))
                    )}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    {isServicesPage ? (
                        <Link href="/book" className="inline-flex items-center gap-6 text-brand-teal font-bold text-sm tracking-[0.3em] uppercase group">
                            Book Your Sanctuary Session
                            <div className="w-12 h-[1px] bg-brand-teal/30 group-hover:w-24 transition-all duration-700"></div>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    ) : (
                        <Link href="/services" className="inline-flex items-center gap-6 text-brand-teal font-bold text-sm tracking-[0.3em] uppercase group">
                            Explore All Sacred Offerings
                            <div className="w-12 h-[1px] bg-brand-teal/30 group-hover:w-24 transition-all duration-700"></div>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
