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

        // <nav id="navbar">
        // <span id="hamburger">
        //     <div className="bar"></div>
        //     <div className="bar"></div>
        //     <div className="bar"></div>
        // </span>
        // <li id="brand"><Link href={"#"} style={"text-decoration: none"}>
        //     LEP
        // </Link></li>
        // <ul className="navmenu" id="navmenu">

        //     <li className="navitem"><Link href={"/"} className="navlinks disappear">Home</Link></li>
        //     <li className="navitem"><Link href={"/contact-us"} className="navlinks disappear">Contact Us</Link></li>

        //     <li className="navitem">Logout</li>
        //     {/* <form action="/logout" method="post"><button type="submit" className="navlinks"
        //             style="background-color: transparent;border: none;">Logout</button></form></li> */}

        // </ul>


        // </nav >




    )
}

export default NavBar;