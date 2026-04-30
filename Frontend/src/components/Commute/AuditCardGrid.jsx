import React from 'react'

const AuditCard = ({ icon, title, children }) => (
  <div className="glass-panel p-4 rounded-xl bg-white/5 border border-white/10">
    <div className="flex items-center gap-2 mb-4">
      <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
      <span className="font-label-caps text-on-surface uppercase font-bold text-[10px] tracking-widest">{title}</span>
    </div>
    {children}
  </div>
)

const AuditCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AuditCard icon="calendar_clock" title="Best Time To Commute">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 mb-1 font-bold uppercase">
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>10 PM</span>
          </div>
          <div className="h-3 flex gap-0.5">
            <div className="flex-1 bg-primary/20"></div>
            <div className="flex-1 bg-primary/40"></div>
            <div className="flex-1 bg-error/40"></div>
            <div className="flex-1 bg-error/80"></div>
            <div className="flex-1 bg-error/100"></div>
            <div className="flex-1 bg-error/60"></div>
            <div className="flex-1 bg-primary/40"></div>
            <div className="flex-1 bg-primary/20"></div>
          </div>
          <p className="text-[10px] font-mono text-primary mt-3 uppercase font-bold">Window found: 7:15 AM (12 min)</p>
        </div>
      </AuditCard>
      <AuditCard icon="visibility" title="Safety Index (9PM)">
        <div className="flex items-end justify-between">
          <div>
            <span className="block font-display-xl text-3xl font-bold text-white leading-none">62<span className="text-lg">%</span></span>
            <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase font-bold">LIT STREET COVERAGE</p>
          </div>
          <div className="text-right">
            <span className="bg-amber-500 text-black px-2 py-0.5 rounded-full text-[8px] font-bold uppercase">SUSPICIOUS</span>
          </div>
        </div>
      </AuditCard>
      <AuditCard icon="rainy" title="Monsoon Impact">
        <div className="flex items-end justify-between">
          <div>
            <span className="block font-display-xl text-3xl font-bold text-white leading-none">14</span>
            <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase font-bold">WATERLOGGING DAYS / YEAR</p>
          </div>
          <div className="text-right flex flex-col gap-1">
            <span className="bg-error text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase">CRITICAL</span>
            <span className="border border-primary text-primary px-2 py-0.5 rounded-full text-[8px] font-bold uppercase">LOW RISK ZONE</span>
          </div>
        </div>
      </AuditCard>
    </div>
  )
}

export default AuditCardGrid
