import React from 'react';

function ZipLines() {
    return (
        <div className="container py-5" data-aos="fade-in" data-aos-duration="1000">
            <h1 data-aos="fade-up" data-aos-delay="200">Zipline Adventure</h1>
            <img
                src="/assets/images/advnt1.jpg"
                alt="Zipline"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
                data-aos="zoom-in"
                data-aos-delay="400"
            />
            <p data-aos="fade-up" data-aos-delay="600">
                Ziplining is the ultimate adventure for thrill-seekers looking to soar through the skies and experience nature from an entirely new perspective. Suspended by a harness and cable, you zoom across treetops, canyons, rivers, or valleys with breathtaking speed and excitement. Each launch from a platform provides an adrenaline surge as you embrace the feeling of flying.
                <br /><br />
                Not only does ziplining offer a rush of excitement, but it also immerses you in stunning natural landscapes that would be impossible to access by foot. The panoramic views, the wind rushing past your face, and the height-induced excitement combine to create an unforgettable moment of pure exhilaration.
                <br /><br />
                Safety is always a priority in zipline adventures, and modern equipment and expert guides ensure a secure yet liberating experience. Whether in a tropical rainforest, over a mountainous cliffside, or in a thrilling urban setup, ziplining is a one-of-a-kind adventure that leaves you feeling alive, empowered, and connected to nature in a daring way.
            </p>
        </div>
    );
}

export default ZipLines;