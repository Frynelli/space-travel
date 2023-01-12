
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titans from "./Titans";
import { Route, Link, NavLink } from "react-router-dom";
const Destination = ()=>{
    return(
        <div className="container-page">
            <div className="dest-menu">
            <ul>
                        <li><NavLink className="link" to="/destination/moon">Moon</NavLink></li>
                        <li><NavLink className="link" to="/destination/mars">Mars</NavLink></li>
                        <li><NavLink className="link" to="/destination/europa">Europa</NavLink></li>
                        <li><NavLink className="link" to="/destination/titans">Titans</NavLink></li>
                    </ul>
                </div>
            <div>
                <Route path="/destination/moon"><Moon/></Route>
                <Route path="/destination/mars"><Mars/></Route>
                <Route path="/destination/europa"><Europa/></Route>
                <Route path="/destination/titans"><Titans/></Route>
                
            </div>
        </div>
    )
}
export default Destination;