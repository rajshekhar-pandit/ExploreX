import React from 'react';

function BungeeJump() {
  return (
    <div className="container py-5" data-aos="fade-in" data-aos-duration="600">
      <h1 data-aos="fade-up" data-aos-delay="100">Bungee Jumping Adventure</h1>
      <img
        src="/assets/images/advnt3.jpg"
        alt="Bungee Jump"
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <p data-aos="fade-up" data-aos-delay="100">
        Bungee jumping is one of the most daring and exhilarating adventure sports on the planet. It pushes you to confront your fears, embrace the unknown, and leap into the void with only a strong cord to catch you. Standing at the edge of a platform high above the ground, the moments before the jump are filled with anticipation, excitement, and a rush of adrenaline.
        <br /><br />
        Once you take the plunge, the feeling is indescribable—an intense mix of freedom, fear, and thrill as you descend at high speed, only to be pulled back in a gravity-defying rebound. It's a powerful emotional and physical release that few experiences can match.
        <br /><br />
        Whether you're jumping from a bridge, a cliffside, or a dedicated bungee tower, the setting adds to the intensity. Bungee jumping builds confidence and leaves you with a newfound sense of bravery. It's a bucket list experience that challenges limits, redefines courage, and provides an unforgettable story to tell for life.
      </p>
    </div>
  );
}

export default BungeeJump;