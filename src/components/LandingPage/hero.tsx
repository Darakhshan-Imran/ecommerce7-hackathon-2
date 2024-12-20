import Image from 'next/image';
import ButtonComponent from '../button';
import car1 from "../../../public/car1.png"
import car2 from "../../../public/car2.png"
import Ads1 from "../../../public/Ads1.png";
import Ads2 from "../../../public/Ads2.png";
import Link from "next/link";


// Updated HeroImages array with nested additional images
export const HeroImages = [
  {
    src: Ads1,
    alt: "ads1",
    width: 640,
    height: 360,
    title: "The Best Platform for Car Rental",
    content: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    image:car1,
    
  },
  {
    src: Ads2,
    alt: "ads2",
    width: 640,
    height: 360,
    title: "Find Your Dream Car Today",
    content: "Explore a variety of cars for all your travel needs. Fast, easy, and affordable.",
    image:car2,
   
  },
];

const Hero = () => {
  return (
    <div className="wrapper py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {HeroImages.map((ads, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 max-w-[640px] relative"
          >
            {/* Background gradient */}
            <Image
              src={ads.src}
              alt={ads.alt}
              width={ads.width}
              height={ads.height}
              className="cursor-pointer w-full h-auto rounded-lg shadow-md"
            />

            {/* Text Overlay */}
            <div className='flex flex-col items-center justify-between sm:flex-row'>
            <div className="sm:absolute inset-0 flex flex-col justify-center items-start text-white p-4 rounded-lg w-[15rem] sm:w-[320px] h-[200px] mt-10">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                {ads.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg mb-4">
                {ads.content}
              </p>
              <div>
              <Image
                    src={ads.image}
                    alt="Car Image"
                    width={410}
                    height={90}
                    className="absolute left-[15rem] z-10 w-[20rem] h-[6rem]"
                    
                  />
              </div>
                  
                
              
              <ButtonComponent className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                
                <Link href="/product">Rental Car</Link>
              </ButtonComponent>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
