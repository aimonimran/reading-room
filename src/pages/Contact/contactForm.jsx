import React from 'react';
import '../../components/common/Form/form.css';
import Form from '../../components/common/Form/form';

class ContactForm extends Form {
    render() { 
        return (
            <>
                <form onSubmit={this.handleSubmit} className="form my-3">
                    <h1 className='text-center contact-title'>Contact Us</h1>
                    {this.renderInput("Fullname", "fullname", "Enter your fullname")}
                    {this.renderInput("Contact Number", "contact-number", "eg: 03xx xxxxxxx")}
                    {this.renderInput("Email Address", "email-address", "eg: abc@example.com", "email")}
                    {this.renderTextArea("Message", "message")}
                    {this.renderButton("Submit")}         
                </form>
            </>
        ); 
    }
}
 
export default ContactForm;