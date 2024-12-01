import Image from 'next/image'
import React from 'react'
import LogoWhite from '@/public/logo-white.png'
import LinkedinLogo from '@/public/linkedin.png'
import TwitterLogo from '@/public/twitter.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full bg-[#101427] pt-8 lg:pt-[56px] pb-[26px] px-6 lg:px-[100px]'>
        <div className='flex justify-between'>
            <Image 
                src={LogoWhite}
                alt='logo'
                className='w-[104px] h-[32px] lg:w-[180px] lg:h-auto'
            />
            <article className='flex items-center gap-4 '>
                <a href="">
                    <Image 
                        src={LinkedinLogo}
                        alt='linkedin'
                        className='w-[28px] lg:w-[36px] h-[28px] lg:h-[36px]'
                    />
                </a>
                <a href="">
                    <Image 
                        src={TwitterLogo}
                        alt='twitter'
                        className='w-[28px] lg:w-[36px] h-[28px] lg:h-[36px]'
                    />
                </a>
            </article>
        </div>
        {/* <article className='items-center space-x-12 text-white flex lg:hidden pt-4'>
            <a href="">
                Services
            </a>
            <a href="">
                Contact us
            </a>
        </article> */}
        <p className='text-white text-sm mt-6'>
            At Tech Katalyst, our mission is to empower businesses with innovative technology solutions that drive transformative growth and operational efficiency, delivering exceptional results in a rapidly evolving digital landscape. We don&apos;t just create solutions—we ensure they are strategically aligned with your business objectives to generate lasting impact and propel you ahead of the competition.
        </p>
        <hr className='border-solid border-t-[#ffffff3d] my-[32px] lg:my-10' />
        <p className='font-semibold text-white'> Our services </p>
        <div className='flex flex-wrap gap-4 mt-5'>
            <Link className='text-sm text-white' href="/services/market-research"> Market Research </Link>
            <Link className='text-sm text-white' href="/services/product-management"> Product Management </Link>
            <Link className='text-sm text-white' href="/services/web-development"> Web development </Link>
            <Link className='text-sm text-white' href="/services/mobile-app-development">Mobile App development</Link>
            <Link className='text-sm text-white' href="/services/analytics-data-science">Analytics & Data Science</Link>
            <Link className='text-sm text-white' href="/services/ui-ux-design">Product UI/UX design</Link>
        </div>
        <hr className='border-solid border-t-[#ffffff3d] my-[32px] lg:my-10' />
        <div className='flex gap-20 text-white'>
            <Link className='text-sm text-white' href="/about-us">About us</Link>
            <Link className='text-sm text-white' href="/contact-us">Contact us</Link>
        </div>
        <p className='text-sm text-[rgba(255,255,255,0.6)] mt-6 lg:text-center'>
            © Copyright 2024, All Rights Reserved by Tech Katalyst
        </p>
    </div>
  )
}

export default Footer