import React from 'react'

const CommuteHeader = () => {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-caps text-amber-500 mb-2 block uppercase font-bold text-xs tracking-widest">Forensic Commute Audit</span>
          <h2 className="font-display-xl text-on-surface flex items-baseline gap-4 flex-wrap">
            <span className="text-slate-500 text-3xl opacity-60 font-bold uppercase">LISTED: 5 min</span>
            <span className="material-symbols-outlined text-primary">arrow_forward</span>
            <span className="text-white text-4xl font-bold uppercase">REALITY: <span className="text-primary">18 min</span></span>
          </h2>
          <p className="font-data-mono text-error mt-2 flex items-center gap-2 font-bold uppercase text-xs">
            <span className="material-symbols-outlined text-sm">warning</span>
            3.6x longer than advertised in developer brochures
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white/5 px-4 py-2 text-xs font-bold border border-white/10 hover:bg-white/10 transition-colors uppercase rounded">Export Audit PDF</button>
          <button className="bg-primary px-4 py-2 text-xs font-bold text-black border border-primary hover:brightness-110 transition-colors uppercase rounded">Save to Comparison</button>
        </div>
      </div>
    </section>
  )
}

export default CommuteHeader
