import { Offering } from '@/helpers/constants'
import Image from 'next/image'
import React from 'react'

export const OfferingsSection = ({ title, offerings }: { title: string, offerings: Offering[] }) => {
  return (
    <div className="standard-margin-top text-center px-6 lg:px-[100px]">
        <h3 className='text-2xl lg:text-[40px] xl:text-5xl font-bold mb-12 lg:w-[70%] !leading-snug mx-auto'>
            {title}
        </h3>
        <div className='border border-[#E7E7E7] w-full grid grid-cols-1 lg:grid-cols-4 items-stretch drop-shadow-xl'>
            { offerings.map((offering, index) => (
                <div key={index} className={`flex w-full h-full flex-row items-center self-center gap-4 p-6 lg:flex-col ${index < 4 ? 'border-b border-[#E7E7E7]' : 'border-b lg:border-b-0 border-[#E7E7E7]'} ${(index+1) % 4 !== 0 ? 'lg:border-r lg:border-[#E7E7E7]' : 'lg:border-r-0'}`}>
                    <Image className='w-10 h-10 lg:w-[60px] lg:h-[60px]' src={offering.icon} alt={offering.description} width={60} height={60} />
                    <p className='w-10/12'>{offering.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
