import React from 'react'
import { Link } from 'react-router-dom'

const AuthLeftPanel = () => {
  return (
    <section className="hidden md:flex md:w-1/2 flex-col justify-between p-12 bg-[#0D151C] relative overflow-hidden border-r border-white/5">
      <div className="absolute inset-0 radial-glow pointer-events-none"></div>
      
      <div className="relative z-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
          <h1 className="text-lg font-bold tracking-tighter text-primary uppercase font-headline-lg">PropSight 360</h1>
        </Link>
        <p className="text-[12px] text-on-surface-variant mt-1 tracking-wider">Transparency First</p>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="font-bold text-[48px] leading-[1.1] text-on-surface mb-8">
          India's first real estate<br />
          <span className="text-primary">intelligence platform.</span>
        </h2>
        <div className="flex flex-col gap-3 items-start">
          <div className="bg-surface-container-high border border-white/5 px-4 py-2 rounded-full flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[18px]">search</span>
            <span className="font-data-mono text-[13px] uppercase">2.4M Listings Scanned</span>
          </div>
          <div className="bg-surface-container-high border border-white/5 px-4 py-2 rounded-full flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[18px]">domain</span>
            <span className="font-data-mono text-[13px] uppercase">847 Localities Mapped</span>
          </div>
          <div className="bg-surface-container-high border border-white/5 px-4 py-2 rounded-full flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
            <span className="font-data-mono text-[13px] uppercase">14 Verification Signals</span>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <p className="font-label-caps text-on-surface-variant mb-6">Aggregate Data Source Integrity</p>
        <div className="flex items-center gap-8 grayscale opacity-50 mb-10 overflow-hidden">
          <div className="text-white font-black text-sm tracking-tight">NoBroker</div>
          <div className="text-white font-bold text-xs border border-white/20 px-1">RERA Gujarat</div>
        </div>
        <div className="flex items-center gap-6 border-t border-white/5 pt-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">lock</span>
            <span className="font-label-caps text-on-surface-variant">BANK-GRADE SECURITY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">verified</span>
            <span className="font-label-caps text-on-surface-variant">RERA AUTHORIZED</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthLeftPanel
