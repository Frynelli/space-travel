import { Fragment } from "react"
import { useParams } from "react-router-dom";
import PlanetImg from "./PlanetImg";
const ImgMaping =(props)=>{
    const params=useParams();
    return(
        <Fragment>
           
           {props.planets.filter((planet)=>planet.id===params.planetsId).map((planet)=>(
               
               <PlanetImg
               key={planet.id}
               id={planet.id}
               img={planet.img}
               />
               
           ))} 
           
        </Fragment>
    )
}
export default ImgMaping;