// import React from 'react'
// import TextAnimation from '../TextAnimation/TextAnimation'
// import ButtonAnimation from '../ButtonAnimation/ButtonAnimation'
// import { RiDownloadCloud2Fill } from 'react-icons/ri'
// import Link from 'next/link'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import Image from 'next/image'

// const greeting = 'Hey there! 👋'
// const titleOne = 'I am  Osama Mohamed,'
// const titleTwo = `A creative and passionate front-end developer with a growing interest in MERN-Stack development. 
//           With a strong foundation in technologies like React.js, Next.js, JavaScript, and TypeScript, I enjoy creating seamless 
//           and dynamic user experiences. Currently, I'm expanding my expertise into backend development, focusing on Node.js, Express, 
//           and MongoDB as I work towards becoming a proficient MERN stack developer.`
// export const contactButtons = [
//   {
//     tag: <a href="/Osama_Mohamed.pdf" download> Resume <RiDownloadCloud2Fill className='text-white inline handFont' /> </a>,
//     time: 15
//   },
//   {
//     tag: <Link target='_blank' href={'https://github.com/Os1907/'}>
//       Github
//       <FaGithub className='text-white inline mx-1 mb-1 ' />
//     </Link>,
//     time: 20
//   },
//   {
//     tag: <Link target='_blank' href={'https://www.linkedin.com/in/osama-mohammed-702a0329b/'}>
//       LinkedIn
//       <FaLinkedin className='text-white inline mx-1 mb-1 ' />
//     </Link>,
//     time: 25
//   },

// ]
// const Hero = () => {
//   return (
//     <>
//       <div id='About' className=' grid grid-cols-2 mx-4 lg:mx-20  overflow-hidden relative pb-5   '>
        
//         <div className="col-span-2 pt-5 text-white flex flex-col justify-center items-center min-h-screen relative ">
//           <div className='relative w-auto'>

//           {/* <TextAnimation Class=" mb-2  mt-10 text-sm md:text-base lg:text-xl  " text={greeting} /> */}
//           <p className={`handFont mb-2  mt-10 text-sm md:text-base lg:text-xl  `}>
//           {greeting}
//           </p>
//           <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-stone-100/5  backdrop-blur   rounded-full   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%]">
//       <Image src="/osama.webp" alt="me" width={300} height={300} className='h-16 w-22 object-cover rounded-full border-2 lg:border-4 border-main' />

//     </div>
//           </div>
//           <p className='text-xl lg:text-3xl font-semibold text-center mb-2 lg:mb-3 handFont'>
//           {titleOne}
//           </p>
//           <p className='text-base lg:text-xl font-medium text-center handFont'>
//           {titleTwo}
//           </p>
//           <div className='flex justify-center gap-x-2 flex-wrap handFont '>
//             {
//               contactButtons.map((el) => <ButtonAnimation key={`buttonAnimation+${el.time}`} time={el.time}>
//                 {el.tag}
//               </ButtonAnimation>
//               )
//             }
//           </div>
   
//         </div>
//       </div>


//     </>
//   )
// }

// export default Hero
'use client'

import ButtonAnimation from "../ButtonAnimation/ButtonAnimation"
import { RiDownloadCloud2Fill } from "react-icons/ri"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import { motion } from "framer-motion"

const greeting = "Hey there! 👋"
const titleOne = "I am Osama Mohamed,"
const titleTwo = `A creative and passionate front-end developer with a growing interest in MERN-Stack development. 
          With a strong foundation in technologies like React.js, Next.js, JavaScript, and TypeScript, I enjoy creating seamless 
          and dynamic user experiences. Currently, I'm expanding my expertise into backend development, focusing on Node.js, Express, 
          and MongoDB as I work towards becoming a proficient MERN stack developer.`

export const contactButtons = [
  {
    tag: (
      <a href="/Osama_Mohamed.pdf" download>
        {" "}
        Resume <RiDownloadCloud2Fill className="text-white inline handFont" />{" "}
      </a>
    ),
    time: 15,
  },
  {
    tag: (
      <Link target="_blank" href={"https://github.com/Os1907/"}>
        Github
        <FaGithub className="text-white inline mx-1 mb-1 " />
      </Link>
    ),
    time: 20,
  },
  {
    tag: (
      <Link target="_blank" href={"https://www.linkedin.com/in/osama-mohammed-702a0329b/"}>
        LinkedIn
        <FaLinkedin className="text-white inline mx-1 mb-1 " />
      </Link>
    ),
    time: 25,
  },
]

const Hero = () => {
  return (
    <>
      <div id="About" className="grid grid-cols-2 mx-4 lg:mx-20 overflow-hidden relative pb-5">
        <div className="col-span-2 pt-5 text-white flex flex-col justify-center items-center min-h-screen relative">
          <div className="relative w-auto">
            <p className={`handFont mb-2 mt-10 text-sm md:text-base lg:text-xl`}>{greeting}</p>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-stone-100/5 backdrop-blur rounded-full border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5 via-stone-100/10 to-main2 bg-[length:400%_400%]">
              <Image
                src="/osama.webp"
                alt="me"
                width={300}
                height={300}
                className="h-16 w-22 object-cover rounded-full border-2 lg:border-4 border-main"
              />
            </div>
          </div>
          <motion.p
            className="text-xl lg:text-3xl font-semibold text-center mb-2 lg:mb-3 handFont"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {titleOne.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            className="text-base lg:text-xl font-medium text-center handFont"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: titleOne.length * 0.05 }}
          >
            {titleTwo}
          </motion.p>
          <div className="flex justify-center gap-x-2 flex-wrap handFont">
            {contactButtons.map((el) => (
              <ButtonAnimation key={`buttonAnimation+${el.time}`} time={el.time}>
                {el.tag}
              </ButtonAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

