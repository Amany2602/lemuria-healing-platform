// Placeholder for Resend initialization
// You would typically install 'resend' package: npm install resend

import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_builds_123');

export const sendEmail = async (to: string, subject: string, html: string) => {
    console.log(`Sending email to ${to} with subject: ${subject}. Body: ${html.slice(0, 50)}...`);
    try {
        const { data, error } = await resend.emails.send({
            from: 'Lemuria Healing <resonance@lemuriahealing.com.au>',
            to: [to],
            subject: subject,
            html: html,
        });
        if (error) {
            console.error('Error sending email via Resend:', error);
            return { success: false, error };
        }
        return { success: true, data };
    } catch (err) {
        console.error('Failed to send email:', err);
        return { success: false, error: err };
    }
};
