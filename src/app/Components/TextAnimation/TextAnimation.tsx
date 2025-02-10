'use client'
import React from 'react'
import { motion } from "framer-motion";
interface Prop{
    text:string,
    Class:string
}
const TextAnimation = ({text,Class}:Prop) => {
    const title = text.split(" ");
// console.log(title)
  return (
    <>
   <div className={`${Class}`}>
      {title.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: i / 40
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
      
    </div>
  
    
    
    </>
  )
}

export default TextAnimation