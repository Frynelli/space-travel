import { Fragment } from "react"
import { useParams } from "react-router-dom"
import OneCrew from "./OneCrew"
const AllCrew = (props)=>{
    const params = useParams()
    return<Fragment>
         {props.allCrew.filter((crew)=>crew.id===params.crewId).map((crew)=>(
               
               <OneCrew
               key={crew.id}
               id={crew.id}
               name={crew.name}
               title={crew.title}
               text={crew.text}
               
           
               />

           ))}
    </Fragment>
}
export default AllCrew