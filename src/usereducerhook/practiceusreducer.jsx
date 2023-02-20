 import "./final.css"
 import React,{useReducer,useEffect,useState} from "react"
 
 
 const reducer = (state,action) =>{
    if (action.type === "UPDATE_USER_DATA"){
        return(
            {...state,userData:action.payload}
        )
    }


    if(action.type==="LOADING"){
        return({...state,isloading:action.payload})
    }


    if (action.type === "HANDLEDELETE"){
        const newUser = state.userData.filter((eachobj)=>eachobj.id!==action.payload)
        return {
            ...state,
            userData:newUser
        }
    }

    if (action.type === "ONCLICK_EDIT"){
        return({
            ...state,
            isEditing:action.payload,
        })
    }
    if (action.type === "UPDATEUSER"){
        const newUser  = state.userData.map((eachobj)=>{
            if(eachobj.id === action.payload.id){
                return {id:action.payload.id,
                name:action.payload.name,
                email:action.payload.email}
            }else{
                return eachobj
            }
        })
        return (
            {...state,
            userData:newUser,}
        )
    }

    return state
 }
const Final = () =>{
    
    const fectchingData = async(URL)=>{
        dispatch({type:"LOADING",payload:true})
        dispatch({type:"ERROR",payload:{status:false,mesg:""}})
       
        try{
            const response = await fetch(URL)
            const data = await response.json();
            dispatch({type:"UPDATE_USER_DATA",payload:data})
            dispatch({type:"ERROR",payload:{status:false,mesg:""}})
            dispatch({type:"LOADING",payload:false})

        }catch(error){
            dispatch({type:"ERROR",payload:{status:true,mesg:error.message}})

        }
    }

    

    const initialstate = {
        userData :[],
        isloading:false,
        iserror:{status:false,mesg:""},
        isEditing:{status:false,id:"",name:"",email:""}
    }



    // usING the useREDUCER HOOK 
    const [state,dispatch]= useReducer(reducer,initialstate)

    useEffect(()=>{
        fectchingData("https://jsonplaceholder.typicode.com/users")
    },[])

    const handleDelete = (id) =>{
        dispatch({type:"HANDLEDELETE",payload:id})
    }

    const updateData  = (id,name,email) =>{
        dispatch({type:"UPDATEUSER",payload:{
            id,name,email
        }})
        dispatch({type:"ONCLICK_EDIT",payload:{status:false,id:"",name:"", email:""}})
    }

    if (state.isloading){
        return(
            <h3>Loading...</h3>
        )
    }


    return (
        <div className="container">
            
            <h2>USER INFORMATION</h2>
            {state.isEditing?.status && <EditFormContainer id={state.isEditing.id} comingtitle= {state.isEditing.name} comingemail= {state.isEditing.email} updateData= {updateData}/>}

            {state.userData.map((eachobj)=>{
                const {id,name,email}= eachobj;
                return(
                    <div key = {id} className="hello">
                        <h4>name:{name}</h4>
                        <h4>email:{email}</h4>
                        <button onClick= {()=> handleDelete(id)}>Delete</button>
                        <button onClick= {()=> dispatch({type:"ONCLICK_EDIT",payload:{status:true,id:id,name:name, email:email}})}>EDIT</button>

                    </div>
                )
            })}
        </div>
    )
 }


 const EditFormContainer = ({id,comingtitle,comingemail,updateData}) =>{
    const [title,setTitle]=React.useState(comingtitle || "")
    const [email,setemail]=React.useState(comingemail || "")
    return(
        <div>
            <form className="form">
                <label>Name:</label>
                <input type="text" name="title" id="title" value={title} onChange= {(e)=>setTitle(e.target.value)}/> <br />
                <label>email:</label>
                <input type="text" name="email" id="email" value={email} onChange= {(e)=>setemail(e.target.value)}/>

                <button onClick={()=>updateData(id,title,email)}>update Data</button>
            </form>
        </div>
    )
 }


 export default Final 