import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datablesource'
import { Link } from "react-router-dom"
import { useState } from "react"

const Datatable = () => {
  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }
  const actionColumn = [{
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
          return (
              <div className="cellAction flex items-center flexgap">
                <Link to="/users/test" style={{textDecoration:"none"}}>
                  <div className="viewButton py-1 px-5px rounded-mid text-blue-600 border border-dashed cursor-pointer border-blue-600">View</div>
                </Link>
                  <div onClick={() => handleDelete(params.row.id)} className="deleteButton py-1 px-5px rounded-mid text-red-600 border border-dashed cursor-pointer border-red-600">Delete</div>
              </div>
          )
      }
  }]
  return (
    <div className="datatable p-5" style={{height: "600px"}}>
      <div className="dataTableTitle w-full text-2xl text-gray-400 mb-10px flex items-center justify-between">
        Add new User
        <Link to="/users/new" className=" no-underline p-5px rounded-mid text-green-500 text-base font-normal border border-green-500" style={{textDecoration:"none"}}>
          Add new
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable