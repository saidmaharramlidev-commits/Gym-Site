import './App.css'
import "../src/css/hero.css"
import "./animations/animation.css"
import "./css/middle.css"
import "./css/plans.css"
import "./css/faq.css"
import "./css/footer.css"
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import "./css/contact.css"
import Contact from './components/Contact'
import Home from './components/Home'





function App() {

  const navigate = useNavigate()
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    navigate("/")

  }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
