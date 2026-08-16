import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <>
            <div
                className="pp-blog-wrapper mt_bgtempconatainer"
                id="blog"
                style={{}}
                data-aos="fade-in" // AOS attribute for animation
                data-aos-duration="600" // Animation duration in milliseconds
            >
                <div className="container" data-aos="fade-up" data-aos-duration="600">
                    <div
                        className="pp-blog-heading"
                        data-aos="fade-up" // AOS attribute for animation
                        data-aos-duration="600"
                    >
                        <h4
                            className="pp-top-heading editableElement"
                            data-kindoff="text"
                            data-og-fg-color="rgb(233, 62, 23)"
                            data-og-bg-color="rgba(0, 0, 0, 0)"
                            data-df-font="Viga, sans-serif"
                            style={{
                                color: "rgb(233, 62, 23)",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                        >
                            news and articles
                        </h4>
                        <h2
                            className="pp-heading editableElement"
                            data-kindoff="text"
                            data-og-fg-color="rgb(7, 56, 66)"
                            data-og-bg-color="rgba(0, 0, 0, 0)"
                            data-df-font="Viga, sans-serif"
                            style={{
                                color: "rgb(7, 56, 66)",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                        >
                            Directly from the latest news and articles
                        </h2>
                    </div>
                    <div className="row gy-4">
                        <div
                            className="col-lg-6 col-md-12 col-12"
                            data-aos="fade-right" // AOS attribute for animation
                            data-aos-duration="600"
                        >
                            <div className="pp-blog-box pp-left-blog">
                                <div
                                    className="pp-blog-inner mt_bgtempconatainer"
                                    data-aos="zoom-in" // AOS attribute for animation
                                    data-aos-duration="600"
                                >
                                    <div className="pp-blog-img">
                                        <img
                                            src="assets/images/b1.jpg"
                                            alt=""
                                            className="editableElement"
                                            data-kindoff="image"
                                            data-og-fg-color="rgb(35, 39, 44)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Ubuntu, sans-serif"
                                            style={{
                                                color: "rgb(35, 39, 44)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="pp-blog-content mt_bgtempconatainer"
                                        data-aos="fade-up" // AOS attribute for animation
                                        data-aos-duration="600"
                                    >
                                        <div className="pp-blog-footer">
                                            <div className="pp-blog-footer-info">
                                                <img
                                                    src="assets/images/comment.png"
                                                    alt=""
                                                    className="editableElement"
                                                />
                                                <Link
                                                    to="/comments"
                                                    className="editableElement"
                                                    style={{
                                                        color: "rgb(233, 62, 23)",
                                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                                    }}
                                                >
                                                    Comments
                                                </Link>
                                            </div>
                                        </div>
                                        <h4
                                            className="editableElement"
                                            style={{
                                                color: "rgb(34, 34, 34)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            Step into the Wild Explore Hiking Wonders
                                        </h4>
                                        <p
                                            className="pp-paragraph editableElement"
                                            style={{
                                                color: "rgb(34, 34, 34)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                            id="XQqMPwbICMX06vdS"
                                        >
                                            Discover hidden trails, majestic peaks, and serene valleys as
                                            you lace up your boots and step into nature's embrace.
                                        </p>
                                        <div className="pp-more">
                                            <Link
                                                to="/readmore"
                                                className="pp-readmore editableElement"
                                                style={{
                                                    color: "rgb(233, 62, 23)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                                }}
                                            >
                                                read more
                                            </Link>
                                            <img
                                                src="assets/images/arrow.png"
                                                alt=""
                                                className="editableElement"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 col-12"
                            data-aos="fade-left" // AOS attribute for animation
                            data-aos-duration="600"
                        >
                            <div className="pp-blog-box pp-right-blog">
                                <div
                                    className="pp-blog-inner mt_bgtempconatainer"
                                    data-aos="zoom-in" // AOS attribute for animation
                                    data-aos-duration="600"
                                >
                                    <div className="pp-blog-img">
                                        <img
                                            src="assets/images/b2.jpg"
                                            alt=""
                                            className="editableElement"
                                            data-kindoff="image"
                                            data-og-fg-color="rgb(35, 39, 44)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Ubuntu, sans-serif"
                                            style={{
                                                color: "rgb(35, 39, 44)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="pp-blog-content mt_bgtempconatainer"
                                        data-aos="fade-up" // AOS attribute for animation
                                        data-aos-duration="600"
                                    >
                                        <div className="pp-blog-footer">
                                            <div className="pp-blog-footer-info">
                                                <img
                                                    src="assets/images/comment.png"
                                                    alt=""
                                                    className="editableElement"
                                                />
                                                <Link
                                                    to="/comments"
                                                    className="editableElement"
                                                    style={{
                                                        color: "rgb(233, 62, 23)",
                                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                                    }}
                                                >
                                                    Comments
                                                </Link>
                                            </div>
                                        </div>
                                        <h4
                                            className="editableElement"
                                            style={{
                                                color: "rgb(34, 34, 34)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            Campfire Tales and Wilderness Wisdom
                                        </h4>
                                        <p
                                            className="pp-paragraph editableElement"
                                            style={{
                                                color: "rgb(34, 34, 34)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                            id="7IfGcoZWqIp3AO9u"
                                        >
                                            Immerse yourself in the rich tapestry of outdoor narratives and
                                            timeless wisdom shared around the campfire.
                                        </p>
                                        <div className="pp-more">
                                            <Link
                                                to="/readmore"
                                                className="pp-readmore editableElement"
                                                style={{
                                                    color: "rgb(233, 62, 23)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                                }}
                                            >
                                                read more
                                            </Link>
                                            <img
                                                src="assets/images/arrow.png"
                                                alt=""
                                                className="editableElement"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="pp-partner-wrapper mt_bgtempconatainer" id="58mW9ZOHOSiGstoR">
                <div className="container">
                    <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
                        <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-db883799a74ffb63"
                            aria-live="polite"
                            style={{
                                transform: "translate3d(-1166px, 0px, 0px)",
                                transitionDuration: "0ms"
                            }}
                        >
                            <div
                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p2.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p3.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p4.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(35, 39, 44)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                    style={{
                                        color: "rgb(35, 39, 44)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={4}
                                role="group"
                                aria-label="5 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p5.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={5}
                                role="group"
                                aria-label="6 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p3.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                data-swiper-slide-index={6}
                                role="group"
                                aria-label="7 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p1.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-active"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p1.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p2.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p3.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                    style={{
                                        color: "rgb(33, 37, 41)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                />
                            </div>
                            <div
                                className="swiper-slide"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p4.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(35, 39, 44)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                    style={{
                                        color: "rgb(35, 39, 44)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                />
                            </div>
                            <div
                                className="swiper-slide"
                                data-swiper-slide-index={4}
                                role="group"
                                aria-label="5 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p5.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide"
                                data-swiper-slide-index={5}
                                role="group"
                                aria-label="6 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p3.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate-prev"
                                data-swiper-slide-index={6}
                                role="group"
                                aria-label="7 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p1.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p1.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p2.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p3.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p4.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(35, 39, 44)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                    style={{
                                        color: "rgb(35, 39, 44)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={4}
                                role="group"
                                aria-label="5 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p5.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                            <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={5}
                                role="group"
                                aria-label="6 / 7"
                                style={{ width: "164.333px", marginRight: 30 }}
                            >
                                <img
                                    src="assets/images/p3.png"
                                    alt=""
                                    className="editableElement"
                                    data-kindoff="image"
                                    data-og-fg-color="rgb(33, 37, 41)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Ubuntu, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                />
                            </div>
                        </div>
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Blog