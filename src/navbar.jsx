import React from "react"
import ReactDOM from "react-dom/client"
import {Link} from "react-router-dom"
import './navbar.css'
import Home from "./home"
import Academics from "./academics"

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

function Navbar() {
    // Custom class for shared link styles
    const sharedLinkStyles = "text-black px-8 hover:text-gray-300";

    return (
        <nav className="bg-white">
            <ul className="flex justify-between px-4 py-2">
                <li>
                    <Link to="/" className={sharedLinkStyles}>Home</Link>
                </li>
                <li>
                    <Link to="/academics" className={sharedLinkStyles}>Academics</Link>
                </li>
                <li>
                    <Link to="/certifications" className={sharedLinkStyles}>Certifications</Link>
                </li>
                <li>
                    <Link to="/workExperience" className={sharedLinkStyles}>Work Experience</Link>
                </li>
                <li>
                    <Link to="/About" className={sharedLinkStyles}>About</Link>
                </li>
                {/* Add other links as needed */}
            </ul>
        </nav>
    );
}




export default Navbar