import { Link } from "react-router-dom"


const NavBar = ()=>{
    return (
        <div className="navbar">
<div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg></div>
            <hr className="line"/>
            
                <nav className="menu modal">
                    <ul>
                        <li><Link className="link" to="/"><strong>00</strong> Home</Link></li>
                        <li><Link className="link" to="/destination"><strong>01</strong> Destinations</Link></li>
                        <li><Link className="link" to="/crew"><strong>02</strong> Crew</Link></li>
                        <li><Link className="link" to="technology"><strong>03</strong> Technology</Link></li>
                    </ul>
                </nav>
            
        </div>
    )
}
export default NavBar;