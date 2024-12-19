import { CARD_LOGO } from "../Utils/constant";

const Cartlist = ({data}) => {
    //console.log(data);
    const{ name,imageId,description,price,defaultPrice} = data;
    return(
        <div className="flex align-middle w-6/12 p-5 rounded border-[.5px] border-gray-200 m-auto mt-7 shadow-md">
            <div className="w-2/12">
                <img src = {CARD_LOGO +imageId}/>
                <div className="flex m-auto justify-between w-8/12">
                    <button className="px-2 mt-1 border-[1px] border-black w-7 h-7 bg-gray-200 font-bold">+</button>
                    <button className="px-2 mt-1 border-[1px] border-black  bg-gray-200  font-bold">- </button>
                </div>
            </div>
            <div className="w-10/12 ml-4 align-middle text-wrap">
                <div className="border-b-[1px] border-gray-300 flex justify-between">
                    <h1 className="font-bold">{name}</h1>
                    <h1 className="font-bold">&#8377; {price/100 ||defaultPrice /100 }</h1>
                </div>
                <h2 className="italic text-sm mt-2">{description}</h2>
            </div>
        </div>
    )
}

export default Cartlist;