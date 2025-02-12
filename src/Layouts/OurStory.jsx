import React from 'react';
import './OurStory.css';

function OurStory() {
  return (
    <div className="our-story-container">
      <h1>Our Story</h1>
      <p>Below are some prompts to help guide our story. (Fill in the details later.)</p>
      <div className="story-section">
        <h2>We Met</h2>
        <p>[Insert details about how we met]</p>
      </div>
      <div className="story-section">
        <h2>Our First Date</h2>
        <p>[Insert details about our first date]</p>
      </div>
      <div className="story-section">
        <h2>The Proposal</h2>
        <p>[Insert details about the proposal]</p>
      </div>
      <div className="story-section">
        <h2>Looking Forward</h2>
        <p>[Insert details about our future together]</p>
      </div>
    </div>
  );
}

export default OurStory;
