'use client'
import React, { useRef } from 'react'
import UnderLine from '../StylesComponents/UnderLine'
import { FaCode } from 'react-icons/fa'
import { SiAdobeindesign } from 'react-icons/si'
import { useInView } from 'framer-motion'
import HandTitle from '../StylesComponents/HandTitle'


const services:Array<{id:string,title:string,text:string,icon:React.ReactNode}> = [
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

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </div>
  );
}
const Text=({title,text}:{title:string,text:string})=>{
 return (
  <div className={`flex flex-col  text-center lg:text-start items-center lg:items-start     text-white text-[12px] md:text-sm lg:text-base font-medium `}>
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
 
  return (
    <>
      <section id='Skills' className='mx-4 lg:mx-20  '>

        
        <div className='flex justify-center   gap-y-8    flex-col  w-full  '>
          {/* {
            services.map((el, i) => <div key={el.id} className={` min-h-max flex-1  lg:min-h-96 flex ${i % 2 === 0 ? "items-start" : "items-end"}  `}>
               {i % 2 === 0 ?
                <Section><Text title={el.title} text={el.text} /> </Section>
                :
                 <SectionLeft><Text title={el.title} text={el.text} /> </SectionLeft>
                  }

            </div>
            )
          } */}
          {
            services.map((el, i) => <div key={el.id} className={`  flex-1 px-10  flex flex-col  text-white    `}>
               {/* {i % 2 === 0 ?
                <Section><Text title={el.title} text={el.text} /> </Section>
                :
                 <SectionLeft><Text title={el.title} text={el.text} /> </SectionLeft>
                  } */}
                  <HandTitle title={el.title}/>
                  <p className={`handFont  text-[12px] md:text-sm lg:text-base  mx-1 mt-10 text-center  `}>
                    {el.text}
                  </p>

            </div>
            )
          }

        </div>

      </section>
    </>
  )

 
}

export default WhatIdo