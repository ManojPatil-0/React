import useFetchApi from "../Utils/useFetchApi";
import { MENU_API } from "../Utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Menudetails from "./Menudetails";
import { useEffect, useState } from "react";

const Menulist = () => {

    const[showindex,setshowindex] = useState(0);
    const[showitem,setshowitem] = useState(false);
    const[rotate,setrotate] = useState("font-bold transform rotate-0") //not needed

    const { id }  = useParams();
    const listitem = useFetchApi(MENU_API+id);


    if ( listitem === null ) { return  <Shimmer />; menudata = "" };
    const {name,city,avgRating,areaName,locality} = listitem?.cards[2]?.card?.card?.info;
    const  menudata  = listitem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="justify-items-center w-12/12">
            <div className="border-solid border-4  bg-gray-300 rounded-[12px] w-7/12 justify-items-center" >
                <h1 className="text-xl font-extrabold p-5 border-b-[0.5px] border-gray-500 w-[80%] text-center">{name}</h1>
                <h3 className="font-bold">Rating - { avgRating }</h3>
                <h3 className="italic text-sm">Address - { locality }, {areaName} - {city} </h3>
            </div>
            <div className="w-7/12"  >
                {
                    menudata.map( (res,index) => {
                        if ( res?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"  ){
                            return <Menudetails key = {res?.card?.card?.title} 
                            alldata = {res?.card?.card } 
                            showitem={  index === showindex && !showitem ? true : false }
                            setshowindex = { () => setshowindex(index) }
                            setshowitem = { () => setshowitem(index === showindex && !showitem ) }
                            rotate = {index === showindex && rotate !== "font-bold transform rotate-0" ? "font-bold transform rotate-180" : "font-bold transform rotate-0"}
                            setrotate={ () => setrotate(index === showindex ? "font-bold transform rotate-0" : "font-bold transform rotate-180") }
                            />
                        }
                    } )
                }
            </div>
        </div>
    )
}
export default Menulist;