import Hero from "@/components/hero";
import Titlebar from "@/components/titlebar";
import RecomendedCars from "@/components/recommended";
import SelectionComponent from "@/components/postnavbar";
import { LuArrowDownUp } from "react-icons/lu";
import Cards from "@/components/cards";



export default function Home() {

  const options = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ];

  return (
    <div className="mb-10 bg-slate-100">
    <div className="flex flex-col sm:flex-row wrapper gap-3 sm:gap-12">
    <SelectionComponent title="Pick &mdash; Up" options={options}  />
    <div className="w-[90px] h-[90px] text-white items-center bg-[#3563E9] mt-5"><LuArrowDownUp className="text-3xl " /></div>
    <SelectionComponent title="Drop &mdash; Off" options={options} />
    </div>
    <Hero/>
    <Titlebar title="Popular Cars" buttontext="View All"/>
    <Cards/>    
    <RecomendedCars/>
    


    </div>
  );
}
