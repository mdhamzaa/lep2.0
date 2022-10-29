import { useEffect, useState } from 'react';
import '../App.css';


function Modal({ setModalIsOpen }) {

    const [time, setDate] = useState((new Date()).toLocaleString());
    const [addClass, setAddClass] = useState(false)


    function handleClick() {
        setAddClass(addClass => !addClass);
    }

    let adding = addClass ? ' disable' : null;

    useEffect(() => {

        var timer = setInterval(() => setDate((new Date()).toLocaleString()), 1000)


        return function cleanup() {
            clearInterval(timer)
        }

    });

    // useEffect(() => {
    //     let d = new Date();
    //     if (e.value <= d.getHours()) {
    //         add('disable');
    //     }
    // }, [])







    return (
        <div id="modalContainer">

            <div id="modalContent">

                <span id="closeModalBtn"

                    onClick={() => {
                        setModalIsOpen(false);

                    }
                    }>&times;</span>

                <span id="dateDisplay">{time}</span>
                <h3 id="bookHead">Please Select a Booking Slot Time:</h3>
                <div id="slots">
                    <button class="slot" value="11">9:00 AM-11:00 AM</button>
                    <button class="slot" value="13">11:00 AM-1:00 PM</button>
                    <button class="slot" value="15">1:00 PM -3:00 PM</button>
                    <button class="slot" value="17">3:00 PM-5:00 PM</button>
                    <button class="slot" value="19">5:00 PM-7:00 PM</button>
                    <button class="slot" value="21">7:00 PM-9:00 PM</button>
                    <button class="slot" value="24">9:00 PM-11:00 PM</button>

                </div>
                {/* <button id="hireBtn"  >Cancel</button> */}
                <button id="hireBtn"  >Hire</button>
                <button id="hireBtn" onClick={() => {
                    setModalIsOpen(false);

                }} >Cancel</button>


            </div>
        </div>
    )

}

export default Modal;