import { projects } from '@/lib/projects'
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <>
    <div  className=' lg:mx-20 mx-4  flex flex-col items-center gap-y-5 mt-5  '>
      {
        projects.map((project, index) => (
          <div key={index+project.name} className=' gap-3 w-3/4  lg:w-1/2 flex flex-col lg:flex-row  items-center justify-center gap-x-5   '>
            <div className='bg-stone-100/5 p-1 rounded-2xl backdrop-blur   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] hover:scale-105 duration-500'>

            <Image src={project.image} alt={project.name} width={480} height={480} className='w-40 h-36  rounded-xl ' />
            </div>
            <div className='flex flex-col  text-white flex-1 text-center lg:text-start'>
              <h5 className='text-lg md:text-xl lg:text-2xl font-bold '>
                {project.name} 
                <span className={`text-[10px] md:text-xs  mx-1 ${project.subTitle.length > 50 ? 'block' : ''} `}>{project.subTitle}</span>
              </h5>
              <p className='text-xs lg:text-sm '>
                {project.description}
              </p>
              {/* <p>
                {project.}
              </p> */}

            </div>


          </div>
        ))
      }
        
    </div>

    </>
  )
}

export default Card