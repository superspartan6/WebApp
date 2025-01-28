import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';


const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
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
