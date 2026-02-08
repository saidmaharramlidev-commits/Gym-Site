import './App.css'
import Hero from './components/Hero'
import "../src/css/hero.css"
import "./animations/animation.css"
import "./css/middle.css"
import Middle from './components/Middle'
import Plans from './components/Plans'
import "./css/plans.css"
import About from './components/About'
import Faq from './components/Faq'
import "./css/faq.css"
import "./css/footer.css"
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer'






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
      <Hero />
      <Middle />
      <Plans />
      <About />
      <Faq />
      <Footer />
    </>
  )
}

export default App
