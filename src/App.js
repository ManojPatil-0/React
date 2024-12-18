import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Head from "./Head";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";
import Menulist from "./Menulist";
//import AboutClass from "./AboutClass";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Acmaster from "./Acmaster";
const About = lazy( ()=> import("./About") ); //lazy loading

const Applayout = () =>{
    const Internet = useOnlineStatus();
    return Internet === false ? "No Internet, Please check your connections !" :  (
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
                element : <Suspense fallback = {<h1>Loading...</h1>} >
                            <About /> 
                          </Suspense>
            },
            {
                path : "/contact",
                element :  <Acmaster />
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