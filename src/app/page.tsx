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
import Dots from "./Components/Common/Dots/Dots";
import HandTitle from "./Components/StylesComponents/HandTitle";

export default function Home() {
  return (
    <main className="bg-main gradient-to-b from- main via- main  to- main2 min-h-screen w-full relative ">
      {/* <Stars /> */}
      <Dots/>

      <Navbar />
      <Hero />
      <WhatIdo />
      <InViewAnimation dir="-200%">
        <div className=' flex flex-col justify-center '>
          <div>

            {/* <TextAnimation Class="text-4xl lg:text-6xl font-bold text-center  mb-1 text-white uppercase" text={"Technical Skills"} />
            <UnderLine /> */}
            <div className='mt-20 mb-10'>

            <HandTitle title={"Technical Skills"} />
            </div>
            <TechAnimation />
          </div>

        </div>
      </InViewAnimation>
        <Projects />
        <Contact/>
      
    </main>
  );
}
