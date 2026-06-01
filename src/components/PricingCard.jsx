import { Button } from '@heroui/react';
import { Plus, ArrowRight, BarChart3 } from 'lucide-react';

export default function PricingCard() {
  const features = [
    'Daily AI match brief (top 5)',
    'Verified salary bands',
    'Company insight dashboards',
    '1-click apply, unlimited',
  ];

  return (
    <div className="w-full max-w-[320px] rounded-3xl border border-white/10 bg-[#0b0b0f] p-6 text-white shadow-[0_0_40px_rgba(255,255,255,0.04)]">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
            <BarChart3 className="h-5 w-5 text-violet-300" />
          </div>

          <h3 className="text-xl font-medium">Growth</h3>
        </div>

        <div className="text-right">
          <div className="flex items-start">
            <span className="text-5xl font-semibold leading-none">$17</span>
            <span className="mt-2 text-sm text-white/60">/month</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="mb-5 text-sm text-white/80">
          Start building your insights hub:
        </p>

        <div className="space-y-4">
          {features.map(item => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-white/55"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]">
                <Plus className="h-3 w-3" />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <Button
        radius="lg"
        className="mt-10 h-14 w-full bg-white text-black font-medium text-base hover:opacity-90"
        endContent={<ArrowRight size={18} />}
      >
        Choose This Plan
      </Button>
    </div>
  );
}
