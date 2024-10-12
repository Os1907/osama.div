import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const links= ["About","Skills", "Projects",  "Contact"];
  return (
    <>
    <nav className=' fixed top-10 w-full z-50 '>
<div className='max-w-32 lg:max-w-5xl mx-auto h-10 rounded-full  flex justify-center text-white items-center '>

<div className='bg-stone-100/5   backdrop-blur h-10 w-auto rounded-full  flex items-center  border border-[#ffffff1f] animate-border bg-gradient-to-r from-stone-100/5  via-stone-100/10  to-main2 bg-[length:400%_400%] p-1'>
{
  links.map((link, index) =>  <Link href={`#${link}`} className="text-sm lg:text-lg mx-3 lg:mx-4 font-medium cursor-pointer  relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#ffffff85] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right" key={index}>{link}</Link>)
}

</div>

</div>
    </nav>
    </>
  )
}

export default Navbar