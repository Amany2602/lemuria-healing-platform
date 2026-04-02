'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getAdminTestimonials() {
  try {
    const supabase = createAdminClient();
    const { data: testimonials, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      if (error.message.includes('not found') || error.message.includes('schema cache')) {
        return [];
      }
      console.error('Error fetching admin testimonials:', error.message);
      return [];
    }

    return testimonials || [];
  } catch (error) {
    console.error('Server error fetching admin testimonials:', error);
    return [];
  }
}
