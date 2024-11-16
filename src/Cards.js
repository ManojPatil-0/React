import { CARD_LOGO } from "../Utils/constant";

const Cards = (props) => {
    const {itemdata} = props;
    const{name,avgRating,costForTwo} = itemdata

    return (
        <div className="cards-container">
             <div className="card-list">
                <img src= {CARD_LOGO} />
                <h3>{name}</h3>
                <h3>{avgRating}</h3>
                <h3>{costForTwo}</h3>
             </div>
        </div>
    )
}

export default Cards;