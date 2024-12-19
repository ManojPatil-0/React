import { MAIN_LOGO } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Head = () =>{
    const [btnname,setbtname] = useState('Login')
    const Internet = useOnlineStatus();

    const cartitems = useSelector( (store) => store.cart.items);

    return (
        <div className="flex bg-black text-white justify-between items-center font-medium shadow-md">
            <div className="w-28">
                <img src = {MAIN_LOGO} ></img>
            </div>
            <div className="flex text-lg">
                <ul className="flex">
                    <li className="px-3"><Link to="/">Home</Link> </li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3"><Link to="/cart">
                                            { cartitems.length > 0  ?  "Cart - (" +cartitems.length + ")items" : "Cart" }
                                        </Link>
                    </li>
                    <li className="px-3">
                        <button className="btn-login" onClick={ () => {
                            btnname === "Login" ? setbtname("Logout") : setbtname("Login");
                        } }>{btnname}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Head;