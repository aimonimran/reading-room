import React, { Component } from 'react';
import ContactForm from './contactForm';
import './contact.css';

class Contact extends Component {
    render() { 
        return (
            <div className="row contact">
                <div className="col-lg-6 order-lg-1 col-sm-12 order-sm-1">
                    <h6 className='contact-title mt-3'>Address</h6>
                    <h4 className='contact-body mb-3'>Street 15, Karachi, Pakistan.</h4>

                    <h6 className='contact-title'>Email</h6>
                    <h4 className='contact-body mb-3'>reading.room@gmail.com</h4>

                    <h6 className='contact-title'>Phone</h6>
                    <h3 className='contact-body mb-5'>+92 312 3819492</h3>
                </div>
                <div className="col-lg-6 order-lg-1 col-sm-12 order-sm-1">
                    <ContactForm />
                </div>
            </div>
        );
    }
}
 
export default Contact;