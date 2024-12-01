import { HowItWorksPoint } from '@/helpers/constants'
import React from 'react'

export const HowItWorksSection = ({ points }: { points: HowItWorksPoint[] }) => {
  return (
    <div className='standard-margin-top px-6 lg:px-[100px]'>
        <h3 className='text-2xl lg:text-[40px] xl:text-5xl font-bold mb-4 text-center leading-tight mx-auto'>
            How It Works
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 mx-auto mt-6 lg:mt-[60px]'>
            {points.map((point, index) => (
                <div key={index} className='p-6 flex flex-col gap-2 border border-[#5A3AEC] relative'>
                    <p className='absolute top-0 h-12 w-12 right-0 flex items-center justify-center text-[18px] font-semibold text-[#5A3AEC] bg-[#B7FD7E] border-l border-l-[#5A3AEC] border-b border-b-[#5A3AEC]'> {index+1} </p>
                    <p className='text-base lg:text-lg lg:w-[80%] xl:w-full xl:text-xl font-semibold text-[#212121]'>
                        {point.heading}
                    </p>
                    <p className='mt-0 text-sm text-[#212121] w-[90%]'>
                        {point.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}
