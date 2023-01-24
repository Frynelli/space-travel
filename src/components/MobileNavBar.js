import NavLinks from "./NavLinks";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {TfiClose} from "react-icons/tfi"
import { Fragment, useState } from "react";
const MobileNavBar = ()=>{
    const[open,setOpen]=useState(false)
    const clickHandler=(event)=>{
      event.preventDefault();
      setOpen(!open)
    }
    const humbergerIcon = <HiOutlineMenuAlt3
                           onClick={clickHandler}
                           className="humberger mobileNavigation" 
                           size="40px" 
                            color="white"/>
     const closeIcon =     <TfiClose
                              onClick={clickHandler}
                             className="closeIcon mobileNavigation" 
                             size="40px" 
                              />                   

    return(
        <Fragment>
                            
                            {open ? closeIcon : humbergerIcon}
                               {open && <nav className=" menu modal mobileNavigation">
                                
                               <NavLinks/> </nav>}
                           
                    
                          </Fragment>
    )
}

export default MobileNavBar;