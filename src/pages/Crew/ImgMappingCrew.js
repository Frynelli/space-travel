import Images from "../../components/Images";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
const ImgMappingCrew =(props)=>{
    const params=useParams();
    return(
        <Fragment>
           
           {props.allCrew.filter((crew)=>crew.id===params.crewId).map((crew)=>(
               
               <Images
               key={crew.id}
               id={crew.id}
               img={crew.img}
               />
               
           ))} 
           
        </Fragment>
    )
}
export default ImgMappingCrew;