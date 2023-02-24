import {useState} from "react"

const useCounter = (initialvalue=0) =>{
    const [count,setcount]= useState(initialvalue)

    const Incrememnt = () =>{
    setcount(count+1)
    }

    const Decrement = ()=>{
    setcount(count-1)
    }

    const Reset = () =>{
    setcount(initialvalue)
    }

return [count,Incrememnt,Decrement,Reset]
}
export default useCounter;