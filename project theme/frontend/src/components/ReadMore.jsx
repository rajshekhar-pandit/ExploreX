// ReadMore.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const descriptions = {
    "1": {
        title: 'Step into the Wild – Explore Hiking Wonders',
        content: `Hiking is a transformative experience that lets you break free from your routine and dive into the serene embrace of the wild. 
You’ll find yourself surrounded by towering trees, chirping birds, and distant mountain peaks calling your name. Whether you’re on a short nature walk or a multi-day trail, hiking helps build resilience, fosters mindfulness, and nurtures your connection with nature. It's an ideal way to unwind, recharge, and embrace adventure in its rawest form.`
    },
    "2": {
        title: 'Campfire Tales and Wilderness Wisdom',
        content: `Campfires have long been the heart of every outdoor journey. They are where stories are born, wisdom is passed down, and bonds are forged. 
Each flicker of flame reflects the shared laughter, timeless anecdotes, and survival tricks exchanged under a blanket of stars. The gentle crackle of the fire and the scent of burning wood awaken a primal peace within us. These moments around the fire leave us with unforgettable memories and deep respect for nature’s simplicity and strength.`
    }
};

function ReadMore() {
    const { id } = useParams();
    const article = descriptions[id];

    // if (!article) return <div className="container py-5"><h2>Article not found</h2></div>;

    return (
        <div className="container py-5">
            {/* <h2>{article.title}</h2> */}
            <h2>Step into the Wild – Explore Hiking Wonders</h2>
            {/* <p style={{ whiteSpace: 'pre-line' }}>{article.content}</p> */}
            <p style={{ whiteSpace: 'pre-line' }}>`Hiking is a transformative experience that lets you break free from your routine and dive into the serene embrace of the wild. 
            You’ll find yourself surrounded by towering trees, chirping birds, and distant mountain peaks calling your name. Whether you’re on a short nature walk or a multi-day trail, hiking helps build resilience, fosters mindfulness, and nurtures your connection with nature. It's an ideal way to
             unwind, recharge, and embrace adventure in its rawest form.</p>
            <Link to="/comments" className="btn btn-primary mt-4">
                View Comments & Rate
            </Link>
        </div>
    );
}

export default ReadMore;
