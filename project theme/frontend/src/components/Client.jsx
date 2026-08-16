import React from 'react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination } from 'swiper/modules'; // Correct import for Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import Blog from './Blog';

function Client() {
    return (
        <>
            <div
                className="pp-client-wrapper mt_bgtempconatainer"
                id="aMFHcFHYEise5Hbv"
                data-aos="fade-in" // AOS attribute for animation
                data-aos-duration="600" // Animation duration in milliseconds
                style={{ display: 'flex', justifyContent: 'flex-start' }} // Align to the left
            >
                <div className="container" style={{ maxWidth: '400px' }}> {/* Smaller box */}
                    <div className="pp-client-heading" data-aos="fade-up" data-aos-duration="600">
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
                            customer feedback
                        </h4>
                        <h2
                            className="pp-heading editableElement"
                            data-kindoff="text"
                            data-og-fg-color="rgb(255, 255, 255)"
                            data-og-bg-color="rgba(0, 0, 0, 0)"
                            data-df-font="Viga, sans-serif"
                            style={{
                                color: "rgb(255, 255, 255)",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                        >
                            Here's what our satisfied clients are saying
                        </h2>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true} // Enable looping
                        modules={[Pagination]} // Add Swiper modules
                        data-aos="fade-up" // AOS attribute for animation
                        data-aos-duration="1500" // Animation duration in milliseconds
                    >
                        {[
                            {
                                name: "Jessica Williams",
                                location: "San Francisco",
                                feedback:
                                    "I had an incredible time on the wildlife safari! The guides were extremely knowledgeable and made the experience educational and fun. Seeing animals in their natural habitat was awe-inspiring. I'll definitely book another trip soon!",
                                img: "assets/images/client1.jpg",
                            },
                            {
                                name: "Lisa Anderson",
                                location: "Chicago",
                                feedback:
                                    "My outdoor adventure with this team was nothing short of amazing! From the moment I signed up, their expertise and enthusiasm were evident. The guided hike through the mountains was breathtaking, and the camping trip was perfectly organized.",
                                img: "assets/images/client2.jpg",
                            },
                            {
                                name: "Sarah Mitchell",
                                location: "Denmark",
                                feedback:
                                    "Our family had the best vacation ever! The team organized a fantastic mix of activities, from kayaking to nature walks. The guides were knowledgeable and friendly, making sure everyone had a great time.",
                                img: "assets/images/client3.jpg", // Corrected path
                            },
                            {
                                name: "Jason Lee",
                                location: "New York",
                                feedback:
                                    "As an avid outdoor enthusiast, I was blown away by the range of activities offered. The rock climbing expedition was a dream come true, and the equipment provided was top-notch.",
                                img: "assets/images/client4.jpg", // Corrected path
                            },
                            {
                                name: "Emily Rodriguez",
                                location: "Miami",
                                feedback:
                                    "This was my first time trying an outdoor adventure, and it exceeded all my expectations. The white-water rafting trip was thrilling, and the safety measures were impeccable.",
                                img: "assets/images/client5.jpg", // Corrected path
                            },
                        ].map((client, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="pp-client-box mt_bgtempconatainer"
                                    data-aos="fade-up" // AOS attribute for animation
                                    data-aos-delay={index * 100} // Delay for staggered animation
                                >
                                    <div className="pp-client-box-inner">
                                        <div className="pp-client-heading">
                                            <div className="pp-client-img">
                                                <img
                                                    src={client.img}
                                                    alt={client.name}
                                                    className="editableElement"
                                                    style={{
                                                        color: "rgb(37, 41, 46)",
                                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                                    }}
                                                />
                                            </div>
                                            <div className="pp-client-name">
                                                <h6
                                                    className="editableElement"
                                                    style={{
                                                        color: "rgb(255, 255, 255)",
                                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                                    }}
                                                >
                                                    {client.name}
                                                </h6>
                                                <p
                                                    className="editableElement"
                                                    style={{
                                                        color: "rgb(233, 62, 23)",
                                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                                    }}
                                                >
                                                    {client.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pp-client-text mt_bgtempconatainer">
                                            <p
                                                className="pp-paragraph editableElement"
                                                style={{
                                                    color: "rgb(255, 255, 255)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                                }}
                                            >
                                                {client.feedback}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Blog data-aos="fade-up" data-aos-duration="600" /> {/* AOS applied to Blog */}
        </>
    );
}

export default Client;