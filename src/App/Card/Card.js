import React from 'react';
import './Card.css'; // Make sure to create a corresponding CSS file

function Card({ title, content }) {
    return (
        <div className="card">
            <h3> First react JS assignment </h3>
            <p>{content} </p>
        </div>
    );
}

export default Card;
