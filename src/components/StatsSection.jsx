'use client';

import { BriefcaseBusiness, Building2, Users, Star } from 'lucide-react';
import globeImg from '@/assets/images/globe.png';
import Image from 'next/image';

const stats = [
  {
    id: 1,
    title: 'Active Jobs',
    value: '50K',
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: 'Companies',
    value: '12K',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Job Seekers',
    value: '2M',
    icon: Users,
  },
  {
    id: 4,
    title: 'Satisfaction Rate',
    value: '97%',
    icon: Star,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={globeImg}
          alt="Globe Background"
          className="pointer-events-none absolute top-0 w-full h-auto opacity-60"
        />
      </div>

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_45%)]" />

      {/* Stars Effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Assisting over{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              15,000
            </span>{' '}
            job seekers
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(item => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon size={22} className="text-violet-400" />
                </div>

                {/* Value */}
                <h3 className="text-5xl font-bold tracking-tight text-white">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-base text-white/60">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
