import { Button, Card, Chip, Link } from '@heroui/react';
import { BriefcaseBusiness, CircleDollarSign, MapPin } from 'lucide-react';

const jobs = [
  {
    title: 'Frontend Developer',
    description:
      'Build responsive, high-performance web applications using React, Next.js, and modern UI libraries.',
    tags: {
      location: 'New York, USA',
      jobType: 'Hybrid',
      salary: '$60k - $90k/year',
    },
  },
  {
    title: 'Product Designer',
    description:
      'Craft beautiful user journeys, interactive prototypes, and modular design systems for web and mobile platforms.',
    tags: {
      location: 'San Francisco, CA',
      jobType: 'Remote',
      salary: '$110k - $130k/year',
    },
  },
  {
    title: 'DevOps Engineer',
    description:
      'Architect scalable infrastructure, optimize CI/CD pipelines, and secure cloud environments.',
    tags: {
      location: 'London, UK',
      jobType: 'Full-time',
      salary: '£70k - £95k/year',
    },
  },
];

const DiscoverJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold tracking-widest text-white/50 uppercase">
          <span className="w-1.5 h-1.5 bg-violet-600 block shrink-0"></span>
          Smart Job Discovery
          <span className="w-1.5 h-1.5 bg-violet-600 block shrink-0"></span>
        </div>
        <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          The roles you'd never <br />
          find by searching
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job, index) => {
          return (
            <Card
              key={index}
              className="flex flex-col justify-between border border-white/10 bg-[#0b0b0f] p-6 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300 rounded-3xl group"
            >
              <Card.Header className="flex flex-col items-start p-0 mb-6">
                <Card.Title className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                  {job.title}
                </Card.Title>
                <Card.Description className="mt-3 text-sm leading-relaxed text-white/60">
                  {job.description}
                </Card.Description>

                {/* Job Metadata Tags */}
                <div className="flex flex-wrap gap-2 mt-5 w-full">
                  <Chip className="bg-white/5 border border-white/10 text-white/80 py-1 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium">
                    <MapPin className="text-violet-400" size={13} />
                    <Chip.Label>{job.tags.location}</Chip.Label>
                  </Chip>
                  <Chip className="bg-white/5 border border-white/10 text-white/80 py-1 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium">
                    <BriefcaseBusiness className="text-violet-400" size={13} />
                    <Chip.Label>{job.tags.jobType}</Chip.Label>
                  </Chip>
                  <Chip className="bg-white/5 border border-white/10 text-white/80 py-1 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium">
                    <CircleDollarSign className="text-violet-400" size={13} />
                    <Chip.Label>{job.tags.salary}</Chip.Label>
                  </Chip>
                </div>
              </Card.Header>

              <Card.Footer className="p-0 pt-4 border-t border-white/5 flex items-center">
                <Link
                  href="#"
                  className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer no-underline"
                >
                  Apply Now
                  <Link.Icon className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Card.Footer>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA Button */}
      <div className="flex justify-center mt-12">
        <Link href="#" className="no-underline">
          <Button className="h-12 px-6 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/5 cursor-pointer">
            View All Job Openings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverJob;

