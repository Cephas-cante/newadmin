import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import { useState } from "react"
import { roomInputs } from "../../formSource"
import axios from "axios";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const {data, loading, error} = useFetch("/hotels");
  console.log("rooms", data);
  const handleChange = (e) => {
    setInfo(prev=>({...prev, [e.target.id]:e.target.value}));
  }
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map(room=>({number:room}));
    console.log(roomNumbers);
    console.log(info);
    try {
      await axios.post(`/rooms/${hotelId}`, {...info, roomNumbers});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="new flex w-full">
      <Sidebar />
      <div className="newContainer sixthflex">
        <Navbar />
         <div className="top shadow-all p-10px m-5 flex">
           <h1 className="text-gray-400 text-xl">Add new Room</h1>
         </div>
         <div className="bottom shadow-all p-10px m-5 flex">
           <div className="secondflex">
             <form className="flex flex-wrap flexgap justify-around">
                {roomInputs.map((input) => (
                  <div className="formInput w-2/5" key={input.id}>
                    <label className="flex items-center flexgap" htmlFor="username">
                      {input.label}
                    </label>
                    <input className="w-full border-b outline-none border-gray-400" 
                    type={input.type}
                    name="username" 
                    id={input.id}
                    onChange={handleChange}
                    placeholder={input.placeholder} />
                  </div>
                ))}
                <div className="formInput w-2/5">
                    <label className="flex items-center flexgap" htmlFor="username">
                      Rooms
                    </label>
                    <textarea onChange={e=>setRooms(e.target.value)} placeholder="Give comma between room numbers" />
                  </div>
                <div className="formInput w-2/5">
                    <label className="flex items-center flexgap" htmlFor="username">
                      Choose a label
                    </label>
                    <select
                    onChange={e=>setHotelId(e.target.value)}
                    id="hotelId">
                      {loading ? "loading" : data && data.map(hotel=>(
                        <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                      ))}
                    </select>
                  </div>
                <button 
                onClick={handleClick}
                className=" w-40 outline-none bg-teal-500 p-10px text-white border-none font-bold cursor-pointer mt-10px">
                  Send
                </button>
             </form>
           </div>
         </div>
      </div>
    </div>
  )
}

export default NewRoom;