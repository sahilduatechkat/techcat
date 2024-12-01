import { FAQ } from '@/helpers/constants'
import React from 'react'
import { Accordion } from './Accordion'

export const FaqSection = ({ faq }: { faq: FAQ[] }) => {
  return (
    <div className='standard-margin-top px-6 lg:px-[100px] text-center'>
        <h3 className='text-[#101828] text-2xl lg:text-[40px] xl:text-5xl font-bold'>   
            Frequently asked questions
        </h3>
        <p className='text-sm lg:text-base text-[#212121] pt-2 lg:pt-4'>
            Everything you need to know about the product and billing.
        </p>
        <div className='mt-2 pt-0 lg:pt-[60px] w-full lg:w-9/12 mx-auto'>
            {faq.map((item) => (
                <Accordion key={item.question} question={item.question} answer={item.answer} />
            ))}
        </div>
    </div>
  )
}
