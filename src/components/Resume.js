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
                    <div className="col-lg-4 ms-auto"><p className="lead">Forward thinking technology leader</p><span> with proven track record of identifying opportunities in emerging technology to deliver new products, services and lines of business.  Web3 builder since 2016.  Always focused on product and utility.</span></div>
                    <div className="col-lg-4 ms-auto"><p className="lead">
                        Skillset: </p>
                        <ul>
                            <li>Executive Software Leadership</li>
                            <li>Real Code Commits</li>
                            <li>Full Stack Engineer - React/Angular : GraphQL/REST : NoSQL/SQL</li>
                            <li>Web3 Developer - web3/Alchemy/ethers : local/hosted infra : Solidity</li>
                            <li>Certs - PMP/SCPO/SCM/SMU</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 me-auto mb-auto"><p className="lead"><a href="https://www.linkedin.com/in/jamesconradjohnson/" target="_blank"><img src="assets/img/linkedin.svg" /></a></p>
                    <br/><br/><span ><a href="./assets/files/resume.txt" target="_blank" style={{color:"#FFF", fontSize:"22px", margin:"0 0 0 20px"}}>Resume Download</a></span></div>
                </div>
        
            </div>
        </section>
    )
}

export default Resume;