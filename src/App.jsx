import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About"
import MainLayout from './layouts/MainLayout';

const Home = () => (
  <MainLayout title="Home | MyPage">
    <h1>Home</h1>
  </MainLayout>
);

const NotFound = () => (
  <MainLayout title="404 Not Found">
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </MainLayout>
);

function App() {
  return (
    <div>
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
