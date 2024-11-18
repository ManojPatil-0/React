import { MAIN_LOGO } from "../Utils/constant";
import { useState } from "react";
const Head = () =>{
    const [btnname,setbtname] = useState('Login')
    return (
        <div className="head-container">
            <div className="logo">
                <img src = {MAIN_LOGO} ></img>
            </div>
            <div className="menu-list">
                <li>
                    <ul>Home</ul>
                    <ul>About Us</ul>
                    <ul>Contact Us</ul>
                    <ul>Cart</ul>
                    <ul>
                        <button className="btn-login" onClick={ () => {
                            btnname === "Login" ? setbtname("Logout") : setbtname("Login");
                        } }>{btnname}</button>
                    </ul>
                </li>
            </div>
        </div>
    )
}

export default Head;