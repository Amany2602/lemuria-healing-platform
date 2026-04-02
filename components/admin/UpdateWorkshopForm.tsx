"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateWorkshop } from "@/actions/admin/updateWorkshop";
import { useRouter } from "next/navigation";

interface UpdateWorkshopFormProps {
  workshop: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    price: number;
    total_slots: number;
  };
  onSuccess?: () => void;
}

export function UpdateWorkshopForm({ workshop, onSuccess }: UpdateWorkshopFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await updateWorkshop(workshop.id, formData);
    
    setLoading(false);
    if (result.success) {
      router.refresh();
      onSuccess?.();
    } else {
      alert(result.error || "Failed to update gathering");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Gathering Title</Label>
          <Input id="title" name="title" defaultValue={workshop.title} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-lg" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Sacred Intent</Label>
          <textarea 
            id="description" 
            name="description" 
            defaultValue={workshop.description}
            required 
            rows={3}
            className="w-full rounded-3xl border border-brand-teal/10 bg-brand-bg/50 p-4 font-light italic text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Celestial Date</Label>
            <Input id="date" name="date" type="datetime-local" defaultValue={workshop.date ? new Date(workshop.date).toISOString().slice(0, 16) : ''} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Sanctuary Location</Label>
            <Input id="location" name="location" defaultValue={workshop.location} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Energy Exchange ($)</Label>
            <Input id="price" name="price" type="number" step="0.01" defaultValue={workshop.price} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slots" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Soul Capacity</Label>
            <Input id="slots" name="slots" type="number" defaultValue={workshop.total_slots} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" />
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all"
      >
        {loading ? "Re-manifesting..." : "Update Gathering"}
      </Button>
    </form>
  );
}
