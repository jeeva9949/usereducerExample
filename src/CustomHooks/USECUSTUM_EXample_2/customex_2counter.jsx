

import useCounter from "./useConterHook"


const Final = () =>{
    const  [count,Incrememnt,Decrement,Reset ]= useCounter(10)
    const data = [
        { 
            id:1,
            functiont:Incrememnt ,
            name:"increment"
        },

        {
            id:2,
            functiont:Decrement,
            name:"Decrement"
        },
        {
            id:3,
            functiont:Reset,
            name:"Reset"
        },
        {
            id:4,
            functiont:Incrememnt,
            name:"increment"
        },
        {
            id:5,
            functiont:Reset,
            name:"Reset"
        }
    ]
    
return (
    <div>
        <h2>count :: {count}</h2>
        {
            data.map((eachobj)=>{
                const {id,functiont,name}= eachobj
                return (
                    <div key = {id}>
                        <button onClick= {functiont}>{name}</button>

                    </div>
                )
            })
        }
        
    </div>
)
}
export default Final