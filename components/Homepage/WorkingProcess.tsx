import { poppinsBold } from '@/helpers/fonts'
import React from 'react'
import ProcessCard from './ProcessCard'

export const WorkingProcess = () => {
  return (
    <div className='bg-[#101427] pt-[40px] lg:py-[120px] pb-[40px]'>
        <h4 className={`${poppinsBold.className} text-white text-xl p-6 pb-0 pt-0 leading-[32px] lg:p-0 lg:text-[40px] xl:text-5xl w-full lg:w-[70%] xl:w-[50%] text-center mx-auto lg:leading-[48px] xl:leading-[56px] italic`}>
            Our working process on how to grow your business
        </h4>
        <article className='flex flex-col lg:flex-row p-6 lg:p-0 lg:px-6 xl:px-[150px] justify-between lg:mt-[60px] gap-y-8 lg:gap-10'>
            <ProcessCard title="Strategic Partnership" subtitle="We collaborate closely to define your business goals and craft innovative IT strategies." />
            <ProcessCard title="Solution Development" subtitle="Our expert team designs and develops customized solutions using cutting-edge technologies." />
            <ProcessCard title="Seamless Deployment" subtitle="We efficiently deploy solutions into your infrastructure, minimizing disruption and maximizing impact." />
            <ProcessCard title="Ongoing Support" subtitle="Our dedicated team provides continuous maintenance and support to keep your systems running optimally." allowArrow={false} />
        </article>
    </div>
  )
}

export default WorkingProcess