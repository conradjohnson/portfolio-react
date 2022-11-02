import React from 'react';

function Masthead (){
    return(
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image*/}
                <img className="masthead-avatar mb-5" src="assets/img/jamesavatar.svg" alt="..." />
                {/* Masthead Heading*/}
                <h1 className="masthead-heading text-uppercase mb-0">ConradJohnson</h1>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* Masthead Subheading*/}
                <p className="masthead-subheading font-weight-light mb-0">Web3 Dev - Builder - Father</p>
            </div>
        </header>
    )
}

export default Masthead;