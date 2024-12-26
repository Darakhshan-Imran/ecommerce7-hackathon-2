
import React from "react";

interface Option {
  label: string;
  placeholder: string;
}

interface SelectionProps {
  title: string;
  options: Option[];
}

const SelectionComponent: React.FC<SelectionProps> = ({ title, options }) => {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white w-full max-w-lg mx-auto sm:w-[35rem] sm:mx-0 mt-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>

      {/* Options */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {options.map((option, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {option.label}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  {option.placeholder}
                </option>
                {/* Example dropdown options */}
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <span className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionComponent;
