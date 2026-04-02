import React from 'react';
import { getDashboardStats } from '@/actions/admin/getDashboardStats';
import { getRecentMessages } from '@/actions/admin/getRecentMessages';
import { getRecentBookings } from '@/actions/admin/getRecentBookings';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageSquare, Users, Sparkles, TrendingUp } from 'lucide-react';

export default async function DashboardPage() {
    const stats = await getDashboardStats();
    const recentMessages = await getRecentMessages(5);
    const recentBookings = await getRecentBookings(5);

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-16 md:py-24 overflow-hidden flex-grow px-6 lg:px-12">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                             <Badge variant="outline" className="border-brand-gold/30 text-brand-gold bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] flex items-center gap-2">
                                <TrendingUp className="w-3 h-3" />
                                LIVE ANALYTICS
                             </Badge>
                        </div>
                        <h1 className="text-5xl font-serif text-brand-text tracking-tight">
                            Sanctuary <span className="text-brand-teal italic font-light">Success</span>
                        </h1>
                        <p className="text-brand-text/50 mt-4 font-light text-lg italic">Your spiritual business at a glance.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { label: "Energy Exchange", value: `$${stats.totalRevenue.toLocaleString()}`, desc: "Total revenue generated", icon: Sparkles, color: "text-brand-gold" },
                            { label: "Active Sessions", value: stats.totalBookings.toString(), desc: "Total bookings confirmed", icon: Calendar, color: "text-brand-teal" },
                            { label: "Community", value: stats.totalSubscribers.toString(), desc: "Newsletter subscribers", icon: Users, color: "text-brand-teal" },
                            { label: "Connections", value: stats.totalMessages.toString(), desc: "Unread contact messages", icon: MessageSquare, color: "text-brand-gold" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-[40px] p-8 shadow-premium border border-brand-teal/5 transition-all hover:scale-[1.02] group">
                                <div className="flex items-start justify-between mb-8">
                                    <h3 className="text-[10px] font-bold text-brand-text/30 uppercase tracking-[0.2em]">{stat.label}</h3>
                                    <div className={`p-4 rounded-[20px] bg-brand-bg group-hover:bg-brand-teal/5 transition-all`}>
                                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-4xl font-serif text-brand-text mb-2 tracking-tight">{stat.value}</div>
                                <p className="text-xs text-brand-text/30 font-light italic">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Recent Bookings */}
                        <div className="bg-white rounded-[50px] p-10 md:p-12 shadow-premium border border-brand-teal/5 overflow-hidden">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-serif text-brand-text">Recent <span className="text-brand-teal italic font-light">Sessions</span></h2>
                                <Badge variant="outline" className="border-brand-teal/10 text-brand-text/40 text-[10px] tracking-widest uppercase">Last 5</Badge>
                            </div>
                            <div className="space-y-8">
                                {!recentBookings || recentBookings.length === 0 ? (
                                    <p className="text-brand-text/30 font-light italic text-center py-12">No recent bookings to display.</p>
                                ) : (
                                    recentBookings.map((booking) => (
                                        <div key={booking.id} className="flex items-center justify-between p-6 rounded-[30px] hover:bg-brand-bg transition-all border border-transparent hover:border-brand-teal/5 group">
                                            <div className="flex items-center gap-6">
                                                <div className="w-14 h-14 rounded-full bg-brand-teal/5 border border-brand-teal/10 flex items-center justify-center text-brand-teal font-serif text-xl font-bold group-hover:bg-brand-teal group-hover:text-white transition-all">
                                                    {booking.full_name?.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-serif text-lg text-brand-text">{booking.full_name}</p>
                                                    <p className="text-[10px] text-brand-text/30 font-light tracking-wider">{booking.email}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-brand-text/60 italic">{format(new Date(booking.created_at), 'MMM d')}</p>
                                                <Badge variant="outline" className="mt-2 capitalize text-[10px] px-3 py-1 rounded-full border-brand-teal/20 text-brand-teal bg-brand-teal/5">
                                                    {booking.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Recent Messages */}
                        <div className="bg-white rounded-[50px] p-10 md:p-12 shadow-premium border border-brand-teal/5 overflow-hidden">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-serif text-brand-text">Sacred <span className="text-brand-gold italic font-light">Messages</span></h2>
                                <Badge variant="outline" className="border-brand-gold/10 text-brand-text/40 text-[10px] tracking-widest uppercase">Inbox</Badge>
                            </div>
                            <div className="space-y-8">
                                {!recentMessages || recentMessages.length === 0 ? (
                                    <p className="text-brand-text/30 font-light italic text-center py-12">No messages in the sacred inbox.</p>
                                ) : (
                                    recentMessages.map((msg) => (
                                        <div key={msg.id} className="group p-6 rounded-[30px] hover:bg-brand-bg transition-all border border-transparent hover:border-brand-gold/10">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="font-serif text-lg text-brand-text">{msg.name}</span>
                                                <span className="text-[10px] text-brand-text/30 uppercase tracking-widest font-bold">{format(new Date(msg.created_at), 'MMM d')}</span>
                                            </div>
                                            <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.1em] mb-2 italic">Re: {msg.subject || 'Inquiry'}</p>
                                            <p className="text-sm text-brand-text/50 font-light line-clamp-2 leading-relaxed">{msg.message}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
