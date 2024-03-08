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
    };

    // Custom class for shared link styles
    const sharedLinkStyles =   "block text-black md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"; // Adjusted styles
    // Define the path to your profile image relative to the navbar.jsx file
    const profileImagePath = "src/assets/picture1.png";
    // responsive design on tailwind just use md for medium devices then the style like md:
    return (
        
        <nav className="">
        {/* <button onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button > */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <img className = "profile" src={profileImagePath} alt="" />
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
                        <Link to="/About" className={sharedLinkStyles}>About</Link>
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