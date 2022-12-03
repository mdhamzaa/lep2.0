import { cleanup } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Modal({ setModalIsOpen }) {
    let navigate = useNavigate();
    const [time, setDate] = useState((new Date()));
    const [addClass, setAddClass] = useState(false)
    const [slotSelected, setSlotSelected] = useState(0)
    
    let slots=[9,11,13,15,17,19,21];


    useEffect(() => {

        var timer = setInterval(() => {
            setDate((new Date()));

        }, 1000)


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


    const hireHandler = () => {
        navigate('/payment')
    }

    function selectSlot(e){
        setSlotSelected(e.target.value)
        let slotBox=e.target.parentElement;
        Array.from(slotBox.children).forEach((child)=>{
            child.classList.add('.slot');
            child.classList.remove('selected-slot');
        })
        e.target.classList.remove('.slot');
        e.target.classList.add('selected-slot');
    }


    return (
        <div id="modalContainer">

            <div id="modalContent">

                <span id="closeModalBtn"

                    onClick={() => {
                        setModalIsOpen(false);
                        cleanup()
                    }
                    }>&times;</span>

                <span id="dateDisplay">{time.toLocaleString()}</span>
                <h3 id="bookHead">Please Select a Booking Slot Time:</h3>
                <div id="slots">
                   {slots.map((e)=>{
                    let hour=time.getHours();
                    let startTime=e;
                    let endTime=startTime+2;
                    if(startTime>hour){
                        return  <button className="slot" value={startTime} key={startTime} onClick={selectSlot}>{`${startTime}:00-${endTime}:00`}</button>
                    }
                    else{
                        return  <button className="slot-disabled" value={startTime} key={startTime} onClick={selectSlot}>{`${startTime}:00-${endTime}:00`}</button>
                    }
                    
                   })}
                </div>
                {/* <button id="hireBtn"  >Cancel</button> */}
                <div id="modalBtns">
                    { 
                    slotSelected>0 && <button id="hireBtn" onClick={hireHandler} >Hire</button>
                    
                    }   
                    <button id="hireBtn" onClick={() => {
                        setModalIsOpen(false);

                    }} >Cancel</button>
                </div>


            </div>
        </div>
    )

}

export default Modal;