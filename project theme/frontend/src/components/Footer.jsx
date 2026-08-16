import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div
                className="pp-footer-wrapper mt_bgtempconatainer"
                id="contact"
                data-aos="fade-in" // AOS attribute for animation
                data-aos-duration="600" // Animation duration in milliseconds
            >
                <div className="container" data-aos="fade-up" data-aos-duration="1200">
                    <div className="row">
                        {/* First Column */}
                        <div
                            className="col-lg-4 col-md-6 col-12"
                            data-aos="fade-right" // AOS attribute for animation
                            data-aos-delay="200" // Delay before animation starts
                        >
                            <div className="pp-footer-first">
                                <div className="pp-footer-logo">
                                    <Link to="/" className="editableElement">
                                        <img
                                            src="assets/images/logo.png"
                                            alt="Logo"
                                            className="editableElement"
                                            style={{
                                                color: "rgb(13, 110, 253)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                            data-aos="zoom-in" // AOS attribute for animation
                                            data-aos-delay="400" // Delay before animation starts
                                        />
                                    </Link>
                                </div>
                                <div className="pp-footer-text">
                                    <p
                                        className="pp-paragraph editableElement"
                                        style={{
                                            color: "rgb(255, 255, 255)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                        data-aos="fade-up" // AOS attribute for animation
                                        data-aos-delay="600" // Delay before animation starts
                                    >
                                        Join our community and never miss an adventure. Follow us on
                                        social media for the latest updates, tips, and exclusive content.
                                        Share your experiences and connect with fellow outdoor
                                        enthusiasts!
                                    </p>
                                </div>
                                <div className="pp-footer-icon">
                                    <ul>
                                        <li data-aos="fade-right" data-aos-delay="800">
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <img src="assets/images/fb.png" alt="Facebook" />
                                            </a>
                                        </li>
                                        <li data-aos="fade-right" data-aos-delay="600">
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <img src="assets/images/tw.png" alt="Twitter" />
                                            </a>
                                        </li>
                                        <li data-aos="fade-right" data-aos-delay="1200">
                                            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                                                <img src="assets/images/gp.png" alt="Google Plus" />
                                            </a>
                                        </li>
                                        <li data-aos="fade-right" data-aos-delay="1400">
                                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                                <img src="assets/images/wa.png" alt="WhatsApp" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div
                            className="col-lg-2 col-md-6 col-12"
                            data-aos="fade-up" // AOS attribute for animation
                            data-aos-delay="200" // Delay before animation starts
                        >
                            <div className="pp-footer-link-parent">
                                <h2
                                    className="pp-heading editableElement"
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                    data-aos="fade-left" // AOS attribute for animation
                                    data-aos-delay="400" // Delay before animation starts
                                >
                                    quick links
                                </h2>
                                <ul>
                                    <li data-aos="fade-up" data-aos-delay="600">
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="600">
                                        <Link to="/adventure">Adventure</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="600">
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="1200">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="1400">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div
                            className="col-lg-3 col-md-6 col-12"
                            data-aos="fade-up" // AOS attribute for animation
                            data-aos-delay="200" // Delay before animation starts
                        >
                            <div className="pp-footer-link-parent">
                                <h2
                                    className="pp-heading editableElement"
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                    data-aos="fade-left" // AOS attribute for animation
                                    data-aos-delay="400" // Delay before animation starts
                                >
                                    activities
                                </h2>
                                <ul>
                                    <li data-aos="fade-up" data-aos-delay="600">
                                        <Link to="/kayaking">Kayaking</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="800">
                                        <Link to="/bungee-jump">Bungee Jump</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="600">
                                        <Link to="/zip-lines">Zip Lines</Link>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="1200">
                                        <Link to="/canoeing">Canoeing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Fourth Column */}
                        <div
                            className="col-lg-3 col-md-6 col-12"
                            data-aos="fade-left" // AOS attribute for animation
                            data-aos-delay="200" // Delay before animation starts
                        >
                            <div className="pp-footer-last-parent">
                                <h2
                                    className="pp-heading editableElement"
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                    data-aos="fade-up" // AOS attribute for animation
                                    data-aos-delay="400" // Delay before animation starts
                                >
                                    subscribe now
                                </h2>
                                <form>
                                    <div
                                        className="mt_popup_form editableElement"
                                        style={{
                                            color: "rgb(33, 37, 41)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                        data-aos="fade-up" // AOS attribute for animation
                                        data-aos-delay="600" // Delay before animation starts
                                    >
                                        <div className="mt_popup_form_container">
                                            <div
                                                className="mt_form_input"
                                                id="pp_name"
                                                style={{ marginBottom: "20px" }} // Added margin-bottom
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Name Here..."
                                                    name="pp_name"
                                                    className="theme_input data-default"
                                                    data-aos="fade-right" // AOS attribute for animation
                                                    data-aos-delay="800" // Delay before animation starts
                                                />
                                            </div>
                                            <div
                                                className="mt_form_input"
                                                id="pp_email"
                                                style={{ marginBottom: "20px" }} // Added margin-bottom
                                            >
                                                <input
                                                    type="email"
                                                    name="pp_email"
                                                    placeholder="Enter Your Email Here..."
                                                    className="theme_input data-default"
                                                    data-aos="fade-left" // AOS attribute for animation
                                                    data-aos-delay="600" // Delay before animation starts
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="pp-btn mtdefaultformbtn"
                                            data-aos="zoom-in" // AOS attribute for animation
                                            data-aos-delay="1200" // Delay before animation starts
                                        >
                                            subscribe now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;