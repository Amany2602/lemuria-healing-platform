import { getBookings } from '@/actions/bookings/getBookings';
import { updateBookingStatus } from '@/actions/bookings/updateBookingStatus';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function AdminBookingsPage() {
    const bookings = await getBookings();

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 overflow-hidden flex-grow px-6 lg:px-12">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Sacred Schedule</span>
                            <div className="w-8 h-[1px] bg-brand-gold/30"></div>
                        </div>
                        <h1 className="text-5xl font-serif text-brand-text tracking-tight">
                            Session <span className="text-brand-teal italic font-light">Bookings</span>
                        </h1>
                        <p className="text-brand-text/50 mt-4 font-light text-lg italic">Oversee and manage the resonance journey of your clients.</p>
                    </div>

                    <div className="bg-white rounded-[50px] p-2 md:p-8 shadow-premium border border-brand-teal/5 overflow-hidden">
                        <div className="rounded-[40px] overflow-hidden border border-brand-teal/5 bg-white">
                            <Table>
                                <TableHeader className="bg-brand-bg/50 border-b border-brand-teal/5">
                                    <TableRow className="hover:bg-transparent h-20">
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] px-10">Client</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Resonance Type</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Session Date</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Vibrational State</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] text-right px-10">Integration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {!bookings || bookings.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="h-40 text-center text-brand-text/30 font-light italic text-lg">
                                                No sessions active in the record.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        bookings.map((booking: { id: string; full_name: string; email: string; service_id: string; session_date: string; status: string; created_at: string }) => (
                                            <TableRow key={booking.id} className="hover:bg-brand-bg/30 transition-all border-b border-brand-bg h-24 group">
                                                <TableCell className="px-10">
                                                    <div className="flex flex-col">
                                                        <span className="font-serif text-xl text-brand-text">
                                                            {booking.full_name}
                                                        </span>
                                                        <span className="text-[10px] text-brand-text/30 font-light tracking-wider mt-1">{booking.email}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-brand-text/60 font-medium italic">
                                                    {booking.service_id === '0b7a4a85-69e7-418f-bacd-7f801808b46c' ? 'Kinesiology' : 
                                                     booking.service_id === '123' ? 'Sound Bath' : 
                                                     booking.service_id.split('-')[0].toUpperCase()}
                                                </TableCell>
                                                <TableCell className="text-brand-text/60 italic font-light">
                                                    {booking.session_date ? format(new Date(booking.session_date), 'PP p') : 'To Be Set'}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant="outline"
                                                        className={`capitalize px-4 py-1.5 rounded-full border-2 text-[10px] font-bold tracking-widest ${
                                                            booking.status === 'confirmed'
                                                                ? 'border-brand-teal/20 text-brand-teal bg-brand-teal/5 shadow-premium'
                                                                : booking.status === 'cancelled'
                                                                ? 'border-red-100 text-red-400 bg-red-50'
                                                                : 'border-brand-gold/20 text-brand-gold bg-brand-gold/5'
                                                        }`}
                                                    >
                                                        {booking.status || 'pending'}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right px-10">
                                                    <div className="flex justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                                                        <form action={updateBookingStatus.bind(null, booking.id, 'confirmed') as (payload: FormData) => void}>
                                                            <button 
                                                                type="submit" 
                                                                className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] hover:text-brand-text transition-colors disabled:opacity-30"
                                                                disabled={booking.status === 'confirmed'}
                                                            >
                                                                Confirm
                                                            </button>
                                                        </form>
                                                        <form action={updateBookingStatus.bind(null, booking.id, 'cancelled') as (payload: FormData) => void}>
                                                            <button 
                                                                type="submit" 
                                                                className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] hover:text-red-700 transition-colors disabled:opacity-30"
                                                                disabled={booking.status === 'cancelled'}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </form>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
