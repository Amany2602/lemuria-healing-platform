"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateService } from "@/actions/admin/updateService";
import { useRouter } from "next/navigation";

interface UpdateServiceFormProps {
  service: {
    id: string;
    name: string;
    description: string;
    price: number;
    duration_minutes: number;
  };
  onSuccess?: () => void;
}

export function UpdateServiceForm({ service, onSuccess }: UpdateServiceFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await updateService(service.id, formData);
    
    setLoading(false);
    if (result.success) {
      router.refresh();
      onSuccess?.();
    } else {
      alert(result.error || "Failed to update modality");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Modality Name</Label>
          <Input id="name" name="name" defaultValue={service.name} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-lg" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Divine Description</Label>
          <textarea 
            id="description" 
            name="description" 
            defaultValue={service.description}
            required 
            rows={4}
            className="w-full rounded-3xl border border-brand-teal/10 bg-brand-bg/50 p-4 font-light italic text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="price" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Energy Exchange ($)</Label>
            <Input id="price" name="price" type="number" step="0.01" defaultValue={service.price} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration" className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Duration (Mins)</Label>
            <Input id="duration" name="duration" type="number" defaultValue={service.duration_minutes} required className="rounded-2xl border-brand-teal/10 h-14 bg-brand-bg/50 font-serif text-xl" />
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all"
      >
        {loading ? "Realigning..." : "Update Resonance"}
      </Button>
    </form>
  );
}
