import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBar.css";

function NavBarDropdown () {
    const Menuitems = [{title: "Marketing", path: "/marketing", cName:"navbardropdown-link"}];
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <> 
            <ul onClick={handleClick} className={click ? "navbardropdown-menu clicked" : "navbardropdown-menu"}>
                {Menuitems.map((item, index) => {
                    return (
                        <li key={index}> 
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}> {item.title} </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavBarDropdown