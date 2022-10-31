import React from "react";
// import "../CSS/Contact.css";

export default function ContactDet() {

    return (
        <>
            <div className="contact-info">
                <div className="details">
                    <h2>Contact Details</h2>
                </div>
                <div className="contact-item">
                    <div className="text">
                        <div className="icon-bar">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <h3>Address</h3>
                        </div>
                        <div>
                            <p>Virat nagar,<br />Delhi,India,<br />122104</p>
                        </div>
                        <div className="text">
                            <div className="icon-bar">
                                <div className="icon"><i className="fa fa-phone-square" aria-hidden="true"></i>
                                </div>
                                <h3>Phone</h3>
                            </div>
                            <p>180034567810</p>
                        </div>
                        <div className="text">
                            <div className="icon-bar">
                                <div className="icon"><i className="fa fa-solid fa-envelope"></i>
                                </div>
                                <h3>Email</h3>
                            </div>
                            <p>lepbusiness@gmail.com</p>
                        </div>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="./"><i className="fa fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="./"><i className="fa fa-brands fa-youtube"></i></a></li>
                            <li><a href="./"><i className="fa fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}


