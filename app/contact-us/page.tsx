'use client'

import React from 'react'
import { GetInTouchForm } from '@/components/Services/GetInTouchSection'
import Image from 'next/image'
import LinkedinLogo from '@/public/linkedin.png'
import TwitterLogo from '@/public/twitter.png'

export default function ContactUsPage() {
  return (
    <div className="min-h-screen relative">
        <div className='bg-[#5A3AEC] h-[600px] w-full absolute top-0 left-0' />
        <h3 className='text-[28px] text-white lg:text-[60px] font-bold py-10 lg:py-20 relative z-10 text-center lg:leading-[72px]'>
            Got ideas? <span className='block lg:inline'> We’ve got the skills. </span>
            <span className='block'>
                Let’s team up
            </span>
        </h3>
        <div className='bg-white p-[20px] lg:p-10 flex flex-col-reverse lg:grid grid-cols-5 gap-6 lg:gap-10 relative z-10 mx-6 lg:mx-[100px] mb-[120px] shadow-[0_4px_34px_0_rgba(0,0,0,0.12)]'>
            <div className='bg-white p-6 lg:p-10 col-span-2 flex flex-col justify-between border border-[#E7E7E7]'>
                <div>
                    <ContactBulletPoint className="mb-10" imageSrc="/images/message-us.png">
                        <p className='text-[#212121] font-medium'>Chat to us</p>
                        <p className='text-[#8A8A8A] text-sm'>Our friendly team is here to help</p>
                        <p className='mt-3 text-sm text-[#212121]'>
                            hi@techkatalyst.com
                        </p>
                    </ContactBulletPoint>
                    <ContactBulletPoint className="mb-10" imageSrc="/images/location.png">
                        <p className='text-[#212121] font-medium'>Visit us</p>
                        <p className='text-[#8A8A8A] text-sm'>Come say hello at our office HQ</p>
                        <p className='mt-3 text-sm text-[#212121]'>
                            First Floor, Plot No.9, Sector 115, Noida Uttar Pradesh, 201301
                        </p>
                    </ContactBulletPoint>
                    <ContactBulletPoint className="mb-10" imageSrc="/images/call-us.png">
                        <p className='text-[#212121] font-medium'>Call us</p>
                        <p className='text-[#8A8A8A] text-sm'>Mon - Fri from 10am to 5pm</p>
                        <p className='mt-3 text-sm text-[#212121]'>
                            +91-9555811118
                        </p>
                    </ContactBulletPoint>
                </div>
                <article className='flex items-center gap-4 '>
                    <a href="">
                        <Image 
                            src={LinkedinLogo}
                            alt='linkedin'
                            className='w-[28px] h-[28px]'
                        />
                    </a>
                    <a href="">
                        <Image 
                            src={TwitterLogo}
                            alt='twitter'
                            className='w-[28px] h-[28px]'
                        />
                    </a>
                </article>
            </div>
            <div className='bg-white lg:pl-10 col-span-3 border border-[#E7E7E7]'>
                <GetInTouchForm />
            </div>
        </div>
    </div>
  )
}


const ContactBulletPoint = ({imageSrc, className, children}: {imageSrc: string, className?: string, children: React.ReactNode}) => {
    return (
        <div className={`flex items-start gap-4 ${className}`}>
            <Image width={40} height={40} src={imageSrc} alt="bullet point" />
            <div>
                {children}
            </div>
        </div>
    )
}