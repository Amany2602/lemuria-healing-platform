import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';


export const metadata = {
  title: "Connect | Lemuria Healing",
  description: "Reach out to schedule private immersive events, corporate wellness programs, or general inquiries.",
};

export default function ContactPage() {
    return (
        <section id="contact" className="pt-48 pb-32 bg-brand-bg relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
                 style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>

            {/* Ambient Atmosphere */}
            <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-24">
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-brand-gold/70"></div>
                        <span className="text-[11px] font-bold text-brand-gold tracking-[0.5em] uppercase font-sans">Human Connection</span>
                    </div>
                    <h2 className="font-serif text-6xl md:text-8xl text-brand-text mb-10 leading-[1.05] tracking-tight">
                        Begin Your <br /><span className="text-brand-teal italic font-light">Resonance</span>
                    </h2>
                    <p className="text-brand-text/50 max-w-2xl text-xl font-light leading-relaxed italic border-l-2 border-brand-teal/10 pl-8">
                        &ldquo;Reach out to schedule private immersive events, corporate wellness programs, or to ask questions about our sacred vibrational modalities.&rdquo;
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Contact Info Panel (Left 4 cols) */}
                    <div className="lg:col-span-4 space-y-16">
                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/10 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-700">
                                        <Mail className="w-4 h-4 text-brand-gold" />
                                    </div>
                                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Direct Resonance</p>
                                </div>
                                <p className="text-2xl font-serif text-brand-text group-hover:text-brand-teal transition-colors duration-500">resonance@lemuriahealing.com.au</p>
                            </div>
                            
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/10 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-700">
                                        <Phone className="w-4 h-4 text-brand-gold" />
                                    </div>
                                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Verbal Frequency</p>
                                </div>
                                <p className="text-2xl font-serif text-brand-text group-hover:text-brand-teal transition-colors duration-500">0435 720 595</p>
                            </div>
                            
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/10 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-700">
                                        <MapPin className="w-4 h-4 text-brand-gold" />
                                    </div>
                                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Sacred Sanctuary</p>
                                </div>
                                <p className="text-2xl font-serif text-brand-text group-hover:text-brand-teal transition-colors duration-500 leading-relaxed italic truncate">Mount Martha, Victoria</p>
                                <p className="text-sm text-brand-text/30 font-light mt-1">Mornington Peninsula, Australia</p>
                            </div>
                        </div>
                        
                        <div className="pt-12 border-t border-brand-teal/5">
                            <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em] mb-8">Digital Vibrations</p>
                            <div className="flex items-center gap-10">
                                <Link href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text/40 hover:text-brand-teal transition-all">Instagram</Link>
                                <Link href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text/40 hover:text-brand-teal transition-all">Facebook</Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right 8 cols) */}
                    <div className="lg:col-span-8 bg-white rounded-[60px] p-12 md:p-20 shadow-premium border border-brand-teal/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="mb-16 relative z-10">
                            <h3 className="font-serif text-4xl text-brand-text mb-4">Send an <span className="text-brand-teal italic font-light">Inquiry</span></h3>
                            <p className="text-brand-text/30 font-light text-sm max-w-md italic leading-relaxed">Leave a message for Jenny and our circle will respond once the vibrations align with your intent.</p>
                        </div>
                        
                        <div className="relative z-10">
                            <ContactForm />
                        </div>

                        <div className="mt-16 pt-10 border-t border-brand-teal/5 text-center relative z-10">
                           <p className="text-[10px] text-brand-text/20 font-bold uppercase tracking-[0.4em]">Response time: typically within 24 lunar hours</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
