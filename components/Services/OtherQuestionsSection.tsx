import Image from 'next/image'
import React from 'react'
import Calendar from '../Common/Calendar'

export const OtherQuestionsSection = () => {
  return (
    <div className='standard-margin-top px-6 mx-6 lg:mx-[100px] lg:px-[100px] bg-[#F9FAFB] py-8 flex flex-col items-center mb-10 lg:mb-[120px]'>
        <Image 
            src="/images/services/still-have-questions.png"
            width={120}
            height={56}
            alt='still have questions'
        />
        <p className='text-[#101828] text-[20px] font-semibold pt-8'>
            Still have questions?
        </p>
        <p className='text-[#6A6A6A] text-base pt-4 text-center'>
            Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <Calendar text='Get in touch' className='mt-9' />
    </div>
  )
}
