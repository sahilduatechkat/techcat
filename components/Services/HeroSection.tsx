import React from 'react'

interface HeroSectionProps {
  title: React.ReactNode;
  heading: string;
  subheading: string;
}

export const HeroSection = ({ title, heading, subheading }: HeroSectionProps) => {
  return (
    <div className='bg-[#B7FD7E] py-12 lg:py-20 px-6 lg:px-[100px] text-center'>
        <div className='text-[28px] lg:text-5xl xl:text-6xl font-bold'>
            {title}
        </div>
        <h1 className={`text-sm lg:text-xl xl:text-2xl font-semibold mt-6 lg:mt-12`}>
            {heading}
        </h1>
        <p className={`text-sm xl:text-base font-normal pt-3 lg:pt-4`}>
            {subheading}
        </p>
        <a href="/contact-us" className={`mt-6 lg:mt-12 bg-[#7000FF] hover:bg-[#212121] transition-all duration-300 py-[14px] lg:py-5 px-[80px] text-white border rounded-sm text-[18px] text-center lg:text-lg xl:text-xl font-medium w-full lg:w-auto inline-block`}>
            Get started
        </a>
    </div>
  )
}