"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface FilterOption {
  label: string;
  count: number;
  checked?: boolean;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

const vehicleTypes: FilterSection = {
  title: "TYPE",
  options: [
    { label: "Sport", count: 10, checked: true },
    { label: "SUV", count: 12, checked: true },
    { label: "MPV", count: 16 },
    { label: "Sedan", count: 20 },
    { label: "Coupe", count: 14 },
    { label: "Hatchback", count: 14 },
  ],
};

const capacityOptions: FilterSection = {
  title: "CAPACITY",
  options: [
    { label: "2 Person", count: 10, checked: true },
    { label: "4 Person", count: 14 },
    { label: "6 Person", count: 12 },
    { label: "8 or More", count: 16, checked: true },
  ],
};

export function VehicleFilterSidebar({
  className,
  isOpen,
  onClose,
}: {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [priceRange, setPriceRange] = React.useState([100]);

  const FilterCheckbox = ({ option }: { option: FilterOption }) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={option.checked}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="text-gray-700">{option.label}</span>
      <span className="text-gray-400 ml-1">({option.count})</span>
    </label>
  );

  const FilterSection = ({ section }: { section: FilterSection }) => (
    <div className="space-y-4">
      <h3 className="text-sm text-gray-500 font-medium">{section.title}</h3>
      <div className="space-y-3">
        {section.options.map((option) => (
          <FilterCheckbox key={option.label} option={option} />
        ))}
      </div>
    </div>
  );

  // Overlay for mobile
  const overlay = isOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      onClick={onClose}
    />
  );

  return (
    <>
      {overlay}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-white p-6 space-y-8 transform transition-transform duration-300 ease-in-out z-50 lg:relative lg:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        <FilterSection section={vehicleTypes} />
        <FilterSection section={capacityOptions} />

        <div className="space-y-4">
          <h3 className="text-sm text-gray-500 font-medium">PRICE</h3>
          <div className="space-y-6">
            <Slider
              defaultValue={[100]}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-full"
            />
            <div className="text-gray-700">
              Max. ${priceRange[0].toFixed(2)}
            </div>
          </div>
        </div>

        {/* Close button - Only visible on mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 lg:hidden"
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
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>
          
    </>
  );
}
