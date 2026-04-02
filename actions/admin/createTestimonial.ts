"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function createTestimonial(formData: FormData) {
  const supabase = createAdminClient();
  
  const name = formData.get("name") as string;
  const testimonial = formData.get("testimonial") as string;
  const rating = parseInt(formData.get("rating") as string);

  const { error } = await supabase
    .from("testimonials")
    .insert([
      { name, testimonial, rating, status: 'approved' }
    ]);

  if (error) {
    console.error("Error creating testimonial:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/testimonials");
  revalidatePath("/");
  
  return { success: true };
}
