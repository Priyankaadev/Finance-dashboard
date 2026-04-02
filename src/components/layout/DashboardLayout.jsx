import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden relative">
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar 
        isOpen={isMobileMenuOpen} 
        closeSidebar={() => setIsMobileMenuOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        
        <TopNav openSidebar={() => setIsMobileMenuOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/30">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;