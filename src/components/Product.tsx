"use client"
import Image from "next/image"
import OrderForm from "./OrderForm"
import { useRecoilState } from "recoil"
import { OrderFromAtom } from "../app/store/atom"
export default function Product({title,desc,img}:{title:String,desc:String,img:any}){
  const[orderFormAto, setOrderFormAto] = useRecoilState(OrderFromAtom);
  const OrderFormFun=()=>{
    orderFormAto?setOrderFormAto(false):setOrderFormAto(true);
  }
  return(
        <div className="w-[75%] lg:w-[15rem] p-[0.8rem] flex flex-col items-center justify-center gap-3 h-[20rem]  rounded-sm border-solid border-[0.5px] border-green-300">
          <div className="w-[95%] min-h-[6rem] rounded-sm">
            <Image src={img} className="w-full h-full object-cover" alt="product_image"></Image>
          </div>
          <div className="w-[95%] h-[1.5rem] antialiased font-medium flex items-center">{title}</div>
          <div className="w-[95%] pb-2  antialiased text-[10px] lg:text-sm h-[5rem]">
           {desc}
          </div>
          <div className="w-[95%] h-[2rem]  flex items-center justify-center">
             <button onClick={OrderFormFun} className="w-[fit-content] uppercase px-4 py-2 bg-green-500 cursor-pointer hover:bg-green-600 rounded-sm text-white">Order Now</button>
          </div>
          {
            orderFormAto?<OrderForm/>:null
          }          
        </div>
    )

}