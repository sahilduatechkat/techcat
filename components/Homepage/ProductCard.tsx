import Image from 'next/image'
import React from 'react'

export const ProductCard = ({ title, subtitle, titleClassName, icon, url }: { title: string, subtitle: string, titleClassName?: string, icon?: string, url: string }) => {
  return (
    <a href={url} className={`bg-white hover:bg-[#9EE463] hover:text-[#7000FF] transition-all duration-300 p-6 lg:p-8 inline-flex flex-col justify-between gap-2 group relative`}>
      <div>
        <Image 
            src={icon || ''}
            alt='folder-icon'
            className='h-[48px] w-[48px] lg:h-[60px] lg:w-[60px] xl:h-[72px] xl:w-[72px]'
            width={72}
            height={72} 
        />
        <p className={`text-[#212121] mt-4 lg:mt-6 lg:text-lg xl:text-2xl font-bold ${titleClassName} w-full`}>
            {title}
        </p>
        <p className='text-xs lg:text-sm xl:text-base text-[#212121] mt-2 lg:mt-5 w-[100%] lg:w-full'>
            {subtitle}
        </p>
      </div>
      <p className='text-[#5A3AEC] text-xs hover:underline lg:text-sm font-semibold flex justify-end group-hover:opacity-100 mt-1'>
        Know more
      </p>
    </a>
  )
}

export default ProductCard