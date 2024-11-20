const Shimmer = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="shimmer">
            {
                arr.map( x => {
                    return (
                            <div className="shimmerlist">
                                <div className="img">
                                </div>
                                <div className="content">
                                </div>
                            </div>
                    )
        } )  
            }
        </div>
    )
}

export default Shimmer;