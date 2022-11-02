import React from "react";

const styles = {
    textAreas:{
        height: "10rem"
    }
}


function Contact () {
   
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
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/*Email address input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            {/*Phone number input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            {/*Message input*/}
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={styles.textAreas} data-sb-validations="required"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
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
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                        
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
        
        </>
        
    )
}

export default Contact;