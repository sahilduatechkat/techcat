import React from 'react'

const WorkTogether = () => {
  return (
    <div className='mt-[56px] lg:mt-[120px] px-6 gap-8 lg:px-[100px] py-12 lg:py-[80px] bg-[#7000FF] flex-col lg:flex-row text-white flex justify-end'>
        <article className='grow'>
            <h4 className={`text-[20px] font-bold text-center lg:text-left lg:text-[40px] xl:text-5xl`}>
                Let’s work together
            </h4>
            <p className={`text-sm pt-4 lg:pt-2 lg:text-base w-full text-center lg:text-left lg:w-full`}>
                We are architects of innovation, trailblazers of technological advancements, and partners in your success. As a dynamic and forward -thinking organisation  
            </p>
        </article>
        <article className='flex lg:self-center'>
            <a href="/contact-us" className={`flex justify-center font-medium bg-[#9EE463] hover:bg-white py-[14px] lg:py-5 px-10 text-black w-full text-lg lg:text-lg xl:text-2xl whitespace-nowrap`}>
                Start a project
            </a>
        </article>
    </div>
  )
}

export default WorkTogether