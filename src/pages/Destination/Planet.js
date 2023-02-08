import { Fragment } from "react";



const Planet =(props)=>{
 
   
    return(
      <Fragment>
      
        <div className="planets">
          <div  className="title"><h2>{props.title}</h2></div>
          <p className="text">{props.text}</p>
          <div className="hr"></div>
          <div className="details">
            <div className="distance">
              <p>AVG. DISTANCE</p>
              <h5>{props.distance}</h5>
            </div>
            <div className="time">
              <p>Est. travel time</p>
              <h5>{props.time}</h5>
            </div>
          </div>
        </div>
        </Fragment>
    )
}

export default Planet;