import {useState,useEffect} from "react"



const useFetch = (URL) =>{
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const [isError,setError]=useState(false)

    const FetchingData = async() =>{
        setloading(true)
        setError(false)
        try{
            const response = await fetch(URL);
           const comingdata = await response.json()
           setdata(comingdata)
           setloading(false);
           setError(false)
 
      }catch(error){
        setloading(false);
        setError(true);
 
      }
    };
 
     useEffect(()=>{
        FetchingData(URL)
     },[])
   
     return [data,loading,isError ]

}
export default useFetch;