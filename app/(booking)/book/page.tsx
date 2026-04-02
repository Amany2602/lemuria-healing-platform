import { getServiceById } from '@/actions/services/getServiceById';
import { getWorkshopById } from '@/actions/workshops/getWorkshopById';
import { getServices } from '@/actions/services/getServices';
import { getWorkshops } from '@/actions/workshops/getWorkshops';
import { BookingForm } from '@/components/forms/BookingForm';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default async function BookPage({ searchParams }: { searchParams: Promise<{ service?: string; workshop?: string; canceled?: string }> }) {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const workshopId = resolvedParams.workshop;
  const isCanceled = resolvedParams.canceled === 'true';

  // State: Item selection logic
  let item = null;
  let type: 'Service' | 'Workshop' = 'Service';

  if (serviceId) {
    item = await getServiceById(serviceId);
    type = 'Service';
  } else if (workshopId) {
    item = await getWorkshopById(workshopId);
    type = 'Workshop';
  }

  // Fallback: If no item is selected or found, show selection UI
  if (!item) {
    const services = await getServices();
    const workshops = await getWorkshops();

    return (
      <div className="min-h-screen bg-brand-bg py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>
        
        <div className="container px-6 mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
            <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em] uppercase font-sans">Begin Your Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-brand-text mb-6">Choose Your <span className="text-brand-teal italic font-light">Resonance</span></h1>
          <p className="text-lg text-brand-text/50 font-light max-w-2xl mx-auto mb-20 italic">Select a sacred modality or upcoming immersion to start your alignment process.</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services Column */}
            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-4 text-left border-b border-brand-teal/10 pb-4">Private Harmonics</h2>
              <div className="space-y-4">
                {services.map(s => (
                  <Link key={s.id} href={`/book?service=${s.id}`} className="group block bg-white p-8 rounded-[30px] border border-brand-teal/5 shadow-sm hover:shadow-premium transition-all text-left">
                    <div className="flex justify-between items-start gap-4">
                       <div>
                         <h3 className="font-serif text-xl text-brand-text items-center flex gap-2 group-hover:text-brand-teal transition-colors">
                            {s.title}
                         </h3>
                         <p className="text-xs text-brand-text/40 mt-2 font-light line-clamp-1">{s.description}</p>
                       </div>
                       <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-2 transition-transform shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Workshops Column */}
            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-4 text-left border-b border-brand-gold/10 pb-4">Community Immersions</h2>
              <div className="space-y-4">
                {workshops.map(w => (
                  <Link key={w.id} href={`/book?workshop=${w.id}`} className="group block bg-[#1A362B] p-8 rounded-[30px] border border-white/5 shadow-sm hover:shadow-premium transition-all text-left">
                    <div className="flex justify-between items-start gap-4">
                       <div>
                         <h3 className="font-serif text-xl text-white items-center flex gap-2 group-hover:text-brand-gold transition-colors">
                            {w.title}
                         </h3>
                         <div className="flex items-center gap-2 mt-2 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                            <Calendar className="w-3 h-3" />
                            {new Date(w.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                         </div>
                       </div>
                       <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-2 transition-transform shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center pt-48 pb-40 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: "url('/lemuria-assets/backgrounds/beige-texture.jpg')", backgroundSize: 'cover' }}></div>
      
      {/* Ambient Glows */}
      <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          
          {/* Details Section (Column 5) */}
          <div className="lg:col-span-5 space-y-12 self-start lg:sticky lg:top-48 transition-all duration-1000">
            {isCanceled && (
              <div className="bg-red-50/70 backdrop-blur-md border border-red-200/50 p-8 rounded-[30px] mb-8 text-red-600 italic text-sm flex items-center gap-5 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                The energy flow was interrupted. We are holding space for you to try again once your resonance aligns.
              </div>
            )}

            <div className="space-y-6 fade-up">
              <div className="inline-flex items-center gap-4">
                <div className="w-16 h-[1px] bg-brand-gold/70"></div>
                <span className="text-[11px] font-bold text-brand-gold tracking-[0.5em] uppercase font-sans">{type === 'Service' ? 'Private Session' : 'Sacred Immersion'}</span>
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif text-brand-text tracking-tight leading-[1.05]">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-brand-text/40 font-light leading-relaxed italic border-l-2 border-brand-teal/10 pl-8 max-w-lg">
                &ldquo;{item.description}&rdquo;
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 bg-white/60 backdrop-blur-xl rounded-[40px] border border-brand-teal/5 shadow-premium flex flex-col items-center min-w-[160px] hover:shadow-premiumHover transition-smooth">
                <span className="text-4xl font-serif text-brand-teal font-bold">${item.price}</span> 
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.4em] mt-2">Sacred Exchange</span>
              </div>
              
              {type === 'Service' ? (
                <div className="p-8 bg-brand-teal/5 backdrop-blur-md rounded-[40px] border border-brand-teal/10 flex flex-col items-center min-w-[160px]">
                    <span className="text-4xl font-serif text-brand-teal font-bold">{item.duration_minutes || 60}m</span> 
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.4em] mt-2">Vibrational Span</span>
                </div>
              ) : (
                <div className="p-8 bg-brand-teal/5 backdrop-blur-md rounded-[40px] border border-brand-teal/10 flex flex-col items-center min-w-[160px]">
                    <span className="text-4xl font-serif text-brand-teal font-bold">{new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span> 
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.4em] mt-2">Celestial Date</span>
                </div>
              )}
            </div>
          </div>

          {/* Form Card Section (Column 7) */}
          <div className="lg:col-span-7 relative">
            {/* Design Decorative Background */}
            <div className="absolute -inset-10 bg-brand-gold/5 blur-[80px] rounded-full opacity-50 z-0"></div>
            
            <div className="bg-white rounded-[60px] p-12 md:p-20 shadow-premium border border-brand-teal/5 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="mb-16">
                 <h2 className="text-4xl font-serif text-brand-text mb-4">Registration of <span className="text-brand-teal italic font-light">Resonance</span></h2>
                 <p className="text-brand-text/30 font-light text-sm">Please provide your details as they resonate within our circle.</p>
              </div>
              
              <BookingForm serviceId={serviceId} workshopId={workshopId} />
              
              <div className="mt-16 pt-10 border-t border-brand-teal/5 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60">
                 <div className="flex items-center gap-3 text-brand-gold">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Encrypted Sacred Protection</span>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-text/30">
                    <span>AUD CURRENCY</span>
                    <span className="w-1 h-1 bg-brand-teal/20 rounded-full"></span>
                    <span>SECURE STRIPE</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
