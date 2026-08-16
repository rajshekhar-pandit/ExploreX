import React from 'react';

function Canoeing() {
    return (
        <div className="container py-5" data-aos="fade-in" data-aos-duration="600">
            <h1 data-aos="fade-up" data-aos-delay="100">Canoeing Adventure</h1>
            <img
                src="/assets/images/advnt4.jpg"
                alt="Canoeing"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
                data-aos="zoom-in"
                data-aos-delay="100"
            />
            <p data-aos="fade-up" data-aos-delay="100">
                Canoeing is a serene and scenic way to explore waterways, offering a perfect balance of relaxation and adventure. Unlike fast-paced water sports, canoeing allows you to slow down, absorb your surroundings, and move in harmony with the flow of nature. It's ideal for exploring tranquil lakes, winding rivers, and calm coastal bays.
                <br /><br />
                With each stroke of the paddle, you can maneuver effortlessly through lush landscapes, glide over crystal-clear waters, and encounter wildlife along the way. Canoeing promotes teamwork when done in pairs or groups, making it a great bonding experience with friends or family.
                <br /><br />
                The quiet movement of a canoe lets you become part of the natural world, making it perfect for bird watching, photography, or simply enjoying the peaceful sounds of water and forest. It's a low-impact activity suitable for all ages and skill levels, offering a refreshing escape from the hustle of modern life and an opportunity to reconnect with the great outdoors.
            </p>
        </div>
    );
}

export default Canoeing;