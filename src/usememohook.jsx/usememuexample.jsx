import React,{useMemo, useState} from "react"
const Final =() =>{
    const [number,setnumber]=useState(0)
    const [dark,setdark]=useState(false)
    const   doublenumber = useMemo(()=>{

        slowFunction(number)
    },[number])

    const changetheme = {
       
            backgroundColor: dark ? "black" :"white",
            color: dark ? "white" : "black" ,
      

    }
    return (
        <div>
            <div>
                <input type="number" value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
            </div>
            <br />
            <button onClick={()=>{setdark(!dark)}}>changetheme</button>
            <h3 style={changetheme}>the number is ::{doublenumber}</h3>
        </div>
    )
}

const slowFunction = (number)=>{
    for(let index = 0;index <1000000000;index++)
    return number *number
} ;
export default Final