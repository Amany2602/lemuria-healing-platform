"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function updateWorkshop(id: string, formData: FormData) {
  const supabase = createAdminClient();
  
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;
  const price = parseFloat(formData.get("price") as string);
  const total_slots = parseInt(formData.get("slots") as string);

  const { error } = await supabase
    .from("workshops")
    .update({ title, description, date, location, price, total_slots })
    .eq("id", id);

  if (error) {
    console.error("Error updating workshop:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/workshops");
  revalidatePath("/workshops");
  revalidatePath("/");
  
  return { success: true };
}
