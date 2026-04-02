"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import { subscribeToNewsletter } from "@/actions/newsletter/subscribe";

export function NewsletterForm({ variant = "default" }: { variant?: "default" | "footer" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setStatus({ type: 'success', message: result.message || 'Subscribed' });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: 'error', message: result.error || 'Failed' });
    }
    setIsSubmitting(false);
  };

  if (variant === "footer") {
    return (
      <div className="space-y-4">
        <form className="flex bg-white/5 rounded-full p-1 border border-white/10 group focus-within:border-brand-gold/30 transition-all" onSubmit={handleSubmit}>
          <input 
            name="email"
            type="email" 
            placeholder="Sacred Email" 
            aria-label="Email address for newsletter"
            required
            disabled={isSubmitting}
            className="bg-transparent flex-1 px-5 py-3 text-sm text-white placeholder-white/20 outline-none" 
          />
          <button 
            type="submit"
            disabled={isSubmitting}
            aria-label="Subscribe to newsletter"
            className="w-11 h-11 rounded-full text-brand-text transition-all bg-brand-gold hover:bg-white flex items-center justify-center shrink-0 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </form>
        {status && (
          <p className={`text-[10px] uppercase tracking-widest px-4 ${status.type === 'success' ? 'text-brand-gold' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="your@resonance.com"
          type="email"
          aria-label="Email address for newsletter"
          required
          disabled={isSubmitting}
          className="h-14 rounded-full border-brand-teal/10 bg-white px-6 focus:ring-2 focus:ring-brand-teal/20 font-light text-brand-text"
        />
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="h-14 rounded-full bg-brand-teal hover:bg-brand-text text-white px-8 shadow-premium transition-all font-bold text-xs tracking-widest uppercase min-w-[140px]"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Circle"}
        </Button>
      </form>
      {status && (
        <motion.p 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-medium italic ${status.type === 'success' ? 'text-brand-teal' : 'text-red-500'}`}
        >
          {status.message}
        </motion.p>
      )}
    </div>
  );
}
