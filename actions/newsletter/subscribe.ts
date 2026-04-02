'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Please provide a valid sacred email address'),
});

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const validatedData = newsletterSchema.parse({ email });

    const supabase = createAdminClient();

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: validatedData.email });

    if (error) {
      if (error.code === '23505') { // Unique violation
        return { success: true, message: 'Your resonance is already synchronized with us.' };
      }
      console.error('Newsletter subscription error:', error);
      return { success: false, error: 'The frequency was interrupted. Please try again.' };
    }

    return { success: true, message: 'Welcome to the collective. Your frequency is now aligned.' };
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      const zodErr = error as z.ZodError;
      return { success: false, error: zodErr.issues[0]?.message || 'Validation failed' };
    }
    console.error('Unexpected newsletter error:', error);
    return { success: false, error: 'An unexpected vibration occurred.' };
  }
}
