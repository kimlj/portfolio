import React from "react"
import ReactDOM from "react-dom/client"
import {Link} from "react-router-dom"
import './navbar.css'
import Home from "./home"
import Academics from "./academics"
import { useState } from "react"

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

function Navbar() {
    // state when hamburger menu was clicked and opened
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };

    // Custom class for shared link styles
    const sharedLinkStyles =   "block text-black md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"; // Adjusted styles
    // Define the path to your profile image relative to the navbar.jsx file
    const profileImagePath = "src/assets/picture1.png";
    // responsive design on tailwind just use md for medium devices then the style like md:
    const hamburgerMenuPath = "src/assets/hamburger-32.png";

    return (
        <nav className="">
        <button className="hamburger-menu" onClick={toggleMenu}>
            <img src={hamburgerMenuPath} alt="" className="hamburger-icon"/>
        </button>
        <img className = "profile" src={profileImagePath} alt="" />
        <div id="navbar-default" className = {`${isMenuOpen ? 'menu-visible' : ''}`}>
            <div className="ul-holder">
                <ul className="nav-ul">
                    <li className="nav-ul-li">
                        <Link to="/" className={sharedLinkStyles}>Home</Link>
                    </li>
                    <li className="nav-ul-li">
                        <Link to="/academics" className={sharedLinkStyles}>Academics</Link>
                    </li>
                    <div className="li-divider"></div>
                    <li className="nav-ul-li">
                        <Link to="/certifications" className={sharedLinkStyles}>Certifications</Link>
                    </li>
                    <li className="nav-ul-li">
                        <Link to="/experience" className={sharedLinkStyles}>Experience</Link>
                    </li>
                    <li className="nav-ul-li">
                        <Link to="/about" className={sharedLinkStyles}>About</Link>
                    </li>
                    {/* Add other links as needed */}
                </ul>
            </div>
            <button className="hire-me-btn">Contact Me</button>
            {/* this button when clicked should go to email with my email as contact and ready to send */}
        </div>
            
        </nav>
    );
}





export default Navbar