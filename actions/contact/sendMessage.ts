'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { sendEmail } from '@/lib/resend/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function sendMessage(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const validatedData = contactSchema.parse(rawData);

    const supabase = createAdminClient();

    const { error } = await supabase
      .from('contact_messages')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      });

    if (error) {
      console.error('Contact message error:', error);
      return { success: false, error: 'Your message could not be delivered to the sanctuary.' };
    }

    // Send confirmation email to user
    await sendEmail(
      validatedData.email,
      'Your Message to Lemuria Healing',
      `<p>Dear ${validatedData.name},</p><p>Thank you for reaching out. We have received your message regarding "${validatedData.subject || 'General Inquiry'}" and will respond shortly.</p><br/><p>With light,<br/>Lemuria Healing Sanctuary</p>`
    );

    // Send notification email to admin
    await sendEmail(
      'resonance@lemuriahealing.com.au',
      'New Contact Inquiry Received',
      `<p><strong>Name:</strong> ${validatedData.name}</p><p><strong>Email:</strong> ${validatedData.email}</p><p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p><p><strong>Subject:</strong> ${validatedData.subject}</p><p><strong>Message:</strong><br/>${validatedData.message}</p>`
    );

    return { success: true, message: 'Your resonance has been received. We will respond when the stars align.' };
  } catch (error) {

    if (error instanceof Error && error.name === 'ZodError') {
      const zodErr = error as z.ZodError;
      return { success: false, error: zodErr.issues[0]?.message || 'Validation failed' };
    }
    console.error('Unexpected contact error:', error);
    return { success: false, error: 'An unexpected disturbance occurred.' };
  }
}

