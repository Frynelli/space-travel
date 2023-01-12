

const Planet =(props)=>{
   
    return(
        <div className="planets">
          <div className="title"><h2>{props.title}</h2></div>
          <p>{props.text}</p>
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
    )
}

export default Planet;