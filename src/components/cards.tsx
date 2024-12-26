"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import carImage1 from "../../public/cards/carImage1.png";
import carImage2 from "../../public/cards/carImage2.png";
import carImage3 from "../../public/cards/carImage3.png";
import carImage4 from "../../public/cards/carImage4.png";
import gasstation from "../../public/card_icons/gasstation.png";
import mannual from "../../public/card_icons/mannual.png";
import persons from "../../public/card_icons/persons.png";
import Link from "next/link";

interface CarAttributes{
  key: string;
  label: string;
  icon: StaticImageData;
}
const carAttributesData:CarAttributes[] = [
  { key: "fuelCapacity", label: "Fuel", icon: gasstation },
  { key: "transmission", label: "Transmission", icon: mannual },
  { key: "passengers", label: "Passengers", icon: persons },
];


const carData = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: carImage1,
    fuelCapacity: "90L",
    transmission: "Manual",
    passengers: "2 People",
    price: "$99.00/day",
    originalPrice: "$100.00/day",
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    image: carImage2,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: "2 People",
    price: "$80.00/day",
    originalPrice: "$100.00/day",
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sedan",
    image: carImage3,
    fuelCapacity: "70L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$96.00/day",
    originalPrice: "$100.00/day",
  },
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    image: carImage4,
    fuelCapacity: "60L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$72.00/day",
    originalPrice: "$80.00/day",
  },
];

const CarGrid = () => {
  const [likedCars, setLikedCars] = useState<number[]>([]); // State to track liked cars

  const toggleLike = (id: number) => {
    setLikedCars((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  return (
    <div className="wrapper mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carData.map((car) => (
          <div
            key={car.id}
            className="rounded-lg shadow-md p-4 hover:shadow-lg transition bg-white"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <Heart
                className={`cursor-pointer transition ${
                  likedCars.includes(car.id) ? "fill-red-500 text-red-500" : "text-gray-500"
                } hover:fill-red-500 hover:text-red-500`}
                onClick={() => toggleLike(car.id)}
              />
            </div>
            <p className="text-sm text-gray-500 mb-3">{car.type}</p>

            {/* Car Image */}
            <Image
              src={car.image}
              alt={car.name}
              width={232}
              height={160}
              className="w-full h-[160px] object-contain rounded-md"
            />

            {/* Car Details */}
            
            <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
              {carAttributesData.map((attr) => (
                <div key={attr.key} className="flex items-center space-x-1">
                  <Image
                    src={attr.icon}
                    alt={`${attr.label} icon`}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>{attr.label}</span>
                </div>
              ))}
            </div>

            {/* Pricing and Button */}
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-lg font-bold">{car.price}</p>
                <p className="text-sm text-gray-400 line-through">{car.originalPrice}</p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                <Link href="/product">Rent Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGrid;

