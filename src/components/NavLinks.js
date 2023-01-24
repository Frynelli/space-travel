import { NavLink } from "react-router-dom";

const NavLinks = ()=>{
    return(
        <nav className="mob-menu mob-modal mobileNavigation">
        <ul>
                        <li><NavLink className="link" to="/" exact><strong>00</strong> Home</NavLink></li>
                        <li><NavLink className="link" to="/destination/"><strong>01</strong> Destinations</NavLink></li>
                        <li><NavLink className="link" to="/crew/"><strong>02</strong> Crew</NavLink></li>
                        <li><NavLink className="link" to="/technology/"><strong>03</strong> Technology</NavLink></li>
                    </ul>
                    </nav>
    )
}
export default NavLinks;