import Cards from "./Cards";
import { useState, useEffect } from "react";
import { REST_DATA } from "../Utils/data";

const Body = () => {
    let apidatas = REST_DATA.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ;
    
    const [itemofcards,setitemofcards] = useState(apidatas)
    useEffect(()=>{ fetchData()},[]);
    
    const fetchData = async() => {
        const fetchapi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsondata = await fetchapi.json();
        setitemofcards(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className="body-container" >
            <div className="filter">
                <button type="button" className="btn" onClick={ () => {
                    setitemofcards(itemofcards.filter( (res) => res.info.avgRating > 4.5 ) )
                } } >Filter</button>
            </div>
            <div className="item-list">
                {
                    itemofcards.map((result) => {
                        return <Cards key = {result.info.id} itemdata = {result.info}/>
                    })
                }
            </div>
        </div>
    );
}

export default Body;