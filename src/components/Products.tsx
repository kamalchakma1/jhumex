import Product from "./Product";
import { ProductData } from "../../data";
export default function Products(){
    return(
        <div  className="w-full  lg:mt-20 mt-16 pt-10  flex flex-wrap flex-col items-center justify-center">
           <div className=" font-medium uppercase w-full h-[3rem] flex  items-center text-2xl justify-center">Products</div>
           <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-6 pt-6 items-center min-h-[40rem] px-4">
            {
               ProductData.map((data)=>(
                <>
                 <Product key={data.productId} title={data.productTitle} desc={data.productDesc} img={data.productImg}/>
                </>
               ))
            }         
            </div>            
        </div>
    )
}