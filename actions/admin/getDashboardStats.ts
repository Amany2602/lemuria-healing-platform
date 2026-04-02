'use server';

import { createAdminClient } from '@/lib/supabase/admin';

export async function getDashboardStats() {
  try {
    const supabase = createAdminClient();

    // Fetch counts for each table individually to handle missing tables gracefully
    const [
      bookingsRes,
      servicesRes,
      workshopsRes,
      revenueRes,
      contactRes,
      subscriberRes
    ] = await Promise.all([
      supabase.from('bookings').select('*', { count: 'exact', head: true }),
      supabase.from('services').select('*', { count: 'exact', head: true }),
      supabase.from('workshops').select('*', { count: 'exact', head: true }),
      supabase.from('bookings').select('amount'),
      supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
      supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
    ]);

    const totalBookings = bookingsRes.count || 0;
    const totalServices = servicesRes.count || 0;
    const totalWorkshops = workshopsRes.count || 0;
    
    // Safety check for revenue calculation
    let totalRevenue = 0;
    if (revenueRes.data) {
        totalRevenue = revenueRes.data.reduce((sum, booking: { amount: string | number | null }) => sum + (Number(booking.amount) || 0), 0);
    }
    
    const totalMessages = contactRes.count || 0;
    const totalSubscribers = subscriberRes.count || 0;

    return {
      totalBookings,
      totalServices,
      totalWorkshops,
      totalRevenue,
      totalMessages,
      totalSubscribers,
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      totalBookings: 0,
      totalServices: 0,
      totalWorkshops: 0,
      totalRevenue: 0,
      totalMessages: 0,
      totalSubscribers: 0,
    };
  }
}
