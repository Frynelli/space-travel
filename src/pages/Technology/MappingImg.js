
import { Fragment } from "react";

import Images from "../../components/Images";

const MappingImg =(props)=>{
   
    
    <Fragment>
        <Images img={props.allTech[1].img} id={props.allTech[1].id}/>
           
        </Fragment>
}

export default MappingImg;