import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import  { useRef } from 'react'
import AnimatedTextLines from './AnimatedTextLines';

const AnimatedHeaderSection = () => {

    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = `I help growing brands and startups gain an 
  unfair advantage through premium 
results driven webs/apps`;
  
useGSAP(()=>{
  const tl = gsap.timeline();

  tl.from(contextRef.current,{
    y: "50vh",
    duration:1,
    ease: "circ.out"
  })

  tl.from(headerRef.current,{
    opacity: 0,
    y: 200,
    duration:1,
    ease: "circ.out"
  },"<0.2")
})

  return (
    <div ref={contextRef} >
        <div style={{clipPath:"polygon(0 0,100% 0, 100% 100% , 0 100%)"}}>
          <div ref={headerRef} className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
            <p className="text-sm font-light uppercase px-10 text-black">
              404 No Bugs Found
            </p>
            <h1 className="flex flex-col flex-wrap text-black gap-16 sm:gap-16 md:block uppercase banner-text-responsive">
              mohamed MonGe
            </h1>

            
          </div>
        </div>

        <div className="relative px-10 text-black">
          <div className="absolute inset-x-0  border-t-2"/>
          <div className="py-12 sm:py-16 text-end">
            <AnimatedTextLines text={aboutText} className="font-light text-black/70 uppercase value-text-responsive"/>
            

        
          </div>
        </div>
      </div>
  )
}

export default AnimatedHeaderSection