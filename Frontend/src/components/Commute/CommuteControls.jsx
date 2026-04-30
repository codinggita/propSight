import React from 'react'

const TimeButton = ({ label, sub, active }) => (
  <button className={`flex-1 py-2 px-1 rounded-full flex flex-col items-center justify-center transition-all ${active ? 'bg-primary text-black' : 'text-slate-500 hover:bg-white/5'}`}>
    <span className="text-[10px] font-mono font-bold uppercase flex items-center gap-1">
      {label} {active && <span className="material-symbols-outlined text-[12px]">check_circle</span>}
    </span>
    <span className="text-[8px] font-mono opacity-80 font-bold">{sub}</span>
  </button>
)

const ModeButton = ({ icon, label, active }) => (
  <button className={`flex-1 aspect-square glass-panel flex flex-col items-center justify-center gap-1 group rounded-lg border transition-all ${active ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/5 opacity-50 hover:opacity-100'}`}>
    <span className={`material-symbols-outlined transition-transform group-hover:scale-110 ${active ? 'text-primary' : 'text-slate-400'}`}>{icon}</span>
    <span className={`text-[9px] font-mono font-bold uppercase ${active ? 'text-primary' : 'text-slate-400'}`}>{label}</span>
  </button>
)

const CommuteControls = () => {
  return (
    <div className="glass-panel p-5 space-y-6 rounded-xl bg-white/5 border border-white/10">
      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Property Destination</label>
        <div className="flex flex-wrap gap-2">
          <span className="bg-primary text-black px-2 py-1 rounded-sm text-[10px] font-mono flex items-center gap-1 font-bold">
            VERIFIED <span className="material-symbols-outlined text-[10px] cursor-pointer">check_circle</span>
          </span>
          <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-sm text-[10px] font-mono flex items-center gap-1 font-bold">
            ADANI SHANTIGRAM <span className="material-symbols-outlined text-[10px] cursor-pointer">close</span>
          </span>
        </div>
      </div>
      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Time Context</label>
        <div className="flex border border-white/10 rounded-full overflow-hidden bg-white/5 p-1">
          <TimeButton label="MORNING" sub="8-10 AM" active />
          <TimeButton label="EVENING" sub="6-8 PM" />
          <TimeButton label="OFF-PEAK" sub="1-3 PM" />
        </div>
      </div>
      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Transport Mode</label>
        <div className="flex gap-2">
          <ModeButton icon="directions_car" label="DRIVE" active />
          <ModeButton icon="train" label="METRO" />
          <ModeButton icon="two_wheeler" label="BIKE" />
        </div>
      </div>
    </div>
  )
}

export default CommuteControls
