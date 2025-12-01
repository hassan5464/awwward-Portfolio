import Navbar from './sections/Navbar'
import Home from './sections/Home'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'
import About from './sections/About'

function App() {

  return (

    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Home/>
      <ServiceSummary/>
      <Services />
      <About />
      <section id="hii" className="w-screen min-h-screen bg-gradient-to-l from-[#3d7eaa] to-[#ffe47a] ">
      </section>
    </ReactLenis>
  )
}

export default App
