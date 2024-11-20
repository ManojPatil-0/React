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
        <div className="body-container" >
            <div className="search-filter">
                <div className="search">
                    <input type="text" id = "search" value={searchText} 
                    onChange={ (e) => setsearchText(e.target.value) } />
                    <button className="btn" onClick={ () =>{
                        //console.log(searchText);
                        const filterdata =itemofcards.filter(
                            (result) => {
                            return result.info.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                        )
                        setfilteredapi(filterdata);
                    } }>search</button>
                </div>
                <div className="filter">
                    <button type="button" className="btn" onClick={ () => {
                        setfilteredapi(filteredapi.filter( (res) => res.info.avgRating > 4.5 ) )
                    } } >Filter</button>
                </div>
            </div>
            <div className="item-list">
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