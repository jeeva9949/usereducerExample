import React from "react"
const Title= () =>{
    console.log("title render")
    return(
        <h1>usecallback demo & React.memo</h1>
    )
}
export default React.memo(Title)