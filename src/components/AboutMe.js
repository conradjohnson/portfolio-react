import React from 'react';

function AboutMe() {
 
    return (
        
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
        
                <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>
        
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
        
                <div className="row">
                    <div className="col-lg-4 ms-auto"><h3>The Engineer</h3><p className="lead">Full stack web3 developer with 20 years coding and deployment experience in traditional web2 technologies.  Platforms include web, mobile web, IoT, mobile apps and web3 applications. </p></div>
                    <div className="col-lg-4 me-auto"><h3>The Leader</h3><p className="lead">C-Level experience as Chief Technology Officer, Chief Marketing/Product Officer.  Have led multiple engineering teams in enterprise and start-up environments.  Startup bootstrapping. Program and Product Owner.</p></div>
                </div>
        
            </div>
        </section>
    )

}

export default AboutMe;