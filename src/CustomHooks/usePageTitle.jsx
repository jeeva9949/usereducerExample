import {useEffect} from "react"

const usePagetitle= (count) => {
    useEffect(()=>{
        document.title = `count-${count}`
    },[count])

}
export default usePagetitle