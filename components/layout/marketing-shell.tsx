import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface MarketingShellProps {
    children: React.ReactNode;
}

/**
 * MarketingShell provides the standard website shell including
 * the main Header and Footer for the marketing/public side of the platform.
 */
export function MarketingShell({ children }: MarketingShellProps) {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-1 bg-white">
                {children}
            </main>
            <Footer />
        </div>
    );
}
