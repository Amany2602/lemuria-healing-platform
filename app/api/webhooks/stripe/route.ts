import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { createServerClient } from '@/lib/supabase/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature') as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Webhook signature verification failed.', errorMessage);
    return NextResponse.json({ error: 'Webhook Error: ' + errorMessage }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // The client_reference_id was set to the booking ID when creating the session
    const bookingId = session.client_reference_id;
    const paymentIntentId = session.payment_intent;

    if (bookingId) {
      // Initialize Supabase Admin strictly to bypass RLS here since this is a secure backend webhook
      const supabase = createServerClient();
      
      const { error } = await supabase
        .from('bookings')
        .update({
          status: 'confirmed',
          stripe_payment_id: paymentIntentId
        })
        .eq('id', bookingId);
        
      if (error) {
        console.error('Error updating booking status:', error);
        return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
      }
      
      console.log(`Successfully confirmed booking ${bookingId}`);
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
