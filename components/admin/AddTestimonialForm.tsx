"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTestimonial } from "@/actions/admin/createTestimonial";
import { useRouter } from "next/navigation";

export function AddTestimonialForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await createTestimonial(formData);
    
    setLoading(false);
    if (result.success) {
      router.refresh();
      onSuccess?.();
    } else {
      alert(result.error || "Failed to add testimonial");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Soul Name</Label>
          <Input id="name" name="name" required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-lg" placeholder="e.g. Sarah Mitchell" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="testimonial" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Vibrational Testimony</Label>
          <textarea 
            id="testimonial" 
            name="testimonial" 
            required 
            rows={5}
            className="w-full rounded-3xl border border-brand-teal/10 bg-brand-bg/50 p-4 font-light italic text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
            placeholder="Share the transformation..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Resonance Rating (1-5)</Label>
          <Input id="rating" name="rating" type="number" min="1" max="5" defaultValue="5" required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all"
      >
        {loading ? "Honoring..." : "Anchor Testimony"}
      </Button>
    </form>
  );
}
