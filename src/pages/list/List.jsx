import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const List = ({columns}) => {
  return (
    <div className="list flex w-full">
      <Sidebar />
      <div className="listContainer sixthflex">
        <Navbar />
        <Datatable columns={columns} />
      </div>
    </div>
  )
}

export default List