import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkmodeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const value = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Singhadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/product" style={{ textDecoration: "none" }}>
                        <li>
                            <ReceiptOutlinedIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <Inventory2OutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delievery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartRoundedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsRoundedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SpaRoundedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <SubjectRoundedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxRoundedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"
                    onClick={() => {
                        dispatch({ type: "LIGHT" })
                        console.log(value)
                    }
                    }></div>
                <div className="colorOption" onClick={() => {
                    dispatch({ type: "DARK" })
                    console.log(value)
                }
                }></div>
            </div>
        </div>
    )
}

export default Sidebar
