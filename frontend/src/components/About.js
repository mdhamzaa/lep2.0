import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/AboutUs.css'
import Mission from '../Images/mission.png'
import Team from '../Images/team.png'
import Vision from '../Images/vision.png'

export default function AboutUs() {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/")
    }
    return (
        <div className='AboutBody'>
            <div className="AboutHead">
                <h1 className='Head'>Now Know More About Our Company</h1>
            </div>
            <div className='CardContainer'>
                <div className="AboutCard">
                    <div className="InnerCard" >
                        <h1 className="cardHead">vision</h1>
                        <p>
                            LOCAL EMPLOYMENT PORTAL (LEP) is all about providing an online platform for local
                            jobs such as tailors, carpenters, cleaners, labor, plumbers, electricians and
                            many.
                        </p>
                        <button className="Aboutbtn" onClick={clickHandler}>Go to Home</button>
                    </div>
                    <div className="CardCover">
                        <div className="CardCoverFront">
                            <div className="front_content">
                                <h5>Vision</h5>
                                <img src={Vision} alt="" className="Aboutimg" />
                            </div>
                        </div>
                        <div className="CardCoverBack"></div>
                    </div>
                </div>

                <div className="AboutCard">
                    <div className="InnerCard" >
                        <h1 className="cardHead">mission</h1>
                        <p>
                            our project
                            local employment portal which is based on hiring people of user interest. Users
                            can hire a person for some kind of manual work in a nearby area i.e., carpenter,
                            Electrician, labor work, taylor etc..,

                        </p>
                        <button className="Aboutbtn" onClick={clickHandler}>Go to Home</button>
                    </div>
                    <div className="CardCover">
                        <div className="CardCoverFront">
                            <div className="front_content">
                                <h5>Mission</h5>
                                <img src={Mission} alt="" className="Aboutimg" />
                            </div>
                        </div>
                        <div className="CardCoverBack"></div>
                    </div>
                </div>

                <div className="AboutCard">
                    <div className="InnerCard" >
                        <h1 className="cardHead">lep team</h1>
                        <p>
                            • T. ANKA CHANDRAHAS
                            • MOHD HAMZA
                            • K.AKHIL TEJ
                            • WARISH
                            • YASH TULSANI

                        </p>
                        <button className="Aboutbtn" onClick={clickHandler}>Go to Home</button>
                    </div>
                    <div className="CardCover">
                        <div className="CardCoverFront">
                            <div className="front_content">
                                <h5>Team</h5>
                                <img src={Team} alt="" className="Aboutimg" />
                            </div>
                        </div>
                        <div className="CardCoverBack"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}