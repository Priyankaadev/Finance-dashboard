import React from 'react';
import { Wallet, Plus } from 'lucide-react';

const budgets = [
  { category: 'Housing', spent: 1260, limit: 1500, color: 'bg-emerald-500' },
  { category: 'Technology', spent: 945, limit: 1000, color: 'bg-blue-500' },
  { category: 'Travel', spent: 630, limit: 800, color: 'bg-amber-500' },
  { category: 'Food', spent: 315, limit: 500, color: 'bg-rose-500' },
];

const Budget = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Monthly Budgets</h2>
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
          <Plus className="w-4 h-4" /> Add Budget
        </button>
      </div>

      <div className="grid gap-4">
        {budgets.map((b) => {
          const percentage = (b.spent / b.limit) * 100;
          return (
            <div key={b.category} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${b.color}/10`}>
                    <Wallet className={`w-5 h-5 ${b.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="font-bold text-white">{b.category}</span>
                </div>
                <span className="text-sm text-slate-400">
                  <span className="text-white font-bold">${b.spent}</span> / ${b.limit}
                </span>
              </div>
              
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${b.color} transition-all duration-1000`} 
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-right text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-bold">
                {percentage.toFixed(0)}% Consumed
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Budget;