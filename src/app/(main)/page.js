import Banner from '@/components/Banner';
import StatsSection from '@/components/StatsSection';
import Image from 'next/image';
import globeImg from '@/assets/images/globe.png';
import DiscoverJob from '@/components/DiscoverJob';
import FeaturesJob from '@/components/FeaturesJob';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="bg-black">
      <div className="relative bg-black overflow-hidden">
        {/* Shared Globe Background */}
        <div className="absolute inset-0 flex justify-center pointer-events-none z-0 overflow-hidden">
          <Image
            src={globeImg}
            alt="Globe Background"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[180%] sm:w-[130%] md:w-full min-w-[800px] md:min-w-0 h-auto opacity-60 pointer-events-none max-w-none"
            priority
          />
        </div>
        
        {/* Bottom Fade Gradient to blend with footer/subsequent sections */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />

        <div className="relative z-10">
          <Banner />
          <StatsSection />
        </div>
      </div>
      <DiscoverJob />
      <FeaturesJob />
      <Pricing />
      <CTA/>
    </main>
  );
}
