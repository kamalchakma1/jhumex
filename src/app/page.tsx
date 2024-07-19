import Image from "next/image";
import Hero from "../components/Hero";
import Products from "../components/Products";
export default function Home() {
  return (
   <div className="h-full pr-6 pt-16 bg-[#F5F7F8]">
     <Hero/>
     <span id="product">
          <Products/>
     </span>   
   </div>
  );
}
