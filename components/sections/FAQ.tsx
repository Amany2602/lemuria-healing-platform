"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What happens during a sound healing session?",
    answer: "You will lay comfortably while various instruments like singing bowls, gongs, and chimes are played around you. The vibrations help recalibrate your nervous system and induce a state of deep meditation."
  },
  {
    question: "How long does it take to see results?",
    answer: "Many clients feel an immediate shift in their energy and stress levels after just one session. For long-standing blockages, a series of 3-5 sessions is often recommended for deep integration."
  },
  {
    question: "Is energy healing safe for everyone?",
    answer: "Energy healing is non-invasive and generally safe for everyone. However, if you have a pacemaker or are in your first trimester of pregnancy, please inform us beforehand so we can adjust the sound frequencies accordingly."
  },
  {
    question: "Do I need any previous experience?",
    answer: "No experience is necessary. All you need is an open mind and a willingness to receive. The frequencies do the work for you."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase mb-4 block">Seeking Clarity</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-8 tracking-tight">
            Sacred <span className="text-brand-teal italic font-light">Questions</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 rounded-[20px] bg-brand-bg border border-brand-teal/5 hover:border-brand-teal/20 transition-all flex items-center justify-between"
              >
                <span className="font-serif text-xl text-brand-text pr-8">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-brand-teal/10 flex-shrink-0">
                  {openIndex === i ? <Minus className="w-4 h-4 text-brand-teal" /> : <Plus className="w-4 h-4 text-brand-teal" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 bg-white border border-brand-teal/5 rounded-[20px] shadow-sm">
                  <p className="text-brand-text/60 font-light leading-relaxed italic line-clamp-none">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
