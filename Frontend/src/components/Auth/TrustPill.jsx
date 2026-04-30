import React from 'react'

const TrustPill = ({ icon, text }) => (
  <div className="bg-[#0d1512] border-l-4 border-[#46f1c5] py-3 px-5 flex items-center gap-4 rounded-r-lg">
    <span className="material-symbols-outlined text-[#00d4aa]">{icon}</span>
    <span className="text-white font-bold uppercase tracking-tight text-sm">{text}</span>
  </div>
)

export default TrustPill
