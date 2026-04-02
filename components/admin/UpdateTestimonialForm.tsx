"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateTestimonial } from "@/actions/admin/updateTestimonial";
import { useRouter } from "next/navigation";

interface UpdateTestimonialFormProps {
  testimonial: {
    id: string;
    name: string;
    testimonial: string;
    rating: number;
    status: string;
  };
  onSuccess?: () => void;
}

export function UpdateTestimonialForm({ testimonial, onSuccess }: UpdateTestimonialFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await updateTestimonial(testimonial.id, formData);
    
    setLoading(false);
    if (result.success) {
      router.refresh();
      onSuccess?.();
    } else {
      alert(result.error || "Failed to update testimony");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Soul Name</Label>
          <Input id="name" name="name" defaultValue={testimonial.name} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-lg" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="testimonial" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Vibrational Testimony</Label>
          <textarea 
            id="testimonial" 
            name="testimonial" 
            defaultValue={testimonial.testimonial}
            required 
            rows={5}
            className="w-full rounded-3xl border border-brand-teal/10 bg-brand-bg/50 p-4 font-light italic text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rating" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Resonance Rating</Label>
            <Input id="rating" name="rating" type="number" min="1" max="5" defaultValue={testimonial.rating} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Integration Status</Label>
            <select 
              id="status" 
              name="status" 
              defaultValue={testimonial.status}
              className="w-full rounded-2xl border border-brand-teal/10 bg-brand-bg/50 h-14 px-4 font-light text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
            >
              <option value="pending">Pending Review</option>
              <option value="approved">Approved & Glowing</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all"
      >
        {loading ? "Harmonizing..." : "Update Testimony"}
      </Button>
    </form>
  );
}
