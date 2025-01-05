"use client";

import { useState } from "react";
import SelectionComponent from "../../components/LandingPage/postnavbar";
import React from "react";
import { ArrowUpDown } from "lucide-react";
import RecomendedCars from "@/components/LandingPage/recommended";


interface VehicleFilterSidebarProps {

  isOpen: boolean;

  onClose: () => void;

}


interface LocationSelectorProps {

  title: string;

  options: { label: string; placeholder: string; }[];

}



const VehicleFilterSidebar: React.FC<VehicleFilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close</button>
      {/* Add your sidebar content here */}
    </div>
  );
}


export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pickupFields = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ]

  const dropoffFields = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ]

  return (
    <div className="bg-gray-100 max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with menu button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-gray-500 lg:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="w-6 h-6" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <VehicleFilterSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {/* Main content area */}
          <main className="flex-1">
             <div className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
                    <SelectionComponent title="Pick &mdash; Up" fields={pickupFields} />
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
                      <ArrowUpDown className="w-6 h-6" />
                    </div>
                    <SelectionComponent title="Drop &mdash; Off" fields={dropoffFields} />
                  </div>
            <div className="mt-6">
              <RecomendedCars />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
