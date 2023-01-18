
import commanderImg from "../../assets/crew/image-douglas-hurley.png"
import missionSpecialistImg from "../../assets/crew/image-mark-shuttleworth.png"
import pilotImg from "../../assets/crew/image-victor-glover.png"
import flightEngineerImg from "../../assets/crew/image-anousheh-ansari.png"
import { NavLink, Route } from "react-router-dom"


import OneCrew from "./OneCrew"
import Images from "../../components/Images"
import { Fragment } from "react"
import AllCrew from "./AllCrew"
import ImgMaping from "../../components/ImgMaping"

const CREW_DATA =[
  {
      id:"01",
      title:"COMMANDER",
      name:"Douglas Hurley",
      text:`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
      img:commanderImg
  },
  {
    id:"02",
    title:"MISSION SPECIALIST",
    name:"MARK SHUTTLEWORTH",
    text:`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    img:missionSpecialistImg
  },
  {
      id:"03",
      title:"PILOT",
    name:"VICTOR GLOVER",
    text:`Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
    img:pilotImg
  },
  {
      id:"04",
      title:"FLIGHT ENGINEER",
      name:"ANOUSHEH ANSARI",
      text:`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
      img:flightEngineerImg
  }
]
const Crew =()=>{
    return(
      <Fragment>
      <Route path="/crew/" exact>
      <div className="container">
      <div className="container-page crew-page bck-img-crew" >
      <div className="fixed-container">
      <div className="inner-container">
      <h5><span className="number-page"><strong>02</strong></span> Meet Your Crew</h5>
      
      <div className="left-box">
          <OneCrew
            key={CREW_DATA[0].id}
            id={CREW_DATA[0].id}
            text={CREW_DATA[0].text}
            title={CREW_DATA[0].title}
            name={CREW_DATA[0].name}
              /> 
         </div>
         
         <div className="bottom-menu">
         <ul>
           <li className="act"><NavLink  to={"/crew/01"}><div className="dot"></div></NavLink></li>
           <li><NavLink to={"/crew/02"}><div className="dot"></div></NavLink></li>
           <li><NavLink to={"/crew/03"}><div className="dot"></div></NavLink></li>
           <li><NavLink to={"/crew/04"}><div className="dot"></div></NavLink></li>
          </ul> 
          </div>
      </div>
      </div>
      <div className="right-box">
          <div className="img-details">
               <Images
                 key={CREW_DATA[0].id}
                 id={CREW_DATA[0].id}
                img={CREW_DATA[0].img}
                  />
              </div>
        
      </div>
  </div>
  </div>
  
  </Route>

  <Route path={`/crew/:dataId`}>
      <div className="container">
      <div className="container-page crew-page bck-img-crew" >
      <div className="fixed-container">
      <div className="inner-container">
      <h5><span className="number-page"><strong>02</strong></span> Meet Your Crew</h5>
      
      <div className="left-box">
      <AllCrew
          info={CREW_DATA}
          />
         </div>
         
         <div className="bottom-menu">
              <ul>
                  <li><NavLink  to={"/crew/01"}><div className="dot"></div></NavLink></li>
                  <li><NavLink to={"/crew/02"}><div className="dot"></div></NavLink></li>
                  <li><NavLink to={"/crew/03"}><div className="dot"></div></NavLink></li>
                  <li><NavLink to={"/crew/04"}><div className="dot"></div></NavLink></li>
              </ul> 
          </div>
      </div>
      </div>
      <div className="right-box">
          <div className="img-details">
               <ImgMaping
                info={CREW_DATA}
                  />
              </div>
        
      </div>
  </div>
  </div>
  
  </Route>
  </Fragment>
    )
}

export default Crew;





 

       

               