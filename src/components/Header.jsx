import { FaBars } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {  MdOutlineEmail } from "react-icons/md";


const Header = ({toggleSideBar}) => {
    return (
        <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-4">
        <div onClick={toggleSideBar} className="text-2xl cursor-pointer font-bold text-gray-700">
        <FaBars  />
        </div>
        <div className="flex items-center space-x-4">
        
          <div className="relative">
            <button className="btn btn-ghost btn-circle">
            
<IoMdNotificationsOutline className="h-5 w-5" />
            </button>
            
            <span className="absolute top-3 right-3 badge badge-xs badge-error indicator-item"></span>
          </div>
          <div className="relative">
            <button className="btn btn-ghost btn-circle">
            

<MdOutlineEmail className="h-5 w-5"/>
            </button>
            
            <span className="absolute top-3 right-3 badge badge-xs badge-error indicator-item"></span>
          </div>
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
              </div>
            </button>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/">Profile</a></li>
              <li><a href="/">Settings</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
          <div className="">
            <button className="btn btn-ghost btn-circle">
            
<IoSettingsOutline className="h-5 w-5" />
            </button>
            
           
          </div>
        </div>
      </div>
    );
};

export default Header;