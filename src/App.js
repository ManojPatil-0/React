import React from "react";
import ReactDOM from "react-dom/client"
import Head from "./Head";
import Body from "./Body";

const Applayout = () =>{
    return (
        <div className="container-fluid">
            <Head />
            <Body />
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);