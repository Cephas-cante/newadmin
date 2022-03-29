import { KeyboardArrowUp, PersonOutlined, ShoppingCartOutlined, AccountBalanceWalletOutlined, MonetizationOnOutlined } from "@mui/icons-material"

const Widget = ({ type }) => {
    let data;

    const amount = 200;
    const diff = 20;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "View all users",
                icon: <PersonOutlined className="icon text-2xl p-5px self-end" style={{color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}} />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlined className="icon text-2xl p-5px self-end" style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}}  />
            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className="icon text-2xl p-5px self-end" style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}}  />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlined className="icon text-2xl p-5px self-end" style={{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}  />
            };
            break;
    }
  return (
    <div className="widget flex firstflex p-10px justify-between shadow-all h-100">
        <div className="left flex flex-col justify-between">
            <span className="title font-bold text-sm text-gray-400">{data.title}</span>
            <span className="counter text-3xl font-light">
                {data.isMoney && "$" } {amount}
            </span>
            <span className="link text-smn border-b border-gray-400 max-w-max">
                {data.link}
            </span>
        </div>
        <div className="right flex flex-col justify-between">
            <div className="percent positive flex items-center text-sm font-light">
                <KeyboardArrowUp />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget