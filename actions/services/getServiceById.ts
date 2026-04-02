'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getServiceById(id: string) {
  try {
    const supabase = createAdminClient();
    
    const { data: service, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching service:', error.message);
      return null;
    }

    return service;
  } catch (error) {
    console.error('Server error fetching service:', error);
    return null;
  }
}
