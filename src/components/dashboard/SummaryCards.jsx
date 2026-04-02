import React from 'react';
import { ArrowUpRight, DollarSign, ShoppingCart } from 'lucide-react';
import { summaryData } from '../../data/mockData';

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Total Balance</h3>
        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold text-white">${summaryData.totalBalance.toLocaleString()}</span>
          <span className="flex items-center text-sm font-bold text-emerald-400 mb-1">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            {summaryData.balanceTrend}
          </span>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Monthly Income</h3>
          <span className="text-3xl font-bold text-emerald-400">${summaryData.monthlyIncome.toLocaleString()}</span>
        </div>
        <div className="p-3 bg-emerald-400/10 rounded-lg text-emerald-400">
          <DollarSign className="w-6 h-6" />
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Monthly Expenses</h3>
          <span className="text-3xl font-bold text-rose-400">${summaryData.monthlyExpenses.toLocaleString()}</span>
        </div>
        <div className="p-3 bg-rose-400/10 rounded-lg text-rose-400">
          <ShoppingCart className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;