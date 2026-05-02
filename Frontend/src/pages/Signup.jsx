import React from 'react'
import { Link } from 'react-router-dom'
import TrustPill from '../components/Auth/TrustPill'
import SignupForm from '../components/Auth/SignupForm'

const Signup = () => {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col md:flex-row">
        {/* Left: Brand Panel */}
        <section className="relative hidden md:flex md:w-5/12 lg:w-1/2 flex-col justify-between p-12 overflow-hidden bg-[#08100d]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/10 via-transparent to-transparent"></div>
          </div>
          <header className="relative z-10">
            <Link to="/" className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#00d4aa] text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
              <div>
                <div className="text-xl font-bold tracking-tight text-[#00d4aa] font-headline-lg leading-none uppercase">PropSight 360</div>
                <div className="text-[12px] text-slate-500 mt-1 font-bold uppercase tracking-wider">Transparency First</div>
              </div>
            </Link>
          </header>
          <div className="relative z-10 max-w-lg">
            <h1 className="font-display-xl text-5xl font-bold text-white mb-8 leading-tight uppercase tracking-tighter">
              India's first real estate<br />
              <span className="text-[#46f1c5]">intelligence platform.</span>
            </h1>
            <div className="space-y-3 mb-10">
              <TrustPill icon="location_city" text="847 Localities Mapped" />
              <TrustPill icon="directions_car" text="Real-Time Commute Audits" />
              <TrustPill icon="verified_user" text="14 Verification Signals" />
            </div>
          </div>
          <footer className="relative z-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500">DATA SOURCED FROM</span>
                <div className="h-px bg-white/10 flex-1"></div>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-400 font-data-mono text-[11px] font-bold uppercase opacity-70">
                <span>MagicBricks</span> • <span>99Acres</span> • <span>Housing.com</span> • <span>NoBroker</span> • <span>RERA Gujarat</span>
              </div>
            </div>
          </footer>
        </section>

        {/* Right: Signup Form */}
        <section className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24 bg-[#0d1512]">
          <SignupForm />
        </section>
      </main>
      <footer className="bg-[#0d1512] border-t border-white/5 flex flex-col md:flex-row justify-between items-center w-full px-8 py-6 gap-4">
        <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest font-bold">
          © 2024 PropSight Intelligence Pvt Ltd. All rights reserved.
        </div>
        <nav className="flex gap-6">
          <a className="text-slate-500 text-[10px] font-mono uppercase tracking-widest font-bold hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-500 text-[10px] font-mono uppercase tracking-widest font-bold hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 text-[10px] font-mono uppercase tracking-widest font-bold hover:text-white transition-colors" href="#">Metro Proximity</a>
        </nav>
      </footer>
    </div>
  )
}

export default Signup
