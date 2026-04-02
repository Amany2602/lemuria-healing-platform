import { getAdminWorkshops } from '@/actions/admin/getAdminWorkshops';
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
import { AddWorkshopForm } from '@/components/admin/AddWorkshopForm';
import { UpdateWorkshopForm } from '@/components/admin/UpdateWorkshopForm';
import { DeleteButton } from '@/components/admin/DeleteButton';
import { deleteWorkshop } from '@/actions/admin/deleteWorkshop';
import { Plus, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import type { Workshop } from '@/types';

export default async function AdminWorkshopsPage() {
    const workshops = await getAdminWorkshops();

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
                                Sacred <span className="text-brand-teal italic font-light">Gatherings</span>
                            </h1>
                            <p className="text-brand-text/50 mt-4 font-light text-lg italic">Curate the community experiences and sound ceremonies.</p>
                        </div>
                        
                        <Sheet>
                            <SheetTrigger render={<Button className="h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full px-10 self-start md:self-center font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all transform hover:scale-[1.02] flex items-center gap-3" />}>
                                <Plus className="w-4 h-4" />
                                Add Gathering
                            </SheetTrigger>
                            <SheetContent className="sm:max-w-[500px] border-l border-brand-teal/10 bg-white">
                                <SheetHeader className="p-10 border-b border-brand-teal/5">
                                    <SheetTitle className="font-serif text-3xl text-brand-text">New <span className="text-brand-teal italic">Ceremony</span></SheetTitle>
                                    <SheetDescription className="text-brand-text/50 font-light italic">
                                        Set the time and space for this communal journey.
                                    </SheetDescription>
                                </SheetHeader>
                                <AddWorkshopForm />
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="bg-white rounded-[50px] p-2 md:p-8 shadow-premium border border-brand-teal/5 overflow-hidden">
                        <div className="rounded-[40px] overflow-hidden border border-brand-teal/5 bg-white">
                            <Table>
                                <TableHeader className="bg-brand-bg/50 border-b border-brand-teal/5">
                                    <TableRow className="hover:bg-transparent h-20">
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] px-10">Gathering</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Date & Space</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Exchange</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] text-right px-10">Integration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {!workshops || workshops.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} className="h-40 text-center text-brand-text/30 font-light italic text-lg">
                                                No gatherings scheduled in the field.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        workshops.map((workshop: Workshop) => (
                                            <TableRow key={workshop.id} className="hover:bg-brand-bg/30 transition-all border-b border-brand-bg h-24 group">
                                                <TableCell className="px-10">
                                                    <div className="flex flex-col">
                                                        <span className="font-serif text-xl text-brand-text group-hover:text-brand-teal transition-colors underline decoration-brand-teal/0 group-hover:decoration-brand-teal/30 underline-offset-4">
                                                            {workshop.title || 'Untitled Gathering'}
                                                        </span>
                                                        <span className="text-[10px] text-brand-text/30 font-light max-w-[250px] truncate mt-1">
                                                            {workshop.capacity} Capacity 
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center gap-2 text-brand-text/60 italic text-sm">
                                                            <Calendar className="w-3 h-3 text-brand-gold" />
                                                            {format(new Date(workshop.date), 'MMM do, h:mm a')}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-brand-text font-medium text-lg">${workshop.price}</TableCell>
                                                <TableCell className="text-right px-10">
                                                    <div className="flex justify-end gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                                        <Sheet>
                                                            <SheetTrigger render={<button className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] hover:text-brand-text transition-colors" />}>
                                                                Modify
                                                            </SheetTrigger>
                                                            <SheetContent className="sm:max-w-[500px] border-l border-brand-teal/10 bg-white">
                                                                <SheetHeader className="p-10 border-b border-brand-teal/5">
                                                                    <SheetTitle className="font-serif text-3xl text-brand-text">Realign <span className="text-brand-teal italic">Gathering</span></SheetTitle>
                                                                    <SheetDescription className="text-brand-text/50 font-light italic">
                                                                        Update the sacred circle details for {workshop.title}.
                                                                    </SheetDescription>
                                                                </SheetHeader>
                                                                <UpdateWorkshopForm workshop={{
                                                                    id: workshop.id,
                                                                    title: workshop.title,
                                                                    description: workshop.description,
                                                                    date: workshop.date,
                                                                    location: workshop.location,
                                                                    price: workshop.price,
                                                                    total_slots: workshop.total_slots
                                                                }} />
                                                            </SheetContent>
                                                        </Sheet>
                                                        <DeleteButton id={workshop.id} action={deleteWorkshop} />
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
