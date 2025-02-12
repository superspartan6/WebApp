import React, { useState } from 'react';
import './MessageUs.css';

function MessageUs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name, 'Message:', message);
    setSubmitted(true);
  };

  return (
    <div className="message-us-container">
      <h1>Leave Us A Message!</h1>
      <p>Feel free to write anything you'd like. These messages will be read after our wedding.</p>
      {submitted ? (
        <div className="thank-you">
          <p>Thank you for your message, {name}!</p>
        </div>
      ) : (
        <form className="message-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required 
              rows="14"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
}

export default MessageUs;
