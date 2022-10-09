import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { userColumns, userRows } from '../../datablesource'
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const {data, loading, error} = useFetch(`/${path}`);
  useEffect(() => {
    setList(data);
    console.log("datagotten", data, path)
  },[data])
  // const [data, setData] = useState(userRows)
  const handleDelete = async (id) => {
    try{
      await axios.delete(`/${path}/${id}`);
      setList(list.filter(item => item._id !== id));
    }catch(err){
    }
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
                  <div onClick={() => handleDelete(params.row._id)} 
                  className="deleteButton py-1 px-5px rounded-mid text-red-600 border border-dashed cursor-pointer border-red-600">Delete</div>
              </div>
          )
      }
  }]
  return (
    <div className="datatable p-5" style={{height: "600px"}}>
      <div className="dataTableTitle w-full text-2xl text-gray-400 mb-10px flex items-center justify-between">
        Add new {path}
        <Link to={`/${path}/new`} className=" no-underline p-5px rounded-mid text-green-500 text-base font-normal border border-green-500" style={{textDecoration:"none"}}>
          Add new
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={list} 
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default Datatable