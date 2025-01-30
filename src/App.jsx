import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About"
import MainLayout from './layouts/MainLayout';


const Home = () => <MainLayout><h1>Home</h1></MainLayout>;
const NotFound = () => <h1>Not Found</h1>
function App() {
  return(
    <div>
      <Routes>  
        <Route path = '/' element={<Home />} />
        <Route path = '/About' element={<About />} />
        <Route path = '*' element={<NotFound />} />
      </Routes>
    </div>
  )
  
}

export default App
