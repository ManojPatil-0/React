import { CARD_LOGO } from "../Utils/constant";

const Cards = (props) => {
    const {itemdata} = props;
    const{name,avgRating,costForTwo,cloudinaryImageId
    } = itemdata

    return (
        <div className="w-48 m-3">
             <div className="bg-gray-200 hover:bg-gray-300 h-80 overflow-y-hidden rounded-md justify-items-center">
                <img className="w-52 h-36 p-2 rounded-[12px]" src= {CARD_LOGO+cloudinaryImageId} />
                <h3 className="p-2 font-bold text-lg">{name}</h3>
                <h3 className="p-2 font-semibold">{avgRating}</h3>
                <h3 className="p-2 font-semibold">{costForTwo}</h3>
             </div>
        </div>
    )
}

export default Cards;