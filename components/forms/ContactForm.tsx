'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { sendMessage } from '@/actions/contact/sendMessage';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Combine first and last name for the action
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    formData.append('name', `${firstName} ${lastName}`.trim());

    const result = await sendMessage(formData);

    if (result.success) {
      setStatus({ type: 'success', message: result.message || 'The vibration has been transmitted.' });
      form.reset();
    } else {
      setStatus({ type: 'error', message: result.error || 'The connection was interrupted.' });
    }
    setIsSubmitting(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label htmlFor="first-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">First Name</label>
          <Input 
            type="text" 
            id="first-name" 
            name="first-name"
            required
            disabled={isSubmitting}
            className="h-12 rounded-full border-brand-teal/10 bg-brand-bg px-6 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all outline-none text-brand-text font-light" 
            placeholder="Jane" 
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="last-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Last Name</label>
          <Input 
            type="text" 
            id="last-name" 
            name="last-name"
            required
            disabled={isSubmitting}
            className="h-12 rounded-full border-brand-teal/10 bg-brand-bg px-6 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all outline-none text-brand-text font-light" 
            placeholder="Doe" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Energy Source (Email)</label>
          <Input 
            type="email" 
            id="email" 
            name="email"
            required
            disabled={isSubmitting}
            className="h-12 rounded-full border-brand-teal/10 bg-brand-bg px-6 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all outline-none text-brand-text font-light" 
            placeholder="jane@resonance.com" 
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Phone Number</label>
          <Input 
            type="tel" 
            id="phone" 
            name="phone"
            disabled={isSubmitting}
            className="h-12 rounded-full border-brand-teal/10 bg-brand-bg px-6 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all outline-none text-brand-text font-light" 
            placeholder="0435 000 000" 
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Inquiry Path</label>
        <div className="relative">
          <select 
            id="subject" 
            name="subject"
            defaultValue="" 
            disabled={isSubmitting}
            className="w-full h-12 rounded-full border-brand-teal/10 bg-brand-bg px-6 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all outline-none appearance-none cursor-pointer text-brand-text font-light"
          >
            <option value="" disabled>Select a path...</option>
            <option value="private">Private Immersive Events</option>
            <option value="corporate">Corporate Wellness</option>
            <option value="press">Press & Media</option>
            <option value="other">General Resonance Inquiry</option>
          </select>
          <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Your Intent</label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          required
          disabled={isSubmitting}
          className="w-full rounded-[24px] border border-brand-teal/10 bg-brand-bg p-6 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all outline-none text-brand-text font-light resize-none" 
          placeholder="Share what brings you to us today..."
        ></textarea>
      </div>
      
      {status && (
        <div className={`p-6 rounded-[24px] text-sm font-light italic ${status.type === 'success' ? 'bg-brand-teal/5 text-brand-teal border border-brand-teal/10' : 'bg-red-50 text-red-700 border border-red-100'}`}>
          {status.message}
        </div>
      )}

      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 bg-brand-teal text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase shadow-premium hover:shadow-premiumHover transition-all hover:scale-[1.02] flex items-center justify-center gap-4 group"
        >
          {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Transmit Integration"}
        </button>
      </div>
    </form>
  );
}
