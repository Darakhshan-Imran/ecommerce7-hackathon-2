import Hero from "@/components/LandingPage/hero";
import Titlebar from "@/components/LandingPage/titlebar";
import RecomendedCars from "@/components/LandingPage/recommended";
import SelectionComponent from "@/components/LandingPage/postnavbar";
import React from "react";
import { ArrowUpDown } from "lucide-react";
import Cards from "@/components/cards";


export default function Home() {
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
    <div className=" bg-slate-100 flex justify-center items-center flex-col mt-32">
      {/* Wrapper for selection components */}
      <div className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
        <SelectionComponent title="Pick &mdash; Up" fields={pickupFields} />
        <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
          <ArrowUpDown className="w-6 h-6" />
        </div>
        <SelectionComponent title="Drop &mdash; Off" fields={dropoffFields} />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Popular Cars */}
      <div className="px-4">
        <Titlebar title="Popular Cars" buttontext="View All" />
        <Cards />
      </div>

      {/* Recommended Cars */}
      <div className="px-4">
        <RecomendedCars />
      </div>
    </div>
  );
}
