import React from 'react';
import { Lightbulb, Lock, TrendingUp, AlertCircle } from 'lucide-react';
import { useRole } from '../../context/RoleContext';

const InsightsPanel = () => {
  const { role } = useRole();

  return (
    <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/10 rounded-lg">
            <Lightbulb className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-lg font-bold text-white">AI Financial Insights</h3>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
          Updated 2h ago
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <p className="text-sm font-bold text-white mb-1">Highest Spending Category</p>
              <p className="text-sm text-slate-400">
                Housing accounts for <span className="text-emerald-400 font-bold">40%</span> of your total outflow this month.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-sm font-bold text-white mb-1">Monthly Comparison</p>
              <p className="text-sm text-slate-400">
                Your net savings are <span className="text-blue-400 font-bold">12% higher</span> than the previous quarter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {role === 'ADMIN' ? (
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-bold text-emerald-400">Admin Strategy Access</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Internal liquidity is optimal. You have <span className="text-white font-medium">$12,400</span> available for short-term reinvestment without affecting operational cash flow.
            </p>
          </div>
        ) : (
          <div className="p-4 bg-slate-950 border border-slate-800 border-dashed rounded-xl flex items-center justify-between group cursor-help">
            <div className="flex items-center gap-3 text-slate-500">
              <Lock className="w-4 h-4" />
              <p className="text-sm italic">Advanced projections locked for Viewer role</p>
            </div>
            <span className="text-[10px] font-bold text-slate-600 group-hover:text-slate-400 transition-colors uppercase tracking-widest">
              Restricted
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightsPanel;