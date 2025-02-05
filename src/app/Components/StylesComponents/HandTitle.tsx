'use client'
import localFont from 'next/font/local';
export const indieFlower = localFont({
  src: '../../../../public/Fonts/Priestacy.otf',
  display: 'swap',
  variable: '--font-indie-flower', 
});
export default  function HandTitle({title}: {title: string}) {
    return <h2 className={`${indieFlower.className}  text-6xl text-center text-white`}>
      {title}
    </h2>
  }