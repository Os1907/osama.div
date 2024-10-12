// import Image from "next/image";
// 'use client'
import Hero from "./Components/Hero/Hero";
import WhatIdo from "./Components/WhatIdo/WhatIdo";
import Navbar from "./Components/Navbar/Navbar";
import { Stars } from "./Components/Stars/stars"
import UnderLine from "./Components/StylesComponents/UnderLine";
import TechAnimation from "./Components/TechAnimation/TechAnimation";
import TextAnimation from "./Components/TextAnimation/TextAnimation";

export default function Home() {
  return (
  <main className="bg-gradient-to-b from-main2 via-main  to-main min-h-screen w-full relative ">
    <Stars/>
    <Navbar/>
    <Hero/>
    <TextAnimation Class="text-3xl lg:text-6xl font-bold text-center mb-1 text-white uppercase" text={"Technical Skills"} />
    <UnderLine/>
    <TechAnimation/>
    <WhatIdo/>
  </main>
  );
}
// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   MotionValue
// } from "framer-motion";
// import Hero from "./Components/Hero/Hero";
// import MyService from "./Components/MyService/MyService";
// import Navbar from "./Components/Navbar/Navbar";
// import { Stars } from "./Components/Stars/stars";
// import UnderLine from "./Components/StylesComponents/UnderLine";
// import TechAnimation from "./Components/TechAnimation/TechAnimation";
// import TextAnimation from "./Components/TextAnimation/TextAnimation";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function ParallaxComponent({ children, distance }: { children: React.ReactNode; distance: number }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, distance);

//   return (
//     <motion.div ref={ref} style={{ y }} className="relative">
//       {children}
//     </motion.div>
//   );
// }

// // المكون الرئيسي
// export default function Home() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <main className="bg-gradient-to-b from-main2 via-main to-main min-h-screen w-full ">
//       <Stars />
//       <Navbar />
//       <ParallaxComponent distance={0}>
//         <Hero />
//       </ParallaxComponent>

//       <ParallaxComponent distance={50}>
//         <TextAnimation
//           Class="text-lg lg:text-4xl font-semibold text-center mb-1 text-white uppercase"
//           text={"Technical Skills"}
//         />
//         <UnderLine />
//         <TechAnimation />
//       </ParallaxComponent>
   
//       <ParallaxComponent distance={100}>
//         <MyService />
//       </ParallaxComponent>
//       <motion.div
//         className="progress fixed top-0 left-0 right-0 h-1 bg-white"
//         style={{ scaleX }}
//       />
//     </main>
//   );
// }