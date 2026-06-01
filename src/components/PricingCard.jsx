import { Button } from '@heroui/react';
import { Plus, ArrowRight } from 'lucide-react';

export default function PricingCard({ plan, billingCycle }) {
  const {
    title,
    icon: Icon,
    priceMonthly,
    priceYearly,
    description,
    features,
    isHighlighted,
  } = plan;

  const price = billingCycle === 'yearly' ? priceYearly : priceMonthly;

  return (
    <div
      className={`w-full rounded-3xl border p-6 text-white shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between group ${
        isHighlighted
          ? 'border-violet-500/30 bg-[#0d0d12] shadow-[0_0_50px_rgba(139,92,246,0.08)] scale-[1.02] md:scale-105'
          : 'border-white/10 bg-[#08080a] hover:border-white/20'
      }`}
    >
      {/* Card Header & Content */}
      <div>
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl border bg-white/[0.03] ${
                isHighlighted ? 'border-violet-500/20 text-violet-400' : 'border-white/10 text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold tracking-wide">{title}</h3>
          </div>

          <div className="text-right">
            <div className="flex items-baseline justify-end">
              <span className="text-4xl font-extrabold leading-none">${price}</span>
              <span className="text-xs text-white/50 ml-1">/month</span>
            </div>
          </div>
        </div>

        {/* Features Content */}
        <div>
          <p className="mb-5 text-sm text-white/80 font-semibold">{description}</p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-white/60">
                {/* Custom Plus Icon Box */}
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/50 text-xs font-bold select-none">
                  <Plus className="h-3 w-3" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Button
        radius="lg"
        className={`mt-10 h-14 w-full font-bold text-base flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
          isHighlighted
            ? 'bg-white text-black hover:bg-white/90 shadow-lg shadow-white/5'
            : 'bg-white/[0.08] text-white hover:bg-white/15 border border-white/5'
        }`}
      >
        Choose This Plan
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
    </div>
  );
}

