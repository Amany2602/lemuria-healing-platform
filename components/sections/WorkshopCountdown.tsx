/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react/no-unescaped-entities, @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { format } from "date-fns";

interface WorkshopCountdownProps {
  workshop?: any;
}

export function WorkshopCountdown({ workshop }: WorkshopCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!workshop?.date) return;
    
    const target = new Date(workshop.date);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [workshop?.date]);

  if (!workshop) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-brand-teal text-white">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/lemuria-assets/workshops/sound-healing-group.jpg" 
          alt="Workshop Background" 
          fill
          sizes="100vw"
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-teal/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Limited Availability</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
                Next {workshop.title.split(' ')[0]} <br />
                <span className="text-brand-gold italic font-light font-sans">{workshop.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-white/70 text-xl font-light leading-relaxed mb-12 max-w-xl italic">
                {workshop.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-brand-gold">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Date</span>
                  </div>
                  <p className="text-xl font-serif">{format(new Date(workshop.date), 'MMMM d, yyyy')}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-brand-gold">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-xl font-serif">{workshop.location}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-brand-gold">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Available</span>
                  </div>
                  <p className="text-xl font-serif">Only {workshop.total_slots} Seats Left</p>
                </div>
              </div>

              <Link 
                href="/workshops" 
                className="inline-flex items-center gap-6 px-10 py-4 bg-brand-gold text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium hover:shadow-premiumHover transition-all hover:scale-105 active:scale-95 group"
              >
                Reserve Your Spot
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="glass-card bg-brand-teal/60 border-white/10 p-10 rounded-[40px] w-full max-w-[460px] text-center backdrop-blur-3xl shadow-2xl">
              <p className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-10">Portal Opens In</p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-5xl md:text-6xl font-serif font-medium text-brand-gold mb-2 tabular-nums">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] items-center font-bold text-white uppercase tracking-[0.2em]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 w-full h-[1px] bg-white/20 relative">
                  <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-brand-gold -translate-y-1/2"></div>
              </div>
              <p className="mt-6 text-xs text-white italic font-light">"The frequency of change is upon us."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
