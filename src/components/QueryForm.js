import React from 'react'
// import "../CSS/Contact.css";

export default function QueryForm() {
    // function sendmail(){
    //     let name=document.getElementById('name');
    //     let email=document.getElementById('email');
    //     let mobile=document.getElementById('mobile');
    //     let message=document.getElementById('area');

    //     var fullname = name.value;
    //     var emailVal = email.value;
    //     var mobileVal = mobile.value;
    //     var messageVal = message.value;

    //     var Body='name: '+fullname+'<br>email: '+emailVal+'<br>mobile: '+mobileVal+'<br>message: '+messageVal;

    //     email.send({
    //         Host:"smtp.gmail.com",
    //         To: 'khanwarish483@gmail.com',
    //         From: emailVal,
    //         mobile: mobileVal,
    //         Body: Body
    //     }).then(
    //         message =>{
    //             //console.log (message);
    //             if(message==='OK'){
    //             alert('Your mail has been send. Thank you for connecting.');
    //             }
    //             else{
    //                 console.error (message);
    //                 alert('There is error at sending message. ')

    //             }

    //         }
    //     );




    // }
    return (
        <>
            <div className="contact-details">
                <h2>Send Your Query</h2>
                <div className="contact-form">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="" required="required" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="" required="required" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" id="mobile" name="" required="required" maxlength="10" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="area">Write your Message here.....</label>
                            <textarea name="" id="area" cols="30" rows="10" required="required"></textarea>
                            <div className="inputBox">
                                <input type="submit" className="OrderBtn" name="" required="required" value="Send Message" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

