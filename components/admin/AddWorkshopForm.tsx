"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createWorkshop } from "@/actions/admin/createWorkshop";
import { useRouter } from "next/navigation";

export function AddWorkshopForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await createWorkshop(formData);
    
    setLoading(false);
    if (result.success) {
      router.refresh();
      onSuccess?.();
    } else {
      alert(result.error || "Failed to create workshop");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Workshop Title</Label>
          <Input id="title" name="title" required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-lg" placeholder="e.g. Full Moon Sound Ceremony" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Divine Intent</Label>
          <textarea 
            id="description" 
            name="description" 
            required 
            rows={3}
            className="w-full rounded-3xl border border-brand-teal/10 bg-brand-bg/50 p-4 font-light italic text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
            placeholder="What will the participants experience?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Gathering Date & Time</Label>
          <Input id="date" name="date" type="datetime-local" required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-lg" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="price" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Exchange ($)</Label>
            <Input id="price" name="price" type="number" step="0.01" required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" placeholder="88" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Available Seats</Label>
            <Input id="capacity" name="capacity" type="number" required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" placeholder="12" />
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all"
      >
        {loading ? "Aligning..." : "Manifest Gathering"}
      </Button>
    </form>
  );
}
