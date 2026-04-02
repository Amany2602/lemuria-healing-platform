import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer 
            className="relative overflow-hidden pt-24 pb-12"
            style={{ backgroundColor: '#253A27' }}
        >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
                 style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="block mb-12 group transition-all duration-500 w-[240px]">
                            <div className="relative w-full aspect-square overflow-hidden transition-all rounded-xl shadow-premium">
                                <Image 
                                    src="/lemuria-assets/logo/footer-logo.png" 
                                    alt="Lemuria Healing" 
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.05]" 
                                />
                            </div>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-8 font-light italic">
                            &ldquo;Restoring harmony through sacred vibrational therapy and the wisdom of kinesiology.&rdquo;
                        </p>
                        <div className="flex gap-10">
                            <a href="https://instagram.com/lemuriahealing" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://facebook.com/lemuriahealing" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">The Path</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="text-white/40 hover:text-white text-sm transition-colors font-light">Modalities</Link></li>
                            <li><Link href="/coaching" className="text-white/40 hover:text-white text-sm transition-colors font-light">Divine Coaching</Link></li>
                            <li><Link href="/sound-healing" className="text-white/40 hover:text-white text-sm transition-colors font-light">Sound Sanctuary</Link></li>
                            <li><Link href="/workshops" className="text-white/40 hover:text-white text-sm transition-colors font-light">Gatherings</Link></li>
                        </ul>
                    </div>

                    {/* Sanctuary */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Sanctuary</h4>
                        <ul className="space-y-4">
                            <li><Link href="/testimonials" className="text-white/40 hover:text-white text-sm transition-colors font-light">Soul Stories</Link></li>
                            <li><Link href="/contact" className="text-white/40 hover:text-white text-sm transition-colors font-light">Connect</Link></li>
                            <li><Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors font-light">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Vibration Circle</h4>
                        <p className="text-white/40 text-sm mb-6 leading-relaxed font-light">Join our circle for celestial updates and frequency insights.</p>
                        <NewsletterForm variant="footer" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 gap-6 pt-12 border-t border-white/5">
                    <p>© {currentYear} Lemuria Healing. All Rights Reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Designed for</span>
                        <span className="text-brand-gold">Jenny Gillson</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
