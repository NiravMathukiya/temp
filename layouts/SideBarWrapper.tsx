import React, { ReactNode } from 'react';
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Sidebar';

interface SideBarWrapperProps {
  children: ReactNode;
  activeItem: any; // You may want to replace 'any' with a more specific type
  setActiveItem: (item: any) => void; // You may want to replace 'any' with a more specific type
}

const SideBarWrapper: React.FC<SideBarWrapperProps> = ({ 
  children, 
  activeItem, 
  setActiveItem 
}) => {
  return (
    <>
      <MainHeader />
      <div className="flex h-screen">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* <Header /> */}
          <main className="flex-1 overflow-auto bg-gray-50 p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default SideBarWrapper;