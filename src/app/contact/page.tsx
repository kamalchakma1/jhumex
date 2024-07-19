"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ContactLoaderAtom, IsContactSentAtom } from "../store/atom";
import { mailMeFun } from "../utils/mail";
import Loader from "../../components/Loader";

export default function Page() {
  const [name, setName] = useState<String>("");
  const [mobile, setMobile] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [contactLoaderAto, setContactLoaderAto] =
    useRecoilState(ContactLoaderAtom);
  const [isContactSentAto, setIsContactSentAto] =
    useRecoilState(IsContactSentAtom);

  const contactSentFun = async () => {
    setContactLoaderAto(true);
    const contactDetails = `
         Name: ${name},
         Email: ${email},
         Mobile: ${mobile},
         Message: ${message},
        `;
    const result = await mailMeFun("contact", contactDetails);
    if (result) {
      setContactLoaderAto(false);
      setIsContactSentAto(true);
      setName("");
      setMobile("");
      setMessage("");
      setEmail("");
    } else {
      setContactLoaderAto(false);
      setIsContactSentAto(false);
    }
  };
  return (
    <div className="w-full h-full bg-[#F5F7F8]  pb-20 pt-20 flex  items-center justify-center">
      <div className="w-[90%] lg:w-[30%] bg-white rounded-sm h-[85vh]   border-solid border-[0.5px] border-gray-200  flex flex-col items-center justify-center">
        <div className="w-full h-[14%] flex pt-4 flex-col items-center justify-center ">
          <h1 className="text-3xl font-medium">Contact Us</h1>
        </div>
        <div className="w-full h-[90%] p-4  flex flex-col gap-4 justify-center items-center">
          <div className="w-[90%] h-[5rem]  flex gap-3 flex-col">
            <label>Name</label>
            <input
              type="text"
              value={`${name}`}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className=" border-solid border-[0.5px] border-gray-200 outline-none pl-2 rounded-sm w-full h-[2.5rem]"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-[90%] h-[5rem]  flex gap-3 flex-col">
            <label>Mobile</label>
            <input
              type="text"
              value={`${mobile}`}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              className=" border-solid border-[0.5px] border-gray-200 outline-none pl-2 rounded-sm w-full h-[2.5rem]"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="w-[90%] h-[5rem]  flex gap-3 flex-col">
            <label>Email</label>
            <input
              type="text"
              value={`${email}`}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" border-solid border-[0.5px] border-gray-200 outline-none pl-2 rounded-sm w-full h-[2.5rem]"
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-[90%] h-[7rem]  flex gap-3 flex-col">
            <label>Message</label>
            <textarea
              value={`${message}`}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="w-full border-solid border-[0.5px] border-gray-200  h-[6rem] pl-2 rounded-sm outline-none"
              placeholder="Enter your message here"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="w-full  flex flex-col items-center justify-center mt-2 h-[3rem]">
            {isContactSentAto ? (
              <div className="w-[fit-content] py-2 px-4  rounded-sm text-[1rem] flex flex-col antialiased text-green-600 min-h-[4rem] bg-green-50  items-center justify-center">
                <p>Thank you for contacting us.</p>
                <p>We will get back to you soon.</p>
              </div>
            ) : (
              <button
                onClick={contactSentFun}
                className="w-[fit-content] flex gap-2 items-center justify-center px-6 py-2 bg-green-400 hover:bg-green-500 rounded-sm text-white"
              >
                {contactLoaderAto ? (
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
