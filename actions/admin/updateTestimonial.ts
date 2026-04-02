"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function updateTestimonial(id: string, formData: FormData) {
  const supabase = createAdminClient();
  
  const name = formData.get("name") as string;
  const testimonial = formData.get("testimonial") as string;
  const rating = parseInt(formData.get("rating") as string);
  const status = formData.get("status") as string;

  const { error } = await supabase
    .from("testimonials")
    .update({ name, testimonial, rating, status })
    .eq("id", id);

  if (error) {
    console.error("Error updating testimonial:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  
  return { success: true };
}
