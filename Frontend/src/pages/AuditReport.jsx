import React from 'react'
import ReportHeader from '../components/AuditReport/ReportHeader'
import PropertySummary from '../components/AuditReport/PropertySummary'
import VerdictGauge from '../components/AuditReport/VerdictGauge'
import AuditTrailTable from '../components/AuditReport/AuditTrailTable'
import BrokerIntelligence from '../components/AuditReport/BrokerIntelligence'
import MarketComparison from '../components/AuditReport/MarketComparison'
import ReportFooter from '../components/AuditReport/ReportFooter'

import DashboardLayout from '../components/common/DashboardLayout'

const AuditReport = ({ isStandalone }) => {
  const content = (
    <div className="bg-[#f8faf8] text-[#191c1b] min-h-screen">
      <main className="max-w-5xl mx-auto py-12 px-6 lg:px-12">
        {/* Header */}
        <ReportHeader />

        {/* Property Summary & Verdict */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <PropertySummary />
          <VerdictGauge />
        </div>

        {/* Evidence Table */}
        <AuditTrailTable />

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <BrokerIntelligence />
          <MarketComparison />
        </div>

        {/* Footer */}
        <ReportFooter />
      </main>
    </div>
  )

  return isStandalone ? content : <DashboardLayout>{content}</DashboardLayout>
}

export default AuditReport
