import React from 'react'
import InViewAnimation from '../InViewAnimation/InViewAnimation'
import TextAnimation from '../TextAnimation/TextAnimation'
import UnderLine from '../StylesComponents/UnderLine'
import { Stars } from '../Stars/stars'
import Link from 'next/link'
import { BiPhone } from 'react-icons/bi'    
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation'
import { IoIosMailUnread } from 'react-icons/io'

const Contact = () => {
    const buttons = [
        {
          tag: (
            <Link href={'tel:+201023512260'}>
              <BiPhone className='text-white inline mx-1 mb-1 ' />
              +02- 01023512260
            </Link>
          ),
          time: 0
        },
        {
          tag: (
            <Link href={'mailto:osama.frontdev@gmail.com'}>
              <IoIosMailUnread className='text-white inline mx-1 mb-1 ' />
              osama.frontdev@gmail.com
            </Link>
          ),
          time: 0
        }
      ];
  return (
    <>

   <InViewAnimation dir="-200%">

    <section id='Contact' className='relative mb-10 '>
    <TextAnimation Class="text-4xl lg:text-6xl font-bold text-center  mb-1 text-white uppercase" text={"Get in Touch"} />
    <UnderLine />
      <Stars/>
      <div className='flex justify-center gap-x-2 flex-wrap text-white '>
            {
              buttons.map((el) => <ButtonAnimation key={`buttonAnimation+${el.time}`} time={el.time}>
                {el.tag}
              </ButtonAnimation>
              )
            }
          </div>
    </section>
    </InViewAnimation>



    </>
  )
}

export default Contact