import React from 'react'

const AuthFooter = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0D151C] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-4 md:py-6 gap-4">
        <div className="font-data-mono text-[10px] uppercase tracking-widest text-slate-500 text-center md:text-left">
          © 2024 PropSight Intelligence Pvt Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a className="font-data-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="font-data-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default AuthFooter
