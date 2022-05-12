import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBarDropdown.css";

function NavBarDropdown (props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <> 
            <ul onClick={handleClick} className={click ? "navbardropdown-menu clicked" : "navbardropdown-menu"}>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}> 
                            <Link className="navbardropdown-link" to={item.path} onClick={() => setClick(false)}> {item.title} </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavBarDropdown