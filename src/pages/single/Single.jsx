import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single flex w-full">
      <Sidebar />
      <div className="singleContainer sixthflex">
        <Navbar />
        <div className="top p-5 flex flexgap ">
          <div className="left p-5 shadow-all firstflex relative">
            <div className="editButton rounded-tr-lg rounded-tl-none rounded-b-0  absolute top-0 right-0 p-5px text-sm text-purple-500 bg-purple-300 cursor-pointer">
              Edit
            </div>
            <h1 className="title text-base mb-5 font-semibold text-gray-400">Information</h1>
            <div className="item flex flexgap">
              <img 
              src="https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" 
              className="itemImg w-24 h-24 rounded-full object-cover" />
            
             <div className="details">
                <h1 className="itemTitle mb-10px text-lightblack ">
                  Jane Doe
                </h1>
                <div className="detailItem mb-10px text-sm">
                  <span className="itemKey mr-5px font-bold text-gray-500">Email:</span>
                  <span className="itemValue font-light">joedoe@gmail.com</span>
                </div>
                <div className="detailItem mb-10px text-sm">
                  <span className="itemKey mr-5px font-bold text-gray-500">Phone:</span>
                  <span className="itemValue font-light">joedoe@gmail.com+1 234 3453</span>
                </div>
                <div className="detailItem mb-10px text-sm">
                  <span className="itemKey mr-5px font-bold text-gray-500">Address:</span>
                  <span className="itemValue font-light">Along Crystal Road, Oshogbo</span>
                </div>
                <div className="detailItem mb-10px text-sm">
                  <span className="itemKey mr-5px font-bold text-gray-500">Country:</span>
                  <span className="itemValue font-light">USA</span>
                </div>
             </div>
             </div>
          </div>
          <div className="right secondflex">
            <Chart aspect={3 / 1} title="User Spendings(Last six months)"/>
          </div>
        </div>
        <div className="bottom p-5 my-10px mx-5 shadow-all">
          <h1 className="title text-base mb-5 font-semibold text-gray-400">
            Last transactions
          </h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single