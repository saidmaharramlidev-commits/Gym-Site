import './App.css'
import Hero from './components/Hero'
import "../src/css/hero.css"
import "./animations/animation.css"
import "./css/middle.css"
import Middle from './components/Middle'
import Plans from './components/Plans'
import "./css/plans.css"
import About from './components/About'




function App() {

  return (
    <>
      <Hero />
      <Middle />
      <Plans />
      <About />
    </>
  )
}

export default App
