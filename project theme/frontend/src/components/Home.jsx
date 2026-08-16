import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import About from './About';

function Home() {



  return (
    <>
      <div
        className="pp-banner-wrapper mt_bgtempconatainer"
        id="home"
        data-aos="fade-in" // AOS attribute for animation
        data-aos-duration="600" // Animation duration in milliseconds
      >
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-12">
              <div
                className="pp-banner-left"
                data-aos="fade-up" // AOS attribute for animation
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
                  data-aos="fade-right" // AOS attribute for animation
                  data-aos-delay="200" // Delay before animation starts
                >
                  connecting with nature
                </h4>
                <h1
                  className="editableElement"
                  data-kindoff="text"
                  data-og-fg-color="rgb(255, 255, 255)"
                  data-og-bg-color="rgba(0, 0, 0, 0)"
                  data-df-font="Viga, sans-serif"
                  onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                  onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgba(0, 0, 0, 0)"
                  }}
                  data-aos="fade-left" // AOS attribute for animation
                  data-aos-delay="400" // Delay before animation starts
                >
                  Turning Ordinary Days into Extraordinary Adventures
                </h1>
                <p
                  className="editableElement"
                  data-kindoff="text"
                  data-og-fg-color="rgb(255, 255, 255)"
                  data-og-bg-color="rgba(0, 0, 0, 0)"
                  data-df-font="Ubuntu, sans-serif"
                  onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                  onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgba(0, 0, 0, 0)"
                  }}
                  id="EFZWX9la5eharmHp"
                  data-aos="fade-up" // AOS attribute for animation
                  data-aos-delay="100" // Delay before animation starts
                >
                  Unleash the thrill of the outdoors! Discover serene hikes,
                  exhilarating climbs, and peaceful camping trips that transform your
                  everyday into the extraordinary. Explore, experience, and embrace
                  nature with us.
                </p>
                <div
                  className="pp-banner-btn"
                  data-aos="zoom-in" // AOS attribute for animation
                  data-aos-delay="800" // Delay before animation starts
                >
                  <Link
                    to="adventure" // Link to the Adventures section
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
          </div>
        </div>
      </div>

      

      <About data-aos="fade-up" data-aos-duration="600" /> {/* AOS applied to About */}
    </>
  );
}

export default Home;