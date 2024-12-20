import Hero from "@/components/LandingPage/hero";
import Titlebar from "@/components/LandingPage/titlebar";
import RecomendedCars from "@/components/LandingPage/recommended";
import SelectionComponent from "@/components/LandingPage/postnavbar";
import React from "react";
import { ArrowUpDown } from "lucide-react";
import Cards from "@/components/cards";

export default function Home() {
  const options = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ];

  return (
    <div className="mb-10 bg-slate-100">
      <div className="flex flex-col sm:flex-row wrapper gap-3 sm:gap-12 items-center">
        <SelectionComponent title="Pick &mdash; Up" options={options} />
        <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
          <ArrowUpDown className="w-6 h-6" />
        </div>

        <SelectionComponent title="Drop &mdash; Off" options={options} />
      </div>
      <Hero />
      <Titlebar title="Popular Cars" buttontext="View All" />
      <Cards />
      <RecomendedCars />
    </div>
  );
}
