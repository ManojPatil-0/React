import { useState,useEffect } from "react";
import { MENU_API } from "../Utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const Menulist = () => {

    const [listitem,  setlistitem] = useState(null);
    const { id }  = useParams();
    console.log(id);
    useEffect ( () => {
        //console.log("fecthing");
        fetchData();
    },[]);

    async function fetchData () {
        console.log(MENU_API+id)
        const apidata = await fetch(MENU_API + id );
        const jsondata = await apidata.json();
        //console.log(jsondata);
        setlistitem(jsondata);
    }
    //console.log(listitem);
    if ( listitem === null ) { return  <Shimmer /> };
    const {name,costForTwoMessage,cuisines,avgRating} = listitem?.data?.cards[2]?.card?.card?.info;
    
    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h3>Cuisines - {cuisines.join(", ")}</h3>
            <h3>Raing - {avgRating}</h3>
        </div>
    )
}

export default Menulist;