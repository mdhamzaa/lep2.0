import React from 'react'
import { NavLink } from 'react-router-dom'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import '../CSS/home.css'
export default function Navbar() {
    return (
        <nav id="navbar">
            <span id="hamburger">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </span>
            <li id="brand"><NavLink to="/" style={{ color: "whitesmoke", textDecoration: "none" }}>
                LEP
            </NavLink></li>
            <ul className="navmenu" id="navmenu">

                <li className="navitem"><NavLink to="/" className="navlinks disappear">Home</NavLink></li>
                <li className="navitem"><NavLink to="/contact" className="navlinks disappear">Contact Us</NavLink></li>
                <li className="navitem"><NavLink to="/login" className="navlinks">SignIn/SignUp</NavLink></li>
                <li className="navitem">

                    <button className="navlinks"
                        style={{ backgroundColor: "transparent", border: "none" }}>Logout</button>

                </li>

            </ul>
        </nav>
    )
}
