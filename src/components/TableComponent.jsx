import { FaComments, FaHandshake } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoNewspaperOutline } from "react-icons/io5";
import { TiAnchorOutline } from "react-icons/ti";



const activities = [
    {time: "40 Mins Ago", icon: <IoCheckmarkCircleOutline />, title: "Task Updated", description: "Nikolai Updated a Task", iconBg : 'bg-[#E95B7B]'},

    {time: "1 Day ago", icon: <FaHandshake />, title: "Deal Added", description: "Panshi Updated a Task", iconBg : 'bg-purple-500'},

    {time: "40 Mins Ago", icon: <IoNewspaperOutline />, title: "Published Article", description: "Sanshi Updated a Article", iconBg : 'bg-blue-500'},

    {time: "1 Day ago", icon: <TiAnchorOutline />, title: "Doc Updated", description: "Manshi Updated a Doc", iconBg : 'bg-yellow-500'},

    {time: "1 Day ago", icon: <FaComments />, title: "Replied Comment", description: "Fanshi Added a Comment", iconBg : 'bg-green-500'},
]
const TableComponent = () => {
    return (
        <div className="flex ">
            {/* left section */}
            <div className="shadow-lg border p-6 rounded-lg">
                <h4 className=" font-bold">Recent Activities</h4>

                {
                    activities.map((activity, idx)=> (
                        <div key={idx} className="flex my-12 gap-6 items-center ">
                    <p>{activity.time}</p>
                    <div className="flex justify-center items-center gap-6">
                        <div className={`text-3xl  text-white p-2 rounded-full ${activity.iconBg}`}>
                        {activity.icon}
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">{activity.title}</h2>
                            <p>{activity.description}</p>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TableComponent;