'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getBookings() {
  try {
    const supabase = createAdminClient();

    // Fetch everything we might need, but handle missing columns by selecting individual fields safely
    // Actually, select('*') is usually safest if we don't know the schema, but if it fails...
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      if (error.message.includes('not found') || error.message.includes('schema cache')) {
          return [];
      }
      console.error('Error fetching bookings:', error.message);
      return [];
    }

    if (!bookings) return [];

    // Map fields with fallbacks for missing columns
    return bookings.map((b: { id: string; service_id?: string; status?: string; created_at: string; full_name?: string; email?: string; session_date?: string }) => ({
      id: b.id,
      service_id: b.service_id || 'N/A',
      status: b.status || 'pending',
      created_at: b.created_at,
      full_name: b.full_name || 'Guest',
      email: b.email || 'N/A',
      session_date: b.session_date || b.created_at
    }));
  } catch (error) {
    console.error('Server error fetching bookings:', error);
    return [];
  }
}
