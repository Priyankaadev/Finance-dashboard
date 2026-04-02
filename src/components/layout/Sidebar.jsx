import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ArrowLeftRight, PieChart, Wallet, Settings, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'Overview', path: '/', icon: LayoutDashboard },
  { name: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
  { name: 'Insights', path: '/insights', icon: PieChart },
  { name: 'Budget', path: '/budget', icon: Wallet },
  { name: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside 
      className={clsx(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      )}
    >
      <div>
        <div className="p-6 mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Fintech</h1>
            <p className="text-xs text-slate-500 tracking-widest font-medium">Finance Tracker</p>
          </div>
          <button onClick={closeSidebar} className="md:hidden text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeSidebar} // Automatically close sidebar on mobile when a link is clicked
              className={({ isActive }) =>
               twMerge(
                  clsx(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive 
                      ? 'bg-slate-800 text-white border-r-4 border-emerald-500 rounded-r-none' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  )
                )
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 m-4 bg-slate-800 rounded-xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center border-slate-700 justify-center text-white font-bold flex-shrink-0">
          U
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-bold text-white truncate">User</p>
          <p className="text-xs text-slate-400 truncate">Premium Account</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;