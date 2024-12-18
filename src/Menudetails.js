import { useState} from "react";
import Menudescr from "./Menudescr";

const Menudetails = ({alldata, showitem,setshowindex,setshowitem,setrotate,rotate}) => {
    const { title} = alldata;
    const showData= () => {
        setshowindex();
        setshowitem();
        setrotate();
    }
    return(
            <div className=""> 
                <h1 className="p-4 bg-gray-200 m-2 rounded cursor-pointer flex justify-between shadow-md" onClick={ ()=> showData() }  >
                    <span className="font-bold">{ title } ({ alldata.itemCards.length })</span>
                    <span className={rotate}>&#11167;</span>
                </h1>
                <h2>
                    {
                        alldata?.itemCards.map( (res) => {
                            return  showitem && <Menudescr key =  { res?.card.info.id}  data = { res?.card.info}/>
                        } )
                    }
                   
                </h2>
            </div>
    )

}
export default Menudetails;
