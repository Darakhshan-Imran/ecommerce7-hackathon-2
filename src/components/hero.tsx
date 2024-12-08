import Image from 'next/image';
import ButtonComponent from './button';

// Updated HeroImages array with nested additional images
export const HeroImages = [
  {
    src: "/Ads 1.png",
    alt: "ads1",
    width: 640,
    height: 360,
    title: "The Best Platform for Car Rental",
    content: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    additionalImages: [
      { src: "/Car1.png", alt: "Car 1", width: 406, height: 60 },
      
    ],
  },
  {
    src: "/Ads 2.png",
    alt: "ads2",
    width: 640,
    height: 360,
    title: "Find Your Dream Car Today",
    content: "Explore a variety of cars for all your travel needs. Fast, easy, and affordable.",
    additionalImages: [
     
      { src: "/Car2.png", alt: "Car 4", width: 406, height: 60 },
    ],
  },
];

const Hero = () => {
  return (
    <div className="wrapper py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 bg-green-400">
        {HeroImages.map((ads, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 max-w-[640px] relative"
          >
            {/* Main Image */}
            <Image
              src={ads.src}
              alt={ads.alt}
              width={ads.width}
              height={ads.height}
              className="cursor-pointer w-full h-auto rounded-lg shadow-md"
            />

            {/* Text Overlay */}
            <div className='bg-red-400 flex flex-col items-center justify-between sm:flex-row'>
            <div className="sm:absolute inset-0 flex flex-col bg-yellow-400 justify-center items-start text-white p-4 rounded-lg w-[15rem] sm:w-[320px] h-[200px] mt-10">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                {ads.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg mb-4">
                {ads.content}
              </p>
              <ButtonComponent className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Rental Car
              </ButtonComponent>
            </div>

            {/* Additional Images Overlay */}
            <div className="absolute bottom-4 left-[10rem] flex gap-2 mt-5">
              {ads.additionalImages.map((img, imgIndex) => (
                <div key={imgIndex} className="relative ">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
