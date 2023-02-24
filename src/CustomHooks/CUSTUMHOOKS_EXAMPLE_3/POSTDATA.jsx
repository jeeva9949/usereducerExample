import useFetch from "./useFetchHook"


const URL="https://jsonplaceholder.typicode.com/posts";
 

const Final1 = () =>{

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
                const {id,title} = eachobj
                return(
                    <li key = {id}>
                            <p>title:{title}</p>
                    </li>
                )
            })}</ul>
        </div>
        
    )
}
export default Final1