import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { servicesData } from './../constants/index';
import { useMediaQuery } from "react-responsive";

const Services = () => {
   const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`
 
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({minWidth:'48rem'});


  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection subTitle={`Behind the scene, Beyond the screen`}  
      title="Services"
      textColor="text-white"
      text={text}
      withScrollTrigger={true}
      />
      {servicesData.map((service,indx)=>(
        <div key={indx} ref={(el)=> serviceRefs.current[indx]= el}
          className="sticky px-10 pt-6 pb-6 text-white bg-black border-t-2 border-white/30"
          style={isDesktop ? {
                  top: `calc(10vh + ${indx * 5}em)`,
                  marginBottom: `${(servicesData.length - indx - 1) * 5}rem`,
                }
              : { top: 0 }}
          >
            <div className="flex items-center justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl text-white/60 tracking-widest leading-relaxed text-pretty lg:text-2xl">
                  {service.description}
                </p>
                <div className="flex flex-col gap-2 sm:gap-4 lg:text-3xl text-white/80 text-2xl">
                  {service.items.map((item, itemIndex)=>(
                    <div key={`item-${indx}-${itemIndex}`} >
                      <h3 className="flex">
                        <span className="mr-12 textwhite/30" >
                          0{itemIndex + 1}
                        </span>
                          {item.title}
                      </h3>
                      {itemIndex < service.items.length -1 ? (<div className="w-full h-px my-2 bg-white/30" />): ""}
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      ))}
    </section>
  )
}

export default Services