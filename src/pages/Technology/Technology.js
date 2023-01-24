import launchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import capsuleImg from "../../assets/technology/image-space-capsule-portrait.jpg"
import spaceportImg from "../../assets/technology/image-spaceport-portrait.jpg"
import { Fragment} from "react"
import { Route, NavLink } from "react-router-dom"
import TechDetails from "./TechDetails"

import Images from "../../components/Images"
import DetailsAll from "./DetailsAll"


import ImgMaping from "../../components/ImgMaping"
const DATA =[
  {
      id:"01",
      title:"LAUNCH VEHICLE",
      text:`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      img:launchVehicle,
  },
  {
    id:"02",
    title:"MISSION SPECIALIST",
    name:"MARK SHUTTLEWORTH",
    text:`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    img:capsuleImg,
  },
  {
    id:"03",
    title:"PILOT",
    name:"VICTOR GLOVER",
    text:`Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
    img:spaceportImg,
  }
  
]

const Technology =()=>{
  
  
 
    return (
        <Fragment>
            <Route path="/technology/" exact>
              <div className="container">
                <div className="container-tech bck-img-tech">
                  <div className="fixed-main">
                    <div className="inner-box">
                    <h5><span className="number-page"><strong>03</strong></span> Space Launch 101</h5>
                  <div className="left-box">
                   <TechDetails title={DATA[0].title} text={DATA[0].text}/>
                  
                  <div className="left-toggle">
                  <ul>
           <li ><NavLink to={"/technology/01"}><div className="act dot">1</div></NavLink></li>
           <li><NavLink to={"/technology/02"}><div className="dot">2</div></NavLink></li>
           <li><NavLink to={"/technology/03"}><div className="dot">3</div></NavLink></li>
          </ul> 

                  </div>
                  </div>
                </div>
                </div>
                <div className="right-box">
                  <div className="img-details">
                  <Images
                 key={DATA[0].id}
                 id={DATA[0].id}
                img={DATA[0].img}
                  />
                  </div>

                </div>
                </div>
              </div>
            </Route>
            <Route path={`/technology/:dataId`}>
            <div className="container">
                <div className="container-tech bck-img-tech">
                  <div className="fixed-main">
                    <div className="inner-box">
                    <h5><span className="number-page"><strong>03</strong></span> Space Launch 101</h5>
                  <div className="left-box">
                   <DetailsAll info={DATA}/>
                  
                  <div className="left-toggle">
                  <ul>
           <li className="act"><NavLink to={"/technology/01"}><div className="dot">1</div></NavLink></li>
           <li><NavLink to={"/technology/02"}><div className="dot">2</div></NavLink></li>
           <li><NavLink to={"/technology/03"}><div className="dot">3</div></NavLink></li>
          </ul> 
                  </div>
                  </div>
                </div>
                </div>
                <div className="right-box">
                  <div className="img-details">
                  <ImgMaping info={DATA}/>
                  </div>

                </div>
                </div>
              </div>
            </Route>
        </Fragment>
        
    )
}

export default Technology