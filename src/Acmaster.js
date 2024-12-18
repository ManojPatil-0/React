
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Acmaster = () => {
    const[ acdata,setacdata ] = useState(null);

    useEffect(()=> { fetchData()} ,[]); 


    const fetchData = async () => {
        const data = await fetch("http://accountingbymanoj.lovestoblog.com/db.php");
        const jdata = await data.json();
        console.log(data);
        setacdata(jdata);
  }  
  return acdata === null ? <Shimmer /> : (
    <div>
        Acmaster
        { console.log(acdata) }
    </div>
  )
}

export default Acmaster;