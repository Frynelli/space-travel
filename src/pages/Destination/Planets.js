import { useState } from "react";
import { Route, useParams} from "react-router-dom";
import Planet from "./Planet";

const Planets = (props)=>{
    const params=useParams();


    return(
        <div>
               
               {props.planets.filter((planet)=>planet.id===params.planetsId).map((planet)=>(
                <Planet
                key={planet.id}
                id={planet.id}
                title={planet.title}
                text={planet.text}
                distance={planet.distance}
                time={planet.time}
                />
            ))}
           
    
           
            {/* {props.planets.map((planet)=>(
                <Planet
                key={planet.id}
                id={planet.id}
                title={planet.title}
                text={planet.text}
                distance={planet.distance}
                time={planet.time}
                />
            ))} */}
        </div>
    )
}

export default Planets;