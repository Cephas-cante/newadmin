import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import { useState } from "react"

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")
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
                    <input className="w-full border-b outline-none border-gray-400" 
                    type={input.type}
                    name="username" 
                    id="username" 
                    placeholder={input.placeholder} />
                  </div>
                ))}
                
                <button className=" w-40 outline-none bg-teal-500 p-10px text-white border-none font-bold cursor-pointer mt-10px">
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