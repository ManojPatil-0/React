import { MAIN_LOGO } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Head = () =>{
    const [btnname,setbtname] = useState('Login')
    return (
        <div className="head-container">
            <div className="logo">
                <img src = {MAIN_LOGO} ></img>
            </div>
            <div className="menu-list">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>
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