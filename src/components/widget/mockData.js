import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const data = [{
    title: "USERS",
    isMoney: false,
    link: "See all users",
    icon: (
        <PersonOutlinedIcon
            className="icon"
            style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
        />
    ),
},
{
    title: "ORDERS",
    isMoney: false,
    link: "View all orders",
    icon: (
        <ShoppingCartOutlinedIcon
            className="icon"
            style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
            }}
        />
    ),
},
{
    title: "EARNINGS",
    isMoney: true,
    link: "View net earnings",
    icon: (
        <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
    ),
},
{
    title: "BALANCE",
    isMoney: true,
    link: "See details",
    icon: (
        <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
            }}
        />
    ),
},
{
    title: "Loans",
    isMoney: true,
    link: "See details",
    icon: (
        <CreditScoreIcon
            className="icon"
            style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
            }}
        />
    ),
    balance: 754,
}

]