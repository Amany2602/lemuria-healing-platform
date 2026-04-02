import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { getServices } from '@/actions/services/getServices';
import { getTestimonials } from '@/actions/testimonials/getTestimonials';
import { getWorkshops } from '@/actions/workshops/getWorkshops';

// Dynamically import heavy sections below the fold
const ServicesPreview = dynamic(() => import('@/components/sections/ServicesPreview').then(mod => mod.ServicesPreview), {
  loading: () => <div className="h-96 animate-pulse bg-brand-bg/50 rounded-[40px] m-8" />
});
const HealingJourney = dynamic(() => import('@/components/sections/HealingJourney').then(mod => mod.HealingJourney));
const AboutJenny = dynamic(() => import('@/components/sections/AboutJenny').then(mod => mod.AboutJenny));
const HealingEnvironment = dynamic(() => import('@/components/sections/HealingEnvironment').then(mod => mod.HealingEnvironment));
const WorkshopCountdown = dynamic(() => import('@/components/sections/WorkshopCountdown').then(mod => mod.WorkshopCountdown));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ));
const CallToAction = dynamic(() => import('@/components/sections/CallToAction').then(mod => mod.CallToAction));

export default async function Home() {
  const [services, testimonials, workshops] = await Promise.all([
    getServices(),
    getTestimonials(),
    getWorkshops()
  ]);

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Immersive Hero */}
      <Hero />
      
      {/* 2. Philosophy / Energy Healing Concept */}
      <AboutPreview />
      
      {/* 3. Healing Modalities (Services) */}
      <ServicesPreview services={services} />
      
      {/* 4. Guided Healing Journey */}
      <HealingJourney />
      
      {/* 5. About the Practitioner */}
      <AboutJenny />

      {/* 6. Healing Environment */}
      <HealingEnvironment />
      
      {/* 7. Sound Healing Workshop (Countdown) */}
      <WorkshopCountdown workshop={workshops[0]} />
      
      {/* 8. Transformation Testimonials */}
      <Testimonials />
      
      {/* 9. FAQ Section */}
      <FAQ />

      {/* 10. Call to Action */}
      <CallToAction />
    </div>
  );
}
