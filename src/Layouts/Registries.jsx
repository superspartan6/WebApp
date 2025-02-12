import React from 'react';
import './Registries.css';

function Registries() {
  return (
    <div className="registries-container">
      <h1>Gifts Are Not Expected, But Very Appreciated!</h1>
      <p>Choose the registry option that’s most convenient for you.</p>
      <div className="registry-items">
        <div className="registry-item">
          <h2>Venmo</h2>
          <p>
            For those who prefer digital gifts, feel free to send your contribution via Venmo.
          </p>
          <a
            href="https://venmo.com/CalebZberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Venmo Registry
          </a>
        </div>
        <div className="registry-item">
          <h2>Amazon</h2>
          <p>
            If you’d like to choose a physical gift, check out our Amazon wedding registry.
          </p>
          <a
            href="https://www.amazon.com/wedding-registry/yourregistry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Amazon Registry
          </a>
        </div>
        <div className="registry-item">
          <h2>Other Registries</h2>
          <p>
            I'll add more registry options later.
          </p>
          <a
            href="example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit other registries
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registries;
