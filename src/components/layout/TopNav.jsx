import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';
import { useRole } from '../../context/RoleContext';

const TopNav = ({ openSidebar }) => {
  const { role, toggleRole } = useRole();

  return (
    <header className="h-20 bg-slate-900 border-slate-800 border-b flex items-center justify-between px-4 md:px-8">
      
      <div className="flex items-center gap-4">
        <button 
          onClick={openSidebar}
          className="p-2 -ml-2 text-slate-400 hover:bg-slate-800 rounded-lg md:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative hidden md:block w-64 lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-slate-950 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
      </div>

    <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center bg-slate-950 border border-slate-800 rounded-full p-1 cursor-pointer" onClick={toggleRole}>
          <div className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${role === 'ADMIN' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500'}`}>
            ADMIN
          </div>
          <div className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${role === 'VIEWER' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500'}`}>
            VIEWER
          </div>
        </div>

   <button className="text-slate-400 hover:text-white transition-colors hidden sm:block">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <User className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;