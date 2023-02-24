import React,{useState,useRef} from "react"

const Final = () =>{
    const [name,setname] = useState('')

    const getinginput = useRef()
    const getptag = useRef()

    const changestyles = () =>{
        console.log(getinginput.current)
        getinginput.current.style.backgroundColor="yellow"
        getinginput.current.focus();
        getinginput.current.style.borderRadius="10px";
        getptag.current.style.color="red";
    }
   

 
    return (
        <>
            <label>name:</label>
            <input
            ref= {getinginput}
            type="text" 
            value = {name}
            onChange={(e)=>{setname(e.target.value)}} />
            
            <p ref= {getptag}>typing:{name}</p>
            <button onClick ={changestyles}>click</button>
            
        </>
    )
}
export default Final