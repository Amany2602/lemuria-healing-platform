'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error Boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Background Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
          style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}
        />

        <div className="bg-white/80 backdrop-blur-md rounded-[48px] p-10 lg:p-16 border border-brand-teal/5 shadow-premium max-w-2xl w-full text-center relative z-10 transform transition-all">
            <h1 className="text-4xl lg:text-5xl font-serif text-brand-text/90 tracking-tight leading-tight mb-6">
                A shift in the <span className="text-brand-teal italic font-light">frequency</span>
            </h1>
            
            <p className="text-brand-text/60 leading-relaxed font-light mb-10 text-lg">
                We apologize, but an unexpected disruption occurred in our digital sanctuary. 
                Our guides have been notified.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                    onClick={() => reset()}
                    className="px-8 py-4 bg-brand-teal text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-premium hover:shadow-premiumHover hover:scale-[1.02] transition-all inline-flex items-center justify-center min-w-[200px]"
                >
                    Try to Rebalance
                </button>
                <Link
                    href="/"
                    className="px-8 py-4 bg-white text-brand-text rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-brand-teal/10 hover:bg-brand-teal/5 transition-all inline-flex items-center justify-center min-w-[200px]"
                >
                    Return Home
                </Link>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-10 p-6 bg-brand-bg rounded-2xl text-left overflow-auto text-xs font-mono text-red-600 border border-red-100">
                <p className="font-bold mb-2">Development Details:</p>
                {error.message}
              </div>
            )}
        </div>
    </div>
  );
}
