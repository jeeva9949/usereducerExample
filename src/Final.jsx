import React,{useEffect,useState} from "react"
 const URL="https://jsonplaceholder.typicode.com/albums"

const Final = () =>{

    const [userdata,setuserdata]= useState([])
    const [loading,setloading]= useState(false)
    const [Iserror,setIserror]=useState({status:false,mesg: ""})

    const fetchingdata = async(comingApi) =>{
        setloading(true);
        setIserror({status:false,mesg:""})
       try{
        const response = await fetch(comingApi);
        const data = await response.json();
        setuserdata(data)
        setloading(false)
        setIserror({status:false,mesg:""})
        console.log(response);
        if (response.status === 404){
            throw new Error("Data not found please try again ")
        }

       }catch(error){
        setloading(false);
        setIserror({status:true,mesg:error.message || "something went wrong please try again "})

       }
      
    }

    useEffect (() =>{
        fetchingdata(URL)
    },[])
    

    if(loading){
       return(
        <div className=""><h3>Loading.....</h3></div>
       )
    }

    if(Iserror?.status){
        return(
            <div>
                <h3>{Iserror?.mesg}</h3>
            </div>
        )
    }
    return(
        <div className="container">
            <h1>useEffect example -1</h1>
            <ul>
            {
                userdata.map((eachuser)=>{
                    const {id,name,email}=eachuser
                    return(
                        <li key= {id}>
                            <div><p>user-{id}</p></div>
                            <div><p><strong>name</strong>:{name}</p></div>
                            <div><strong>email</strong>:{email}</div>
                        </li>
                    )
                 
                })
            }
            </ul>
            
        </div>
    )

}
export default Final