import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <ul className="max-md:mb-[6px]">
                <li><Link className="max-md:text-[16px]" to='/SignUp'>Nous rejoindre</Link></li>
                <li><Link className="max-md:text-[16px]" to='/'>Contact</Link></li>
            </ul>
            <NavBar />
        </header>
    )
}

export default Header