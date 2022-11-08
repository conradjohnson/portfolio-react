import React, { useState } from "react";

// Here we import a helper function that will check if the email and phone number is valid
import { validatePhone, validateEmail } from '../utils/helpers';

// some inline styling for dynamic rendering
const styles = {
    textAreas:{
        height: "10rem"
    },
    formError:{
        fontWeight:"bold",
        color: "red"
    }
}



// Contact Component
function Contact () {
 

    // form values as well as styling booleans for form errors
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [styleNameRequired, setStyleNameRequired] = useState(false);
    const [styleEmailRequired, setStyleEmailRequired] = useState(false);
    const [styleEmailValid, setStyleEmailValid] = useState(false);
    const [stylePhoneRequired, setStylePhoneRequired] = useState(false);
    const [styleMsgRequired, setStyleMsgRequired] = useState(false);

   
    // every time one of our fields is changed, lets store that in state.
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, name, phone and message
        switch (inputType){ 
            case 'name': 
                setName(inputValue);
                break;
            case 'email':  
                setEmail(inputValue);
                break;
            case 
                'phone': setPhone(inputValue);
                break;
            case 
                'message': setMessage(inputValue);
                break;
            default: break;
                    
        }
        
      };

      // if someone submits the form, then clear the values and reset the form
      // currently we do nothing with the contact form data, but here is where 
      // we would route this data to some API or graphql endpoint.
      const handleSubmit = (e) => {
        e.preventDefault();

        // here we would revalidate and submit the data

        //reset the form
        //set all fields to blank... we don't handle the submit function right now.
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

      }

      //handle focus change will fire 'onBlur' to see if the field the user just left meets our
      // form submission requirements.
      const handleFocusChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //Name Check
        if (inputType === 'name') {
            if (inputValue.length < 4){
                setStyleNameRequired(true)
             } else { setStyleNameRequired(false)}
        }

        //Email Check
        if (inputType === 'email') {
         //alert('here!');
         if (!validateEmail(inputValue)){
           // alert('not valid!');
           setStyleEmailValid(true)
         } else{ setStyleEmailValid(false)}
         if (inputValue.length < 4){
            setStyleEmailRequired(true)
         } else { setStyleEmailRequired(false)}
        }

        //Phone Check
        if (inputType === 'phone') {
            if (!validatePhone(inputValue)){
                // alert('not valid!');
                setStylePhoneRequired(true)
              } else{ setStylePhoneRequired(false)}
            
        }
       
        // Check Message
       if (inputType === 'message') {
        if (inputValue.length < 4){
            setStyleMsgRequired(true)
         } else { setStyleMsgRequired(false)}
        }

      }

    return (

        <>
      
        <section className="page-section" id="contact">
        {/*Contact Section*/}
            <div className="container">
                {/*Contact Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                {/*Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/*Contact Section Form*/}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        
                        <form id="contactForm" onSubmit={handleSubmit} method="post">
                            {/*Name input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" name="name" onChange={handleInputChange} onBlur={handleFocusChange}  value={name} placeholder="Name?"/>
                                <label htmlFor="name">Full name</label>
                                {(styleNameRequired) ?<div style={styles.formError}>A name is required.</div>: null}
                            </div>
                            {/*Email address input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" name="email" onChange={handleInputChange} onBlur={handleFocusChange} value={email} placeholder="email@domain.com"/>
                                <label htmlFor="email">Email address</label>
                                {(styleEmailRequired) ?<div style={styles.formError}>An email is required.</div>: null}
                                {(styleEmailValid) ?<div style={styles.formError}> Email is not valid.</div>: null}
                            </div>
                            {/*Phone number input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" name="phone" placeholder="(123) 456-7890" onChange={handleInputChange} onBlur={handleFocusChange} value={phone}/>
                                <label htmlFor="phone">Phone number</label>
                                {(stylePhoneRequired) ?<div style={styles.formError}>A phone number is required.</div>: null}
                            </div>
                            {/*Message input*/}
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" name="message" type="text" placeholder="Enter your message here..." style={styles.textAreas} onChange={handleInputChange} onBlur={handleFocusChange} value={message}></textarea>
                                <label htmlFor="message">Message</label>
                                {(styleMsgRequired) ? <div style={styles.formError}>A message is required.</div>: null}
                            </div>
                           
                            <button className="btn btn-primary btn-xl" id="submitButton"  type="submit">Send</button>
                        
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
        
        </>
        
    )
}

export default Contact;