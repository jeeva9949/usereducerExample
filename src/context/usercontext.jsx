import React from "react"

const data  = {
    name :"jeevananada",
    username:"goddumarri",
    age:21,
}

export const UserContext = React.createContext();

export const UsercontextProvider = ({children}) =>{
    return ( 
        <UsercontextProvider value  = {data} >{children}</UsercontextProvider>
    )
}