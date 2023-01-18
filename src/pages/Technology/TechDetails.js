import { Fragment } from "react"

const TechDetails = (props)=>{
    return(
        <div className="left-inner-box">
            <div className="fixed">
             <p>THE TERMINOLOGY…</p>
             </div>
             <div className="text-tech">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            </div>
        </div>
    )
}
export default TechDetails;