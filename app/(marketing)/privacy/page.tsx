import React from 'react';

export const metadata = {
  title: "Privacy Policy | Lemuria Healing",
  description: "Privacy policy and terms of service for Lemuria Healing Sanctuary.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pt-40 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-12">
            Privacy <span className="text-brand-teal italic font-light">Policy</span>
        </h1>
        
        <div className="space-y-8 text-lg text-brand-text/70 leading-relaxed font-light">
            <p>
                At Lemuria Healing, we hold your personal energy and data in the highest sacred trust. This Privacy Policy outlines how we collect, use, and protect the information you share with us.
            </p>
            
            <h2 className="text-2xl font-serif text-brand-text mt-12 mb-4">Information We Collect</h2>
            <p>
                When you interact with our sanctuary—whether booking a session, subscribing to the Vibration Circle, or submitting an inquiry—we collect standard contact information such as your name, email address, and phone number. If you complete an energy exchange (payment), your secure payment data is processed directly via Stripe, and we do not store your credit card details.
            </p>
            
            <h2 className="text-2xl font-serif text-brand-text mt-12 mb-4">How We Use Your Data</h2>
            <p>
                Your information is used solely to facilitate your healing journey. This includes scheduling, sending confirmation emails, notifying you of upcoming workshops, and maintaining secure communication regarding your sessions.
            </p>
            
            <h2 className="text-2xl font-serif text-brand-text mt-12 mb-4">Your Privacy Rights</h2>
            <p>
                You retain complete autonomy over your data. If you wish to be removed from our records or the Vibration Circle at any point, simply reach out to us at <a href="mailto:resonance@lemuriahealing.com.au" className="text-brand-teal underline">resonance@lemuriahealing.com.au</a>.
            </p>
            
            <p className="mt-16 text-sm italic text-brand-text/50">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
        </div>
      </div>
    </div>
  );
}
