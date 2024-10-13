import React from 'react'
import TextAnimation from '../TextAnimation/TextAnimation'
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation'
import { RiDownloadCloud2Fill } from 'react-icons/ri'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  const greeting = 'Hey there! 👋'
  const titleOne = 'I am  Osama Mohamed,'
  const titleTwo = `A creative and passionate front-end developer with a growing interest in MERN-stack development. 
            With a strong foundation in technologies like React.js, Next.js, JavaScript, and TypeScript, I enjoy creating seamless 
            and dynamic user experiences. Currently, I'm expanding my expertise into backend development, focusing on Node.js, Express, 
            and MongoDB as I work towards becoming a proficient MERN stack developer.`
  const buttons = [
    {
      tag: <a href="/Osama_Mohamed.pdf" download> Resume <RiDownloadCloud2Fill className='text-white inline ' /> </a>,
      time: 95
    },
    {
      tag: <Link target='_blank' href={'https://github.com/Os1907/'}>
        Github
        <FaGithub className='text-white inline mx-1 mb-1 ' />
      </Link>,
      time: 100
    },
    {
      tag: <Link target='_blank' href={'https://www.linkedin.com/in/osama-mohammed-702a0329b/'}>
        LinkedIn
        <FaLinkedin className='text-white inline mx-1 mb-1 ' />
      </Link>,
      time: 105
    },

  ]
  return (
    <>
      <div id='About' className=' grid grid-cols-2 mx-4 lg:mx-20   '>
        
        <div className="col-span-2  text-white flex flex-col justify-center items-center min-h-screen relative ">
          <div className='relative w-auto'>

          <TextAnimation Class=" mb-2  mt-10 text-sm md:text-base lg:text-xl  " text={greeting} />
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-stone-100/5  backdrop-blur   rounded-full   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%]">
      <Image src="/me.png" alt="me" width={300} height={300} className='h-16 w-22 object-cover rounded-full border-2 lg:border-4 border-main2' />

    </div>
          </div>
          <TextAnimation Class="text-2xl lg:text-4xl font-semibold text-center mb-2 lg:mb-3" text={titleOne} />
          <TextAnimation Class="text-base lg:text-2xl font-medium text-center" text={titleTwo} />
          <div className='flex justify-center gap-x-2 flex-wrap '>
            {
              buttons.map((el) => <ButtonAnimation key={`buttonAnimation+${el.time}`} time={el.time}>
                {el.tag}
              </ButtonAnimation>
              )
            }
          </div>
   
        </div>
      </div>


    </>
  )
}

export default Hero