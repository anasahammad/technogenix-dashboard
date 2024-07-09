import { SlWallet } from "react-icons/sl";
import LineChartComponent from "./components/LineChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import useTheme from "./hooks/useTheme";
import { FaWallet } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import CardSection from "./components/CardSection";


const activites = [
  {
    time: "40 Mins",
    icon: <FaRegCircleCheck />
  }
]
const Dashboard = () => {
  const {theme} = useTheme()
    return (
        <div>
          {/* Dashboard Top Section */}
            <div className=" flex w-full gap-5">
              {/* Line chart  */}
                <div className="w-[75%] flex flex-col gap-2">
                      <div className=" flex gap-1  shadow-md rounded-lg p-8">
                      <div className=" flex flex-col space-y-6 ">
                        <div>
                        <h5 className="text-xl font-semibold">Dashboard</h5>
                        <p>Overview of latest Month</p>
                        </div>
                        <div>
                        <h1 className="text-4xl font-bold">$6468.96</h1>
                        <p>Overview of latest Month</p>
                        </div>
                        <div>
                        <h1 className="text-4xl font-bold">82</h1>
                        <p>Current Month Sales</p>
                        </div>

            <div>
              <button className="px-4 py-2 rounded-3xl bg-[#E95B7B] text-white">Last Month Summary</button>
            </div>
                      </div>
                    
                   <div className="flex-1 ">
                   <LineChartComponent/>
                   </div>
                      </div>
                   
                   <div className="grid grid-cols-4 p-4 shadow-md rounded-lg">

                        <div className="flex items-center gap-3">
                            <div className="text-3xl bg-[#E95B7B] text-white p-4 rounded-full">
                            <SlWallet />
                            </div>

                            <div className="space-y-2">
                              <p className="font-medium text-gray-600">Wallet Ballance</p>
                              <p className="font-semibold text-xl ">$3567.80</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-3xl bg-[#835EBF] text-white p-4 rounded-full">
                            <SlWallet />
                            </div>

                            <div className="space-y-2">
                              <p className="font-medium text-gray-600">Referral Earning</p>
                              <p className="font-semibold text-xl ">$1589.53</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-3xl bg-[#835EBF] text-white p-4 rounded-full">
                            <FaWallet />
                            </div>

                            <div className="space-y-2">
                              <p className="font-medium text-gray-600"> Estimate Sale</p>
                              <p className="font-semibold text-xl ">$2651.50</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-3">
                            <div className="text-3xl bg-[#53AEE8] text-white p-4 rounded-full">
                            <FaWallet />
                            </div>

                            <div className="space-y-2">
                              <p className="font-medium text-gray-600">Earnings</p>
                              <p className="font-semibold text-xl ">$53,567.54</p>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Pie Chart */}

                <div className="w-[25%] shadow-md p-4 rounded-lg">
                  <h3 className="text-xl">Traffic</h3>
                  <PieChartComponent/>

                 
                  
                </div>
            </div>

            {/* card section */}
            <CardSection/>
            {/* Dashboard Table Section */}

            <div>

            </div>
        </div>
    );
};

export default Dashboard;