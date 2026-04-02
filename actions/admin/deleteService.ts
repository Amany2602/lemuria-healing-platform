"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function deleteService(id: string) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting service:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  
  return { success: true };
}
