'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

interface Iprop{
    children:React.ReactNode
    dir:string
}
const InViewAnimation = ({ children, dir }:Iprop) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
        <div ref={ref} className='overflow-hidden'>
          <div
            style={{
              transform: isInView ? "none" : `translateX(${dir})`,
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {children}
          </div>
        </div>
      );
}

export default InViewAnimation