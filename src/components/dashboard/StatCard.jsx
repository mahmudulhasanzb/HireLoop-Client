'use client';

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]">

      
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 mb-6">
          <Icon size={26} />
        </div>

        <div>
          <p className="text-sm font-medium text-white/50">{title}</p>

          <h3 className="mt-3 text-4xl font-bold text-white">{value}</h3>
      </div>
      
    </div>
  );
};

export default StatCard;
