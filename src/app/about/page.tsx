import Image from "next/image";
import teamPic from "../../asset/team.png"
export default function Page(){
    return(
        <div className="w-full h-full lg:min-h-[190vh] bg-[#F5F7F8] pb-10  flex flex-col lg:gap-4 lg:pt-[8rem] pt-16">
            <div className="w-full h-[30.33%] pt-[2rem] lg:pt-0  flex flex-col lg:gap-10 items-center justify-center">
                <div className="w-[70%] h-[20%]  flex items-center justify-center">
                    <div className="w-[fit-content] h-full rounded-full px-4 py-[0.40rem] bg-green-200 text-md">about us</div>
                </div>
                <div className="w-[80%] lg:w-[50%] mt-8 lg:mt-0 min-h-[80%]  pl-2 flex items-center ">
                  <h1 className="text-[2rem] lg:text-4xl  font-medium leading-[2.2rem] lg:leading-[3.3rem] tracking-wide">{`We're`} dedicated to making natural products and handicrafts accessible to everyone.</h1>
                </div>
            </div>
            {/* Team Image */}
            <div className="w-full lg:flex lg:items-center lg:justify-center h-[43.33%] mt-[4rem] lg:h-[60%] lg:mt-4 bg-[#F5F7F8]">
                <Image src={teamPic} alt="team" className="w-full lg:w-[40%]  h-full object-cover lg:object-cover"/>
            </div>
            {/* About */}
            <div className="w-full mt-10 lg:mt-6 h-[53.33%] lg:h-[80%] flex lg:gap-4 items-center justify-center flex-col">
              <div className="w-[90%] lg:w-[60%] lg:h-[70%] h-[60%] flex flex-col gap-2 items-center ">
          
                  <p>
                    {`
                     We're dedicated to bringing you the best flavors and traditions of Northeast India while supporting local farmers, producers, craftspeople and preserving natural resources.
                    `}
                  </p>
                  <p>
                    {`

                    We believe in fostering a community where transparency and trust are paramount, ensuring that every purchase supports the livelihoods of farmers who share our dedication to sustainable agriculture and natural living.
                    
                    `}
                  </p>
                  <p>
                    {
                      `
                      Whether you're exploring our selection of vibrant citrus fruits, nutrient-rich nuts, or farm-fresh vegetables, every purchase from Jhumex is a step towards promoting sustainable agriculture and preserving natural ecosystems for future generations.
                      `
                    }
                  </p>
          
              </div>
              <div className="w-full h-[35%] pt-8  flex items-center justify-center gap-4">
                <div className="w-[5rem] h-[4rem] ">
                    <h1 className="text-xl font-medium">2024</h1>
                    <p className="font-medium text-[0.7rem]">Founded</p>
                </div>
                <div className="w-[5rem] h-[4rem] ">
                    <h1 className="text-xl font-medium">100%</h1>
                    <p className="font-medium text-[0.7rem] pl-[0.28rem]">Remote</p>
                </div>
              </div>
            </div>
        </div> 
    )
}