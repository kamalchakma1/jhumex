"use client"
import { useState } from "react"
import { mailMeFun } from "../app/utils/mail";
import { useRecoilState } from "recoil";
import { FeedbackLoaderAtom, IsFeedbackSentAtom } from "../app/store/atom";
import Loader from "./Loader";

export default function Feedback(){

    const [mobile,setMobile] = useState<String>("");
    const [email,setEmail] = useState<String>("");
    const [feedbackdDesc,setFeedbackDesc] = useState<String>("");
    const [feedbackLoaderAto, setFeedbackLoaderAto] = useRecoilState(FeedbackLoaderAtom);
    const [isFeedbackSentAto, setIsFeedbackSentAto] = useRecoilState(IsFeedbackSentAtom)

    // Sent Feedback Mail
    const sentFeedbackFun=async()=>{
        setFeedbackLoaderAto(true);
        const feedback=`
         Mobile: ${mobile},
         Email: ${email},
         Feedback: ${feedbackdDesc}
        `
        const result = await mailMeFun("Feedback",feedback);
        if(result){
            setFeedbackLoaderAto(false);
             setIsFeedbackSentAto(true);
        }else{
            setFeedbackLoaderAto(true);
            setIsFeedbackSentAto(false);
        }
    }
    return(
        <div className="w-full h-full bg-[#F5F7F8]  pb-20 pt-20 flex  items-center justify-center">
            <div className="w-[90%] lg:w-[30%] bg-white rounded-sm h-[80vh]   border-solid border-[0.5px] border-gray-200  flex flex-col items-center justify-center">
                <div className="w-full h-[15%] flex flex-col items-center justify-center ">
                    <h1 className="text-3xl font-medium">Feedback</h1>
                </div>
                <div className="w-full h-[85%] p-4  flex flex-col gap-4 justify-center items-center">
                    <div className="w-[90%] h-[5rem]  flex gap-3 flex-col">
                       <label>Mobile</label>
                       <input type="text" value={`${mobile}`} onChange={(e)=>{setMobile(e.target.value)}} className=" border-solid border-[0.5px] border-gray-200 outline-none pl-2 rounded-sm w-full h-[2.5rem]" placeholder="Enter your mobile number"/>
                    </div>
                     <div className="w-[90%] h-[5rem]  flex gap-3 flex-col">
                       <label>Email</label>
                       <input type="text" value={`${email}`} onChange={(e)=>{setEmail(e.target.value)}} className=" border-solid border-[0.5px] border-gray-200 outline-none pl-2 rounded-sm w-full h-[2.5rem]" placeholder="Enter your email address"/>
                    </div>
                    <div className="w-[90%] h-[7rem]  flex gap-3 flex-col">
                       <label>Feedback Description</label>
                       <textarea value={`${feedbackdDesc}`} onChange={(e)=>{setFeedbackDesc(e.target.value)}} className="w-full border-solid border-[0.5px] border-gray-200  h-[6rem] pl-2 rounded-sm outline-none" placeholder="Enter your feedback description."></textarea>                       
                    </div>
                {/* Submit button */}
                <div className="w-full  flex flex-col items-center justify-center mt-2 h-[3rem]">
                  {isFeedbackSentAto ? (
                   <div className="w-[fit-content] p-2 flex-col rounded-sm text-[1rem] antialiased text-green-600 h-[4rem] bg-green-50 flex items-center justify-center">
                      <p>Feedback Sent Successfully.</p>
                      <p>Thank you!</p>
                   </div>
              ) : (
              <button  
                onClick={sentFeedbackFun}         
                className="w-[fit-content] flex gap-2 items-center justify-center px-6 py-2 bg-green-400 hover:bg-green-500 rounded-sm text-white"
              >
                {feedbackLoaderAto ? (
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
    )
}