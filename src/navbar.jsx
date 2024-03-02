import React from "react"
import ReactDOM from "react-dom/client"
import {Link} from "react-router-dom"
import './navbar.css'
import Home from "./home"
import Academics from "./academics"

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/academics">Academics</Link>
                </li>
                {/* Add other links as needed */}
            </ul>
        </nav>
    );
}


export default Navbar