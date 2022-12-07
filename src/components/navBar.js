import React from 'react'
import { NavLink } from 'react-router-dom'

import '../CSS/home.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Logout, selectAllUser } from '../features/userSlice';
import { toast } from 'react-toastify';

export default function Navbar() {
    // const user = JSON.parse(localStorage.getItem('user'));
    const user = useSelector(selectAllUser);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const logOutHandler = () => {
        // localStorage.removeItem("user");
        dispatch(Logout())
        toast.success("You have been Log Out")
        // console.log("hamza")
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
                <li className="navitem"><NavLink to="/about" className="navlinks disappear">About Us</NavLink></li>
                <li className="navitem"><NavLink to={user.level === "Admin" ? "/Admin/Analytics" : "/dashboard/profile"} className="navlinks">{user.username}</NavLink></li>
                <li className="navitem">

                    <button className="navlinks"
                        style={{ backgroundColor: "transparent", border: "none" }} onClick={logOutHandler}>Logout</button>

                </li>

            </ul> :
                <ul className="navmenu" id="navmenu">

                    <li className="navitem"><NavLink to="/" className="navlinks disappear">Home</NavLink></li>
                    <li className="navitem"><NavLink to="/contact" className="navlinks disappear">Contact Us</NavLink></li>
                    <li className="navitem"><NavLink to="/about" className="navlinks disappear">About Us</NavLink></li>
                    <li className="navitem"><NavLink to="/login" className="navlinks">SignIn/SignUP</NavLink></li>


                </ul>

            }





        </nav >
    )
}
