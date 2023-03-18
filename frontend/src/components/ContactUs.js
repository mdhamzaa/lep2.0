import React from 'react'
import "../CSS/Contact.css"
import ContactDet from './ContactDet';
import QueryForm from './QueryForm';

function ContactUs() {
    return (
        <>
            <body id="contact">
                <section className="contact">
                    <div className="content">
                        <h2>Connect With Us</h2>
                        <p>send your query and our team will contact you within 1 hour</p>
                    </div>
                    <div className="containerBox">
                        <ContactDet />
                        <QueryForm />
                    </div>
                </section>
            </body>
        </>
    )
}


export default ContactUs;