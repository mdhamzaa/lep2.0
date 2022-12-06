import React from 'react'
// import "../CSS/Contact.css";
import {useState} from 'react'
import { addAction } from '../service/api';
export default function QueryForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phn, setPhn] = useState("");
    const [msg, setMsg] = useState("");
    const handle = async () => {
        await addAction({FirstName:name,Email:email,Phone:phn,Message:msg,Status:"Active"});
    }
    return (
        <>
            <div className="contact-details">
                <h2>Send Your Query</h2>
                <div className="contact-form">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="" required="required" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="" required="required" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" id="mobile" name="" required="required" maxlength="10" onChange={(e) => setPhn(e.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="area">Write your Message here.....</label>
                            <textarea name="" id="area" cols="30" rows="10" required="required" onChange={(e) => setMsg(e.target.value)}></textarea>
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

