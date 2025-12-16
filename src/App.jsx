import Navbar from './sections/Navbar'
import Home from './sections/Home'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'
import About from './sections/About'
import Works from './sections/Works'
import ContactSummarysec from './sections/ContactSummarysec'
import Contact from './sections/Contact'

function App() {

  return (

    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Home/>
      <ServiceSummary/>
      <Services />
      <About />
      <Works/>
      <ContactSummarysec />
      <Contact />
    </ReactLenis>
  )
}

export default App
