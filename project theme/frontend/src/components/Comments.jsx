import React, { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([
        { name: 'Alex', text: 'Amazing content!', rating: 5 },
        { name: 'Jordan', text: 'Loved the storytelling.', rating: 4 },
        { name: 'Sam', text: 'Very inspiring.', rating: 3 }
    ]);

    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(5);

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        setComments([...comments, { name: 'Guest', text: newComment, rating: newRating }]);
        setNewComment('');
        setNewRating(5);
    };

    return (
        <div className="container py-5" data-aos="fade-in" data-aos-duration="1000">
            <h2 data-aos="fade-up" data-aos-duration="1200">User Comments & Ratings</h2>
            {comments.map((c, i) => (
                <div
                    key={i}
                    className="border p-3 my-2 rounded"
                    data-aos="fade-up"
                    data-aos-delay={i * 100} // Staggered animation for each comment
                >
                    <strong>{c.name}</strong>
                    <p>{c.text}</p>
                    <div>{'⭐'.repeat(c.rating)}{'☆'.repeat(5 - c.rating)}</div>
                </div>
            ))}

            <h4 className="mt-4" data-aos="fade-up" data-aos-duration="1200">Leave Your Comment</h4>
            <textarea
                className="form-control"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows="3"
                data-aos="fade-up"
                data-aos-duration="1400"
            />
            <div className="mt-2" data-aos="fade-up" data-aos-duration="1600">
                <label htmlFor="rating">Rating: </label>
                <select
                    id="rating"
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="form-select w-auto d-inline-block mx-2"
                >
                    {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n} Star{n > 1 && 's'}</option>
                    ))}
                </select>
                <button onClick={handleAddComment} className="btn btn-success">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Comments;