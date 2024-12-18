import {useEffect, useState } from "react";

const useFetchApi = ( url) => {
    const [infodata,setinfodata] = useState(null);

    useEffect(()=> {
        fetchData()
    },[]);

    async function fetchData() {
        const fetchapi = await fetch(url);
        const jsondata = await fetchapi.json();
        setinfodata(jsondata.data);
    }
    return infodata;
}

export default useFetchApi;