'use client'

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
import SideFilterBar from "../../components/sideBarFilter";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ViewData = [
  { id: 1, src: "/View1.png", alt: "exterior" },
  { id: 2, src: "/View2.png", alt: "interior" },
  { id: 3, src: "/View3.png", alt: "sitting" },
];

const ReviewsData = [
  {
    image: profileimage1,
    name: "Alex Stanton",
    designation: "CEO at Bukalapak",
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "21 July 2022",
  },
  {
    image: profileimage2,
    name: "Skylar Dias",
    designation: "CEO at Amazon",
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "20 July 2022",
  },
];

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Detail = () => {
  return (
    <div className="bg-slate-100 flex flex-col lg:flex-row mt-28 w-full px-4 lg:px-8">
      {/* Left Sidebar */}
      <div className="hidden lg:block lg:w-1/4">
        <SideFilterBar />
      </div>

      {/* Detail page */}
      <div className="w-full lg:w-3/4">
        {/* Upper section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src={Ads1}
                alt="ads 1"
                layout="responsive"
                className="rounded-lg"
              />
              <div className="absolute top-2 left-2 text-white p-4 rounded-lg">
                <h2 className="text-xl lg:text-2xl font-semibold">
                  Sports car with the best design and acceleration
                </h2>
                <p className="text-sm lg:text-base">
                  Safety and comfort while driving a futuristic and elegant
                  sports car.
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
            <div className="flex gap-5 px-2 overflow-x-auto mt-3">
      {ViewData.map((view) => (
        <div key={view.id} className="w-32 h-32">
          <Image
            src={view.src}
            alt={view.alt}
            width={100}
            height={100}
            className="w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-white rounded-lg">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl flex justify-between">
                  Nissan GT-R
                  <Heart className="text-red-500" />
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <RatingStar starcount={5} />
                  <span className="text-sm text-gray-500">440+ Reviews</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track."
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-gray-600 text-sm">Car Type</p>
                    <p className="text-gray-800 text-base font-medium">Sport</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Capacity</p>
                    <p className="text-gray-800 text-base font-medium">
                      2 Persons
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Steering</p>
                    <p className="text-gray-800 text-base font-medium">
                      Manual
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Gasoline</p>
                    <p className="text-gray-800 text-base font-medium">70 L</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-bold">$80.00/day</p>
                  <del className="text-gray-500">$100.00</del>
                </div>
                <Link href="/rental_form">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </div>
         
        </div>

        {/* Review Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <div className="space-y-4">
            {ReviewsData.map((review, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-2"
              >
                <div className="flex gap-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.designation}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <RatingStar starcount={5} />
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Cars */}
        <div className="mt-10">
          <Titlebar title="Popular Cars" buttontext="View All" />
          <CarGrid />
          <RecomendedCars />
        </div>
      </div>
    </div>
  );
};

export default Detail;
