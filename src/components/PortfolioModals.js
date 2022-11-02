import React from "react";

function PortfolioModals(){
    return (
        <>
        {/* Portfolio Modals*/}
        {/* Portfolio Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">J.A.T.E.</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/jate.png" alt="J.A.T.E. - Just Another Text Editor progressive web application." />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4 text-left">Just Another Text Editor is a Progressive Web Application that allows a user to create, and save a javascript text document. JATE application uses CodeMirror as an editor front end with a client side IndexedDB database for storage.</p>
                                    <p className="mb-4"><a href="https://github.com/conradjohnson/text-editor-pwa" target="_blank">Github Repository</a></p>
                                    <p className="mb-4"><a href="https://shrouded-taiga-40649.herokuapp.com/" target="_blank">Demo</a></p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 2*/}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Beer Buddies 🍻</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/beerbuddies.png" alt="Beer Buddies Social Media App" />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">As fans of beer, we have created a beer blog for all beer enthusiasts. Just sign up and share your location to see what bars and breweries are around you. Tell us about your favorite beers by its name and the type of beer and share your thoughts and comments in a post about the beer with your fellow Beer Buddies! Update the post as you wish.</p>
                                    <p className="mb-4"><a href="https://github.com/conradjohnson/beer-buddies" target="_blank">Github Repository</a></p>
                                    <p className="mb-4"><a href="https://stark-ridge-23340.herokuapp.com/" target="_blank">Demo</a></p>
                                    
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 3*/}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">NoSql Social Media API</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/socialmediaapi.png" alt="NoSql Social Media API Services" />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">Social Network API powered by MongoDB... a NoSQL driven api service application that can power a social network of friends and shared thoughts and reactions. Users can have friends and thoughts with reactions by friends or user. API provides CRUD operations for Users and Thoughts, and CRD operations for Reactions. Deleting a user will remove that user from others' friend array as well as their thoughts.</p>
                                    <p className="mb-4"><a href="https://github.com/conradjohnson/social-network-nosql-api" target="_blank">Github Repository</a></p>
                                    <p className="mb-4"><a href="https://drive.google.com/file/d/1_13wY6iDRThSXSI3SwXWqOGHbllnMd4B/view" target="_blank">Demo Video</a></p>
                                   
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 4*/}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Employee Manager</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/businessmanager.png" alt="Employee Manager Command Line Application" />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">Employee Manager allows a company owner to use a command line program to manage his employee staff, roles, managers and departments. It is a fully featured node application with user friendly menu and non breaking fallback structure for when an employee or role is undefined. Employee Manager uses a mysql backend to store and retrieve company data. Technologies used include inquirerjs, mysql, sequelize and nodejs.</p>
                                    <p className="mb-4"><a href="https://github.com/conradjohnson/employee-mgr-m12" target="_blank">Github Repository</a></p>
                                    <p className="mb-4"><a href="https://drive.google.com/file/d/1KfXVKedvDzOFYEAjfVfOPK80pOHKcYql/view" target="_blank">Demo Video</a></p>
                                   <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 5*/}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">E-Commerce API</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/ecommapi.png" alt="E-Commerce API Services" />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">ExpressJS Routing API interface to mysql via sequelize. Allows a front end to integrate to CRUD operations for an e-commerce store. Uses Express, Mysql, Sequelize.</p>
                                    <p className="mb-4"><a href="https://github.com/conradjohnson/ecommerce-mvc-m13" target="_blank">Github Repository</a></p>
                                    <p className="mb-4"><a href="https://drive.google.com/file/d/1KjW-DwfQJvO-JKvwX2NGsv-5Xb_IofUd/view" target="_blank">Demo Video</a></p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 6*/}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Note Taker</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/notestaker.png" alt="Note Taker Web Application" />
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">Notes taking webapp that allows users to store, retrieve and delete notes on a publicly accessible site. Uses Express.js API calls from javascript front end to modify a client side json data store file.</p>
                                    <p className="mb-4"><a href="https://github.com/conradjohnson/notes-taker-m11" target="_blank">Github Repository</a></p>
                                    <p className="mb-4"><a href="https://salty-refuge-38434.herokuapp.com/" target="_blank">Demo</a></p>
                                   
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default PortfolioModals;