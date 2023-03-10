

import { useParams} from "react-router-dom";
import Planet from "./Planet";


const Planets = (props)=>{
    const params=useParams();



    return(
        <div>
               {props.planets.filter((planet)=>planet.id===params.dataId).map((planet)=>(
               
                <Planet
                key={planet.id}
                id={planet.id}
                title={planet.title}
                text={planet.text}
                distance={planet.distance}
                time={planet.time}
            
                />

            ))}
        </div>
    )
}

export default Planets;