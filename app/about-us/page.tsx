'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <div className="">
        <div className='bg-[#5A3AEC] w-full py-10 lg:py-20'>
            <h3 className='text-white text-[30px] lg:text-[60px] font-bold relative z-10 text-center'>
                About Us
            </h3>
            <p className='text-white text-center text-base mt-4 lg:mt-4 px-6 lg:px-[100px]'>
                At Tech Katalyst, we are passionate about driving digital transformation and empowering businesses with innovative, tailor-made technology solutions. Our mission is to be the catalyst that turns your ideas into impactful realities, helping you thrive in an ever-evolving digital landscape. With a perfect blend of creativity, technical expertise, and strategic insight, we craft solutions that not only meet your needs but exceed your expectations.
            </p>
        </div>
        <div className='standard-margin-top px-6 lg:px-[100px]'>
            <h6 className='text-xl text-[#212121] lg:text-5xl font-bold relative z-10 text-center mb-6 lg:mb-[60px]'>
                What We Do
            </h6>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 border border-[#E7E7E7] lg:border-0'>
                <ServiceCard icon="/aboutpage/web-development.png" title={"Web & App Development"} description={"Creating scalable, high-performing websites tailored to your business needs."} />
                <ServiceCard icon="/aboutpage/ui-ux.png" title={"Product UI/UX Design"} description={"Designing intuitive and user-centric poppinsfaces for digital products."} />
                <ServiceCard icon="/aboutpage/product-management.png" title={"Product Management"} description={"Strategizing, planning, and delivering products that align with your business goals."} />
                <ServiceCard icon="/aboutpage/data-analytics.png" title={"Data Analytics & Insights"} description={"Turning raw data into actionable insights for smarter decision-making."} />
                <ServiceCard icon="/aboutpage/market-research.png" title={"Market Research"} description={"Providing in-depth research to understand trends, audiences, and opportunities."} />
                <ServiceCard icon="/aboutpage/digital-transformation.png" title={"Digital Transformation"} description={"Helping businesses adapt, innovate, and thrive in the digital era."} />
            </div>
        </div>
        <div className='standard-margin-top px-6 lg:px-[100px]'>
            <h6 className='text-[#212121] text-xl lg:text-5xl font-bold relative z-10 text-center mb-6 lg:mb-[60px]'>
                Why choose us
            </h6>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <ExpertiseCard icon="/images/about/expertise.png" title={"Proven Expertise"} description={"A team of experienced professionals committed to excellence in every project."} />
                <ExpertiseCard icon="/images/about/customisable.png" title={"Customized Solutions"} description={"A team of experienced professionals committed to excellence in every project."} />
                <ExpertiseCard icon="/images/about/customer-priority.png" title={"Customer-Centric Values"} description={"We prioritize collaboration, transparency, and your satisfaction at every step."} />
                <ExpertiseCard icon="/images/about/on-time.png" title={"On-Time Delivery"} description={"Delivering high-quality results within deadlines without compromise."} />
                <ExpertiseCard icon="/images/about/innovation.png" title={"Innovative Approach"} description={"Leveraging the latest tools and technologies to stay ahead of industry trends."} />
                <ExpertiseCard icon="/images/about/support.png" title={"Ongoing Support"} description={"Long-term partnerships with continuous updates, maintenance, and support."} />
                <div className="lg:col-start-2">
                    <ExpertiseCard icon="/images/about/competitive-price.png" title={"Competitive Pricing"} description={"Competitive pricing that ensures maximum value for your investment."} />
                </div>
            </div>
        </div>
        <div className='standard-margin-top px-6 lg:px-[100px] py-10 lg:py-20 bg-[#5A3AEC] flex flex-col lg:flex-row justify-between items-center'>
            <div>
                <h6 className='text-white text-xl lg:text-5xl font-bold relative z-10 text-center'>
                    Ready to elevate your business?
                </h6>
                <p className='text-sm text-white lg:text-base mt-3 lg:mt-6 text-center lg:text-left'>
                    Contact us today to explore how we can help you achieve your goals.
                </p>
            </div>
            <a href='/contact-us' className='bg-[#9EE463] hover:bg-white text-[#101427] text-lg lg:text-2xl font-medium relative z-10 py-[10px] lg:py-5 px-[34px] mt-6 lg:mt-0 w-full lg:w-auto text-center lg:text-left'>
                Get in touch
            </a>
        </div>
    </div>
  )
}

const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className='bg-white flex justify-center flex-col items-center p-6 border-b border-[#E7E7E7] lg:border-b-0'>
            <Image className='' src={icon} alt={title} width={48} height={48} />
            <h6 className='text-[#101828] text-base lg:text-xl font-semibold relative z-10 mt-4 text-center'>
                {title}
            </h6>
            <p className='text-[#6A6A6A] text-sm lg:text-base relative z-10 mt-2 text-center'>
                {description}
            </p>
        </div>
    )
}

const ExpertiseCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className='bg-white flex flex-col p-6 border border-[#E7E7E7] lg:h-[196px]'>
            <Image className='' src={icon} alt={title} width={40} height={40} />
            <h6 className='text-[#101828] text-xl font-semibold relative z-10 mt-4'>
                {title}
            </h6>
            <p className='text-black text-base relative z-10 mt-2'>
                {description}
            </p>
        </div>
    )
}