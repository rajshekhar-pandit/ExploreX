import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

function Adventure() {
    return (
        <>
            <div
                className="pp-advnt-idea-wrapper mt_bgtempconatainer"
                id="adventure"
                style={{}}
                data-aos="fade-up" // AOS attribute for animation
                data-aos-duration="600" // Animation duration in milliseconds
            >
                <div className="container">
                    <div
                        className="pp-advnt-idea-heading"
                        data-aos="fade-down" // AOS attribute for animation
                        data-aos-duration="600" // Animation duration in milliseconds
                    >
                        <h4
                            className="pp-top-heading editableElement"
                            data-kindoff="text"
                            data-og-fg-color="rgb(233, 62, 23)"
                            data-og-bg-color="rgba(0, 0, 0, 0)"
                            data-df-font="Viga, sans-serif"
                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                            style={{
                                color: "rgb(233, 62, 23)",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                        >
                            take yourself
                        </h4>
                        <h1
                            className="pp-heading editableElement"
                            data-kindoff="text"
                            data-og-fg-color="rgb(7, 56, 66)"
                            data-og-bg-color="rgba(0, 0, 0, 0)"
                            data-df-font="Viga, sans-serif"
                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                            style={{ color: "rgb(7, 56, 66)", backgroundColor: "rgba(0, 0, 0, 0)" }}
                        >
                            adventures ideas
                        </h1>
                    </div>
                    <div className="row gy-4">
                        {[
                            { title: "zip lines", description: "Add some adrenalin to your travel senses by zipline travel.", img: "assets/images/advnt1.jpg", link: "/zip-lines" },
                            { title: "kayaking", description: "Kayaking makes takes thrill to the next level.", img: "assets/images/advnt2.jpg", link: "/kayaking" },
                            { title: "Bungee Jump", description: "Bungee jumps is one of the most exhilarating adventure.", img: "assets/images/advnt3.jpg", link: "/bungee-jump" },
                            { title: "Canoeing", description: "Just sail in the calm waters of the sea with complete safety.", img: "assets/images/advnt4.jpg", link: "/canoeing" }
                        ].map((adventure, index) => (
                            <div
                                className="col-lg-3 col-md-6"
                                key={index}
                                data-aos="fade-up" // AOS attribute for animation
                                data-aos-delay={index * 100} // Delay for staggered animation
                            >
                                <div className="pp-advt-main">
                                    <div className="pp-advnt-img">
                                        <img
                                            src={adventure.img}
                                            alt=""
                                            className="editableElement"
                                            data-kindoff="image"
                                            data-og-fg-color="rgb(37, 41, 46)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Ubuntu, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(37, 41, 46)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        />
                                    </div>
                                    <div className="pp-advnt-content">
                                        <h4
                                            className="editableElement"
                                            data-kindoff="text"
                                            data-og-fg-color="rgb(34, 34, 34)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Viga, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                        >
                                            {adventure.title}
                                        </h4>
                                        <p
                                            className="editableElement"
                                            data-kindoff="text"
                                            data-og-fg-color="rgb(140, 145, 157)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Ubuntu, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(140, 145, 157)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            {adventure.description}
                                        </p>
                                        <Link
                                            to={adventure.link} // Link to the respective adventure page
                                            className="pp-btn editableElement"
                                            data-kindoff="text"
                                            data-og-fg-color="rgb(255, 255, 255)"
                                            data-og-bg-color="rgb(233, 62, 23)"
                                            data-df-font="Ubuntu, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgb(233, 62, 23)"
                                            }}
                                        >
                                            view adventures
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Product />
        </>
    );
}

export default Adventure;