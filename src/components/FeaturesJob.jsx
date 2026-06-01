import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const jobs = [
  {
    title: 'Frontend Developer',
    description:
      'Build responsive, high-performance web applications using React, Next.js, and modern UI libraries.',
  },
  {
    title: 'Product Designer',
    description:
      'Craft beautiful user journeys, interactive prototypes, and modular design systems for web and mobile platforms.',
  },
  {
    title: 'DevOps Engineer',
    description:
      'Architect scalable infrastructure, optimize CI/CD pipelines, and secure cloud environments.',
  },
];

const FeaturesJob = () => {
  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
          FEATURES JOB
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Everything you need <br className="hidden sm:inline" />
          to succeed
        </h2>
      </div>

      <div>
        {jobs?.map((job, index) => (
          <Card key={index} className="flex flex-row gap-3 p-1" variant="transparent">
            <Image
              width={100}
              height={100}
              alt="Sound Electro event"
              className="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
              loading="lazy"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg"
            />
            <div className="flex flex-1 flex-col justify-center gap-1">
              <Card.Title className="text-sm">{job.title}</Card.Title>
              <Card.Description >
                {job.description}
              </Card.Description>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturesJob;
