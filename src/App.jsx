import Navbar from './sections/Navbar'
import Home from './sections/Home'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'

function App() {

  return (

    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Home/>
      <ServiceSummary/>
      <Services />
      <section id="home" className="w-screen min-h-screen bg-gradient-to-b to-left from-[#3d7eaa] to-[#ffe47a] ">
      </section>
      <section id="about" className="w-screen min-h-screen bg-gradient-to-l from-[#3d7eaa] to-[#ffe47a] ">
      </section>
    </ReactLenis>
  )
}

export default App
