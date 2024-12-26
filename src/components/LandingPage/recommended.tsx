import React from "react";
import Titlebar from "./titlebar";
import CarGrid from "../cards";
import Link from "next/link";


const RecomendedCars = () => {
  return (
    <div className="wrapper mt-16">
      <Titlebar title="Recommendation Cars" />

      {/* Responsive Grid for Cars */}
     
      <CarGrid/>
      <CarGrid/>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          <Link href="/car_detail">Show Details</Link>
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          <Link href="/rental_form">Booking Details</Link>
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          <Link href="/car_rental">Check Out</Link>
        </button>
      </div>
    </div>
  );
};

export default RecomendedCars;
