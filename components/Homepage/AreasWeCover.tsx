import React from 'react'
import CircleBg from '@/public/circle-bg.png'
import Image from 'next/image'
import ProductCard from './ProductCard'

export const AreasWeCover = () => {
  return (
    <div className='xl:h-[1397px] bg-[#0A0615] w-full mt-[-350px] relative overflow-hidden pt-[420px] pb-[40px] lg:pb-[100px] xl:pb-0'>
        <Image 
            src={CircleBg}
            alt='circle-bg'
            className='absolute object-cover top-0 hidden lg:block'
        />
        <h4 className={`px-6 text-[20px] leading-[28px] lg:text-[40px] lg:leading-[48px] xl:text-5xl xl:leading-[56px] z-10 text-white lg:w-[60%] font-bold lg:mx-auto text-center relative w-full`}>
          We deal with the aspects of professional services
        </h4>
        <div className='mt-7 lg:mt-14 text-white px-6 lg:px-[100px] z-10 relative grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <ProductCard url='/services/market-research' icon='/market-research.png' titleClassName='w-[50%]' title='Market Research' subtitle='Uncover hidden opportunities, understand your target audience deeply, and gain a competitive edge.' />
            <ProductCard url='/services/product-management' icon='/product-management.png' titleClassName='w-[50%]' title='Product Management' subtitle='Drive product innovation, ensure customer satisfaction, and maximize return on investment through strategic planning and execution' />
            <ProductCard url='/services/web-development' icon='/web-development.png' titleClassName='w-[50%]' title='Web Development' subtitle='Build high-performance websites that captivate users, drive conversions, and enhance your business online presence.' />
            <ProductCard url='/services/mobile-app-development' icon='/mobile-dev.png' titleClassName='w-[50%]' title='Mobile App Development' subtitle='Create intuitive and engaging mobile apps that deliver exceptional user experiences and streamline business processes.' />
            <ProductCard url='/services/analytics-data-science' icon='/analytics.png' titleClassName='w-[50%]' title='Analytics & Data Science' subtitle='Transform raw data into actionable insights to optimize decision-making, improve marketing strategies, and boost overall business performance.' />
            <ProductCard url='/services/ui-ux-design' icon='/uiux.png' title='UI/UX Design' titleClassName='w-[40%]' subtitle='Craft user-centric experiences that delight customers, increase engagement, and drive brand loyalty.' />
        </div>
    </div>
  )
}

export default AreasWeCover