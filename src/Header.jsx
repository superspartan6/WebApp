import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <div className="logo">
          <h1>Caleb and Ava</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/message-us">Leave us a Message</a></li>
            <li><a href="/registries">Registries</a></li>
            <li><a href="/gallery">Gallery</a></li>
            
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;


  