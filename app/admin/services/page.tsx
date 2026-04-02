import { getAdminServices } from '@/actions/admin/getAdminServices';
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
import { AddServiceForm } from '@/components/admin/AddServiceForm';
import { UpdateServiceForm } from '@/components/admin/UpdateServiceForm';
import { DeleteButton } from '@/components/admin/DeleteButton';
import { deleteService } from '@/actions/admin/deleteService';
import { Plus } from 'lucide-react';
import type { Service } from '@/types';

export default async function AdminServicesPage() {
    const services = await getAdminServices();

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
                                Sacred <span className="text-brand-teal italic font-light">Modalities</span>
                            </h1>
                            <p className="text-brand-text/50 mt-4 font-light text-lg italic">Oversee the vibrations you offer to the world.</p>
                        </div>
                        
                        <Sheet>
                            <SheetTrigger render={<Button className="h-16 bg-brand-teal hover:bg-brand-text text-white rounded-full px-10 self-start md:self-center font-bold text-xs tracking-[0.2em] uppercase shadow-premium transition-all transform hover:scale-[1.02] flex items-center gap-3" />}>
                                <Plus className="w-4 h-4" />
                                Add New Modality
                            </SheetTrigger>
                            <SheetContent className="sm:max-w-[500px] border-l border-brand-teal/10 bg-white">
                                <SheetHeader className="p-10 border-b border-brand-teal/5">
                                    <SheetTitle className="font-serif text-3xl text-brand-text">New <span className="text-brand-teal italic">Frequency</span></SheetTitle>
                                    <SheetDescription className="text-brand-text/50 font-light italic">
                                        Define the parameters of this new healing journey.
                                    </SheetDescription>
                                </SheetHeader>
                                <AddServiceForm />
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="bg-white rounded-[50px] p-2 md:p-8 shadow-premium border border-brand-teal/5 overflow-hidden">
                        <div className="rounded-[40px] overflow-hidden border border-brand-teal/5 bg-white">
                            <Table>
                                <TableHeader className="bg-brand-bg/50 border-b border-brand-teal/5">
                                    <TableRow className="hover:bg-transparent h-20">
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] px-10">Modality</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Resonance (Price)</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em]">Duration</TableHead>
                                        <TableHead className="font-bold text-brand-text/40 text-[10px] uppercase tracking-[0.2em] text-right px-10">Integration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {!services || services.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} className="h-40 text-center text-brand-text/30 font-light italic text-lg">
                                                No modalities active in the field.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        services.map((service: Service) => (
                                            <TableRow key={service.id} className="hover:bg-brand-bg/30 transition-all border-b border-brand-bg h-24 group">
                                                <TableCell className="px-10">
                                                    <div className="flex flex-col">
                                                        <span className="font-serif text-xl text-brand-text group-hover:text-brand-teal transition-colors underline decoration-brand-teal/0 group-hover:decoration-brand-teal/30 underline-offset-4">
                                                            {service.title || service.name || 'Untitled Service'}
                                                        </span>
                                                        <span className="text-[10px] text-brand-text/30 font-light max-w-[250px] truncate mt-1">{service.description}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-brand-text font-medium text-lg">${service.price}</TableCell>
                                                <TableCell>
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-bg border border-brand-teal/5 text-xs text-brand-text/60 font-light italic">
                                                        {service.duration_minutes ? `${service.duration_minutes} mins` : 'Flexible'}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right px-10">
                                                    <div className="flex justify-end gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                                        <Sheet>
                                                            <SheetTrigger render={<button className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] hover:text-brand-text transition-colors" />}>
                                                                Modify
                                                            </SheetTrigger>
                                                            <SheetContent className="sm:max-w-[500px] border-l border-brand-teal/10 bg-white">
                                                                <SheetHeader className="p-10 border-b border-brand-teal/5">
                                                                    <SheetTitle className="font-serif text-3xl text-brand-text">Realign <span className="text-brand-teal italic">Energy</span></SheetTitle>
                                                                    <SheetDescription className="text-brand-text/50 font-light italic">
                                                                        Update the parameters for {service.title || service.name}.
                                                                    </SheetDescription>
                                                                </SheetHeader>
                                                                <UpdateServiceForm service={{
                                                                    id: service.id,
                                                                    name: service.title || service.name || 'Untitled Service',
                                                                    description: service.description,
                                                                    price: service.price,
                                                                    duration_minutes: service.duration_minutes
                                                                }} />
                                                            </SheetContent>
                                                        </Sheet>
                                                        <DeleteButton id={service.id} action={deleteService} />
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
