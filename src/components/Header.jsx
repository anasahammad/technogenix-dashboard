
import { FaBars } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {  MdOutlineEmail } from "react-icons/md";
import useTheme from "../hooks/useTheme";


const Header = ({toggleSideBar}) => {
const {theme, setTheme} = useTheme()
 
    return (
        <div className="w-full h-16  shadow-md flex items-center justify-between px-4">
        <div onClick={toggleSideBar} className={`text-2xl cursor-pointer font-bold  ${theme === 'dark'? 'text-white': 'text-gray-700'}`}>
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
          <div >
            <button className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
              </div>
            </button>
            
          </div>
          <div className="dropdown dropdown-end ">
            <button className="btn btn-ghost btn-circle">
            
<IoSettingsOutline className="h-5 w-5" />
            </button>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow z-10 bg-base-100 rounded-box w-52">
              <li><button onClick={()=> {setTheme("dark")
                localStorage.setItem("theme", "dark")
              }}>Dark Mode</button></li>
              <li><button onClick={()=> {setTheme("light")
                localStorage.setItem("theme", "light")
              }}>Light Mode</button></li>
              <li><a href="/">Settings</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
           
          </div>
        </div>
      </div>
    );
};

export default Header;