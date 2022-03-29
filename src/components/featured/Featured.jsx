import React from 'react'
import { MoreVert, KeyboardArrowDown, KeyboardArrowUpOutlined } from "@mui/icons-material"
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="secondflex shadow-all p-10px">
        <div className="top flex items-center text-gray-400 justify-between">
            <h1 className="title text-sm font-medium">Total Revenue</h1>
            <MoreVert fontSize="small" />
        </div>
        <div className="bottom p-5 flex flex-col items-center justify-center flexgap">
            <div className="featuredChart w-100 h-100">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title font-medium">
                Total sales made today
            </p>
            <p className="amount text-3xl">$480</p>
            <p className="desc font-light text-smn text-gray-500 text-center">
                Previous transaction processing. Last payments may not be included.
            </p>
            <div className="summary flex items-center justify-between w-full">
                <div className="item text-center">
                    <div className="itemTitle text-sm text-gray-600">Target</div>
                    <div className="itemResult negative flex mt-10px text-sm items-center">
                        <KeyboardArrowDown fontSize="small" />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item text-center">
                    <div className="itemTitle text-sm text-gray-600">Last Week</div>
                    <div className="itemResult positive flex mt-10px text-sm items-center">
                        <KeyboardArrowUpOutlined fontSize="small" />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item text-center">
                    <div className="itemTitle text-sm text-gray-600">Last Month</div>
                    <div className="itemResult positive flex mt-10px text-sm items-center">
                        <KeyboardArrowUpOutlined fontSize="small" />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured