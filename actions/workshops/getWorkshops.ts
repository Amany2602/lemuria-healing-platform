'use server';
import { cache } from 'react';

import { createAdminClient } from '@/lib/supabase/admin';

export const getWorkshops = cache(async () => {
  try {
    const supabase = createAdminClient();
    
    const { data: workshops, error } = await supabase
      .from('workshops')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching workshops:', error.message);
      return [];
    }

    return workshops || [];
  } catch (error) {
    console.error('Server error fetching workshops:', error);
    return [];
  }
});
