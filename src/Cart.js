import { useSelector } from "react-redux";
import Menudescr from "./Menudescr";
import Cartlist from "./Cartlist";

const Cart = () => {

    const cartitmes = useSelector( (store) => store.cart.items );

    return(
        <div className="w-12/12">
                    {
                        cartitmes.map( (res) => {
                            return <Cartlist key = {res.id} data = {res} />
                        } )
                    }
        </div>
    )
}

export default Cart;