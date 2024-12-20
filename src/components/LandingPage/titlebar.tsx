import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

// Define the font at the module scope
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Titlebar = ({ title, buttontext }: { title: string; buttontext?: string }) => {
  return (
    <div className="wrapper h-[44px] mt-[5px] flex justify-between">
      {/* Title */}
      <div className="h-full flex justify-between">
        <h1 className={`${plusJakartaSans.className} text-2xl font-semibold text-[#90A3BF]`}>{title}</h1>
      </div>

      {/* Button */}
      <div className="h-full flex items-end">
        <button className="px-4 py-2 text-blue-600 font-semibold text-2xl hover:opacity-60">
          {buttontext}
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
