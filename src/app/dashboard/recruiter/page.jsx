'use client';
import React from 'react';
import { useSession } from '@/lib/auth-client';
import DashboardStats from '@/components/dashboard/DashboardStats';
import {
  BriefcaseBusiness,
  Users,
  BadgeCheck,
  CircleOff,
} from 'lucide-react';


const statsData = [
  {
    title: 'Total Job Posts',
    value: '128',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Total Applicants',
    value: '2,540',
    icon: Users,
  },
  {
    title: 'Active Jobs',
    value: '84',
    icon: BadgeCheck,
  },
  {
    title: 'Jobs Closed',
    value: '44',
    icon: CircleOff,
  },
];

const RecruiterDashboardHomePage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold">
        Loading...
      </div>
    );
  }

  const user = session?.user;

  return (
    <div>
      <div className='space-y-6'>
        <h2 className="text-2xl font-bold">Welcome back, {user?.name}</h2>
        <DashboardStats statsData={statsData} />
      </div>

      <div>
        
      </div>

    </div>
  );
};

export default RecruiterDashboardHomePage;
