import { Fragment } from "react"
import { useParams } from "react-router-dom"
import TechDetails from "./TechDetails"

const DetailsAll = (props)=>{
    const params=useParams()
    return(
        <Fragment>
{props.info.filter((data)=>data.id===params.dataId).map((data)=>(
               
               <TechDetails
               key={data.id}
               id={data.id}
               title={data.title}
               text={data.text}
               
           
               />

           ))}
        </Fragment>
    )
}
export default DetailsAll;