import React from 'react';
import Adventure from './Adventure';

function About() {
    return (
        <>
            <div
                className="pp-about-wrapper mt_bgtempconatainer"
                id="about"
                data-aos="fade-in"
                data-aos-duration="600"
            >
                <div className="container">
                    <div
                        className="pp-about-botm-parent"
                        data-aos="fade-up"
                        data-aos-duration="600"
                    >
                        <div className="row gy-4 align-items-center">
                            <div
                                className="col-lg-6 col-md-12"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <div className="pp-about-right">
                                    <h4
                                        className="pp-top-heading editableElement"
                                        style={{
                                            color: "rgb(233, 62, 23)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                    >
                                        Your Vision, Our Expertise
                                    </h4>
                                    <h2
                                        className="pp-heading editableElement"
                                        style={{
                                            color: "rgb(7, 56, 66)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                        data-aos="fade-left"
                                        data-aos-delay="100"
                                    >
                                        provide all your outdoor needs
                                    </h2>
                                    <p
                                        className="pp-paragraph editableElement"
                                        style={{
                                            color: "rgb(34, 34, 34)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        From hiking and camping to kayaking and rock climbing, we've got
                                        you covered. Our expert guides and top-notch gear ensure every
                                        adventure is safe, fun, and unforgettable. Let us help you turn
                                        your outdoor dreams into reality.
                                    </p>
                                    <img
                                        src="assets/images/s1.jpg"
                                        alt=""
                                        className="editableElement"
                                        style={{
                                            color: "rgb(33, 37, 41)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                        data-aos="zoom-in"
                                        data-aos-delay="100"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-6 col-md-12"
                                data-aos="fade-left"
                                data-aos-delay="100 "
                            >
                                <div className="pp-about-left-img">
                                    <img
                                        src="assets/images/about.jpg"
                                        alt=""
                                        className="editableElement"
                                        style={{
                                            color: "rgb(33, 37, 41)",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }}
                                    />
                                </div>
                                <div className="pp-abt-content">
                                    <div
                                        className="pp-abt-text-flex"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <h4
                                            className="editableElement"
                                            style={{
                                                color: "rgb(34, 34, 34)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            hike boots
                                        </h4>
                                        <p
                                            className="editableElement"
                                            style={{
                                                color: "rgb(140, 145, 157)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            boots trekking
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <Adventure data-aos="fade-up" data-aos-duration="600" />
        </>
    );
}

export default About;