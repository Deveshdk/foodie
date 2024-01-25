import {LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header =()=>{
    const [loginButton,setLoginButton] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    // read from store
    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between px-32  shadow-lg">
            <div className="logo-container">
                <Link to="/"><img className="w-32" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="login px-4" onClick={() =>{
                        return loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login");
                    }}>{loginButton}</button>
                    <p className="font-bold">{loggedInUser}</p>
                </ul>
            </div>
        </div>
    )
};

export default Header;