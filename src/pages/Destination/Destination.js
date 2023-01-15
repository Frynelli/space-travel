
import moonImg from "../../assets/destination/image-moon.png";
import marsImg from "../../assets/destination/image-mars.png";
import europaImg from "../../assets/destination/image-europa.png";
import titanImg from "../../assets/destination/image-titan.png";
import Planets from "./Planets";
import Planet from "./Planet";
import { Route, NavLink} from "react-router-dom";


import { Fragment } from "react";
import ImgMaping from "./ImgMaping";
import Images from "../../components/Images";





const DUMMY_DATA =[
    {
        id:"01",
        title:"MOON",
        text:`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance:"384,400 km",
        time:"3 days",
        img:moonImg
    },
    {
        id:"02",
        title:"MARS",
        text:`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
        distance:"225 MIL. km",
        time:"9 months",
        img:marsImg
    },
    {
        id:"03",
        title:"EUROPA",
        text:`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
        distance:"628 MIL. km",
        time:"3 years",
        img:europaImg
    },
    {
        id:"04",
        title:"TITAN",
        text:`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
        distance:"1.6 BIL. km",
        time:"7 years",
        img:titanImg
    }
]

const Destination = ()=>{
    

    return(
<Fragment>
    <Route path="/destination/" exact >
    <div className="container">
            <div className="container-page destinations bck-img-dst" >
            <div className="inner-container">
            <h5><span className="number-page"><strong>01</strong></span> PICK YOUR DESTINATION</h5>
            <div className="img-container">
            <Images 
            key={DUMMY_DATA[0].id}
            id={DUMMY_DATA[0].id}
            img={DUMMY_DATA[0].img} />
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
                <div className="dest-details">
                <Planet  key={DUMMY_DATA[0].id}
                id={DUMMY_DATA[0].id}
                title={DUMMY_DATA[0].title}
                text={DUMMY_DATA[0].text}
                distance={DUMMY_DATA[0].distance}
                time={DUMMY_DATA[0].time} />
                    </div>
            </div>
        </div>
        </div>
    </Route>
    <Route path={`/destination/:planetsId`}>
        
    <div className="container">
            <div className="container-page destinations bck-img-dst" >
            <div className="inner-container">
            <h5><span className="number-page"><strong>01</strong></span> PICK YOUR DESTINATION</h5>
            <div className="img-container">
               <ImgMaping planets={DUMMY_DATA}/>
               </div>
            </div>
            <div className="side-box">
            <div className="dest-menu">
          <ul>
                        <li><NavLink className="link" to={`/destination/01`}>Moon</NavLink></li>
                        <li><NavLink className="link" to={"/destination/02"}>Mars</NavLink></li>
                        <li><NavLink className="link" to={"/destination/03"}>Europa</NavLink></li>
                        <li><NavLink className="link" to={"/destination/04"}>Titans</NavLink></li>
                    </ul> 
                </div>
                <div className="dest-details">
                    <Planets  planets={DUMMY_DATA} />
                    </div>
            </div>
        </div>
        </div>
        </Route>
        </Fragment>
        
    )
}
export default Destination;

