import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import ctaBg from '@/assets/images/cta-bg.png';

const CTA = () => {
  return (
    <section className="relative w-full bg-black py-32 sm:py-40 overflow-hidden flex flex-col items-center justify-center text-center mt-10">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          width={1920}
          height={1080}
          src={ctaBg}
          alt="cta-background"
          className="w-full h-full object-cover object-top opacity-80"
          priority
        />
        {/* Soft gradient blends to match with previous black sections */}
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
          Your next role is <br className="hidden sm:inline" />
          already looking for you
        </h2>
        <p className="text-white/60 text-sm sm:text-base md:text-lg mt-4 max-w-xl leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center">
          <Button className="h-12 px-6 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/5 cursor-pointer">
            Create a free account
          </Button>
          <Button className="h-12 px-6 rounded-2xl bg-white/[0.02] hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold text-sm transition-all duration-200 cursor-pointer">
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

