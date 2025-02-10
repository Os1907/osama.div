import React from 'react'
import Link from 'next/link'
import { BiPhone } from 'react-icons/bi'    
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation'
import { IoIosMailUnread } from 'react-icons/io'
import HandTitle from '../StylesComponents/HandTitle'

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
const Contact = () => {
  return (
    <>

   {/* <InViewAnimation dir="-200%">

    </InViewAnimation> */}
    <section id='Contact' className='relative pt-10 mx-5'>
                  <HandTitle title={'Get in Touch'}/>
      <div className='flex justify-center gap-x-2 flex-wrap text-white  pt-8   '>
            {
              buttons.map((el ,i) => <div key={i} className={`${i=== 0 && "-mb-6"}`}>
                <ButtonAnimation key={`buttonAnimation+${el.time}`} time={el.time}>
                {el.tag}
              </ButtonAnimation>

              </div>
              )
            }
          </div>
    </section>



    </>
  )
}

export default Contact