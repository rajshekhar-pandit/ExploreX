import React from 'react';

function Kayaking() {
    return (
        <div className="container py-5" data-aos="fade-in" data-aos-duration="1000">
            <h1 data-aos="fade-up" data-aos-delay="200">Kayaking Adventure</h1>
            <img
                src="/assets/images/advnt2.jpg"
                alt="Kayaking"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
                data-aos="zoom-in"
                data-aos-delay="400"
            />
            <p data-aos="fade-up" data-aos-delay="600">
                Kayaking is an immersive water-based activity that brings you closer to nature while delivering an adrenaline rush.
                It offers a peaceful yet physically engaging way to explore rivers, lakes, and coastal waters. The rhythmic paddle
                strokes, the sound of water splashing gently against your kayak, and the breathtaking views around you create an
                unforgettable experience.
                <br /><br />
                Whether you're paddling through narrow river passages, taking on ocean tides, or simply floating on a tranquil lake,
                kayaking caters to all skill levels. It's a full-body workout that improves your upper body strength, core stability,
                and cardiovascular fitness while also offering mental clarity.
                <br /><br />
                Kayaking encourages mindfulness, allowing you to disconnect from digital distractions and immerse yourself in the
                rhythm of nature. As you glide silently across the water, you can observe wildlife, explore hidden coves, and find
                serenity in untouched landscapes. Whether done solo for introspection or with a group for fun, kayaking is a perfect
                blend of tranquility and thrill.
            </p>
        </div>
    );
}

export default Kayaking;