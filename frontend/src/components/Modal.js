import { cleanup } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { getOrders, postOrder } from "../service/api"
import { selectAllDetails } from '../features/userSlice';


function Modal({ setModalIsOpen, employee, pincode }) {

    const user = useSelector(state => state.user.user);
    const search = useSelector(selectAllDetails);
    let navigate = useNavigate();
    const [time, setDate] = useState((new Date()));

    const [slotSelected, setSlotSelected] = useState(0)
    const [order, setOrder] = useState([]);
    const [filledSlots, setfilledSlots] = useState(new Set())

    let slots = [9, 11, 13, 15, 17, 19, 21];


    useEffect(() => {

        var timer = setInterval(() => {
            setDate((new Date()));

        }, 1000)


        return function cleanup() {
            clearInterval(timer)
        }

    });


    const Orders = async () => {
        const d = await getOrders(employee.username);
        console.log(d.data)
        setOrder(d.data);

    }

    function filledSlotsConfig() {
        slots = new Set()
        order.forEach((ord) => {
            slots.add(ord.timeslot)
        })
        // console.log("my orders",order)
        setfilledSlots(slots);
        // console.log(filledSlots)
    }


    useEffect(() => {
        Orders()
    }, [])

    useEffect(() => {
        filledSlotsConfig()
    }, [order])




    const hireHandler = async () => {
        // console.log(user)
        const obj = {
            customer: user.username,
            employee: employee.username,
            profession: employee.skills,
            pincode: pincode,
            date: `${new Date()}`,
            timeslot: `${slotSelected}:00-${Number(slotSelected) + 2}:00`,
            status: "pending"
        }


        await postOrder(obj);
        navigate('/payment')
    }

    function selectSlot(e) {
        setSlotSelected(e.target.value)
        let slotBox = e.target.parentElement;
        Array.from(slotBox.children).forEach((child) => {
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
                    {slots.map((e) => {
                        let hour = time.getHours();
                        let startTime = e;
                        let endTime = startTime + 2;
                        let currSlot = `${startTime}:00-${endTime}:00`
                        if (startTime > hour) {
                            if (filledSlots.has(currSlot)) {
                                return <button className="slot-filled" value={startTime} key={startTime} onClick={selectSlot}>{currSlot}</button>
                            }
                            return <button className="slot" value={startTime} key={startTime} onClick={selectSlot}>{currSlot}</button>
                        }
                        else {
                            return <button className="slot-disabled" value={startTime} key={startTime} onClick={selectSlot}>{currSlot}</button>
                        }

                    })}
                </div>
                {/* <button id="hireBtn"  >Cancel</button> */}
                <div id="modalBtns">
                    {
                        slotSelected > 0 && <button id="hireBtn" onClick={hireHandler} >Hire</button>

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