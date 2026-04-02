"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function createService(formData: FormData) {
  const supabase = createAdminClient();
  
  const title = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);

  const { error } = await supabase
    .from("services")
    .insert([
      { title, description, price }
    ]);

  if (error) {
    console.error("Error creating service:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  
  return { success: true };
}
