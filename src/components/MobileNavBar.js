import NavLinks from "./NavLinks";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {TfiClose} from "react-icons/tfi"
import { useState } from "react";
const MobileNavBar = ()=>{
    const[open,setOpen]=useState(false)
    const clickHandler=(event)=>{
      event.preventDefault();
      setOpen(!open)
    }
    const humbergerIcon = <HiOutlineMenuAlt3
                           onClick={clickHandler}
                           className="humberger" 
                           size="40px" 
                            color="white"/>
     const closeIcon =     <TfiClose
                              onClick={clickHandler}
                             className="closeIcon" 
                             size="40px" 
                              color="white"/>                   

    return(
        
                     <div>   
                        {open ? closeIcon : humbergerIcon}
                          {open && <NavLinks/>}
                          </div>
                    
    )
}

export default MobileNavBar;