import React from 'react'

const LayerToggle = ({ icon, label, active, error }) => (
  <button className={`bg-[#0A0F14]/90 backdrop-blur p-2 border flex items-center gap-2 text-[10px] font-mono uppercase font-bold rounded ${active ? 'border-primary text-primary' : error ? 'border-error text-error' : 'border-white/10 text-slate-400'}`}>
    <span className="material-symbols-outlined text-sm">{icon}</span> {label}
  </button>
)

const CommuteMap = () => {
  return (
    <div className="flex-1 glass-panel relative min-h-[500px] overflow-hidden rounded-xl bg-white/5 border border-white/10">
      {/* Map Layers Toggle */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <LayerToggle icon="straighten" label="Advertised Route" />
        <LayerToggle icon="route" label="Actual Road Route" active />
        <LayerToggle icon="dangerous" label="Bottlenecks" error />
      </div>
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-[#0d1512]">
        <img className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBtbx7Ax-onblxYGcJ_-TPAJXe38BfNqwjBK-x6CPbD9um0za1tgp_K4RIHu8QWI0lvHIVoSx_9SlfrDW3x6LnQMwNwUfgAnp_fYwngXlw0sseCLndYRBXgBKNZsnaBkCElXaoKo6D2WsBoPFcPlXUO83ZcHpxkN2xJpVKXoMCcppa2eASM5SgJXzIou0ziH0LGZwqWk52r5-RC65HMM-4P3v50SDOvxSJQg9VCQImiXdgaYmX-bIcPlmldI9btSiwK5hwEj_ypSc" alt="Map" />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
          <line opacity="0.6" stroke="#475569" strokeDasharray="8,4" strokeWidth="2" x1="200" x2="800" y1="400" y2="200"></line>
          <path d="M 200 400 L 250 420 L 350 410 L 400 350 L 550 360 L 600 300 L 750 250 L 800 200" fill="none" stroke="#00D4AA" strokeLinejoin="round" strokeWidth="4"></path>
          <circle className="animate-pulse" cx="400" cy="350" fill="#FF4D4D" fillOpacity="0.3" r="15"></circle>
          <circle cx="400" cy="350" fill="#FF4D4D" r="4"></circle>
          <circle className="animate-pulse" cx="600" cy="300" fill="#FF4D4D" fillOpacity="0.3" r="15"></circle>
          <circle cx="600" cy="300" fill="#FF4D4D" r="4"></circle>
        </svg>
      </div>
      {/* Bottleneck Street View */}
      <div className="absolute bottom-4 left-4 w-48 aspect-video glass-panel overflow-hidden border-error/50 rounded-lg">
        <div className="absolute top-1 left-1 z-10 bg-error px-1.5 py-0.5 text-[8px] font-bold text-white uppercase">CRITICAL</div>
        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7pyX2a3NMkcwL9tWkJ1lo1NkxDgdewCrKf54BB_fh6lIV81eXNm-5v2uV6kpbIHQnWvhJJQgdrfT2QUeQfkKKcnt6DJ-rSXroUKFpWHfC-C3JvUprHLpEYqwTFr8s55NTMyYJCJbxSD_HXipP_2l9uvOfm9HIfkoaS0864nVJTP8dJEcG2jcHslwdW2hbQe5L83U83h2qlTkNz1BW3ym5W9JLvOXlZglgfG3oKKLvDZL2MPj5f98ucNobLRtsPy-5BuIanRiVExk" alt="Bottleneck" />
        <div className="absolute bottom-0 inset-x-0 bg-black/60 p-1">
          <p className="text-[9px] font-mono text-white leading-tight uppercase font-bold">Sarjapur Junction Peak: 8.5 min delay</p>
        </div>
      </div>
    </div>
  )
}

export default CommuteMap
