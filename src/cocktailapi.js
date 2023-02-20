import React,{useEffect,useState} from "react"
import "./app.css"


const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const  Cocktailapi = ()=>{

    const [userdata,setuserdata]=useState([]);
    const [searchterm,setsearchterm]=useState("")
    const [loading,setloading]= useState(false)
    const [Iserror,setIserror]=useState({status:false,mesg:""})

    const Fechingdrinks = async (comingapi) =>{
        setloading(true)
        setIserror({status:false,mesg:""})

        try{
            const response =  await fetch(comingapi)
            const { drinks} = await response.json();
            setuserdata(drinks);
            console.log(response)
            setloading(false)
            setIserror({status:false,mesg:""})


        }catch(error){
            setloading(false)
            setIserror({status:true,mesg:error.message || "something went wrong please try  again later"})
        }
    }
    useEffect(()=>{
        
        const correcturl = `${URL}${searchterm}`
        Fechingdrinks(correcturl);
       
    },[searchterm])



    return(
        <div className="container">
          <form >
            <label style={{fontsize:"30px;"}}>Enter the flavor:</label>
            <input style={{fontSize:"30px" ,marginBottom:"50px"}} type="text" name="input" id = "search" placeholder="enter the drink" value={searchterm} onChange={(e)=>{setsearchterm(e.target.value)}} />
          </form>
          <hr />
          { loading  && !Iserror.status && <h3>Loading...</h3> }
          {Iserror?.status && <h3>{Iserror.mesg}</h3>}
          {!loading && !Iserror?.status && 
          (<ul className="drink">
           {userdata.map((eachuser)=>{
               const {idDrink,strDrink,strDrinkThumb}=eachuser;
               return(
                   <li style={{listStyle:"none"}} key = {idDrink}>
                       <div>{strDrink}</div>
                       <div><img className="img" src={strDrinkThumb} alt="" /></div>
                   </li>
               )
           })}
       </ul>
       )}
           
        </div>
    )
}
export default Cocktailapi;