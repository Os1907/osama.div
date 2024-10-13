// import Image from "next/image";
// 'use client'
import Hero from "./Components/Hero/Hero";
import WhatIdo from "./Components/WhatIdo/WhatIdo";
import Navbar from "./Components/Navbar/Navbar";
import { Stars } from "./Components/Stars/stars"
import UnderLine from "./Components/StylesComponents/UnderLine";
import TechAnimation from "./Components/TechAnimation/TechAnimation";
import TextAnimation from "./Components/TextAnimation/TextAnimation";
import InViewAnimation from "./Components/InViewAnimation/InViewAnimation";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-main2 via-main  to-main min-h-screen w-full relative ">
      <Stars />
      <Navbar />
      <Hero />
      <WhatIdo />
      <InViewAnimation dir="-200%">
        <div className='min-h-screen flex flex-col justify-center '>
          <div>

            <TextAnimation Class="text-4xl lg:text-6xl font-bold text-center  mb-1 text-white uppercase" text={"Technical Skills"} />
            <UnderLine />
            <TechAnimation />
          </div>

        </div>
      </InViewAnimation>
        <Projects />
        <Contact/>
      
    </main>
  );
}
