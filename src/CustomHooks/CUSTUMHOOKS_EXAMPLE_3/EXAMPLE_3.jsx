import useFetch from "./useFetchHook"


const URL="https://jsonplaceholder.typicode.com/users";
 

const Final = () =>{

    const [data,loading,isError ]= useFetch(URL)
    if(loading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>something went</h2>
    }

    return  (
        <div>
            <ul>{data.map((eachobj)=>{
                const {id,username} = eachobj
                return(
                    <li key = {id}>
                            <p>username:{username}</p>
                    </li>
                )
            })}</ul>
        </div>
        
    )
}
export default Final 