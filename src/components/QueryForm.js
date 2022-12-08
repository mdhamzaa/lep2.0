import React from 'react'
import emailjs from 'emailjs-com'
// import "../CSS/Contact.css";
import { useState } from 'react'
import { addAction } from '../service/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function QueryForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [sub, setSub] = useState("");
    const [msg, setMsg] = useState("");
    const handle = async () => {
        if ((name && email && sub && msg)) {
            await addAction({ FirstName: name, Email: email, Subject: sub, Message: msg, Status: "Active" });
            toast.success("Query Submitted Successfully");
            navigate('/')
        }
    }

    // email sender for query

    function SubmitHandler(e) {
        e.preventDefault();  // prevents reloading
        emailjs.sendForm('service_1cv5ezj', 'template_lrm3tba', e.target, 'zcun8upUT3cByd5sS').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <>
            <div className="contact-details">
                <h2>Send Your Query</h2>
                <div className="contact-form">
                    <form onSubmit={SubmitHandler}>
                        <div className="inputBox">
                            <label htmlFor="Fname">Full Name</label>
                            <input type="text" id="Fname" name="Fname" required="required" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required="required" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Subject">Subject</label>
                            <input type="text" id="Subject" name="Subject" required="required" onChange={(e) => setSub(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="MessageArea">Write your Message here.....</label>
                            <textarea name="MessageArea" id="MessageArea" cols="30" rows="10" required="required" onChange={(e) => setMsg(e.target.value)}></textarea>
                            <div className="inputBox">
                                <input type="submit" className="OrderBtn" name="" required="required" value="Send Message" onClick={handle} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}