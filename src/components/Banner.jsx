'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import {
  Search,
  MapPin,
  Sparkles,
  CheckCircle2,
  Zap,
  Brain,
} from 'lucide-react';

const trendingTags = [
  'Frontend Developer',
  'AI Engineer',
  'DevOps Engineer',
  'Product Designer',
];

export default function Banner() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');



  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (location) params.set('location', location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-transparent px-4 pb-28 pt-16 text-white sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
      {/* Style for custom animations */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl w-full ">
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-violet-300 uppercase flex items-center gap-1">
              <Sparkles size={11} className="text-violet-400 animate-pulse" />
              AI-Powered Tech Career Matcher
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center">
            Supercharge your <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              tech career
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-white/60 text-center leading-relaxed max-w-xl">
            HireLoop is the next-generation developer-first career engine.
            Upload your profile and let our AI matchmaker connect you with elite
            tech teams.
          </p>

          {/* Micro Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>100% Confidential</span>
            </div>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Zap size={14} className="text-fuchsia-400" />
              <span>AI Skill-Mapping</span>
            </div>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Brain size={14} className="text-cyan-400" />
              <span>Auto-Apply Option</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="mt-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-2.5 shadow-2xl backdrop-blur-xl relative group">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-10 blur-sm transition-all duration-500 group-hover:opacity-20" />
            <div className="relative flex flex-col gap-2.5 sm:flex-row sm:items-center">
              {/* Search Input */}
              <div className="flex-1 relative flex items-center">
                <Search
                  size={18}
                  className="absolute left-3.5 text-white/40 z-10"
                />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Job title, skill or company"
                  className="w-full h-12 pl-11 pr-4 bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.07] text-white placeholder:text-white/40 border border-white/5 focus:border-violet-500/50 rounded-xl text-sm transition-all outline-none"
                />
              </div>

              {/* Divider for desktop */}
              <div className="hidden sm:block h-6 w-px bg-white/10" />

              {/* Location Input */}
              <div className="flex-1 relative flex items-center">
                <MapPin
                  size={18}
                  className="absolute left-3.5 text-white/40 z-10"
                />
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="Location or Remote"
                  className="w-full h-12 pl-11 pr-4 bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.07] text-white placeholder:text-white/40 border border-white/5 focus:border-violet-500/50 rounded-xl text-sm transition-all outline-none"
                />
              </div>

              {/* Search Button */}
              <Button
                onClick={handleSearch}
                className="h-12 w-full sm:w-auto px-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Find Jobs
              </Button>
            </div>
          </div>

          {/* Trending Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="text-xs text-white/40 uppercase tracking-wider font-semibold mr-1">
              Trending:
            </span>
            {trendingTags.map(tag => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 backdrop-blur-md ${
                  query === tag
                    ? 'bg-violet-500/20 border-violet-500/50 text-violet-300 font-medium'
                    : 'bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
