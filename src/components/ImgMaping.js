import { Fragment } from "react"
import { useParams } from "react-router-dom";

import Images from "../components/Images";
const ImgMaping =(props)=>{
    const params=useParams();
    return(
        <Fragment>
           
           {props.info.filter((data)=>data.id===params.dataId).map((data)=>(
               
               <Images
               key={data.id}
               id={data.id}
               img={data.img}
               />
               
           ))} 
           
        </Fragment>
    )
}
export default ImgMaping;