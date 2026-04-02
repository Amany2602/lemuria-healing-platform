"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function updateService(id: string, formData: FormData) {
  const supabase = createAdminClient();
  
  const title = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);

  const { error } = await supabase
    .from("services")
    .update({ title, description, price })
    .eq("id", id);

  if (error) {
    console.error("Error updating service:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  
  return { success: true };
}
