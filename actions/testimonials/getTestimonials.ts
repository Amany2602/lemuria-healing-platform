'use server';
import { cache } from 'react';

import { createAdminClient } from '@/lib/supabase/admin';

export const getTestimonials = cache(async () => {
  try {
    const supabase = createAdminClient();
    const { data: testimonials, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // Return empty array quietly if table doesn't exist yet
      if (error.message.includes('not found') || error.message.includes('schema cache')) {
        return [];
      }
      console.error('Error fetching testimonials:', error.message);
      return [];
    }

    return testimonials || [];
  } catch (error) {
    console.error('Server error fetching testimonials:', error);
    return [];
  }
});
