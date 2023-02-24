import React,{useState} from "react"
import usePagetitle from "./usePageTitle"
const Final = () =>{
    const [count,setcount]= useState(0)

    usePagetitle(count)
    return (
        <button onClick = {()=>{
            setcount(count+1)
        }}>count: {count}</button>
    )

}

export default Final