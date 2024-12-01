import { WhyUsPoint } from '@/helpers/constants'
import Image from 'next/image'
import React from 'react'

export const WhyUsSection = ({ title, points, heading }: { title: string, points: WhyUsPoint[], heading?: string }) => {
  return (
    <div className='standard-margin-top px-6 lg:px-[100px]'>
        <h3 className='text-2xl lg:text-[40px] xl:text-5xl font-bold mb-4 text-center leading-tight mx-auto'>
            {heading}
        </h3>
        <p className='text-sm lg:text-base text-center'>
            {title}
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto mt-6 lg:mt-[60px] drop-shadow-sm border border-[#E7E7E7] lg:border-0'>
            {points.map((point, index) => (
                <div key={index} className={`p-6 px-10 flex flex-col gap-2 text-center items-center ${index < 3 ? 'border-b border-[#E7E7E7]' : 'border-b lg:border-b-0'} ${index % 3 !== 0 ? 'lg:border-l lg:border-[#E7E7E7]' : 'lg:border-l-0'}`}>
                    <Image src={point.icon} alt={point.heading} width={48} height={48} />
                    <p className='text-base lg:text-lg xl:text-xl mt-4 font-semibold text-[#212121]'>
                        {point.heading}
                    </p>
                    <p className='mt-0 text-sm text-[#212121]'>
                        {point.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}
