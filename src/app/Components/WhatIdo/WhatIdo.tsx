'use client'
import React, { useRef } from 'react'

// import TextAnimation from '../TextAnimation/TextAnimation'
import UnderLine from '../StylesComponents/UnderLine'
import { FaCode } from 'react-icons/fa'
import { SiAdobeindesign } from 'react-icons/si'
import { useInView } from 'framer-motion'


function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </div>
  );
}
function SectionLeft({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0 cubic-bezier(0.17, 0.55, 0.55, 1) 0",
        }}
      >
        {children}
      </div>
    </div>
  );
}
const Text=({title,text}:{title:string,text:string})=>{
 return (
  <div className={`flex flex-col     text-white text-[12px] md:text-sm lg:text-base font-medium `}>
  <h3 className='text-3xl lg:text-6xl font-bold mb-3  '>
    {title}
  </h3>
  <div className=' w-32 '>
    <UnderLine />
  </div>
  <p className=' text-[12px] md:text-sm lg:text-base  mx-1 '>
    {text}
  </p>
</div>
 )
}
const WhatIdo = () => {
  const services = [
    {
      id: "service1",
      title: 'Web Development',
      text: `As a web developer, I focus on building responsive, user-friendly websites and web applications. With expertise in front-end 
              technologies like React.js and Next.js, I ensure that the user interface is seamless, performant, and optimized for all screen 
              sizes. I also have a growing experience in backend development with Node.js, Express, and MongoDB, allowing me to build full-stack 
              applications that are scalable and efficient. My goal is always to create web solutions that meet both user and business needs 
              while keeping the performance and functionality at the forefront.`,
      icon: <FaCode />
    },
    {
      id: "service2",
      title: 'Design',
      text: `I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. 
              Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me . 
              I'm committed to creating fluent user experiences while staying fashionable.`,
      icon: <SiAdobeindesign />
    },

  ]
  return (
    <>
      <section className='mx-4 lg:mx-20 mt-10 overflow-hidden'>

        
        <div className='flex justify-center   gap-4  my-5 lg:flex-row flex-col   '>
          {
            services.map((el, i) => <div key={el.id} className={`   min-h-96 flex ${i % 2 === 0 ? "items-start" : "items-end"}  `}>
               {i % 2 === 0 ?
                <Section><Text title={el.title} text={el.text} /> </Section>
                :
                 <SectionLeft><Text title={el.title} text={el.text} /> </SectionLeft>
                  }

            </div>
            )
          }



        </div>

      </section>
    </>
  )
}

export default WhatIdo