'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Zap,
  ArrowRight,
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
  const [mode, setMode] = useState('developer'); // 'developer' or 'recruiter'

  // Mouse hover glow effect
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (location) params.set('location', location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden bg-black px-4 pb-28 pt-16 text-white sm:px-6 lg:px-8 min-h-[85vh] flex items-center"
    >
      {/* Style overrides for custom animations */}
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />

      {/* Dynamic Mouse Aura Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px] transition-all duration-300 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* Static Glows */}
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-10 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />

      {/* Constellation Dots */}
      <div className="absolute bottom-20 left-20 h-1.5 w-1.5 rounded-full bg-violet-500/50 blur-[1px]" />
      <div className="absolute right-24 top-40 h-1.5 w-1.5 rounded-full bg-indigo-500/50 blur-[1px]" />
      <div className="absolute bottom-32 right-1/3 h-1 w-1 rounded-full bg-fuchsia-500/50 blur-[1px]" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-center text-center lg:text-left">
          
          {/* Left Column: Hero Text & Search */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            
            {/* AI Badge */}
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
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Supercharge your <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                tech career
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
              HireLoop is the intelligent developer-first job platform. Upload your profile and let our AI matching engine source the perfect role.
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
                  <Search size={18} className="absolute left-3.5 text-white/40 z-10" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Job title, skill or company"
                    className="w-full h-12 pl-11 pr-4 bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.07] text-white placeholder:text-white/40 border border-white/5 focus:border-violet-500/50 rounded-xl text-sm transition-all outline-none"
                  />
                </div>

                {/* Divider for desktop */}
                <div className="hidden sm:block h-6 w-px bg-white/10" />

                {/* Location Input */}
                <div className="flex-1 relative flex items-center">
                  <MapPin size={18} className="absolute left-3.5 text-white/40 z-10" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location or Remote"
                    className="w-full h-12 pl-11 pr-4 bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.07] text-white placeholder:text-white/40 border border-white/5 focus:border-violet-500/50 rounded-xl text-sm transition-all outline-none"
                  />
                </div>

                {/* Search Button */}
                <Button
                  onClick={handleSearch}
                  className="h-12 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  Find Jobs
                </Button>
              </div>
            </div>

            {/* Trending Tags */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs text-white/40 uppercase tracking-wider font-semibold mr-1">Trending:</span>
              {trendingTags.map((tag) => (
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

          {/* Right Column: AI Matching Dashboard Preview */}
          <div className="lg:col-span-5 relative w-full hidden lg:block">
            {/* Outer Glows for Card */}
            <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />

            {/* Main Interactive Container */}
            <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-fuchsia-500/5 opacity-50" />

              {/* Recruiter / Developer View Toggle */}
              <div className="relative flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex rounded-full bg-white/[0.04] p-1 border border-white/5">
                  <button
                    onClick={() => setMode('developer')}
                    className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      mode === 'developer'
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Dev View
                  </button>
                  <button
                    onClick={() => setMode('recruiter')}
                    className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      mode === 'recruiter'
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Recruiter View
                  </button>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE ENGINE
                </div>
              </div>

              {/* Dynamic Content Panel */}
              {mode === 'developer' ? (
                <div key="developer" className="animate-fade-in">
                  
                  {/* Match Meter */}
                  <div className="relative flex flex-col items-center justify-center py-5 bg-white/[0.02] border border-white/5 rounded-2xl mb-5">
                    <div className="relative flex items-center justify-center h-28 w-28 rounded-full border-4 border-violet-500/20 border-t-violet-500 animate-spin-slow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                      <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">98%</span>
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Score</span>
                    </div>
                    <p className="text-xs text-white/60 mt-3 font-medium">Next.js Lead Role Matched</p>
                  </div>

                  {/* Skills Match Status */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-white/70 bg-white/[0.01] border border-white/5 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>React • Tailwind • AI Integration</span>
                      </div>
                      <span className="text-violet-400 font-semibold">100% Match</span>
                    </div>

                    {/* Job Match Card */}
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-violet-950/20 to-fuchsia-950/20 p-4 shadow-md transition-transform duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
                            Stripe
                          </span>
                          <h5 className="font-bold text-sm text-white mt-2.5">Senior Frontend Lead</h5>
                          <p className="text-xs text-white/50">Remote (US/Canada)</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-white">$165k</span>
                          <p className="text-[9px] text-emerald-400 flex items-center justify-end gap-0.5 mt-0.5">
                            <TrendingUp size={10} /> +12% market
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                          <BriefcaseBusiness size={12} /> Full-time
                        </div>
                        <button className="flex items-center gap-1 text-xs font-bold text-violet-300 hover:text-white transition-colors">
                          Quick Apply <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div key="recruiter" className="animate-fade-in">
                  
                  {/* Match Meter */}
                  <div className="relative flex flex-col items-center justify-center py-5 bg-white/[0.02] border border-white/5 rounded-2xl mb-5">
                    <div className="relative flex items-center justify-center h-28 w-28 rounded-full border-4 border-fuchsia-500/20 border-t-fuchsia-500 animate-spin-slow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                      <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">99%</span>
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Rank</span>
                    </div>
                    <p className="text-xs text-white/60 mt-3 font-medium">Top Candidate Selected</p>
                  </div>

                  {/* Skills Match Status */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-white/70 bg-white/[0.01] border border-white/5 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>TypeScript • Python • LLM Tuning</span>
                      </div>
                      <span className="text-fuchsia-400 font-semibold">Verified Talent</span>
                    </div>

                    {/* Candidate Match Card */}
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-950/20 to-violet-950/20 p-4 shadow-md transition-transform duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-500/10 px-2.5 py-1 rounded-full border border-fuchsia-500/20">
                            Candidate Profile
                          </span>
                          <h5 className="font-bold text-sm text-white mt-2.5">Sarah Chen</h5>
                          <p className="text-xs text-white/50">Lead Developer @ OpenAI (Former)</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-white">99% Match</span>
                          <p className="text-[9px] text-fuchsia-400 flex items-center justify-end gap-0.5 mt-0.5">
                            Rank #1
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                          <Sparkles size={12} className="text-fuchsia-400 animate-pulse" /> Active Search
                        </div>
                        <button className="flex items-center gap-1 text-xs font-bold text-fuchsia-300 hover:text-white transition-colors">
                          Request Interview <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

