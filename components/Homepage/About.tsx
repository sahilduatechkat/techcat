import React from 'react'
import { poppins } from '@/helpers/fonts'

export const About = () => {
  return (
    <div className=' lg:h-[584px] px-[24px] lg:px-[100px] mt-[40px] lg:mt-[120px]'>
        <article className='bg-[#9EE463] w-full h-auto relative overflow-hidden z-10 p-6 lg:py-20 lg:px-12 xl:p-20'>
            <p className={`${poppins.className} text-[20px] leading-[24px] lg:text-[40px] lg:leading-[48px] xl:text-5xl xl:leading-[60px] font-bold text-center mx-auto`}>
                We are tech experts who use technology to innovate and transform businesses
            </p>
            <p className={`text-sm lg:text-base mx-auto mt-6 text-center xl:w-[90%] text-[#212121]`}>
                At Tech Katalyst, we believe in the power of innovation and strategic thinking. Our goal is to bridge the gap between ideas and successful implementation, helping businesses navigate complex markets and thrive in the digital age. By combining deep industry insights with cutting-edge technology, we strive to deliver solutions that not only meet but exceed our client&apos;s expectations. 
            </p>
            <article className='mt-6 lg:mt-[60px] mx-auto text-center'>
                <a href="/about-us" className={`bg-[#7000FF] hover:bg-[#212121] text-white text-base lg:text-lg xl:text-xl font-medium py-[14px] lg:py-5 px-20 block lg:inline-block`}>
                    Explore about us
                </a>
            </article>
        </article>
    </div>
  )
}

export default About