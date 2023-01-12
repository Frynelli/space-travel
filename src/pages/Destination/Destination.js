
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titans from "./Titans";
import { Route, NavLink } from "react-router-dom";
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
                        <li><NavLink className="link" to="/destination/moon">Moon</NavLink></li>
                        <li><NavLink className="link" to="/destination/mars">Mars</NavLink></li>
                        <li><NavLink className="link" to="/destination/europa">Europa</NavLink></li>
                        <li><NavLink className="link" to="/destination/titans">Titans</NavLink></li>
                    </ul>
                </div>
                
            <div className="dest-details">
                <Route path="/destination/moon"><Moon/></Route>
                <Route path="/destination/mars"><Mars/></Route>
                <Route path="/destination/europa"><Europa/></Route>
                <Route path="/destination/titans"><Titans/></Route>
                
            </div>
            </div>
        </div>
        </div>
    )
}
export default Destination;