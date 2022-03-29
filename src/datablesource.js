export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"user", 
        headerName:"User", 
        width:230, 
        renderCell: (params)=> {
            return (
                <div className="cellImgWidth flex items-center">
                    <img className="cellImg h-5 w-5 rounded-full mr-10px object-cover" src={params.row.img} alt="" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName: "Email", width: 230,
    },
    {
        field: "age", headerName: "Age", width: 100,
    },
    {
        field: "status", headerName: "Status", width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus capitalize p-5px rounded-mid 
                ${
                params.row.status === "active" ? 
                "text-green-500 bg-green-200"
                : ""}
                ${
                params.row.status === "passive" ? 
                "text-red-500 bg-red-200" 
                : ""}
                ${
                    params.row.status === "pending" ? 
                    "text-yellow-500 bg-yellow-200" 
                    : ""
            } `}>{params.row.status}</div>
            )
        }
    }, 
]

export const userRows = [
    {
        id:1,
        username: "Snow",
        img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        status:"active", 
        email:"isnowwell@gmail.com",
        age: 32,
    },
    {
        id:2,
        username: "Stark",
        img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        status:"passive", 
        email:"isnowwell@gmail.com",
        age: 32,
    },
    {
        id:3,
        username: "Roxxie",
        img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        status:"pending", 
        email:"isnowwell@gmail.com",
        age: 32,
    },
    {
        id:4,
        username: "Lannister",
        img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        status:"active", 
        email:"isnowwell@gmail.com",
        age: 32,
    },
    {
        id:5,
        username: "Jannie Lannister",
        img: "https://images.pexels.com/photos/3284695/pexels-photo-3284695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        status:"active", 
        email:"isnowwell@gmail.com",
        age: 32,
    },
]