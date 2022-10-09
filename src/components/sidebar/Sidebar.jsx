import { 
    Dashboard, 
    CreditCard, 
    LocalShipping, 
    InsertChart, 
    SettingsSystemDaydreamOutlined,
    PsychologyOutlined,
    SettingsApplications,
    AccountCircleOutlined,
    ExitToApp, 
    NotificationsNone, 
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar bg-white h-screen lg:firstflex xl:firstflex border-r border-gray-400">
        <div className="top h-13 flex items-center justify-center">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo text-purplegold text-base lg:text-xl xl:text-xl font-bold px-2">
                Admin
            </span>
            </Link>
        </div>
        <hr className='h-0 border-1 border-gray-400' />
        <div className="center p-0 lg:p-10px xl:p-10px">
            <ul className=' list-none m-0 p-0'>
                <p className="flex justify-center lg:justify-start xl:justify-start title text-min font-bold text-gray-500 mt-4 mb-5px">MAIN</p>
                <Link to="/users" style={{textDecoration:"none"}}> 
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <Dashboard className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Users</span>
                </li>
                </Link>
                <p className="flex justify-center lg:justify-start xl:justify-start title text-min font-bold text-gray-500 mt-4 mb-5px">LISTS</p>
                <Link to="/hotels" style={{textDecoration:"none"}}>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <Dashboard className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn 
                    font-semibold text-lightpink ml-10px">
                        Hotels
                        </span>
                </li>
                </Link>
                
                <Link to="/rooms" style={{textDecoration:"none"}}>
                <li className="justify-center lg:justify-start flex items-center 
                p-5px cursor-pointer hover:bg-hovercolor">
                    <CreditCard className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn 
                    font-semibold text-lightpink ml-10px">
                        Rooms
                    </span>
                </li>
                </Link>

                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <LocalShipping className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn 
                    font-semibold text-lightpink ml-10px">Delivery</span>
                </li>
                <p className="flex justify-center lg:justify-start xl:justify-start title text-min font-bold text-gray-500 mt-4 mb-5px">USEFUL</p>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <InsertChart className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Stats</span>
                </li>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <NotificationsNone className="icon text-newpink text-xl"/>
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Notifications</span>
                </li>
                <p className="flex justify-center lg:justify-start xl:justify-start title text-min font-bold text-gray-500 mt-4 mb-5px">SERVICES</p>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <SettingsSystemDaydreamOutlined className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">System Health</span>
                </li>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <PsychologyOutlined className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Logs</span>
                </li>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <SettingsApplications className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Settings</span>
                </li>
                <p className="flex justify-center lg:justify-start xl:justify-start title text-min font-bold text-gray-500 mt-4 mb-5px">USER</p>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <AccountCircleOutlined className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Profile</span>
                </li>
                <li className="justify-center lg:justify-start flex items-center p-5px cursor-pointer hover:bg-hovercolor">
                    <ExitToApp className="icon text-newpink text-xl" />
                    <span className="hidden lg:block xl:block text-smn font-semibold text-lightpink ml-10px">Logout</span>
                </li>
            </ul>
        </div>
        <div className="flex flex-col justify-center lg:flex-row xl:flex-row items-center lg:items-start lg:justify-start xl:justify-start xl:items-start m-10px">
            <div onClick={() => dispatch({type:"LIGHT"})} 
            className="colorOption mx-5px w-5 h-5 rounded-mid border 
            border-newpink cursor-pointer"></div>
            <div onClick={() => dispatch({type:"DARK"})} 
            className="colorOption mx-5px w-5 h-5 mt-1 lg:mt-0 xl:mt-0 
            rounded-mid border border-newpink cursor-pointer"></div>
            <div className="colorOption mx-5px w-5 h-5 mt-1 lg:mt-0 xl:mt-0 rounded-mid border border-newpink cursor-pointer"></div>
        </div>
    </div>
  )
}

export default Sidebar