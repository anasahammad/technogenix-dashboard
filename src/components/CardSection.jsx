import { BsSoundwave } from "react-icons/bs";
import { MdWaves } from "react-icons/md";
import { PiEqualizerThin } from "react-icons/pi";

const CardSection = () => {
    return (
        <div className="my-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2  ">
                     {/* Card 1 */}
                    <div className=" rounded-2xl py-8  px-4   
                    bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <div className="">
                                <p className="text-xl font-medium ">Revinue Status</p>
                               
                        </div>
                        <div className="flex justify-between mt-6">
                        <div className=""><MdWaves className="text-7xl" /></div>
                        <div className="">
                            <h1 className="text-4xl semi-bold">$ <span>432</span></h1>
                            <p>Jan 01 - Jan 10</p>
                        </div>
                        </div>
                       
                    </div>

                            {/* Card 2 */}
                    <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white ">
      <h2 className="text-lg font-semibold">Page View</h2>
      <p className="text-4xl font-bold mt-2">$ 432</p>
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="none" stroke="#ffffff" strokeWidth="4" strokeDasharray="8,8" d="M0,224L48,192C96,160,192,96,288,112C384,128,480,224,576,213.3C672,203,768,85,864,64C960,43,1056,117,1152,165.3C1248,213,1344,235,1392,245.3L1440,256" />
        </svg>
      </div>
    </div>

    {/* card 3 */}
    <div className=" rounded-2xl py-8  px-4   
                    bg-gradient-to-r from-blue-400 to-blue-500 ">
                        <div className="text-white">
                                <p className="text-xl font-medium ">Bounce Rate</p>
                               
                        </div>
                        <div className="flex justify-between mt-6">
                       
                        <div className="">
                            <h1 className="text-4xl semi-bold text-white">$ <span>432</span></h1>
                            
                            <div>
                                <select className="rounded-lg px-2 mt-2" id="">
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                        </div> 
                        <div className="text-white"><BsSoundwave className="text-7xl" /></div>
                        </div>
                       
                    </div>

{/* card 4 */}

  <div className=" rounded-2xl py-8  px-4   
                    bg-gradient-to-r from-orange-500 to-orange-300 p-6 text-white">
                        <div className="">
                                <p className="text-xl font-medium ">Revinue Status</p>
                               
                        </div>
                        <div className="flex justify-between mt-6">
                        <div className=""><PiEqualizerThin className="text-7xl" /></div>
                        <div className="">
                            <h1 className="text-4xl semi-bold">$ <span>432</span></h1>
                            <p>Jan 01 - Jan 10</p>
                        </div>
                        </div>
                       
                    </div>
            </div>
        </div>
    );
};

export default CardSection;