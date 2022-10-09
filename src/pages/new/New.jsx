import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import { useState } from "react"
import axios from "axios"

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo(prev=>({...prev, [e.target.id]:e.target.value}));
  }

  const handleClick = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try{
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/lovable/image/upload", data);
      console.log(uploadRes);
      const {url} = uploadRes.data;
      const newUser = {
        ...info,
        avatar: url,
      };
      console.log(newUser);
      const res = await axios.post("/register_user", newUser);
      console.log(res);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="new flex w-full">
      <Sidebar />
      <div className="newContainer sixthflex">
        <Navbar />
         <div className="top shadow-all p-10px m-5 flex">
           <h1 className="text-gray-400 text-xl">{title}</h1>
         </div>
         <div className="bottom shadow-all p-10px m-5 flex">
           <div className="left flex justify-center firstflex text-center">
             <img 
             src={file ? URL.createObjectURL(file) 
              : "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" } 
             alt="" 
             className=" h-24 w-24 rounded-full object-cover"
             />
           </div>
           <div className="secondflex">
             <form className="flex flex-wrap flexgap justify-around">
                <div className="formInput w-2/5">
                  <label className="flex items-center flexgap" htmlFor="file"> Image: <DriveFolderUploadOutlined className="icon cursor-pointer"/></label>
                  <input className="w-full hidden border-b outline-none border-gray-400" 
                  onChange={e=> setFile(e.target.files[0])}
                  type="file" 
                  name="file" 
                  id="file"/>
                </div>
                
                {inputs.map((input) => (
                  <div className="formInput w-2/5" key={input.id}>
                    <label className="flex items-center flexgap" htmlFor="username">
                      {input.label}
                    </label>
                    <input 
                    onChange={handleChange}
                    className="w-full border-b outline-none border-gray-400" 
                    type={input.type}
                    // name="username" 
                    placeholder={input.placeholder} 
                    id={input.id}
                    />
                  </div>
                ))}
                
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

export default New