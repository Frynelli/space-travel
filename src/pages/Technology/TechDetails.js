

const TechDetails = (props)=>{
    return(
        <div className="left-inner-box">
            
             <div className="text-tech">
             
             <p className="main-title">THE TERMINOLOGY…</p>
            
            <h3>{props.title}</h3>
            <p className="main-text">{props.text}</p>
            </div>
        </div>
    )
}
export default TechDetails;