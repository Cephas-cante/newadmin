import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined } from '@mui/icons-material'

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="navbar h-13 border-b border-gray-400 flex items-center text-sm text-lightblack">
      <div className="wrapper flex p-5 items-center w-full justify-between">
        <div className="search w-full lg:w-1/5 xl:w-1/5 flex items-center placholder-sm border border-gray-400 p-1">
          <input type="text"
            className="w-full border-none placeholder-sm outline-none bg-transparent"
            placeholder='Search...' />
          <SearchOutlined />
        </div>
        <div className="hidden lg:flex xl:flex items items-center">
          <div className="item flex items-center mr-5">
            <LanguageOutlined className="text-xl" />
            English
          </div>
          <div className="item flex items-center mr-5">
            <DarkModeOutlined className="text-xl" onClick={() => dispatch({type: "TOGGLE"})} />
          </div>
          <div className="item flex items-center mr-5">
            <FullscreenExitOutlined className="text-xl" />
          </div>
          <div className="item flex items-center mr-5 relative">
            <NotificationsNoneOutlined className="text-xl" />
            <div className="counter w-4 h-4 bg-red-500 rounded-full font-bold absolute -top-5px -right-5px text-white text-min flex items-center justify-center">1</div>
          </div>
          <div className="item flex items-center mr-5 relative">
            <ChatBubbleOutlineOutlined className="text-xl" />
            <div className="counter w-4 h-4 bg-red-500 rounded-full font-bold absolute -top-5px -right-5px text-white text-min flex items-center justify-center">2</div>
          </div>
          <div className="item flex items-center mr-5">
            <ListOutlined className="text-xl" />
          </div>
          <div className="item flex items-center mr-5">
            <img src="https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className=" h-7 w-7 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar