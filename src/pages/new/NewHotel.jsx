import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import { useState } from "react"
import { hotelInputs } from "../../formSource"
import useFetch from "../../hooks/useFetch"
import "./newhotel.css";

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const {data, loading, error} = useFetch("/rooms");
  console.log("rooms", data);
  const handleChange = (e) => {
    setInfo(prev=>({...prev, [e.target.id]:e.target.value}));
  }

  const handleSelect = (e) => {
   const value = Array.from(e.target.selectedOptions, (option) => option.value);
   setRooms(value);
  };

  console.log(files);

  const handleClick = async e => {
    e.preventDefault();
    try{
      const list = await Promise.all(
        Object.values(files).map(async (file)=>{
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/lovable/image/upload", data);
        console.log(uploadRes);
        const {url} = uploadRes.data;
        return url;
        }));

        const newhotel = {
          ...info, rooms, photos:list 
        };

        console.log(newhotel);

        const res = await axios.post("/hotels", newhotel);
        console.log(res);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="new flex w-full">
      <Sidebar />
      <div className="newContainer sixthflex">
        <Navbar />
         <div className="top shadow-all p-10px m-5 flex">
           <h1 className="text-gray-400 text-xl">Add New Hotel</h1>
         </div>
         <div className="bottom shadow-all p-10px m-5 flex">
           <div className="left flex justify-center firstflex text-center">
             <img 
             src={files ? URL.createObjectURL(files[0]) 
              : "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" } 
             alt="" 
             className=" h-24 w-24 rounded-full object-cover"
             />
           </div>
           <div className="secondflex">
             <form className="flex flex-wrap flexgap justify-around">
                <div className="formInput w-2/5">
                  <label className="flex items-center flexgap" htmlFor="file"> Image: <DriveFolderUploadOutlined className="icon cursor-pointer"/></label>
                  <input 
                  multiple
                  className="w-full hidden border-b outline-none border-gray-400" 
                  onChange={e=> setFiles(e.target.files)}
                  type="file" 
                  // name="file" 
                  id="file"/>
                </div>
                
                {hotelInputs.map((input) => (
                  <div className="formInput w-2/5" key={input.id}>
                    <label className="flex items-center flexgap" htmlFor="username">
                      {input.label}
                    </label>
                    <input 
                    id={input.id}
                    onChange={handleChange}
                    className="w-full border-b outline-none border-gray-400" 
                    type={input.type}
                    // name="username" 
                    placeholder={input.placeholder} />
                  </div>
                ))}
                <div className="formInput w-2/5">
                    <label className="flex items-center flexgap" htmlFor="featured">
                      Featured
                    </label>
                    <select id="featured" onChange={handleChange}>
                      <option value={false}>No</option>
                      <option value={false}>Yes</option>
                    </select>
                </div>
                <div className="formInput selectRooms w-2/5">
                    <label className="flex items-center flexgap" htmlFor="featured">
                      Rooms
                    </label>
                    <select id="rooms" multiple onChange={handleSelect}>
                      {loading ? "loading" : data && data.map(room=>(
                        <option key={room._id} value={room._id}>{room.title}</option>
                      ))}
                    </select>
                </div>
                <button 
                onClick={handleClick}
                className="block w-40 outline-none bg-teal-500 p-10px text-white border-none font-bold cursor-pointer mt-10px">
                  Send
                </button>
             </form>
           </div>
         </div>
      </div>
    </div>
  )
}

export default NewHotel;