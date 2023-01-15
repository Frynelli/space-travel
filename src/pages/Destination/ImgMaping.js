import { Fragment } from "react"
import { useParams } from "react-router-dom";

import Images from "../../components/Images";
const ImgMaping =(props)=>{
    const params=useParams();
    return(
        <Fragment>
           
           {props.planets.filter((planet)=>planet.id===params.planetsId).map((planet)=>(
               
               <Images
               key={planet.id}
               id={planet.id}
               img={planet.img}
               />
               
           ))} 
           
        </Fragment>
    )
}
export default ImgMaping;