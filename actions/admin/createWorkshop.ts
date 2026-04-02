"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function createWorkshop(formData: FormData) {
  const supabase = createAdminClient();
  
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const capacity = parseInt(formData.get("capacity") as string);
  const price = parseFloat(formData.get("price") as string);

  const { error } = await supabase
    .from("workshops")
    .insert([
      { title, description, date, capacity, price }
    ]);

  if (error) {
    console.error("Error creating workshop:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/workshops");
  revalidatePath("/workshops");
  revalidatePath("/");
  
  return { success: true };
}
