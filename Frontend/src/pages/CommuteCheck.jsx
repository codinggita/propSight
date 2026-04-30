import React from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import CommuteHeader from '../components/Commute/CommuteHeader'
import CommuteControls from '../components/Commute/CommuteControls'
import LegBreakdown from '../components/Commute/LegBreakdown'
import CommuteMap from '../components/Commute/CommuteMap'
import AuditCardGrid from '../components/Commute/AuditCardGrid'

const CommuteCheck = () => {
  return (
    <DashboardLayout>
      <div className="max-w-[1440px] mx-auto px-8 pb-12 pt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-wider text-slate-500 uppercase font-bold">
          <span>Intelligence</span>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span>Forensics</span>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-primary">Commute Audit</span>
        </nav>

        {/* Header */}
        <CommuteHeader />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel: Input & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <CommuteControls />
            <LegBreakdown />
          </div>

          {/* Center Panel: Map & Visualization */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-6">
            <CommuteMap />
            <AuditCardGrid />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CommuteCheck
