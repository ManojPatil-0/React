import { MAIN_LOGO } from "../Utils/constant";
const Head = () =>{
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
                </li>
            </div>
        </div>
    )
}

export default Head;