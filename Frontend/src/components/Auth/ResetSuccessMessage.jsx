import React from 'react'

const ResetSuccessMessage = ({ onBack }) => {
  return (
    <div className="text-center animate-in fade-in zoom-in-95 duration-500" id="success-state">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-[#46f1c5]/10 border border-[#46f1c5]/20 flex items-center justify-center mb-8">
          <span className="material-symbols-outlined text-[64px] text-[#46f1c5]" style={{ fontVariationSettings: '"FILL" 0, "wght" 300' }}>check_circle</span>
        </div>
        <h1 className="font-display-xl text-3xl font-bold text-white mb-3 uppercase tracking-tight">Reset link sent!</h1>
        <p className="text-slate-400 mb-4 font-bold uppercase text-[10px] tracking-wide">Check your inbox at <span className="text-white">a*****ya@gmail.com</span></p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffb955]/10 text-[#ffb955] border border-[#ffb955]/20 text-[10px] mb-10 font-bold uppercase">
          <span className="material-symbols-outlined text-sm">schedule</span>
          <span>Link expires in 15 minutes</span>
        </div>
        <div className="w-full space-y-4">
          <a className="w-full border border-[#46f1c5] text-[#46f1c5] font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#46f1c5]/5 transition-all uppercase tracking-widest text-sm" href="https://mail.google.com" target="_blank" rel="noreferrer">
            Open Gmail
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
          <p className="text-slate-500 text-[10px] font-bold uppercase py-2">Resend link in 0:45</p>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 w-full">
          <button onClick={onBack} className="text-slate-400 hover:text-[#46f1c5] transition-colors flex items-center justify-center gap-2 mx-auto font-bold uppercase text-[11px]">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Try a different email</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetSuccessMessage
