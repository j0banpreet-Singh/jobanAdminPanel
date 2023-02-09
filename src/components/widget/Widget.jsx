import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        isMoney: false,
        icon: <PersonOutlinedIcon className="icon" />
      }
      break;
    case "order":
      data = {
        title: "ORDERS",
        link: "View all users",
        isMoney: false,
        icon: <ShoppingCartOutlinedIcon className="icon" />
      }
      break;
    case "earning":
      data = {
        title: "EARNONGS",
        link: "view net earnings",
        isMoney: true,
        icon: <MonetizationOnOutlinedIcon className="icon" />
      }
      break;
    case "balance":
      data = {
        title: "BALANCE",
        link: "See details",
        isMoney: true,
        icon: <AccountBalanceOutlinedIcon className="icon" />
      }
      break;
    default:
      break
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}2001</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
