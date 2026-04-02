'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getWorkshopById(id: string) {
  try {
    const supabase = createAdminClient();
    
    const { data: workshop, error } = await supabase
      .from('workshops')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching workshop:', error.message);
      return null;
    }

    return workshop;
  } catch (error) {
    console.error('Server error fetching workshop:', error);
    return null;
  }
}
