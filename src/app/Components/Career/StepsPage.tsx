"use client"

import { Briefcase, GraduationCap, School } from "lucide-react"
import { motion } from "framer-motion"
import { Steps } from "./Steps"
import HandTitle from "../StylesComponents/HandTitle"

export default function StepsPage() {
  const steps = [
    {
      title: "University Study",
      description: "Studied at the International Institute for Languages and Commerce English Section",
      icon: <School className="w-6 h-6" />,
      startDate: "September 2019",
      endDate: "July 2023",
    },
    {
      title: "Route IT Training Center",
      description: "Completed a Front End Development Diploma",
      icon: <GraduationCap className="w-6 h-6" />,
      startDate: "September 2023",
      endDate: "January 2024",
    },
    {
      title: "Voom Company",
      description: "First job as a Front-End Developer",
      icon: <Briefcase className="w-6 h-6" />,
      startDate: "July 2024",
      endDate: "October 2024",
    },
    {
      title: "Depo Web Company",
      description: "Worked as a Front-End Developer",
      icon: <Briefcase className="w-6 h-6" />,
      startDate: "October 2024",
      endDate: "Present",
    },
  ]

  return (
    <div id="Journey" className="  flex items-center justify-center p-8">
      <div className="max-w-3xl  w-full">
        <motion.h1
          className="text-4xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HandTitle title={"Journey"} />
        </motion.h1>
        <Steps steps={steps} />
      </div>
    </div>
  )
}

