import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import ctaBg from '@/assets/images/cta-bg.png';

const CTA = () => {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          width={1920}
          height={1080}
          src={ctaBg}
          alt="cta-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl text-white font-semibold">
          Your next role is <br />
          already looking for you
        </h1>
        <p className="text-gray-500 text-lg mt-2">
          Build a profile in three minutes. The matches start arriving tommorrow
          morning.{' '}
        </p>
        <div className="flex gap-4 mt-4">
          <Button variant="primary" size="lg">
            Create a free account
          </Button>
          <Button variant="outline" size="lg">
            View pricing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
