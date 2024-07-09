import { FaAngleLeft, FaAngleRight, FaComments, FaFile, FaHandshake, FaTrash } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoCheckmarkCircleOutline, IoNewspaperOutline } from "react-icons/io5";
import { LuAlarmPlus } from "react-icons/lu";
import { TiAnchorOutline } from "react-icons/ti";
import TableRow from "./TableRow";



const activities = [
    {time: "40 Mins Ago", icon: <IoCheckmarkCircleOutline />, title: "Task Updated", description: "Nikolai Updated a Task", iconBg : 'bg-[#E95B7B]'},

    {time: "1 Day ago", icon: <FaHandshake />, title: "Deal Added", description: "Panshi Updated a Task", iconBg : 'bg-purple-500'},

    {time: "40 Mins Ago", icon: <IoNewspaperOutline />, title: "Published Article", description: "Sanshi Updated a Article", iconBg : 'bg-blue-500'},

    {time: "1 Day ago", icon: <TiAnchorOutline />, title: "Doc Updated", description: "Manshi Updated a Doc", iconBg : 'bg-yellow-500'},

    {time: "1 Day ago", icon: <FaComments />, title: "Replied Comment", description: "Fanshi Added a Comment", iconBg : 'bg-green-500'},
]


const tableData = [
    { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Process' },
    { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Open' },
    { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'On Hold' },
    { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Process' },
    { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Open' },
  ];
const TableComponent = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* left section */}
            <div className="shadow-md  p-6 rounded-lg md:w-[35%]">
                <h4 className=" font-bold">Recent Activities</h4>

                {
                    activities.map((activity, idx)=> (
                        <div key={idx} className="flex  my-12  items-center justify-between">
                    <p>{activity.time}</p>
                    <div className="flex p-4 md:w-72  justify-center  items-center gap-6">
                        <div className={`text-3xl  text-white p-2 rounded-full ${activity.iconBg}`}>
                        {activity.icon}
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold">{activity.title}</h2>
                            <p>{activity.description}</p>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>

            {/* Right Section */}
            
            <div className=" p-6 shadow-md rounded-lg md:w-[65%]">
            <h4 className=" font-bold">Order Status</h4>
            <p>Overview of latest month</p>

            <div>
            <div className="flex flex-col md:flex-row gap-4 my-6 justify-between md:items-center">
                    <div className="flex gap-3">
                   
                    
                        <button className="bg-red-500 p-2 rounded-xl text-xl flex items-center gap-2 text-white"> <LuAlarmPlus/>  Add</button>
                           
                        <button className="bg-gray-700 p-4 rounded-xl text-xl flex items-center gap-2 text-white"> <FaTrash /> </button>

                        <button className="bg-gray-700 p-4 rounded-xl text-xl flex items-center gap-2 text-white"> <FaCircleExclamation /> </button>

                        <button className="bg-gray-700 p-4 rounded-xl text-xl flex items-center gap-2 text-white"> <FaFile /></button>
                           
                  
                    </div>

                    <div className="flex gap-3 items-center">
          <input className="bg-gray-700 p-4 rounded-lg text-white" type="text" placeholder="Search" />
          <button className="bg-gray-700 p-4 rounded-xl text-xl flex items-center gap-2 text-white"> <FaFile /></button>
        </div>
                </div>
            </div>

            {/* Table */}

                <div className=" py-6 w-full  overflow-x-auto">
                <table className="table  overflow-auto">
                <thead>
          <tr className=" ">
            <th className="text-[16px] font-semibold">INVOICE</th>
            <th className="text-[16px] font-semibold">CUSTOMERS</th>
            <th className="text-[16px] font-semibold">FROM</th>
            <th className="text-[16px] font-semibold">PRICE</th>
            <th className="text-[16px] text-center font-semibold">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <TableRow key={index} {...item} />
          ))}
        </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">Showing 1 to 20 entries</p>
        <div className="flex items-center">
          <button className="  mr-2">
          <FaAngleLeft />
          </button>
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <button key={number} className={`p-1  rounded-full mx-1 ${number === 2 ? 'bg-red-500 text-white w-8 h-8' : ''} `}>
              {number}
            </button>
          ))}
          <button className="  ml-2">
          <FaAngleRight />
          </button>
        </div>
        </div>
                </div>
            </div>

                
        </div>
    );
};

export default TableComponent;