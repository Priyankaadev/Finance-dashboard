import React, { createContext, useState, useContext } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('VIEWER');

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === 'VIEWER' ? 'ADMIN' : 'VIEWER'));
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};