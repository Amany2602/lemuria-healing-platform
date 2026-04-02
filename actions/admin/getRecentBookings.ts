'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getRecentBookings(limit = 5) {
  try {
    const supabase = createAdminClient();
    
    // First, try a simple fetch without joins to see what's available
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
       // If table itself is missing, return empty. Otherwise log error.
       if (error.message.includes('not found') || error.message.includes('schema cache')) {
          return [];
       }
       console.error('Error fetching recent bookings:', error.message);
       return [];
    }

    if (!bookings || bookings.length === 0) return [];

    // Map fields safely
    return bookings.map((b: { id: string, created_at: string, full_name?: string; email?: string; status?: string; session_date?: string, [key: string]: unknown }) => ({
      ...b,
      full_name: b.full_name || 'Guest',
      email: b.email || 'N/A',
      status: b.status || 'pending'
    }));
  } catch (error) {
    console.error('Server error fetching recent bookings:', error);
    return [];
  }
}
