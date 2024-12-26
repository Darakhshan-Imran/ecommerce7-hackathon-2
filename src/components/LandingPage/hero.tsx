import Image from "next/image";
import car1 from "../../../public/car1.png";
import car2 from "../../../public/car2.png";
import Ads1 from "../../../public/Ads1.png";
import Ads2 from "../../../public/Ads2.png";
import Link from "next/link";

export const HeroImages = [
  {
    src: Ads1,
    alt: "ads1",
    width: 640,
    height: 360,
    title: "The Best Platform for Car Rental",
    content:
      "Ease of doing a car rental safely and reliably. Of course at a low price.",
    image: car1,
  },
  {
    src: Ads2,
    alt: "ads2",
    width: 640,
    height: 360,
    title: "Find Your Dream Car Today",
    content:
      "Explore a variety of cars for all your travel needs. Fast, easy, and affordable.",
    image: car2,
  },
];

const Hero = () => {
  return (
    <div className="wrapper py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:flex-row lg:justify-center lg:items-stretch">
        {HeroImages.map((ads, index) => (
          <div
            key={index}
            className="relative w-full lg:w-1/2 max-w-[640px] rounded-lg overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={ads.src}
              alt={ads.alt}
              width={ads.width}
              height={ads.height}
              className="cursor-pointer w-full h-auto"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between px-6 py-4 sm:py-6 lg:py-8 text-white">
              <div className="w-full md:w-1/2">
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-2">
                  {ads.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
                  {ads.content}
                </p>

                {/* Button */}

                <div className="mt-8">
                  <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-[5px] hover:bg-blue-600 transition-colors sm:px-6 sm:py-3 sm:text-base">
                    <Link href="/product">Rental Car</Link>
                  </button>
                </div>
              </div>

              {/* Car Image */}

              <div className="absolute bottom-0 left-0 transform translate-x-[100%] translate-y-[-25%] sm:translate-x-[13rem] sm:translate-y-[-1rem] w-[8rem] sm:w-[20rem] md:w-[22rem] lg:w-[25rem]">
                <Image
                  src={ads.image}
                  alt="Car Image"
                  width={410}
                  height={90}
                  className="w-full h-auto"
                />
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
