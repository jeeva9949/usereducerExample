import React,{useContext} from "react"

import { UserContext } from "./context/usercontext";


const Data = () =>{
    const datadetails = useContext(UserContext)
    const {name,username,email} = datadetails
    return (
        <div>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}
export default Data