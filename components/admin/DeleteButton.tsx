"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  id: string;
  action: (id: string) => Promise<{ success: boolean; error?: string }>;
  label?: string;
}

export function DeleteButton({ id, action, label = "Remove" }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure you want to remove this from the field?")) return;
    
    setLoading(true);
    const result = await action(id);
    setLoading(false);
    
    if (!result.success) {
      alert(result.error || "The removal was interrupted.");
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={loading}
      className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] hover:text-red-600 transition-colors disabled:opacity-50 flex items-center gap-2"
    >
      {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : null}
      {label}
    </button>
  );
}
