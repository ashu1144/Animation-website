import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Marque from './Components/Marque'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { useState, useEffect } from "react";
function App() {
  
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen '>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marque></Marque>
      <About></About>
      <Featured></Featured>
      <Footer></Footer>
    </div>

  )
}

export default App
