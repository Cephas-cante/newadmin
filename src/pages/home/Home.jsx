import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className="home flex">
      <Sidebar/>
      <div className="homeContainer sixthflex">
        <Navbar />
        <div className="widgets flex flexgap p-5">
          <Widget type="user" />
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts flex flexgap py-5px px-5">
           <Featured />
           <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer shadow-all p-5 m-5">
          <div className="listTitle font-medium text-gray-500 mb-4">
            Latest transactions
          </div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home