import { useState } from 'react'
import Navbar from './sections/Navbar'

function App() {

  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <section id="home" className="w-screen min-h-screen bg-gradient-to-b to-left from-[#3d7eaa] to-[#ffe47a] ">
      </section>
      <section id="about" className="w-screen min-h-screen bg-gradient-to-l from-[#3d7eaa] to-[#ffe47a] ">
      </section>
    </div>
  )
}

export default App
