'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getRecentMessages(limit = 5) {
  try {
    const supabase = createAdminClient();
    
    const { data: messages, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      // Handle the missing table error quietly
      if (error.message.includes('not found') || error.code === 'PGRST204' || error.message.includes('schema cache')) {
        return [];
      }
      console.error('Error fetching recent messages:', error.message);
      return [];
    }

    return messages || [];
  } catch (error) {
    console.error('Server error fetching recent messages:', error);
    return [];
  }
}
