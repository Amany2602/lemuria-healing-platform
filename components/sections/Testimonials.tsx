"use client";

import { motion } from "framer-motion";


const testimonials = [
  {
    name: "Sarah M.",
    before: "I was overwhelmed, exhausted and felt completely disconnected from my own body.",
    after: "After the Crystal Diamond Light session, I felt a profound sense of calm. The clarity I've gained is life-changing.",
    rating: 5,
    role: "Intuitive Client"
  },
  {
    name: "James R.",
    before: "Chronic stress had manifested as physical tension that no massage could release.",
    after: "The Group Sound Healing was like a internal reset button. My nervous system finally felt safe to let go.",
    rating: 5,
    role: "Wellness Seeker"
  },
  {
    name: "Elena P.",
    before: "I was stuck in a creative block and felt unable to move forward in my spiritual practice.",
    after: "Jenny's Angel Touch session opened portals of inspiration I didn't know existed. I feel vibrant again.",
    rating: 5,
    role: "Artist & Soul Trekker"
  }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-12 h-[1px] bg-brand-gold/50"></div>
                        <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase">The Resonance Circle</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl font-medium text-brand-text mb-8 tracking-tight">
                        Soul <span className="text-brand-teal italic font-light">Feedback</span>
                    </h2>
                    <p className="text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-light text-lg italic">
                        Real stories of transformation from those who have stepped into the frequency of healing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="bg-brand-bg rounded-[30px] p-8 shadow-premium border border-brand-teal/5 flex flex-col h-full relative group transition-all duration-500 hover:scale-[1.02]"
                        >
                            <div className="flex mb-6">
                                {[...Array(t.rating)].map((_, star) => (
                                    <span key={star} className="text-brand-gold text-lg">⭐</span>
                                ))}
                            </div>

                            <div className="space-y-6 flex-grow">
                                <div>
                                    <p className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] mb-4 opacity-50 italic">The Struggle:</p>
                                    <p className="text-brand-text/60 font-light italic leading-relaxed text-base">
                                        &ldquo;{t.before}&rdquo;
                                    </p>
                                </div>
                                
                                <div className="w-12 h-[1px] bg-brand-gold/20"></div>

                                <div>
                                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-4 opacity-70 italic">The Transformation:</p>
                                    <p className="font-serif text-lg text-brand-text leading-relaxed">
                                        &ldquo;{t.after}&rdquo;
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center font-serif text-xl font-bold text-brand-teal">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-brand-text leading-none mb-1">{t.name}</p>
                                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
