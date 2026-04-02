'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { createBooking } from '@/actions/bookings/createBooking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { PremiumDateTimePicker } from '@/components/booking/PremiumDateTimePicker';

const bookingSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  preferred_date: z.string().min(1, 'Session date is required'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm({ serviceId, workshopId }: { serviceId?: string; workshopId?: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    if (serviceId) formData.append('service_id', serviceId);
    if (workshopId) formData.append('workshop_id', workshopId);
    formData.append('full_name', data.full_name);
    formData.append('email', data.email);
    formData.append('session_date', data.preferred_date);

    try {
      const result = await createBooking(formData);

      if (result.success) {
        setSuccess(true);
        if (result.url) {
          setTimeout(() => {
            window.location.href = result.url as string;
          }, 1500);
        } else {
          setTimeout(() => router.push('/success'), 1500);
        }
      } else {
        setError(result.error || 'The connection was interrupted. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected energy disturbance occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-brand-teal/5 text-brand-teal p-10 rounded-[30px] text-center border border-brand-teal/10 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-8 shadow-premium">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-serif font-medium mb-4 tracking-tight">Vibration Registered</h3>
        <p className="text-base font-light leading-relaxed text-brand-text/60 italic">Thank you for your trust. Redirecting to our sacred energy exchange gateway (Stripe)...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {error && (
        <div className="bg-red-50 text-red-700 p-5 rounded-[20px] border border-red-100 text-sm italic">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <Label htmlFor="full_name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Full Name</Label>
        <Input 
          id="full_name" 
          placeholder="Name as it resonates" 
          {...register('full_name')} 
          disabled={isSubmitting} 
          className="h-16 rounded-full border-brand-teal/10 bg-brand-bg px-8 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-smooth outline-none text-brand-text font-light"
        />
        {errors.full_name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{String(errors.full_name.message)}</p>}
      </div>

      <div className="space-y-4">
        <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Sacred Email</Label>
        <Input 
          type="email" 
          id="email" 
          placeholder="your@resonance.com" 
          {...register('email')} 
          disabled={isSubmitting} 
          className="h-16 rounded-full border-brand-teal/10 bg-brand-bg px-8 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-smooth outline-none text-brand-text font-light"
        />
        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{String(errors.email.message)}</p>}
      </div>

      <div className="space-y-6">
        <Label htmlFor="preferred_date" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold ml-4">Session Alignment</Label>
        <Controller
          name="preferred_date"
          control={control}
          render={({ field }) => (
            <PremiumDateTimePicker 
              value={field.value} 
              onChange={field.onChange} 
            />
          )}
        />
        {errors.preferred_date && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{String(errors.preferred_date.message)}</p>}
      </div>

      <button type="submit" className="w-full h-16 md:h-20 bg-brand-teal text-white rounded-full font-bold text-[11px] tracking-[0.3em] uppercase shadow-premium hover:shadow-premiumHover transition-smooth hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-4 group disabled:opacity-50" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            Synchronizing...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-smooth scale-125" />
            Register Resonance
          </>
        )}
      </button>
    </form>
  );
}
