import React,{useEffect, useReducer,useState} from "react"

const reducer = (state,action) =>{
    if(action.type === "DATA_USER"){
        return({
            ...state,
            userdata:action.payload
        })
    }
    if(action.type === "LOADING"){
        return(
            {...state,
            islaoding:action.payload,}
        )
    }
    if(action.type === "ERROR"){
        return({
            ...state,
            iserror:action.payload
        })
    }
    if (action.type === "HANDLE_DELETE"){
        const newUser = state.userdata.filter((eachobj)=>{
            return(eachobj.id !== action.payload)
        })
        return(
           { ...state,
            userdata:newUser}
        )
    }
    if(action.type === "HANDLE_EDIT"){
        return(
           { ...state,
            isediting:action.payload,

           }
        )
    }
    if (action.type === "UPDATE_NEW_USER_DETAILS"){
        const newusers = state.userdata.map((eachobj)=>{
            if(eachobj.id === action.payload.id){
                return ({
                   id:action.payload.id,
                   name:action.payload.name,
                   email:action.payload.email
                })
            }
            return (eachobj)
        })
        return({
            ...state,
            userdata:newusers,
        })
    }
    return state
}
const Final = () =>{
   

    const fetchingdata = async(URL) =>{
        dispatch({type:"LOADING",payload:true})
        dispatch({type:"ERROR",payload:{status:false,mesg:""}})
       try{
        const response = await fetch(URL)
        const data = await response.json();
        console.log(data)
        dispatch({type:"DATA_USER",payload:data})
        dispatch({type:"LOADING",payload:false})
        dispatch({type:"ERROR",paylaod:{status:false,mesg:""}})

       }catch(error){
        dispatch({type:"ERROR",payload:{status:true,mesg:error.message}})
        dispatch({type:"LOADING",payload:false})

       }
    }

    const initialstate = {
        userdata :[],
        isloading:false,
        iserror:{status:false,mesg:""},
        isediting:{status:false,id:"",name:"",email:""}
    }

    const [state,dispatch] = useReducer(reducer,initialstate)

    useEffect(()=>{
        fetchingdata("https://jsonplaceholder.typicode.com/users")
    },[])

    const handleDelete = (id) =>{
        dispatch({type:"HANDLE_DELETE",payload:id})
    }
    
    const handleEdit = (id,name,email) => {
        dispatch({type:"HANDLE_EDIT",payload:{status:true,id:id,name:name,email:email}})
       
    }
    const updatedata = (id,name,email) =>{
        dispatch({type:"UPDATE_NEW_USER_DETAILS",payload:{id,name,email}})
        dispatch({type:"HANDLE_EDIT",payload:{id:"",name:"",email:""}})
        
        }
    

    if(state.islaoding){
        return(
            <h3>Loading.....</h3>
        )
    }

    if(state.iserror?.status ){
        return(
            <h3>{state.iserror.mesg}</h3>
        )
    }

    return (
        <div className="container">

            <h1>USERINFROMATION</h1>

            {
            state.isediting?.status && 
            <EditFormContainer 

            id={state.isediting.id}
            comingname={state.isediting.name} 
            comingemail={state.isediting.email}
            updatedata= {updatedata}/>
            }


            {state.userdata.map((eachobj)=>{
                const {id,name,email}= eachobj
                return(
                    <div key = {id}>
                        <p>name:{name}</p>
                        <p>email:{email}</p>
                        <button onClick={()=>{handleDelete(id)}}>delete</button>
                        <button onClick={()=>{handleEdit(id,name,email)}}>edit</button>
                    </div>
                )
            })}
        </div>
    )
}


const EditFormContainer = ({id,comingname,comingemail,updatedata}) =>{
    const [name,setname] = useState(comingname || " ")
    const [email,setemail] = useState(comingemail || " ")

    return (
        <div>
            <label>name:</label>
            <input type="text"
                name="name" id="name" value={name} onChange={(e)=>setname(e.target.value)}     
            />
            <label>email:</label>
            <input type="text"
                name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}     
            />
            <button onClick={()=>{updatedata(id,name,email)}}>updata data</button>
        </div>
    )
}
export default Final