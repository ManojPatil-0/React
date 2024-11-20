import React from "react";
import ReactDOM from "react-dom/client"
import Head from "./Head";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";
import Menulist from "./Menulist";

const Applayout = () =>{
    return (
        <div className="container-fluid">
            <Head />
            <Outlet />
        </div>

    )
}

//Router config
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element :  <Contact />
            },
            {
                path : "/menu/:id",
                element : <Menulist />
            }
        ],
        errorElement : <Error />
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} /> );