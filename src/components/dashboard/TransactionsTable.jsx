import React, { useState, useEffect } from 'react';
import { Search, Filter, Edit2, Trash2 } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import { fetchTransactions, deleteTransaction } from '../../api/transactionsApi';
import clsx from 'clsx';

const TransactionsTable = () => {
  const { role } = useRole();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchTransactions();
      setTransactions(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.transaction.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-slate-900 rounded-xl shadow-sm border border-slate-800 mt-6 overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-white">Recent Ledger Entries</h3>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 text-white placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full sm:w-64 transition-all"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
           <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 text-white rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none w-full sm:w-auto transition-all"
            >
              <option value="All">All Types</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-950 text-slate-400 font-semibold text-xs tracking-wider uppercase border-slate-800">
            <tr>
              <th className="px-6 py-4">Transaction</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              {role === 'ADMIN' && <th className="px-6 py-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {loading ? (
              <tr>
                <td colSpan={role === 'ADMIN' ? 6 : 5} className="px-6 py-8 text-center text-slate-500">
                  Loading transactions...
                </td>
              </tr>
            ) : filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan={role === 'ADMIN' ? 6 : 5} className="px-6 py-8 text-center text-slate-500">
                  No transactions found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-white">{t.transaction}</td>
                  <td className="px-6 py-4 text-slate-400">{t.category}</td>
                  <td className="px-6 py-4 text-slate-400">{t.date}</td>
                  <td className={clsx("px-6 py-4 font-bold", t.type === 'Income' ? 'text-emerald-400' : 'text-white')}>
                    {t.type === 'Income' ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={clsx(
                      "px-2.5 py-1 text-xs font-bold rounded-full",
                     t.status === 'CLEARED' ? "bg-emerald-400/10 text-emerald-400" : "bg-rose-400/10 text-rose-400"
                    )}>
                      {t.status}
                    </span>
                  </td>
                  {role === 'ADMIN' && (
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-blue-400 rounded">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(t.id)} className="p-1.5 text-slate-400 hover:text-rose-400 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;