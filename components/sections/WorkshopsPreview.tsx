"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import type { Workshop } from "@/types";

interface WorkshopsPreviewProps {
    workshops: Workshop[];
}

export function WorkshopsPreview({ workshops }: WorkshopsPreviewProps) {
    const images = [
        "/lemuria-assets/services/sound-bowls.jpg",
        "/lemuria-assets/services/singing-bowls.jpg",
        "/lemuria-assets/services/healing.jpg",
        "/lemuria-assets/services/gong.png",
        "/lemuria-assets/services/healing-session.jpg"
    ];

    return (
        <section id="workshops" className="relative overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-brand-teal/10 pb-6 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-brand-gold"></div>
                            <span className="text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase">Calendar</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text">
                            Available <span className="italic font-light text-brand-teal">Sessions</span>
                        </h2>
                    </div>
                </div>

                {workshops.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {workshops.map((workshop, i) => {
                            const eventDate = new Date(workshop.date);
                            const isSoldOut = workshop.capacity === 0;

                            return (
                                <motion.div 
                                    key={workshop.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-brand-teal/5 shadow-sm hover:shadow-[0_20px_40px_rgba(45,90,71,0.06)] transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {/* GRID IMAGE BLOCK */}
                                    <div className="relative w-full aspect-[4/3] bg-brand-bg overflow-hidden">
                                        <Image
                                            src={images[i % images.length]}
                                            alt={workshop.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 via-transparent to-black/20 mix-blend-multiply"></div>

                                        {/* Tag */}
                                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-teal rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                                                {workshop.location?.includes('Online') ? 'Virtual' : 'Sanctuary'}
                                            </span>
                                            {isSoldOut && (
                                                <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm flex items-center gap-1">
                                                    Sold Out
                                                </span>
                                            )}
                                        </div>

                                        {/* Date Tag Over Image overlaying the bottom right */}
                                        <div className="absolute bottom-[-16px] right-6 bg-brand-gold text-white rounded-[16px] flex flex-col items-center justify-center min-w-[60px] p-2 shadow-premium border-2 border-white z-20 group-hover:bg-brand-teal transition-colors">
                                            <span className="font-serif text-2xl leading-none font-bold">
                                                {eventDate.getDate()}
                                            </span>
                                            <span className="text-[9px] uppercase tracking-widest font-bold">
                                                {eventDate.toLocaleString('default', { month: 'short' })}
                                            </span>
                                        </div>
                                    </div>

                                    {/* GRID CONTENT BLOCK */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="font-serif text-2xl text-brand-text mb-3 leading-tight group-hover:text-brand-teal transition-colors pr-10">
                                            {workshop.title}
                                        </h3>
                                        
                                        <p className="text-brand-text/60 text-sm leading-relaxed font-light line-clamp-2 mb-6 min-h-[40px]">
                                            {workshop.description}
                                        </p>

                                        {/* Micro Data */}
                                        <div className="flex flex-col gap-3 py-5 border-y border-brand-teal/5 mt-auto mb-6">
                                            <div className="flex items-center gap-3 text-xs text-brand-text/70 font-light">
                                                <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
                                                <span className="truncate">{eventDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-brand-text/70 font-light">
                                                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                                                <span className="truncate" title={workshop.location || 'Sanctuary'}>
                                                    {workshop.location || 'Sanctuary'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center justify-between">
                                            <div className="font-serif text-lg text-brand-text font-medium">
                                                ${workshop.price}
                                            </div>

                                            {!isSoldOut ? (
                                                <Link 
                                                    href={`/book?workshop=${workshop.id}`} 
                                                    className="flex items-center gap-2 text-[10px] font-bold text-brand-teal tracking-[0.2em] uppercase hover:text-brand-gold transition-colors"
                                                >
                                                    Select
                                                    <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:translate-x-1 transition-all">
                                                        <ArrowRight className="w-3 h-3" />
                                                    </div>
                                                </Link>
                                            ) : (
                                                <Link 
                                                    href="/contact" 
                                                    className="text-[10px] font-bold text-brand-text/40 tracking-[0.2em] uppercase underline hover:text-brand-text transition-colors"
                                                >
                                                    Waitlist
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-16 px-6 bg-white rounded-[24px] border border-brand-teal/5 flex justify-center w-full shadow-[0_8px_30px_rgba(45,90,71,0.04)]">
                        <div className="max-w-lg">
                            <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-serif text-brand-text mb-3">No Upcoming Immersions</h3>
                            <p className="text-brand-text/50 font-light text-sm mb-6">
                                Jenny is currently aligning the next series of intensive sound retreats and ceremonial workshops. 
                            </p>
                            <Link href="/contact" className="text-xs font-bold text-brand-teal tracking-widest uppercase border-b border-brand-teal pb-1 hover:text-brand-gold transition-colors">
                                Receive Invitations
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
