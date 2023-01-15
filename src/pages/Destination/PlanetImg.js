

import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PlanetImg = (props)=>{
    const params=useParams();
   
    return(
        
        
          <div key={props.id}>
            <img key={props.id} src={props.img}/>
        </div>
       
       
    )
}

export default PlanetImg;