import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
    <div className="list flex w-full">
      <Sidebar />
      <div className="listContainer sixthflex">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List