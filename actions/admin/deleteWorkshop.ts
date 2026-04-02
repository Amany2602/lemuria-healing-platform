"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function deleteWorkshop(id: string) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("workshops")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting workshop:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/workshops");
  revalidatePath("/workshops");
  revalidatePath("/");
  
  return { success: true };
}
