import Commander from "./Commander";
import Specialist from "./Specialist";
import Pilot from "./Pilot";
import Engineer from "./Engineer";
const Crew =()=>{
    return(
        <div className="container-page">
          <h1>These are the crew!</h1>
          <div className="container-page">
          <div>
            <Commander></Commander>
          </div>
          <div>
            <Specialist></Specialist>
          </div>
          <div>
            <Pilot></Pilot>
          </div>
          <div>
            <Engineer></Engineer>
          </div>
          </div>
        </div>
    )
}

export default Crew;