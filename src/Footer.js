import React, { useState } from 'react';
import logo from "./assests/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import envelope from "./assests/env.png";
import twitter from "./assests/twitter.png"
import youtube from "./assests/youtube.png"
import linkedin from "./assests/linkedin.png"
import facebook from "./assests/facebook.png"

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        setShowModal(true); // Show modal when user subscribes
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <footer className="footer bg-light py-5">
            <div className="container">
                {/* Logo */}

                <div className="row mb-4 justify-content-center" >

                    <div className="d-flex justify-content-center mb-3">
                        <img src={logo} alt="FreePress Logo" className="me-2" style={{ height: "70px" }} />
                    </div>
                    {/* Newsletter Subscription */}
                    <div className="col-md-6 text-center  justify-content-center">
                        <h3>Subscribe to our newsletter</h3>

                        <form onSubmit={handleSubscribe} className="d-flex justify-content-center mb-1">
                            <div className="input-group  justify-content-center">
                                {/* Email input with icon */}
                                <span className="input-group-text" id="basic-addon1">
                                    <img
                                        src={envelope}
                                        style={{ width: '20px', height: '20px', objectFit: 'contain', verticalAlign: 'middle' }}
                                        alt="email icon"
                                    />
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Input your email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    value={email}
                                    style={{ outline: 'none', boxShadow: 'none' }}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <button type="submit" className="btn btn-primary">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="row">
                    <div className="col-md-3">
                        <h5>Product</h5>
                        <ul className="list-unstyled">
                            <li>Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li>Blog</li>
                            <li>User guides</li>
                            <li>Webinars</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Plans & Pricing</h5>
                        <ul className="list-unstyled">
                            <li>Personal</li>
                            <li>Start up</li>
                            <li>Organization</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <footer class=" text-black py-3 text-center">
                    <p>&copy; 2024 FreePress, Inc All rights reserved.</p>
                </footer>
                <div className="row mt-8 justify-content-center">
                    <div className=' text-md-end'>
                        <span className='p-2'>
                            <a href='https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows' target='blank'>
                                <img src={youtube}
                                    alt='youtube'
                                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}

                                />
                            </a>
                        </span>
                        <span className='p-2'>
                            <a href='https://www.linkedin.com/in/nilesh-mishra-0007011a7/' target='blank'>
                                <img src={linkedin}
                                    alt='linkedin'
                                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}

                                />
                            </a>
                        </span>
                        <span className='p-2'>
                            <a href='https://x.com/Nileshmishra_07' target='blank'>
                                <img src={twitter}
                                    alt='twitter'
                                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}

                                />
                            </a>
                        </span>
                        <span className='p-2'>
                            <a href='https://www.facebook.com/toibusiness/' target='blank'>
                                <img src={facebook}
                                    alt='facebook'
                                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}

                                />
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal for Thank You Message */}
            {showModal && (
                <div className="modal show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thank You!</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Thank you for subscribing to our newsletter. We'll keep you updated!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
