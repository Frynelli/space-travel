import launchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import capsuleImg from "../../assets/technology/image-space-capsule-portrait.jpg"
import spaceportImg from "../../assets/technology/image-spaceport-portrait.jpg"
import launchVehicleTablet from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import capsuleImgTablet from "../../assets/technology/image-space-capsule-landscape.jpg"
import spaceportImgTablet from "../../assets/technology/image-spaceport-landscape.jpg"
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
      img:{lg:launchVehicle, sm:launchVehicleTablet}
  },
  {
    id:"02",
    title:"SPACEPORT",
    text:`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    img:{lg:spaceportImg,sm:spaceportImgTablet}
  },
  {
    id:"03",
    title:"SPACE CAPSULE",
    text:`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. `,
    img:{lg:capsuleImg,sm:capsuleImgTablet}
  }
  
]

const Technology =()=>{
  
  
 
    return (
        <Fragment>
            <Route path="/technology/" exact>
              <div className="container-g bck-img-tech overflow">
                <div className="container-tech ">
                  <div className="fixed-main">
                  <h5 className="tablet-resp"><span className="number-page"><strong>03</strong></span> Space Launch 101</h5>
                    <div className="inner-box">
                    
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
                  <div className="img-details-tech">
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
            <div className="container-g bck-img-tech overflow">
                <div className="container-tech ">
                  <div className="fixed-main">
                  <h5 className="tablet-resp"><span className="number-page"><strong>03</strong></span> Space Launch 101</h5>
                    <div className="inner-box">
                    
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
                  <div className="img-details-tech">
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