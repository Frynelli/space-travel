
// import Moon from "./Moon";
// import Mars from "./Mars";
// import Europa from "./Europa";
// import Titans from "./Titans";
import Planets from "./Planets";
import { Route, NavLink } from "react-router-dom";


const DUMMY_DATA =[
    {
        id:"01",
        title:"MOON",
        text:`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance:"384,400 km",
        time:"3 days"
    },
    {
        id:"02",
        title:"MARS",
        text:`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
        distance:"225 MIL. km",
        time:"9 months"
    },
    {
        id:"03",
        title:"EUROPA",
        text:`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
        distance:"628 MIL. km",
        time:"3 years"
    },
    {
        id:"04",
        title:"TITAN",
        text:`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
        distance:"1.6 BIL. km",
        time:"7 years"
    }
]

const Destination = ()=>{
    
    return(

        <div className="container">
            <div className="container-page destinations bck-img-dst" >
            <div className="inner-container">
            <h5><span className="number-dst"><strong>01</strong></span> PICK YOUR DESTINATION</h5>
            <div className="img-container">
                <p>This is where the planet is going</p>
            </div>
            </div>

            <div className="side-box">
            <div className="dest-menu">
            <ul>
                        <li><NavLink className="link" to="/destination/01">Moon</NavLink></li>
                        <li><NavLink className="link" to="/destination/02">Mars</NavLink></li>
                        <li><NavLink className="link" to="/destination/03">Europa</NavLink></li>
                        <li><NavLink className="link" to="/destination/04">Titans</NavLink></li>
                    </ul>
                </div>

            {/* <div className="dest-details">
                <Route path="/destination/moon"><Moon/></Route>
                <Route path="/destination/mars"><Mars/></Route>
                <Route path="/destination/europa"><Europa/></Route>
                <Route path="/destination/titans"><Titans/></Route>

            </div>  */}


            <div className="dest-details">
                <Route path={`/destination/:planetsId`}><Planets planets={DUMMY_DATA}/></Route>


            </div>

            </div>
        </div>
        </div>
    )
}
export default Destination;