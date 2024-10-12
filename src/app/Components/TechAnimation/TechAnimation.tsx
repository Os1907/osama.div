'use client'
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub, FaHtml5, FaCss3, FaBootstrap,  FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiNextdotjs, SiMongodb, SiFigma, SiTypescript, SiExpress } from 'react-icons/si';

const technicalSkills = [
    { skill: 'Figma', icon: <SiFigma /> },
    { skill: 'HTML5', icon: <FaHtml5 /> },
    { skill: 'CSS/SCSS', icon: <FaCss3 /> },
    { skill: 'Bootstrap', icon: <FaBootstrap /> },
    { skill: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { skill: 'JavaScript', icon: <FaJs /> },
    { skill: 'TypeScript', icon: <SiTypescript /> },
    { skill: 'React.js', icon: <FaReact /> },
    { skill: 'Next.js', icon: <SiNextdotjs /> },
    { skill: 'Node.js', icon: <FaNode /> },
    { skill: 'Express', icon: <SiExpress /> },
    { skill: 'MongoDB', icon: <SiMongodb /> },
    { skill: 'Redux Toolkit', icon: <SiRedux /> },
    { skill: 'Git/GitHub', icon: <FaGithub /> },
];



const TechAnimation = () => {
    return (
        // <div id="Skills" className="flex MyGradient overflow-hidden ">
           
        //     <motion.div
        //         initial={{ x: `60%` }}
        //         animate={{ x: `-60%` }}
        //         transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        //         className="flex flex-shrink-0 gap-x-5  overflow-hidden"
        //     >
        //         { technicalSkills.map((tech, index) => (
        //             <div key={index}>
        //             <p  className='text-sm lg:text-base flex items-center text-white bg-stone-100/5  font-medium backdrop-blur  w-auto rounded-full   border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%]  px-5 my-4 py-2 '>
        //             <span className=" mx-1">

        //                 {tech.icon}
        //             </span>
        //             {tech.skill}

        //             </p>
        //             </div>
        //         )) }
        //     </motion.div>

        // </div>
        <div id="Skills" className="flex flex-col MyGradient overflow-hidden ">
           
            <motion.div
                initial={{ x: `60%` }}
                animate={{ x: `-60%` }}
                transition={{ duration:25, repeat: Infinity, ease: "linear" }}
                className="flex flex-wrap justify-center lg:mx-20 mx-4 gap-x-5  overflow-hidden"
            >
                { technicalSkills.toSpliced(8).map((tech, index) => (
                    <div key={index}>
                    <p  className='bbg-stone-100/5 text-[12px] md:text-sm lg:text-base font-medium backdrop-blur  w-auto rounded-full  flex items-center  border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] px-3 lg:px-5 my-4 py-1 lg:py-2 text-white'>
                    <span className=" mx-1">

                        {tech.icon}
                    </span>
                    {tech.skill}

                    </p>
                    </div>
                )) }
            </motion.div>

  
            <motion.div
                initial={{ x: `-60%` }}
                animate={{ x: `60%` }}
                transition={{ duration:25, repeat: Infinity, ease: "linear" }}
                className="flex flex-wrap justify-center lg:mx-20 mx-4 gap-x-5  overflow-hidden"
            >
                { technicalSkills.toSpliced(0,8).map((tech, index) => (
                    <div key={index}>
                                     <p  className='bbg-stone-100/5 text-[12px] md:text-sm lg:text-base font-medium backdrop-blur  w-auto rounded-full  flex items-center  border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] px-3 lg:px-5 my-4 py-1 lg:py-2 text-white'>
                                     <span className=" mx-1">

                        {tech.icon}
                    </span>
                    {tech.skill}

                    </p>
                    </div>
                )) }
            </motion.div>
        </div>
    );
};

export default TechAnimation;









