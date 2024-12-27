"use client"

import React, { useState } from 'react';
import { Home, Car, BarChart, DollarSign, Inbox, Calendar, Settings, HelpCircle, Sun, Moon, LogOut, Menu, X } from 'lucide-react';

const scrollbarStyles = `
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #f3f4f6;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 100%;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #3b82f6;
    border-radius: 3px;
  }
`;

const menuItems = [
  { title: 'Dashboard', icon: <Home className="w-5 h-5" />, isActive: true },
  { title: 'Car Rent', icon: <Car className="w-5 h-5" /> },
  { title: 'Insight', icon: <BarChart className="w-5 h-5" /> },
  { title: 'Reimburse', icon: <DollarSign className="w-5 h-5" /> },
  { title: 'Inbox', icon: <Inbox className="w-5 h-5" /> },
  { title: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
];

const preferenceItems = [
  { title: 'Settings', icon: <Settings className="w-5 h-5" /> },
  { title: 'Help & Center', icon: <HelpCircle className="w-5 h-5" /> },
  { title: 'Dark Mode', icon: <Sun className="w-5 h-5" />, isToggle: true },
  { title: 'Log Out', icon: <LogOut className="w-5 h-5" /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed top-[3rem] left-4 z-50 lg:hidden bg-white p-2 rounded-md "
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white shadow-r-md flex flex-col transition-all duration-300 ease-in-out custom-scrollbar
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    lg:translate-x-0 w-64 lg:w-auto lg:flex-shrink-0
                    fixed inset-y-0 left-0 z-40 lg:relative lg:z-0`}
      >
        <style>{scrollbarStyles}</style>
        <div className="flex flex-col h-full min-w-[240px] pt-20 lg:pt-[9rem]">
          {/* Main Menu */}
          <div className="px-6 py-4 overflow-y-auto flex-grow">
            <h2 className="text-xs font-medium text-gray-400 mb-4 tracking-wider">MAIN MENU</h2>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center text-[15px] font-medium gap-4 h-12 px-4 cursor-pointer transition-colors duration-200 rounded-xl
                    ${item.isActive 
                      ? 'bg-[#4318FF] text-white' 
                      : 'text-[#76b6ee] hover:bg-blue-50'}`}
                >
                  {item.icon}
                  <span className="font-normal">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Preferences */}
          <div className="px-6 py-4 mt-auto">
            <h2 className="text-xs font-medium text-gray-400 mb-4 tracking-wider">PREFERENCES</h2>
            <ul className="space-y-1">
              {preferenceItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-[15px] font-medium text-[#76b6ee] hover:bg-blue-50 rounded-xl gap-4 h-12 px-4 cursor-pointer transition-colors duration-200"
                  onClick={item.isToggle ? toggleDarkMode : undefined}
                >
                  {item.isToggle ? (isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />) : item.icon}
                  <span className="font-normal">{item.title}</span>
                  {item.isToggle && (
                    <div className="ml-auto">
                      <div className={`w-12 h-6 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${isDarkMode ? 'bg-[#4318FF]' : 'bg-gray-200'}`}>
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
