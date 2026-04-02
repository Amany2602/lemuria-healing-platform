import React from 'react';

export default function SettingsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 overflow-hidden flex-grow px-6 lg:px-12">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">System Config</span>
                            <div className="w-8 h-[1px] bg-brand-gold/30"></div>
                        </div>
                        <h1 className="text-5xl font-serif text-brand-text tracking-tight">
                            Portal <span className="text-brand-teal italic font-light">Settings</span>
                        </h1>
                        <p className="text-brand-text/50 mt-4 font-light text-lg italic">Fine-tune the frequency of your digital presence.</p>
                    </div>

                    <div className="bg-white rounded-[50px] p-12 md:p-20 shadow-premium border border-brand-teal/5 text-center">
                        <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <span className="text-2xl">⚙️</span>
                        </div>
                        <p className="font-serif text-2xl text-brand-text mb-4 italic">Settings Synchronizing...</p>
                        <p className="text-brand-text/30 font-light max-w-md mx-auto italic leading-relaxed">
                            We are currently aligning the global variables of your sanctuary. Check back soon for deeper configuration options.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
