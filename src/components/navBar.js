import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav  >

            <li><NavLink to='/' >
                LEP
            </NavLink></li>
            <ul >

                <li ><NavLink to="/" >Home</NavLink></li>
                <li ><NavLink to="/contact">Contact Us</NavLink></li>

                <li ><NavLink to="/login">Login</NavLink> </li>



            </ul>


        </nav >






    )
}

export default NavBar;