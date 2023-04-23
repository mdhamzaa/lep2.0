

// import { useState } from 'react';
// import Modal from 'react-modal';
// import Modal from './Modal';
import '../App.css';
import profile from '../Images/dummyImg.png'
import { url } from '../service/api.js';
function SearchResult(props) {

    return (
        <div>
            <div className="resultCard">
                <div className="userIntro">
                    <img className='profileImg' src={props.data.pic ? `${url}/${props.data.pic}` : "https://i.ibb.co/6BcDTmn/dp.jpg"} />
                    <div className="userNp">
                        <span className="userName">{props.data.username}</span>
                        <span className="profession">{props.data.skills}</span>
                    </div>
                </div>
                <div className="employeeDetails">
                    <span className="experience"><span className="ques">Experience : </span><span className="ans">{props.data.exp}</span></span>
                    <span className="experience"><span className="ques">Pay : </span><span className="ans">{props.data.pay}</span></span>
                    <span className="pincodes"><span className="ques">Available in areas(Pincodes) : </span><span
                        className="ans">{`${props.data.pincode[0]},${props.data.pincode[1]},${props.data.pincode[2]}`}</span></span>
                </div>
                <div className="book">
                    {/* <button className="bookBtn">Hire</button> */}
                    <button onClick={() => {
                        props.setModalIsOpen(true)
                        props.setCurrEmployee(props.data)
                    }} className="bookBtn">Hire</button>

                </div>
            </div>







            {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                <div id="modalContainer">

                    <div id="modalContent">
                        <span id="closeModalBtn" onClick={() => setModalIsOpen(false)}>&times;</span>
                        <span id="dateDisplay"></span>
                        <h3 id="bookHead">Please Select a Booking Slot Time:</h3>
                        <div id="slots">
                            <button className="slot" value="11">9:00 AM-11:00 AM</button>
                            <button className="slot" value="13">11:00 AM-1:00 PM</button>
                            <button className="slot" value="15">1:00 PM -3:00 PM</button>
                            <button className="slot" value="17">3:00 PM-5:00 PM</button>
                            <button className="slot" value="19">5:00 PM-7:00 PM</button>
                            <button className="slot" value="21">7:00 PM-9:00 PM</button>
                            <button className="slot" value="24">9:00 PM-11:00 PM</button>

                        </div>
                        <button id="hireBtn" onClick={() => setModalIsOpen(false)} >Cancel</button>
                        <button id="hireBtn"  >Hire</button>
                    </div>
                </div>
            </Modal > */}
        </div >
    )

}

export default SearchResult;