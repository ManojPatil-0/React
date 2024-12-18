import { CARD_LOGO } from "../Utils/constant";

const Menudescr = (props) => {
    const{name,description,imageId} = props.data;
    return (
        <div className="flex h-40 justify-between W-[100%] bg-gray-200 m-3 p-5 rounded shadow-md">
            <div className="w-[75%]"> 
                <h1 className="font-bold py-2 border-b-[1px] border-gray-300">{name}</h1>
                <h1 className="italic text-sm mt-1 grid align-middle">{ description }</h1>
            </div>
            <div className="h-36 w-[25%] flex justify-center">
                <img className="h-32 w-48 ml-2" src= {CARD_LOGO +imageId} />
                <button className="absolute mx-5 bg-black text-white font-semibold px-5 py-1 rounded z-0 mt-28"> Add + </button>
            </div>
        </div>
    )
}

export default Menudescr;