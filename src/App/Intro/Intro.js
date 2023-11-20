import React from 'react';
import './Intro.css'; // Ensure you have this CSS file

function Introduction() {
    return (
        <div className="introduction-container">
            <div className="introduction-text">
                <h1>Welcome to the first react assignment</h1>
                <p>The assignment teaches us components of react and how to connect the backend with frontend</p>
            </div>
            <div className="introduction-image">
                <img src="" alt="Random Unsplash" />
            </div>
        </div>
    );
}

export default Introduction;
