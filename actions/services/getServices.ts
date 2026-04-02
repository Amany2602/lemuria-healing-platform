'use server';
import { cache } from 'react';

import { createAdminClient } from '@/lib/supabase/admin';

export const getServices = cache(async () => {
  try {
    const supabase = createAdminClient();
    
    const { data: services, error } = await supabase
      .from('services')
      .select('*');

    if (error) {
      // Handle missing table or schema discrepancies gracefully
      if (error.message.includes('not found') || error.message.includes('schema cache')) {
        // Fallback: try a safer select without specific columns if it was a column error,
        // but if it's a table error, just return empty.
        return [];
      }
      console.error('Error fetching services:', error.message);
      return [];
    }

    return services || [];
  } catch (error) {
    console.error('Server error fetching services:', error);
    return [];
  }
});
