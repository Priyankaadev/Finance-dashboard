import React from 'react';
import SummaryCards from './SummaryCards';
import BalanceTrendChart from '../charts/BalanceTrendChart';
import SpendingDonutChart from '../charts/SpendingDonutChart';
import InsightsPanel from './InsightsPanel';

const Overview = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Financial Portfolio</h2>
        <p className="text-slate-400 mt-1">Analytical summary for the current fiscal period.</p>
      </div>

      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BalanceTrendChart />
        </div>
        <div className="lg:col-span-1">
          <SpendingDonutChart />
        </div>
      </div>

      <InsightsPanel />
    </div>
  );
};

export default Overview;