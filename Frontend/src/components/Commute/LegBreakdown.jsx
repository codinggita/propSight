import React from 'react'

const LegRow = ({ icon, label, time, exp, progress, expProgress }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-500 text-lg">{icon}</span>
        <span className="font-mono text-[10px] text-on-surface font-bold uppercase">{label}</span>
      </div>
      <div className="text-right">
        <span className="block font-data-mono text-primary text-xs font-bold uppercase">{time} <span className="text-slate-500 text-[10px] font-normal">/ {exp} exp</span></span>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="h-1 bg-slate-700/30 rounded-full w-full relative overflow-hidden">
        <div className="absolute h-full bg-slate-400" style={{ width: `${expProgress}%` }}></div>
      </div>
      <div className="h-1 bg-amber-500/20 rounded-full w-full relative overflow-hidden">
        <div className="absolute h-full bg-amber-500" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
)

const LegBreakdown = () => {
  return (
    <div className="glass-panel p-5 rounded-xl bg-white/5 border border-white/10">
      <h3 className="font-label-caps text-on-surface mb-6 uppercase font-bold text-xs">Breakdown by Leg</h3>
      <div className="space-y-6">
        <LegRow icon="garage" label="INTERNAL EXIT" time="4m" exp="1m" progress={80} expProgress={20} />
        <LegRow icon="traffic" label="MAIN ARTERY" time="12m" exp="3m" progress={90} expProgress={25} />
        <LegRow icon="local_parking" label="U-TURN DELAY" time="2m" exp="1m" progress={60} expProgress={50} />
        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] font-label-caps text-slate-500 uppercase font-bold">Audit Result</span>
          <span className="font-data-mono text-xs text-amber-500 font-bold uppercase">TOTAL DELAY: +14 min vs listed</span>
        </div>
      </div>
    </div>
  )
}

export default LegBreakdown
