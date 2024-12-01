import Image from 'next/image'
import React from 'react'

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
        <button className='text-sm lg:text-base bg-[#5A3AEC] hover:bg-[#9EE463] hover:text-[#5A3AEC] transition-all duration-300 font-semibold text-white py-3 lg:py-4 px-10 w-full lg:w-auto block lg:inline-block mt-9'>
            Get in touch
        </button>
    </div>
  )
}
