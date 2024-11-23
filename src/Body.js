import Cards from "./Cards";
import { useState, useEffect } from "react";
import { REST_DATA } from "../Utils/data";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
    let apidatas = REST_DATA.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ;
    
    const [itemofcards,setitemofcards] = useState(null)
    const [searchText, setsearchText] = useState("");
    const [filteredapi, setfilteredapi] = useState([]);

    useEffect(()=>{ fetchData()},[]);
    
    const fetchData = async() => {
        const fetchapi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsondata = await fetchapi.json();
        setitemofcards(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredapi(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    return itemofcards === null ? <Shimmer /> : (
        <div className="mx-4 justify-items-center">
            <div className="flex justify-between my-4 w-[86%]  border-solid border-2 p-5 rounded-md">
                <div className="w-[70%]">
                    <input type="text" id = "search" value={searchText} 
                    onChange={ (e) => setsearchText(e.target.value) } 
                    className="border-solid border-2 border-sky-600 w-[40%] p-1"/>
                    <button className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" onClick={ () =>{
                        //console.log(searchText);
                        const filterdata =itemofcards.filter(
                            (result) => {
                            return result.info.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                        )
                        setfilteredapi(filterdata);
                    } }>search</button>
                </div>
                <div className="w-[30%]">
                    <button type="button" className="float-end bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" onClick={ () => {
                        setfilteredapi(filteredapi.filter( (res) => res.info.avgRating > 4.5 ) )
                    } } >Filter</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredapi.map((result) => {
                        return <Link to = {"/menu/"+result.info.id} key = {result.info.id} > <Cards itemdata = {result.info}/></Link> 
                    })
                }
            </div>
        </div>
    );
}

export default Body;