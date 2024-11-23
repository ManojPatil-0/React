import useFetchApi from "../Utils/useFetchApi";
import { MENU_API } from "../Utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CARD_LOGO } from "../Utils/constant";

const Menulist = () => {
    const { id }  = useParams();
    const listitem = useFetchApi(MENU_API+id);
    if ( listitem === null ) { return  <Shimmer /> };
    const {name,costForTwoMessage,cuisines,avgRating,cloudinaryImageId} = listitem?.cards[2]?.card?.card?.info;
    
    return (
        <div className="w-100% grid justify-items-center mt-8">
            <div className="w-[50%] border-solid border-4 grid justify-items-center bg-gray-200 rounded-[12px]" >
                <img className="w-[98%] h-80 p-2 rounded-[12px]" src= {CARD_LOGO+cloudinaryImageId} />
                <h1 className="text-3xl font-extrabold p-5">{name}</h1>
                <h2 className="text-xl font-bold p-2">{costForTwoMessage}</h2>
                <h3 className="text-xl font-bold italic p-2 ">Cuisines - {cuisines.join(", ")}</h3>
                <h3 className="text-xl font-bold p-2">Raing - {avgRating}</h3>
            </div>
        </div>
    )
}
export default Menulist;