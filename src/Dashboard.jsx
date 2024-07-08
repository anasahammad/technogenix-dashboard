import LineChartComponent from "./components/LineChartComponent";
import PieChartComponent from "./components/PieChartComponent";


const Dashboard = () => {
    return (
        <div>
          {/* Dashboard Top Section */}
            <div className=" flex w-full gap-5">
              {/* Line chart  */}
                <div className="w-[75%] flex gap-1  shadow-md rounded-lg p-8">
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
              <button className="px-4 py-2 border rounded-3xl bg-[#E95B7B] text-white">Last Month Summary</button>
            </div>
                      </div>
                    
                   <div className="flex-1 ">
                   <LineChartComponent/>
                   </div>
                   
                </div>

                {/* Pie Chart */}

                <div className="w-[25%] shadow-md p-4 rounded-lg">
                  <h3 className="text-xl">Traffic</h3>
                  <PieChartComponent/>

                  
                </div>
            </div>
        </div>
    );
};

export default Dashboard;