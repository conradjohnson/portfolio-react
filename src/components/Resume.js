import React from "react";

function Resume (){
    return (
        <section className="page-section bg-primary text-white mb-0" id="resume">
            <div className="container">
        
                <h2 className="page-section-heading text-center text-uppercase text-white">Resume</h2>
        
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
        
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Forward thinking technology leader with proven track record of identifying opportunities in emerging technology to deliver new products, services and lines of business.  Web3 focused engineer.  </p></div>
                    <div className="col-lg-4 me-auto my-auto"><p className="lead"><a href="https://www.linkedin.com/in/jamesconradjohnson/" target="_blank"><img src="assets/img/linkedin.svg" /></a></p></div>
                </div>
        
            </div>
        </section>
    )
}

export default Resume;