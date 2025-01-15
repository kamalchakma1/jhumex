import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="w-full pt-10 h-[12rem] lg:h-[20rem] bg-[#F5F7F8]   z-50   flex flex-col items-center justify-center">
          <div className="w-[90%] h-[90%] lg:pt-20  flex flex-col items-center  justify-center">
              <div className="w-full h-[80%] lg:h-[20%]  flex flex-col lg:flex-row">
                <div className="w-full h-[33.33%] flex items-center justify-center">
                    <h1 className="text-xl font-semibold lg:text-2xl text-green-500 cursor-pointer"><Link href="/">Jhumex</Link></h1>
                </div>
                <div className="w-full h-[33.33%]  flex items-center justify-center">
                    <ul className="flex gap-4 text-sm">
                        <li className="cursor-pointer hover:text-green-400"><Link href="/about">about</Link></li>
                        <li className="cursor-pointer hover:text-green-400"><Link href="/contact">contact us</Link></li>
                        {/* <li className="cursor-pointer hover:text-green-400"><Link href="/feedback">Feedback</Link></li> */}
                    </ul>
                </div>
                <div className="w-full h-[33.33%]  flex items-center justify-center">
                    <ul className="flex gap-4 text-2xl">
                        <li className="text-[#0B63BD] cursor-pointer hover:text-blue-600">
                            <Link href="https://www.linkedin.com/company/jhumex">
                              <FaLinkedin/>
                            </Link>                           
                        </li>
                        <li className="cursor-pointer">
                            <Link href="https://x.com/jhumgroup">
                              <FaSquareXTwitter/>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
              </div>
              <div className="w-full h-[20%]  flex items-center gap-2 lg:mb-2 justify-center">
                <h1 className="text-sm text-gray-300">&copy;2024 Jhuxpo</h1>
                {/* <h1 className="text-sm text-gray-300">|</h1>
                <h1 className="text-sm text-gray-300 cursor-pointer">Terms.</h1> */}
              </div>
          </div>
        </div>
    )
}