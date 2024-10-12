'use client'
import React from 'react'
import { motion } from "framer-motion";
interface Iprops{
  time:number
  children:React.ReactNode
}
const ButtonAnimation = ({children , time}:Iprops) => {
  return (
    <motion.button className='bbg-stone-100/5 text-[12px] md:text-sm lg:text-base font-medium backdrop-blur  w-auto rounded-full  flex items-center  border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] px-3 lg:px-5 my-4 py-1 lg:py-2'
    whileTap={{ scale: 0.85  }}
    initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: time / 10
          }}
  >
   {children}
  </motion.button>
);
}

export default ButtonAnimation