import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="home-banner">
        <img
          src="https://via.placeholder.com/1200x400?text=Banner+Image+of+Caleb+and+Ava"
          alt="Banner of Caleb and Ava"
          className="banner-image"
        />
      </section>
      <section className="home-content">
        <h1>Caleb and Ava's Wedding</h1>
        <p>
          Welcome to our wedding website! Here you'll find all the details about our big day and our journey together.
        </p>
      </section>
    </div>
  );
}

export default Home;
