import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    const [loginButton,setLoginButton] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="logo-container">
                <Link to="/"><img className="w-40" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="">Cart</Link></li>
                    <button className="login" onClick={() =>{
                        return loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login");
                    }}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;