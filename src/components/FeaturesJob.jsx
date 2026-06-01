import React from 'react';
import {
  Search,
  LineChart,
  BarChart3,
  Bookmark,
  MousePointerClick,
  FileText,
  Hexagon,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    title: 'Smart Search',
    description: 'Find your ideal job with advanced filters.',
    icon: Search,
  },
  {
    title: 'Salary Insights',
    description: 'Get real salary data to negotiate confidently.',
    icon: LineChart,
  },
  {
    title: 'Top Companies',
    description: 'Apply to vetted companies that are hiring.',
    icon: BarChart3,
  },
  {
    title: 'Saved Jobs',
    description: 'Manage apps & favorites on your dashboard.',
    icon: Bookmark,
  },
  {
    title: 'One-Click Apply',
    description: 'Simplify your job applications for an easier process!',
    icon: MousePointerClick,
  },
  {
    title: 'Resume Builder',
    description: 'Create professional resumes with modern templates.',
    icon: FileText,
  },
  {
    title: 'Skill-Based Matching',
    description: 'Discover jobs that match your skills and experience.',
    icon: Hexagon,
  },
  {
    title: 'Career Growth Resources',
    description: 'Boost your career with quick interview tips.',
    icon: TrendingUp,
  },
];

const FeaturesJob = () => {
  return (
    <section className="bg-[#09090b] border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2.5 text-xs font-bold tracking-widest text-white/50 uppercase">
            <span className="w-1.5 h-1.5 bg-violet-600 block shrink-0"></span>
            FEATURES JOB
            <span className="w-1.5 h-1.5 bg-violet-600 block shrink-0"></span>
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Everything you need <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                {/* Icon Container */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.02] transition-all duration-300">
                  <Icon className="h-6 w-6 text-violet-400 group-hover:scale-105 transition-transform duration-300" />
                </div>
                {/* Text Content */}
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesJob;

