import React from 'react'
import Image from 'next/image'
import Intro from '@/public/intro.png'
import Decorator from '@/public/decorator.png'
import Calendar from '@/components/Common/Calendar'

export const IntroSection = () => {
  return (
    <div className='relative'>
        <div className='flex flex-col-reverse lg:flex-row lg:items-start xl:items-center py-6 pt-6 px-6 lg:px-[100px] gap-1'>
            <article className='mt-[20px] lg:mt-auto'>
                <h2 className={` text-[20px] leading-[42px] w-[90%] lg:text-[42px] lg:w-full lg:leading-tight xl:text-[51px] font-bold xl:w-[80%] xl:leading-[60px] mb-2`}>
                    Digital Solutions That Drive Growth and Transform Businesses
                </h2>
                <p className={`text-sm lg:text-lg xl:text-xl xl:w-[80%] mt-3 lg:mt-10`}> 
                    We design, develop, and deliver cutting-edge websites, apps, and strategies to empower businesses in the digital age. Let’s create something extraordinary together.
                </p>
                <div className='flex-col lg:flex-row flex gap-4 mt-6'>
                    <Calendar />
                    <a href="/contact-us" className={`lg:mt-12 bg-white hover:bg-[#9EE463] hover:text-[#5A3AEC] transition-all duration-300 py-[14px] lg:py-5 px-[60px] text-[#5A3AEC] border border-[#5A3AEC] rounded-sm text-[18px] text-center lg:text-lg xl:text-xl font-medium w-full lg:w-auto inline-block`}>
                        Get started
                    </a>
                </div>
            </article>
            <Image 
                src={Intro}
                alt="Intro"
                className='w-[482px] lg:h-[400px] xl:h-[480px] flex self-center' 
            />
        </div>
        <Image 
            src={Decorator}
            alt='decorator'
            className='absolute left-0 z-[-1] bottom-0 '
        />
    </div>
  )
}

export default IntroSection
