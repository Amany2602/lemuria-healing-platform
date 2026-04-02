'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getAdminServices() {
  try {
    const supabase = createAdminClient();
    
    const { data: services, error } = await supabase
      .from('services')
      .select('*');

    if (error) {
      console.error('Error fetching admin services:', error.message);
      return [];
    }

    return services || [];
  } catch (error) {
    console.error('Server error fetching admin services:', error);
    return [];
  }
}
