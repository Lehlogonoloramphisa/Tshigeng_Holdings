import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyUsSection from '@/components/home/WhyUsSection';
import OperatingHoursSection from '@/components/home/OperatingHoursSection';
import CTASection from '@/components/home/CTASection';

const IMAGES = {
  hero: 'https://images.pexels.com/photos/27085598/pexels-photo-27085598.jpeg?auto=compress&cs=tinysrgb&w=1600',
  pestControl: 'https://images.pexels.com/photos/4099466/pexels-photo-4099466.jpeg?auto=compress&cs=tinysrgb&w=1200',
  hygiene: 'https://images.pexels.com/photos/5938598/pexels-photo-5938598.jpeg?auto=compress&cs=tinysrgb&w=1200',
  facilityMgmt: 'https://images.pexels.com/photos/5668879/pexels-photo-5668879.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cleaning: 'https://images.pexels.com/photos/11137247/pexels-photo-11137247.jpeg?auto=compress&cs=tinysrgb&w=1200',
  environmental: 'https://images.pexels.com/photos/16898981/pexels-photo-16898981.jpeg?auto=compress&cs=tinysrgb&w=1200',
  landscaping: 'https://images.pexels.com/photos/5668879/pexels-photo-5668879.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cleaningMaterials: 'https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
          facilityMgmt: IMAGES.facilityMgmt,
          cleaning: IMAGES.cleaning,
          environmental: IMAGES.environmental,
          landscaping: IMAGES.landscaping,
          cleaningMaterials: IMAGES.cleaningMaterials,
        }}
      />
      <WhyUsSection />
      <OperatingHoursSection />
      <CTASection />
    </div>
  );
}
