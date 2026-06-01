'use client';
import React, { useState } from 'react';
import { Crown, BarChart3, Zap } from 'lucide-react';
import PricingCard from './PricingCard';
import { Button } from '@heroui/react';

const plans = [
  {
    title: 'Starter',
    icon: Crown,
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Start building your insights hub:',
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
    isHighlighted: false,
  },
  {
    title: 'Growth',
    icon: BarChart3,
    priceMonthly: 17,
    priceYearly: 12,
    description: 'Start building your insights hub:',
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
    isHighlighted: true,
  },
  {
    title: 'Premium',
    icon: Zap,
    priceMonthly: 99,
    priceYearly: 74,
    description: 'Start building your insights hub:',
    features: [
      'Everything in Growth',
      'Multi-profile career portfolios',
      'Shared talent rooms',
      'Recruiter view (read-only)',
    ],
    isHighlighted: false,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section  */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-bold tracking-widest text-white/50 uppercase">
            <span className="w-1.5 h-1.5 bg-violet-600 block shrink-0"></span>
            PRICING
            <span className="w-1.5 h-1.5 bg-violet-600 block shrink-0"></span>
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Custom Billing Cycle Switcher */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-[#0b0b0f] border border-white/10 rounded-full p-1 shadow-inner max-w-fit">
            <Button
              onClick={() => setBillingCycle('monthly')}
              variant={billingCycle === 'monthly' ? 'solid' : 'light'}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setBillingCycle('yearly')}
              variant={billingCycle === 'yearly' ? 'solid' : 'light'}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Yearly
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-black text-white'
                    : 'bg-fuchsia-500 text-white'
                }`}
              >
                25%
              </span>
            </Button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map(plan => (
            <PricingCard
              key={plan.title}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
