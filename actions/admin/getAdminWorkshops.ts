'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getAdminWorkshops() {
  try {
    const supabase = createAdminClient();
    
    const { data: workshops, error } = await supabase
      .from('workshops')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching admin workshops:', error.message);
      return [];
    }

    return workshops || [];
  } catch (error) {
    console.error('Server error fetching admin workshops:', error);
    return [];
  }
}
