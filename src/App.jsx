import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Layouts/Home.jsx';
import Gallery from './Layouts/Gallery.jsx';
import MessageUs from './Layouts/MessageUs.jsx';
import Registries from './Layouts/Registries.jsx';
import OurStory from './Layouts/OurStory.jsx';

function App() {
  return (
    <div className="appPage">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/message-us" element={<MessageUs />} />
          <Route path="/registries" element={<Registries />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
