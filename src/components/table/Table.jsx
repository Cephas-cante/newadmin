import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id:1233,
            product: "Acer Nitro 5",
            img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id:2233,
            product: "Play Station 5",
            img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id:3233,
            product: "Acer Nitro 5",
            img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id:4233,
            product: "Acer Nitro 5",
            img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id:5233,
            product: "Acer Nitro 5",
            img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
    ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                  <div className="cellWrapper flex items-center">
                      <img src={row.img} alt="" className="image h-5 w-5 rounded-full mr-10px object-cover" />
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                  <span className={`status p-5px rounded-mid ${row.status === "Pending" ? 'text-red-500 bg-red-200' : 'text-green-500 bg-green-200'} `}>
                      {row.status}
                  </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List