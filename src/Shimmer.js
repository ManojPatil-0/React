const Shimmer = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="justify-items-center">
            <div className="my-4 w-[84.5%]  border-solid border-2 p-5 rounded-md bg-gray-100 animate-pulse flex">
                <div className="w-[70%] flex">
                    <div className="border-solid border-2 bg-gray-200 w-[40%] p-4 animate-pulse"></div>
                    <div className="mx-5px-4 py-2 rounded  bg-gray-200 animate-pulse w-[100px] ml-3"></div>
                </div>
                <div className="w-[30%]">
                    <div className="float-end  mx-5px-4 py-2 rounded  bg-gray-200 animate-pulse w-[100px] h-9"></div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-4" > 
                {
                    arr.map( (x,index) => {
                        return (
                                <div className="w-48 h-80 bg-gray-100 rounded-md m-3 animate-pulse justify-items-center" key = {index}>
                                    <div className="border-solid border-2  bg-gray-200 w-48 h-36 p-2 rounded-[12px] mt-1">
                                    </div>
                                    <div className="w-48 h-5 bg-gray-200 mt-8 p-5 rounded-[12px]">
                                    </div>
                                    <div className="w-48 h-5 bg-gray-200 mt-8 p-5 rounded-[12px]">
                                    </div>
                                </div>
                        )
            } )  
                }
            </div>
        </div> 
    )
}

export default Shimmer;