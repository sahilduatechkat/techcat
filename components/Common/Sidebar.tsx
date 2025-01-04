"use client"

import { Link } from '@mui/material'
import { AlignJustify, X } from 'lucide-react'
import React, { useState } from 'react'

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(true)
    
    const toggleOpen = () => {
        setOpen(!open)
        if(!open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }

    return (
        <div className='block lg:hidden h-[34px]'>
            <button onClick={toggleOpen}>
                { open ? 
                    <X size={34} className='bg-[#5A3AEC] p-2 rounded-full' color='white' /> 
                    : 
                    <AlignJustify size={34} className='bg-[#5A3AEC] p-2 rounded-full' color='white' /> 
                }
            </button>
            <div className={`w-full h-screen bg-white flex flex-col gap-6 justify-start text-center text-[#212121] absolute left-0 top-full z-10 transition-all duration-300 ${open ? 'max-h-[1000px] opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden p-0'}`}>
                <Link style={{ color: "#212121", textDecoration: 'none', fontWeight: '600' }} className='uppercase text-[#212121] no-underline' href="/"> Home </Link>
                <Link style={{ color: "#212121", textDecoration: 'none', fontWeight: '600' }} className='uppercase text-[#212121] no-underline' href="/about-us"> About us </Link>
                {/*<Link style={{ color: "#212121", textDecoration: 'none', fontWeight: '600' }} className='uppercase text-[#212121] no-underline' href="/blogs"> Blogs </Link> */}
                <div className=''>
                    <button 
                        className='uppercase font-semibold flex items-center justify-self-center mx-auto'
                        onClick={() => setDropdown(!dropdown)}
                    >
                        Services
                        <svg className={`w-4 h-4 ml-1 inline ${!dropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ${!dropdown ? 'max-h-0' : 'max-h-full mt-2'}`}>
                        <Link style={{ color: "#212121", fontWeight: '600', textDecoration: 'none' }} className='text-[#212121] font-semibold no-underline px-4 py-2 hover:bg-gray-100' href="/services/mobile-app-development">
                            Mobile App Development
                        </Link>
                        <Link style={{ color: "#212121", fontWeight: '600', textDecoration: 'none' }} className='text-[#212121] font-semibold no-underline px-4 py-2 hover:bg-gray-100' href="/services/web-development">
                            Web Development
                        </Link>
                        <Link style={{ color: "#212121", fontWeight: '600', textDecoration: 'none' }} className='text-[#212121] font-semibold no-underline px-4 py-2 hover:bg-gray-100' href="/services/ui-ux-design">
                            UI/UX Design
                        </Link>
                        <Link style={{ color: "#212121", fontWeight: '600', textDecoration: 'none' }} className='text-[#212121] font-semibold no-underline px-4 py-2 hover:bg-gray-100' href="/services/market-research">
                            Market Research
                        </Link>
                        <Link style={{ color: "#212121", fontWeight: '600', textDecoration: 'none' }} className='text-[#212121] font-semibold no-underline px-4 py-2 hover:bg-gray-100' href="/services/product-management">
                            Product Management
                        </Link>
                        <Link style={{ color: "#212121", fontWeight: '600', textDecoration: 'none' }} className='text-[#212121] font-semibold no-underline px-4 py-2 hover:bg-gray-100' href="/services/analytics-data-science">
                            Analytics and Data science
                        </Link>
                    </div>
                </div>
                <Link style={{ background: "#5A3AEC", color: "#fff", margin: "0 12px", padding: "12px 24px", fontWeight: "medium", textDecoration: 'none' }} href="/contact-us">
                    Contact us
                </Link>
            </div>
        </div>
  )
}

export default Sidebar