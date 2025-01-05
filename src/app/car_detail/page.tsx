'use client'

import React, { useState } from "react";
import VehicleFilterSidebar from "../../components/sidebar";
import { Heart } from 'lucide-react';
import RatingStar from "../../components/ratingstar";
import Image from "next/image";
import CarGrid from "@/components/cards";
import RecomendedCars from "@/components/LandingPage/recommended";
import Titlebar from "@/components/LandingPage/titlebar";
import profileimage1 from "../../../public/nav_icons/profileimage1.png";
import profileimage2 from "../../../public/nav_icons/profileimage2.png";
import { Plus_Jakarta_Sans } from "next/font/google";
import Ads1 from "../../../public/Ads1.png";
import car1 from "../../../public/car1.png";
import Link from "next/link";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ViewData = [
  {
    id: 1,
    src: "/View1.png",
    alt: "exterior",
  },
  {
    id: 2,
    src: "/View2.png",
    alt: "interior",
  },
  {
    id: 3,
    src: "/View3.png",
    alt: "sitting",
  },
];

const ReviewsData = [
  {
    image:profileimage1,
    name:"Alex Stanton",
    designation:"CEO at Bukalapak",
    comment:"We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date:"21 July 2022"

  },
  {
    image:profileimage2,
    name:"Skylar Dias",
    designation:"CEO at Amazon",
    comment:"We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date:"20 July 2022"

  },

];


interface LocalVehicleFilterSidebarProps {

  isOpen: boolean;

  onClose: () => void;

}



const LocalVehicleFilterSidebar: React.FC<LocalVehicleFilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      {/* Sidebar content goes here */}
    </div>
  );
}


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


const Detail = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <div className="bg-slate-100">
    <div className="wrapper flex flex-col lg:flex-row mt-11">
      {/* Left Sidebar */}
      
      <LocalVehicleFilterSidebar
       isOpen={isSidebarOpen}
       onClose={() => setIsSidebarOpen(false)} />

      {/* Detail page */}
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-around items-center mx-0 lg:mx-3 mb-4 lg:mb-0">
          <div className="w-full relative m-2 px-2">
            <Image
              src={Ads1}
              alt="ads 1"
              width={300}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
            <div className="absolute top-2 lg:top-5 w-full lg:w-4/5 pl-3 bg-opacity-75 flex flex-col p-2 lg:p-4 rounded-lg">
              <h2 className="font-semibold text-xl lg:text-3xl text-white mb-2 lg:mb-4 text-balance">
                Sports car with the best design and acceleration
              </h2>
              <p className="font-normal text-sm lg:text-lg text-white text-balance">
                Safety and comfort while driving a futuristic and elegant sports car
              </p>
            </div>
            <div className="absolute bottom-3 right-3 w-1/2 lg:w-3/4">
              <Image
                src={car1}
                alt="car1"
                width={300}
                height={100}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full flex gap-2 lg:gap-3 px-2 overflow-x-auto lg:overflow-x-visible">
            {ViewData.map((view) => (
              <div key={view.id} className="w-1/3 lg:w-auto flex-shrink-0">
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={200}
                  height={150}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-9">
          <Card className="h-full flex justify-around flex-col border-none bg-white shadow-lg">
            <CardHeader>
              <CardTitle>
                <div className="text-2xl lg:text-4xl font-bold text-balance tracking-[0.010rem] flex justify-between items-center">
                  Nissan GT - R
                  <span className="text-lg cursor-pointer hover:fill-red-600">
                    <Heart />
                  </span>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="flex items-center gap-1 mt-1">
                  <RatingStar starcount={5} />
                  <span className="text-sm text-muted-foreground">
                    440+ Reviews
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base lg:text-lg font-thin">{`NISMO has become the embodiment of Nissan's outstanding performance, 
          inspired by the most unforgiving proving ground, the "race track".`}</p>
              <div className="flex flex-col sm:flex-row w-full mt-4">
                <div className="flex flex-col w-full sm:w-1/2 mb-2 sm:mb-0">
                  <div className="flex justify-between items-center">
                    <p className="text-base lg:text-lg text-gray-600 font-medium">
                      Car Type
                    </p>
                    <p className="text-base lg:text-lg text-gray-700 font-semibold">
                      Sport
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-base lg:text-lg text-gray-600 font-medium">
                      Steering
                    </p>
                    <p className="text-base lg:text-lg text-gray-700 font-semibold">
                      Manual
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <div className="flex justify-between items-end">
                    <p className="text-base lg:text-lg text-gray-600 font-medium">
                      Capacity
                    </p>
                    <p className="text-base lg:text-lg text-gray-700 font-semibold">
                      2 Persons
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-base lg:text-lg text-gray-600 font-medium">
                      Gasoline
                    </p>
                    <p className="text-base lg:text-lg text-gray-700 font-semibold">
                      70 L
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-col gap-1" >
              <p className="text-xl lg:text-2xl font-semibold mb-2 sm:mb-0">
                $80.00/
                <span className="text-sm text-[#90A3BF] font-medium">day </span> 
              </p>
              <del className="text-[#90A3BF] text-sm font-medium">$100.00</del>
              </div>
              <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600 transition-colors">
               <Link href="/rental_form">Rent Now</Link> 
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>

    </div>

      {/* Review Section */}
<div className="wrapper mt-16">
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
    <h2
      className={`${plusJakartaSans.className} text-[#1A202c] text-2xl font-semibold`}
    >
      Reviews
    </h2> <button className="bg-blue-600 w-[3.5rem] h-[2rem] border rounded-lg text-white font-medium text-lg hover:bg-blue-400 cursor-pointer">{13}</button>
    </div>
    {ReviewsData.map((review, index) => (
      <div
        key={index}
        className="p-4 rounded shadow-lg flex flex-col items-start bg-white"
      >
        <div className="flex w-full">
        <div className="flex items-center mb-4">
          <Image
            src={review.image}
            alt={`${review.name}'s profile`}
            width={30}
            height={30}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          </div>
          <div className="w-full">
            {/* Adjusted this div */}
            <div className="flex justify-between w-full px-2 py-1">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="flex w-full justify-between px-2 py-1">
            <p className="text-sm text-gray-500">{review.designation}</p>
            <RatingStar starcount={5}/>
          </div>
          </div>
          </div>
        <p className="text-gray-700 mb-4">{review.comment}</p>
      </div>
    ))}
  </div>
</div>

    <div className="mt-11">
    <Titlebar title="Popular Cars" buttontext="View All"/>
    <CarGrid/>    
    <RecomendedCars/>
    </div>
  </div>
  );
};

export default Detail;

