"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function deleteTestimonial(id: string) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting testimonial:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  
  return { success: true };
}
