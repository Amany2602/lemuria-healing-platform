import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, Calendar, Sparkles, GraduationCap, Settings, MessageSquare, Users } from 'lucide-react';

const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Bookings', href: '/admin/bookings', icon: Calendar },
    { label: 'Services', href: '/admin/services', icon: Sparkles },
    { label: 'Workshops', href: '/admin/workshops', icon: GraduationCap },
    { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-brand-bg">
            {/* Admin Sidebar */}
            <aside className="w-80 bg-white border-r border-brand-teal/5 sticky top-0 h-screen hidden lg:flex flex-col z-50 shadow-premium">
                <div className="p-10">
                    <Link href="/" className="flex flex-col items-center group transition-all duration-500">
                        <div className="bg-[#FBF9F4] rounded-[48px] p-10 border border-brand-teal/5 shadow-premium overflow-hidden mb-8 group-hover:bg-[#FBF9F4]/90 transition-all">
                            <Image 
                                src="/lemuria-assets/logo/logo-transparent.png" 
                                alt="Lemuria Portal" 
                                width={200}
                                height={128}
                                className="h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05] mix-blend-multiply" 
                            />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-xl font-serif text-brand-text tracking-tight">
                                Lemuria <span className="text-brand-teal italic font-light">Portal</span>
                            </span>
                            <div className="flex items-center gap-2 mt-2">
                                 <div className="w-3 h-[1px] bg-brand-gold/40"></div>
                                 <p className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.3em]">Guardian Environment</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <nav className="flex-grow px-6 space-y-3 mt-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-4 px-8 py-5 rounded-[24px] text-brand-text/50 hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-300 group relative overflow-hidden"
                        >
                            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110 relative z-10" />
                            <span className="font-medium tracking-wide relative z-10">{item.label}</span>
                            <div className="absolute inset-0 bg-brand-teal/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                        </Link>
                    ))}
                </nav>

                <div className="p-10 border-t border-brand-teal/5">
                    <div className="bg-brand-teal rounded-[30px] p-6 text-white relative overflow-hidden group shadow-premium">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700" 
                             style={{ backgroundImage: "url('/lemuria-assets/backgrounds/teal-texture.jpg')", backgroundSize: 'cover' }}></div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2 relative z-10">Sanctuary Support</p>
                        <p className="text-sm font-light leading-relaxed relative z-10 opacity-80">Need help managing the frequency? Contact your tech guides.</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col min-w-0 overflow-hidden relative">
                {/* Texture Overlay for the whole admin area */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
                     style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>

                {/* Mobile Header (simplified) */}
                <header className="lg:hidden h-24 bg-white border-b border-brand-teal/5 flex items-center justify-between px-8 sticky top-0 z-50 shadow-sm">
                      <Link href="/" className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-[#FBF9F4] rounded-full flex items-center justify-center border border-brand-teal/10 overflow-hidden shadow-sm">
                            <Image 
                                src="/lemuria-assets/logo/logo-transparent.png" 
                                alt="Logo" 
                                width={100}
                                height={64}
                                className="h-16 w-auto object-contain mix-blend-multiply" 
                            />
                        </div>
                        <span className="text-lg font-serif text-brand-text">Lemuria</span>
                    </Link>
                    <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center">
                        <Users className="w-5 h-5 text-brand-teal" />
                    </div>
                </header>

                <div className="flex-grow relative z-10 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
