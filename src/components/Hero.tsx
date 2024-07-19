"use client";
import { Link } from "react-scroll";
export default function Hero() {
  return (
    <div className="w-full  flex flex-col lg:gap-10  items-center pt-6 lg:pt-[6rem] h-[80vh]">
      <div className="w-full lg:w-[70%]  h-[50%]  pl-6 flex items-center justify-center">
        <h1 className="text-4xl text-green-500 lg:leading-[6rem] lg:text-[5rem] font-semibold leading-[3.2rem]">
          Experience Northeast  Richness with Us
        </h1>
      </div>
      <div className="w-full h-[15%] mt-16 lg:h-[20%] flex items-center justify-center">
        <Link to="product" spy={true} smooth={true}>
          <button className="w-[fit-content] flex gap-2 items-center justify-center cursor-pointer hover:bg-green-400 hover:text-white px-4 py-3 text-green-400 border-solid border-[0.1rem] rounded-md border-green-400 text-xl font-medium antialiased">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}
