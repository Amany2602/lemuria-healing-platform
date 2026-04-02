import { getAdminTestimonials } from '@/actions/admin/getAdminTestimonials';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AddTestimonialForm } from '@/components/admin/AddTestimonialForm';
import { UpdateTestimonialForm } from '@/components/admin/UpdateTestimonialForm';
import { DeleteButton } from '@/components/admin/DeleteButton';
import { deleteTestimonial } from '@/actions/admin/deleteTestimonial';
import { Plus } from 'lucide-react';
import type { Testimonial } from '@/types';

export default async function AdminTestimonialsPage() {
    const testimonials = await getAdminTestimonials();

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 overflow-hidden flex-grow px-6 lg:px-12">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Guardian Module</span>
                                <div className="w-8 h-[1px] bg-brand-gold/30"></div>
                            </div>
                            <h1 className="text-5xl font-serif text-brand-text tracking-tight">
                                Sacred <span className="text-brand-teal italic font-light">Testimonies</span>
                            </h1>
                            <p className="text-brand-text/50 mt-4 font-light text-lg italic">Honor and manage the echoes of soul transformation.</p>
                        </div>
                        
                        <Sheet>
                            <SheetTrigger render={<Button className="h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full px-10 self-start md:self-center font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all transform hover:scale-[1.02] flex items-center gap-3" />}>
                                <Plus className="w-4 h-4" />
                                Add Testimony
                            </SheetTrigger>
                            <SheetContent className="sm:max-w-[500px] border-l border-brand-teal/10 bg-white">
                                <SheetHeader className="p-10 border-b border-brand-teal/5">
                                    <SheetTitle className="font-serif text-3xl text-brand-text">New <span className="text-brand-teal italic">Echo</span></SheetTitle>
                                    <SheetDescription className="text-brand-text/50 font-light italic">
                                        Archive a new story of healing and light.
                                    </SheetDescription>
                                </SheetHeader>
                                <AddTestimonialForm />
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="bg-white rounded-[50px] p-2 md:p-8 shadow-premium border border-brand-teal/5 overflow-hidden">
                        <div className="rounded-[40px] overflow-hidden border border-brand-teal/5 bg-white">
                            <Table>
                                <TableHeader className="bg-brand-bg/50 border-b border-brand-teal/5">
                                    <TableRow className="hover:bg-transparent h-20">
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] px-10">Soul</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Testimony</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Resonance</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] text-right px-10">Integration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {!testimonials || testimonials.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} className="h-40 text-center text-brand-text/30 font-light italic text-lg">
                                                No testimonies archived yet.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        testimonials.map((testimonial: Testimonial) => (
                                            <TableRow key={testimonial.id} className="hover:bg-brand-bg/30 transition-all border-b border-brand-bg h-24 group">
                                                <TableCell className="px-10">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center font-serif text-brand-teal font-bold uppercase">
                                                            {testimonial.name?.charAt(0)}
                                                        </div>
                                                        <span className="font-serif text-lg text-brand-text">{testimonial.name}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="max-w-[400px]">
                                                    <p className="text-brand-text/50 font-light text-sm italic line-clamp-2 leading-relaxed">&ldquo;{testimonial.testimonial}&rdquo;</p>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex gap-1">
                                                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                            <span key={i} className="text-brand-gold text-xs">⭐</span>
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right px-10">
                                                    <div className="flex justify-end gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                                        <Sheet>
                                                            <SheetTrigger render={<button className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] hover:text-brand-text transition-colors" />}>
                                                                Review
                                                            </SheetTrigger>
                                                            <SheetContent className="sm:max-w-[500px] border-l border-brand-teal/10 bg-white">
                                                                <SheetHeader className="p-10 border-b border-brand-teal/5">
                                                                    <SheetTitle className="font-serif text-3xl text-brand-text">Realign <span className="text-brand-teal italic">Testimony</span></SheetTitle>
                                                                    <SheetDescription className="text-brand-text/50 font-light italic">
                                                                        Refine the story of transformation from {testimonial.name}.
                                                                    </SheetDescription>
                                                                </SheetHeader>
                                                                <UpdateTestimonialForm testimonial={{
                                                                    id: testimonial.id,
                                                                    name: testimonial.name,
                                                                    testimonial: testimonial.testimonial,
                                                                    rating: testimonial.rating,
                                                                    status: testimonial.status || 'approved'
                                                                }} />
                                                            </SheetContent>
                                                        </Sheet>
                                                        <DeleteButton id={testimonial.id} action={deleteTestimonial} label="Archive" />
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
