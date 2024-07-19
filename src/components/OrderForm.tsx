"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsMailSentAtom, LoaderAtom, OrderFromAtom } from "../app/store/atom";
import Loader from "./Loader";
import { mailMeFun } from "@/app/utils/mail";
export default function OrderForm() {
  const [orderFormAto, setOrderFormAto] = useRecoilState(OrderFromAtom);
  //Form Data
  const [mobileNumber, setMobileNumber] = useState<String>("");
  const [price, setPrice] = useState<String>("");
  const [name, setName] = useState<String>("");
  const [address, setAddress] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [quantity, setQuantity] = useState<String>("");
  const [quantityUnit, setQuantityUnit] = useState<String>("KG");
  const [product, setProduct] = useState<String>("");
  const [loaderAto,setLoaderAto] = useRecoilState(LoaderAtom);
  const [isMailSentAto,setIsMailSentAto] = useRecoilState(IsMailSentAtom);

  const OrderFormFun = () => {
    orderFormAto ? setOrderFormAto(false) : null;
  };

  const mobileNoChangeFun = (e: any) => {
    const pattern = /[A-Za-z]/;
    const mobileNo = e.target.value.replace(pattern, "");
    setMobileNumber(mobileNo);
  };
  const priceChangeFun = (e: any) => {
    const pattern = /[A-Za-z]/;
    const userPrice = e.target.value.replace(pattern, "");
    setPrice(userPrice);
  };

  const quantityWithUnit=`${quantity} ${quantityUnit}`;
  // Sending Email
  const sendEmail = async () => {
    setLoaderAto(true);
    const message_to_sent=`
       Name:${name}
       Mobile:${mobileNumber}
       Address:${address}
       Product: ${product}
       Quantity: ${quantityWithUnit}
       Price: ${price}
       Message: ${message}  
    `
    const mailSentResult= await mailMeFun("Order", message_to_sent);
    if(mailSentResult){
      setLoaderAto(false);
      setIsMailSentAto(true);
      setName("");
      setAddress("");
      setMobileNumber("");
      setMessage("");
      setPrice("");
      setProduct("");
      setQuantity("");
      setQuantityUnit("");
    }else{
      alert("Not able to sent")
      setLoaderAto(false);
      setIsMailSentAto(true);
    }  
  };
  return (
    <div className="w-full bg-white h-[60rem] flex items-center justify-center overflow-auto p-4  fixed   gap-2   top-0 left-0 z-50">
      <div className="w-full  lg:w-[50%] lg:ml-[25vw] lg:h-[38rem] lg:mt-3 border-solid border-[0.5px] border-gray-300 rounded-md h-[60rem] overflow-auto p-4 bg-white fixed flex flex-col gap-2 items-center  top-0 left-0 z-50">
        <div className="h-[3rem]  flex w-full">
          <div className="w-[90%] h-full  flex items-center justify-center">
            <h1 className="text-3xl font-medium ml-6 lg:ml-[7rem] ">
              Order Details
            </h1>
          </div>
          <div className="w-[10%] h-full  flex items-center justify-center">
            <span
              onClick={OrderFormFun}
              className="text-xl cursor-pointer hover:text-red-400"
            >
              <RxCross2 />
            </span>
          </div>
        </div>
        <div className="w-full lg:px-6 flex flex-col gap-4 mt-2 h-[35rem] overflow-auto ">
          <div className="w-full  flex h-[3rem]">
            <div className="w-[30%]  h-full flex items-center justify-start pl-2">
              <label>Name</label>
            </div>
            <div className="w-[70%]  h-full flex items-center justify-center border-solid border-[0.5px] border-gray-200">
              <input
                value={`${name}`}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="outline-none h-[2.5rem] w-full pl-2"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="w-full  flex h-[3rem]">
            <div className="w-[30%]  h-full flex items-center justify-start pl-2">
              <label>Mobile</label>
            </div>
            <div className="w-[70%]  h-full flex border-solid border-[0.5px] border-gray-200 items-center justify-center">
              <input
                value={`${mobileNumber}`}
                onChange={mobileNoChangeFun}
                type="text"
                className="outline-none h-[2.5rem] w-full pl-2"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          {/* Address */}
          <div className="w-full  flex h-[5rem]">
            <div className="w-[30%]  h-full flex items-start justify-start pl-2 pt-2">
              <label>Address</label>
            </div>
            <div className="w-[70%]  h-full flex items-start border-solid border-[0.5px] border-gray-200 justify-center">
              <textarea
                value={`${address}`}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="outline-none h-[4rem] w-full pl-2 pt-2"
                placeholder="Enter address"
              ></textarea>
            </div>
          </div>
          {/* Product */}
          <div className="w-full  flex h-[3rem]">
            <div className="w-[30%]  h-full flex items-center justify-start pl-2">
              <label>Product</label>
            </div>
            <div className="w-[70%]  h-full flex items-center border-solid lg:pr-2 border-[0.5px] border-gray-200 justify-center">
              <select
                value={`${product}`}
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
                className="outline-none h-[2.5rem] w-full pl-2 pr-4 "
              >
                <option>Select Product</option>
                <option>Ant drut</option>
                <option>Dry arnut</option>
                <option>Pumkin</option>
                <option>Northeast Lemon</option>
              </select>
            </div>
          </div>
          {/* Quantity */}
          <div className="w-full  flex h-[3rem]">
            <div className="w-[30%]  h-full flex items-center justify-start pl-2">
              <label>Quantity</label>
            </div>
            <div className="w-[70%]  h-full flex border-solid border-[0.5px] border-gray-200 items-center justify-center">
              <div className="w-[70%] h-full flex items-center justify-center">
                <input
                  value={`${quantity}`}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  type="number"
                  className="outline-none h-[2.5rem] w-full pl-2 pr-2"
                  placeholder="Enter Quantity"
                />
              </div>
              <div className="w-[30%] flex items-center justify-center pr-4 lg:-pr-[4rem] lg:pl-4 h-full">
                <select
                  value={`${quantityUnit}`}
                  onChange={(e) => {
                    setQuantityUnit(e.target.value);
                  }}
                  className="h-[79%]  outline-none border-solid border-l-[0.5px] pl-4 border-gray-400 lg:ml-6"
                >
                  <option>KG</option>
                  <option>Tonne</option>
                </select>
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="w-full  flex h-[3rem]">
            <div className="w-[30%]  h-full flex items-center justify-start pl-2">
              <label>Your Price</label>
            </div>
            <div className="w-[70%] border-solid border-[0.5px] border-gray-200 h-full flex items-center justify-center">
              <input
                value={`${price}`}
                onChange={priceChangeFun}
                type="text"
                className="outline-none h-[2.5rem] w-full pl-2"
                placeholder="Enter your price in INR"
              />
            </div>
          </div>
          {/* Message */}
          <div className="w-full  flex h-[5rem]">
            <div className="w-[30%]  h-full flex items-start justify-start pl-2 pt-2">
              <label>Message</label>
            </div>
            <div className="w-[70%]  h-full flex items-start border-solid border-[0.5px] border-gray-200 justify-center">
              <textarea
                value={`${message}`}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="outline-none h-[4rem] w-full pl-2 pt-2"
                placeholder="Enter your message here"
              ></textarea>
            </div>
          </div>
          {/* Submit button */}
          <div className="w-full  flex flex-col items-center justify-center mt-2 h-[3rem]">
            {isMailSentAto ? (
              <div className="w-[65%] rounded-sm text-[1rem] antialiased text-green-600 h-[4rem] bg-green-50 flex items-center justify-center">
                <p>Enquery Sent Successfully</p>
              </div>
            ) : (
              <button
                onClick={sendEmail}
                className="w-[fit-content] flex gap-2 items-center justify-center px-6 py-2 bg-green-400 hover:bg-green-500 rounded-sm text-white"
              >
                {loaderAto ? (
                  <span>
                    <Loader />
                  </span>
                ) : null}
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
