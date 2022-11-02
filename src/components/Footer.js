import React from 'react';

function Footer (){
    return (
        <>
        <footer className="footer text-center">
        {/* Footer*/}
            <div className="container">
                <div className="row">
                    {/* Footer Location*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Texas, Vermont, Colorado and Online
                        </p>
                    </div>
                    {/* Footer Social Icons*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1"  href="https://twitter.com/conradjohnson" target="_blank"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/jamesconradjohnson/"  target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        
                    </div>
                    {/* Footer About Text*/}
                    <div className="col-lg-4">
                         <p className="lead mb-0">
                            Reach out whenever! 
                                                     
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* Copyright Section */}
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; ConradJohnson 2022</small></div>
        </div>
        </>
    );
}

export default Footer;