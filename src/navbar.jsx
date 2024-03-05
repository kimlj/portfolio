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
    const sharedLinkStyles = "block py-2 px-3 text-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500";

    // responsive design on tailwind just use md for medium devices then the style like md:
    return (
        
        <nav className="">
        <button onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button >
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="font-medium flex flex-col mt-4 bg-white p-7 rounded-3xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="flex-initial">
                    <Link to="/" className={sharedLinkStyles}>Home</Link>
                </li>
                <li className="flex-initial">
                    <Link to="/academics" className={sharedLinkStyles}>Academics</Link>
                </li>
                <li className="flex-initial">
                    <Link to="/certifications" className={sharedLinkStyles}>Certifications</Link>
                </li>
                <li className="flex-initial">
                    <Link to="/workExperience" className={sharedLinkStyles}>Work Experience</Link>
                </li>
                <li className="flex-initial">
                    <Link to="/About" className={sharedLinkStyles}>About</Link>
                </li>
                {/* Add other links as needed */}
            </ul>
        </div>
            
        </nav>
    );
}





export default Navbar