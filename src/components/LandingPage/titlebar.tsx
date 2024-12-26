import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Titlebar = ({ title, buttontext }: { title: string; buttontext?: string }) => {
  return (
    <div className="wrapper h-auto mt-5 flex flex-wrap items-center justify-between">
      {/* Title */}
      <h1 className={`${plusJakartaSans.className} text-xl sm:text-2xl font-semibold text-[#90A3BF]`}>
        {title}
      </h1>

      {/* Button */}
      {buttontext && (
        <button className="px-4 py-2 mt-2 sm:mt-0 bg-blue-100 text-blue-600 font-medium rounded hover:bg-blue-200 transition">
          {buttontext}
        </button>
      )}
    </div>
  );
};

export default Titlebar;
