"use client"

import type * as React from "react"
import { motion } from "framer-motion"

export interface StepProps {
  title: string
  description: string
  icon: React.ReactNode
  startDate: string
  endDate: string
}

export interface StepsProps {
  steps: StepProps[]
}

export function Steps({ steps }: StepsProps) {
  return (
    <div >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
        >
          <div className="flex flex-col items-center mr-6 ">
            <motion.div
              className="flex items-center   justify-center w-12 h-12 bg-stone-100/5  backdrop-blur   rounded-full   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] text-white z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {step.icon}
            </motion.div>
            {index !== steps.length - 1 && (
              <motion.div
                className="w-1 bg-stone-100/5  backdrop-blur   animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] absolute"
                initial={{ height: 0 }}
                animate={{ height: "calc(100% - 3rem)" }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.5 }}
                style={{ top: "3rem", bottom: 0, left: "1.375rem" }}
              />
            )}
          </div>
          <div className="pb-12">
            <motion.h3
              className="text-base lg:text-xl font-bold handFont text-white lg:mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 + 0.2 }}
            >
              {step.title}
            </motion.h3>
            <motion.p
              className="text-xs lg:text-sm handFont text-gray-400 lg:mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 + 0.3 }}
            >
              {step.startDate} - {step.endDate}
            </motion.p>
            <motion.p
              className="text-gray-300 handFont"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 + 0.4 }}
            >
              {step.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

