import { NavLink } from "react-router-dom";

const Home =()=>{
    return(
        <div className="bck-img">
            <div className="container-1">
            <div className="body-details">
        <h3>So, you want to travel to</h3>
        <h1>Space</h1>
        <p>Let's face it; if you want to go to space, 
            you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. 
            Well sit back and relax because we'll give you 
            a truly out of this world experience</p>
    </div>
    <NavLink className="button" to="/destination/">
    <div className="button-main">
    <button className="btn-1">EXPLORE</button>
    </div>
    </NavLink>
    
    </div>
        </div>
    )
}

export default Home;