import Title from "./compoent/title"
import Count from "./compoent/Countcomponent"
import Button from "./compoent/Buttoncomponent"
import React,{useCallback, useState} from "react"


const Final = () =>{
    const [age,setage] = useState(18)
    const [salary,setsalary]=useState(10000)

    const Increseage = useCallback(() =>{
        setage(age+1)
    },[age])


    const increaseSalary = useCallback(() =>{
        setsalary(salary+1000)
    },[salary])


    return(
        <>
        <Title/>
        <Count text={"age"} number= {age}/>
        <Button clickhandler={Increseage} >increase age</Button>
        <Count text={"salary"} number= {salary}/>
        <Button clickhandler={increaseSalary} >increase Salary</Button>
        </>
    )
}
export default Final