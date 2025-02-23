import React from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Common/Sidebar'

export const Header = () => {
  return (
    <div className='flex justify-between py-6 lg:py-10 px-6 lg:px-[80px] xl:px-[100px] items-center relative z-[1000]'>
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[130px] lg:w-[216px] h-[40px] lg:h-[66px]" /> 
        </Link>
        <article className={`hidden lg:flex items-center lg:space-x-10 xl:space-x-20 font-medium`}>
            <Link className='uppercase font-medium hover:text-[#5A3AEC]' href="/"> Home </Link>
            <Link className='uppercase font-medium hover:text-[#5A3AEC]' href="/about-us"> About us </Link>
            {/* <Link className='uppercase font-medium hover:text-[#5A3AEC]' href="/blogs"> Blogs </Link> */}
            <div className="relative group">
                <button className='uppercase font-medium flex items-center hover:text-[#5A3AEC]'>
                    Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className="absolute -left-full top-[170%] opacity-0 group-hover:opacity-100 flex hover:opacity-100 w-64 bg-[#fff]  shadow-2xl mt-2 py-2 rounded-sm z-[1000] flex-col transition-opacity duration-300">
                  {/* <Image 
                      src="/right-arrow.png"
                      alt='right-arrow'
                      className='absolute color-transparent translate-x-[-50%] right-[40%] top-[-31px] rotate-[270deg]'
                      width={24}
                      height={28}
                  /> */}
                  <Link className='block px-4 py-2 hover:bg-[#5A3AEC] hover:text-white' href="/services/mobile-app-development">
                    Mobile App Development
                  </Link>
                  <Link className='block px-4 py-2 hover:bg-[#5A3AEC] hover:text-white' href="/services/web-development">
                    Web Development
                  </Link>
                  <Link className='block px-4 py-2 hover:bg-[#5A3AEC] hover:text-white' href="/services/ui-ux-design">
                    UI/UX Design
                  </Link>
                  <Link className='block px-4 py-2 hover:bg-[#5A3AEC] hover:text-white' href="/services/market-research">
                    Market Research
                  </Link>
                  <Link className='block px-4 py-2 hover:bg-[#5A3AEC] hover:text-white' href="/services/product-management">
                    Product Management
                  </Link>
                  <Link className='block px-4 py-2 hover:bg-[#5A3AEC] hover:text-white' href="/services/analytics-data-science">
                    Analytics & Data science
                  </Link>
                </div>
            </div>
            <Link className='bg-[#5A3AEC] py-3 px-8 text-white rounded-sm font-medium' href="/contact-us"> Contact us </Link>
        </article>
        <Sidebar />
    </div>
  )
}

export default Header