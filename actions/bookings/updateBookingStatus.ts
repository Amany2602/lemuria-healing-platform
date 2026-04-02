'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { revalidatePath } from 'next/cache';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export async function updateBookingStatus(bookingId: string, status: BookingStatus) {
  try {
    const supabase = createAdminClient();

    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', bookingId);

    if (error) {
      console.error('Error updating booking status:', error.message);
      return { success: false, error: 'Failed to update booking status' };
    }

    revalidatePath('/admin/bookings');
    return { success: true };
  } catch (error) {
    console.error('Server error updating booking status:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
