import React from 'react';

function Contact() {
    return (
        <section className="contact-wrapper py-5 mt_bgtempconatainer" data-aos="fade-in" data-aos-duration="600">
            <div className="container">
                {/* Section Heading */}
                <div className="row mb-5 text-center">
                    <div className="col-lg-12">
                        <h4 className="text-danger" style={{ fontFamily: 'Viga, sans-serif' }}>
                            Get 24/7 Support
                        </h4>
                        <h2 className="text-dark" style={{ fontFamily: 'Viga, sans-serif' }}>
                            Contact Us
                        </h2>
                    </div>
                </div>

                {/* Contact Form and Info */}
                <div className="row gy-5">
                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <form className="p-4 border rounded shadow-sm bg-white">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Your Name" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Your Email" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" placeholder="Phone Number" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Subject" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        placeholder="Write your message here..."
                                        rows="6"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-12 text-end">
                                    <button type="button" className="btn btn-danger px-4">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4">
                        <div className="p-4 border rounded shadow-sm bg-white">
                            <h5><i className="fas fa-map-marker-alt me-2 text-danger"></i>Address</h5>
                            <p>34/8, East Hukupara, Gifirtok, Sadan</p>

                            <h5><i className="far fa-clock me-2 text-danger"></i>Hours</h5>
                            <p>Mon-Fri: 8 AM - 9 PM <br /> Sat-Sun: 10 AM - 8 PM</p>

                            <h5><i className="fas fa-phone me-2 text-danger"></i>Contact</h5>
                            <p>+00 111 222 3333 <br /> support@fruitkha.com</p>
                        </div>
                    </div>
                </div>

                {/* Location Map */}
                <div className="row mt-5">
                    <div className="col-lg-12 text-center">
                        <p className="text-muted"><i className="fas fa-map-marker-alt text-danger"></i> Find Our Location</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                                style={{ border: 0 }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
