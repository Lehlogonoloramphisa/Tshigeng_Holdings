import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyUsSection from '@/components/home/WhyUsSection';
import OperatingHoursSection from '@/components/home/OperatingHoursSection';
import CTASection from '@/components/home/CTASection';
import { serviceImages } from '@/data/serviceImages';

const IMAGES = {
  hero: serviceImages.cleaningDesk,
  pestControl: serviceImages.pestControl,
  hygiene: serviceImages.hygieneWashroom,
  cleaning: serviceImages.commercialCleaning,
  cleaningMaterials: serviceImages.cleaningSupplies,
};

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={IMAGES.hero} />
      <StatsSection />
      <ServicesPreview
        images={{
          pestControl: IMAGES.pestControl,
          hygiene: IMAGES.hygiene,
          cleaning: IMAGES.cleaning,
          cleaningMaterials: IMAGES.cleaningMaterials,
        }}
      />
      <WhyUsSection />
      <OperatingHoursSection />
      <CTASection />
    </div>
  );
}
