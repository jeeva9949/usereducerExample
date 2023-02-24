import React from "react"

const Button = ({children,clickhandler}) =>{
    console.log("i am from ",{children})
    return (
        <button onClick={clickhandler}>{children}</button>
    )
}
export default React.memo(Button)