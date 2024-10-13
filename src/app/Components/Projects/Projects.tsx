import { projects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Stars } from '../Stars/stars'
import TextAnimation from '../TextAnimation/TextAnimation'
import UnderLine from '../StylesComponents/UnderLine'
import InViewAnimation from '../InViewAnimation/InViewAnimation'


const Projects = () => {
  return (
    <>
      <InViewAnimation dir="200%">

    <section id='Projects' className='relative pb-64'>
    <TextAnimation Class="text-4xl lg:text-6xl font-bold text-center  mb-1 text-white uppercase" text={"Projects"} />
    <UnderLine />
      <Stars/>
      <div className=' lg:mx-20 mx-4  flex flex-col items-center gap-y-5 mt-5   '>
        {
          projects.map((project, index) => (
            <div key={index + project.name} className=' gap-3 w-3/4  lg:w-1/2 flex flex-col lg:flex-row  items-center justify-center gap-x-5   '>
              <div className='overflow-hidden relative group bg-stone-100/5  rounded-2xl backdrop-blur   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] hover:scale-105 duration-500'>

                <Image src={project.image} alt={project.name} width={480} height={480} className='w-40 h-36  rounded-xl m-1 ' />
                <div className='flex justify-center  flex-wrap text-white items-center absolute top-full group-hover:top-0  w-full h-full  bg-main  backdrop-blur duration-500 gap-x-4 gap-y-2  '>
                  <Link href={project.live} target='_blank'>
                    <FaLink  />
                  </Link>
                  <Link href={project.repo} target='_blank'>
                    <FaGithub  />
                  </Link>
                
                </div>
                <span className='absolute bottom-3 text-nowrap left-1/2 -translate-x-1/2  uppercase text-[8px] text-white bg-stone-100/5  rounded-2xl backdrop-blur   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-main2  to-main2 bg-[length:400%_400%] px-2 py-1'>
                  {project.status}
                </span>
              </div>
              <div className='flex flex-col  text-white flex-1 text-center lg:text-start'>
                <h5 className='text-lg md:text-xl lg:text-2xl font-bold '>
                  {project.name}
                  <span className={`text-[10px] md:text-xs  mx-1 ${project.subTitle.length > 50 ? 'block lg:inline' : ''} `}>{project.subTitle}</span>
                </h5>
                <p className='text-xs lg:text-sm '>
                  {project.description}
                </p>
                <div className='my-2 flex flex-wrap'>
                  {project.tools.split(',').map((tools, i) => <span key={`${project.name}${tools}${i}`} className='text-[8px] lg:text-[10px]    text-white bg-stone-100/5  rounded-2xl backdrop-blur   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] m-1 px-2 py-1'>{tools}</span>)}

                </div>


              </div>
            </div>
          ))
        }

      </div>
    </section>
    </InViewAnimation>

    </>
  )
}

export default Projects