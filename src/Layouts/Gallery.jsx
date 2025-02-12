import React from 'react';
import './Gallery.css';

function Gallery() {
  // Create an array of placeholder image URLs
  const placeholders = Array.from({ length: 12 }, (_, i) =>
    `https://via.placeholder.com/300?text=Image+${i + 1}`
  );

  return (
    <div className="gallery-container">
      <h1>Welcome to Our Gallery!</h1>
      <p>Images together will go here. (These are placeholder images for now.)</p>
      <div className="gallery-grid">
        {placeholders.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Placeholder ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
