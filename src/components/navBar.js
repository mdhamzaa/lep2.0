import React from 'react'
import { NavLink } from 'react-router-dom'

import '../CSS/home.css'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const user = JSON.parse(localStorage.getItem('user'));
    let navigate = useNavigate();
    const logOutHandler = () => {
        localStorage.removeItem("user");
        console.log("hamza")
        navigate("/")

    }

    // console.log(user.username)
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




            {user ? <ul className="navmenu" id="navmenu">

                <li className="navitem"><NavLink to="/" className="navlinks disappear">Home</NavLink></li>
                <li className="navitem"><NavLink to="/contact" className="navlinks disappear">Contact Us</NavLink></li>
                <li className="navitem"><NavLink to="/login" className="navlinks">{user.username}</NavLink></li>
                <li className="navitem">

                    <button className="navlinks"
                        style={{ backgroundColor: "transparent", border: "none" }} onClick={logOutHandler}>Logout</button>

                </li>

            </ul> :
                <ul className="navmenu" id="navmenu">

                    <li className="navitem"><NavLink to="/" className="navlinks disappear">Home</NavLink></li>
                    <li className="navitem"><NavLink to="/contact" className="navlinks disappear">Contact Us</NavLink></li>
                    <li className="navitem"><NavLink to="/login" className="navlinks">SignIn/SingUP</NavLink></li>


                </ul>

            }





        </nav >
    )
}
