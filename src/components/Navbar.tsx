"use client"
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { MenuHamburgerAtom, SubMenuAtom, SubMenuMobileAtom } from "../app/store/atom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ProductData } from "../../data";
import Link from "next/link";
export default function Navbar(){

    const [HamburgerAto,setHamburgerAto] = useRecoilState(MenuHamburgerAtom);
    const [subMenuAto,setSubMenuAto] = useRecoilState(SubMenuAtom);
    const [subMenuMobileAto, setSubMenuMobileAto] = useRecoilState(SubMenuMobileAtom)

    const hamburgerFun=()=>{
        HamburgerAto?setHamburgerAto(false):setHamburgerAto(true);
        const menuDiv = document.getElementById("menuDiv") as HTMLDivElement;
        if(menuDiv.classList.contains("-bottom-[20rem]")){
            menuDiv.classList.remove("-bottom-[20rem]");
            menuDiv.classList.add("bottom-0");
        }else{
            menuDiv.classList.add("-bottom-[20rem]");
            menuDiv.classList.remove("bottom-0");
        }
    }
    // Show SubMenu
    const showSubMenuFun=()=>{
        subMenuAto?setSubMenuAto(false):setSubMenuAto(true);
    }
    const showSubMenuFun2=()=>{
      const subMenuDiv = document.getElementById("subMenuDiv2") as HTMLDivElement;
     const menuItems = document.getElementById("menuItems") as HTMLDivElement;

      subMenuMobileAto?setSubMenuMobileAto(false):setSubMenuMobileAto(true);
      if(subMenuDiv.classList.contains("min-h-[0rem]")){
        subMenuDiv.classList.remove("min-h-[0rem]");
        subMenuDiv.classList.add("min-h-[10rem]");
        menuItems.classList.remove("hidden");
        menuItems.classList.add("flex");
       }else{
        subMenuDiv.classList.add("min-h-[0rem]");
        subMenuDiv.classList.remove("min-h-[10rem]");
        menuItems.classList.remove("flex");
        menuItems.classList.add("hidden");
       }
    }
    return(
        <div className="w-full h-[3.3rem] lg:h-[4.5rem] bg-[#F5F7F8]  flex fixed z-50">
          <div className="w-[68%] lg:w-[33.33%] text-green-500 flex items-center justify-start pl-4">
            <h1 className="text-xl font-semibold lg:text-2xl"><Link href="/">Jhumex</Link></h1>
          </div>
          <div className="w-[33.33%] hidden lg:flex items-center justify-center">
            <ul className="w-[100%] items-center  justify-center text-[0.90rem] font-medium flex gap-20">
                <li className="cursor-pointer  flex relative items-center gap-2">
                 <p onClick={showSubMenuFun} className="flex items-center justify-center gap-2 hover:text-green-400">
                      products<span>{subMenuAto? <MdOutlineKeyboardArrowUp />:<MdKeyboardArrowDown/>}</span>
                 </p>                 
                {
                    subMenuAto?<div className="w-[10rem] bg-white min-h-[10rem] absolute top-10 rounded-sm shadow-md">
                    <ul className="w-full  p-4 flex flex-col gap-3 ">
                        {
                            ProductData.map((item, index) => {
                                return <li key={index} className="hover:text-green-400 lowercase"><a href={`https://wa.me/6909748659?text=Hello%20I%20would%20like%20to%20know%20more%20about%20${item.productTitle}`} target="_blank">{item.productTitle}</a></li>
                            })
                        }
                    </ul>
                 </div>:null

                }
                 
                </li>
                <li className="cursor-pointer hover:text-green-400 flex items-center gap-2"><Link href="/about">about</Link></li>
            </ul>
          </div>
          <div className="w-[33.33%]  flex items-center justify-end pr-4 text-xl">
           <span onClick={hamburgerFun} className="lg:hidden">
            {
                HamburgerAto?<RxCross1/>:<CiMenuFries/>
            }
             
            </span> 
          </div>
          <div id="menuDiv" className="w-full h-[20rem] lg:hidden pt-2 flex items-center justify-center bg-[#F5F7F8]  transition-all duration-300 fixed -bottom-[20rem] z-50">
            <div className="w-[90%]  h-full">
                <ul className="w-[100%] pt-4 flex gap-10 flex-col ">
                    <li className="w-[100%] min-h-6 flex flex-col items-start gap-4 text-md  font-medium">
                        <p className="flex gap-2 items-center justify-center" onClick={showSubMenuFun2}> prodcuts<span>
                            {
                                subMenuMobileAto?<MdOutlineKeyboardArrowUp />:<MdKeyboardArrowDown/>
                            }
                            
                        </span></p>   
                    <div id="subMenuDiv2" className="min-h-[0rem] overflow-hidden w-full transition-all duration-300">
                      <ul id="menuItems" className="hidden duration-300 transition-all pl-2 flex-col gap-2 justify-center pt-2  capitalize min-h-[0rem]">
                          <li className="hover:text-green-400"><Link href="/">Anuts</Link></li>
                          <li className="hover:text-green-400"><Link href="/">Dry Anuts</Link></li>
                          <li className="hover:text-green-400"><Link href="/">anuts leaves</Link></li>
                          <li className="hover:text-green-400"><Link href="/">grounded anuts</Link></li>
                          <li className="hover:text-green-400"><Link href="/">Anuts plants</Link></li>
                        </ul> 
                    </div>
                    </li>
                    <li className="w-[100%] flex items-center gap-4 text-md font-medium">
                      <Link href="/about">about</Link>                        
                    </li>
                </ul>
            </div>
          </div>
        </div>
    )
}