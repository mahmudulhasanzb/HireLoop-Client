import React from 'react';
import { getCompanyJobs } from '@/lib/api/jobs';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const RecruiterJobs = async () => {
  const companyId = 'company_123'; // todo
  const jobs = (await getCompanyJobs(companyId)) || [];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Recent Job Posts</h2>
        <Link 
          href="/dashboard/recruiter/jobs/new" 
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Post a Job
        </Link>
      </div>

      {/* Table Card Container */}
      <div className="bg-[#121214] border border-zinc-900 rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800/80">
                <th className="px-6 py-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Job Title</th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Category</th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Job Type</th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Salary Range</th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 text-sm">
                    No job posts found.
                  </td>
                </tr>
              ) : (
                jobs.map((job) => {
                  const firstLetter = job.jobTitle ? job.jobTitle.charAt(0).toUpperCase() : 'J';
                  
                  // Style pill based on status
                  let badgeStyles = 'bg-zinc-800/40 text-zinc-300 border-zinc-700/50';
                  if (job.status === 'active' || job.status === 'Approved') {
                    badgeStyles = 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50';
                  } else if (job.status === 'inactive' || job.status === 'Rejected') {
                    badgeStyles = 'bg-red-950/40 text-red-400 border border-red-900/50';
                  } else if (job.status === 'pending' || job.status === 'Reviewing') {
                    badgeStyles = 'bg-amber-950/40 text-amber-400 border border-amber-900/50';
                  }

                  return (
                    <tr key={job._id} className="hover:bg-zinc-900/30 transition-colors">
                      {/* Job Title with Avatar */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-300 font-semibold text-sm border border-zinc-700/30">
                            {firstLetter}
                          </div>
                          <span className="font-semibold text-white text-sm">{job.jobTitle}</span>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-sm">
                        {job.jobCategory}
                      </td>

                      {/* Job Type */}
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-sm">
                        {job.jobType}
                      </td>

                      {/* Salary Range */}
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-sm">
                        {job.minSalary && job.maxSalary 
                          ? `${job.currency || '$'}${job.minSalary} - ${job.currency || '$'}${job.maxSalary}`
                          : 'N/A'}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border capitalize ${badgeStyles}`}>
                          {job.status || 'Active'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecruiterJobs;
