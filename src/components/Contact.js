import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validatePhone, validateEmail } from '../utils/helpers';

const styles = {
    textAreas:{
        height: "10rem"
    },
    formError:{
        fontWeight:"bold",
        color: "red"
    },
    displayBlock:{
        display:"block"
    }
}




function Contact () {
 


    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [styleNameRequired, setStyleNameRequired] = useState(false);
    const [styleEmailRequired, setStyleEmailRequired] = useState(false);
    const [styleEmailValid, setStyleEmailValid] = useState(false);
    const [stylePhoneRequired, setStylePhoneRequired] = useState(false);
    const [styleMsgRequired, setStyleMsgRequired] = useState(false);

    function handleChange(evt) {
        console.log("new value", evt.target.value);
      }
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);  
            
        } else if (inputType === 'userName') {
          setUserName(inputValue);
        } else {
          setPassword(inputValue);
        }
      };

      const handleSubmit = (e) => {
      }
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
                        
                        <form id="contactForm" data-sb-form-api-token="3a68f5aa-ad92-45ed-a5ac-7e3f5b6325ff">
                            {/*Name input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" name="name" onChange={handleInputChange} onBlur={handleFocusChange} placeholder="Enter your name..."  />
                                <label htmlFor="name">Full name</label>
                                {(styleNameRequired) ?<div style={styles.formError}>A name is required.</div>: null}
                            </div>
                            {/*Email address input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" name="email" onChange={handleInputChange} onBlur={handleFocusChange} placeholder="name@example.com"/>
                                <label htmlFor="email">Email address</label>
                                {(styleEmailRequired) ?<div style={styles.formError}>An email is required.</div>: null}
                                {(styleEmailValid) ?<div style={styles.formError}> Email is not valid.</div>: null}
                            </div>
                            {/*Phone number input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" name="phone" placeholder="(123) 456-7890" onChange={handleInputChange} onBlur={handleFocusChange} />
                                <label htmlFor="phone">Phone number</label>
                                {(stylePhoneRequired) ?<div style={styles.formError}>A phone number is required.</div>: null}
                            </div>
                            {/*Message input*/}
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" name="message" type="text" placeholder="Enter your message here..." style={styles.textAreas} onChange={handleInputChange} onBlur={handleFocusChange}></textarea>
                                <label htmlFor="message">Message</label>
                                {(styleMsgRequired) ? <div style={styles.formError}>A message is required.</div>: null}
                            </div>
                            {/*Submit success message*/}
                           
                            {/*This is what your users will see when the form*/}
                            {/*has successfully submitted*/}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    
                                </div>
                            </div>
                            {/*Submit error message*/}
                           
                            {/*This is what your users will see when there is*/}
                            {/*an error submitting the form*/}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/*Submit Button*/}
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" onClick={handleSubmit} type="submit">Send</button>
                        
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
        
        </>
        
    )
}

export default Contact;