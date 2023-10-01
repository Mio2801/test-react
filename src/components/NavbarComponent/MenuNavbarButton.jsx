import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MenuNavbar, MenuNavbarTitle } from "./style"
//import { useState } from "react";


const MenuNavbarButton = ({label,icon,show}) => {
    
    return(
        <MenuNavbar>
            <FontAwesomeIcon icon={icon} style={{ color: "#757575", fontSize: '20px' }} />
            <div style={{display: show ? 'block' : 'none'}}>
                <MenuNavbarTitle>{label}</MenuNavbarTitle>
            </div>
        </MenuNavbar>
    )       
}
export default MenuNavbarButton