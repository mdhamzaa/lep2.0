import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav  >

            <li><NavLink to='/' Style={"text-decoration: none"}>
                LEP
            </NavLink></li>
            <ul >

                <li ><NavLink to="/" >Home</NavLink></li>
                <li ><NavLink to="/contact">Contact Us</NavLink></li>

                <li ><NavLink to="/login">Login</NavLink> </li>

                {/* <form action="/logout" method="post"><button type="submit" className="navlinks"
                        style="background-color: transparent;border: none;">Logout</button></form></li> */}

            </ul>


        </nav >






    )
}

export default NavBar;