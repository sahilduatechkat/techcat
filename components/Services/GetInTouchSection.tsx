import Image from 'next/image'
import React, { useState } from 'react'
import { InputComponent } from './InputComponent'

export const ContactImage = () => {
    return (
        <Image 
            src="/images/services/contact-us.png"
            alt="get in touch"
            width={464}
            height={514}
            className='hidden lg:block'
        />
    )
}

export const GetInTouchSection = () => {

    return (
        <div className='standard-margin-top bg-[#5A3AEC] px-6 lg:px-[100px] py-12 lg:py-20'>
            <div className=' bg-white flex items-stretch xl:gap-[60px]'>
                <ContactImage />
                <GetInTouchForm />
            </div>
        </div>
    )
}

export const GetInTouchForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        mobile: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="p-6 lg:py-10 xl:pr-[60px] w-full">
            <h6 className='text-[#101828] text-2xl xl:text-[28px] font-bold'>
                Get in touch
            </h6>
            <p className='text-[#6A6A6A] text-sm'>
                We&apos;d love to hear from you. Please fill out this form.
            </p>
            <form className='mt-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6'>
                    <InputComponent label="Name" placeholder="Enter your name" value={formData.name} onChange={(e) => handleChange(e)} className="w-full" name="name" />
                    <InputComponent label="Email id" placeholder="Email id" value={formData.email} onChange={(e) => handleChange(e)} className="w-full" name="email" />
                    <InputComponent label="Company" placeholder="Enter website link" value={formData.company} onChange={(e) => handleChange(e)} className="w-full" name="company" />
                    <InputComponent label="Mobile number" placeholder="Enter mobile number" value={formData.mobile} onChange={(e) => handleChange(e)} className="w-full" name="mobile" />
                </div>
                <InputComponent label="Message" placeholder="Enter your message" value={formData.message} onChange={(e) => handleChange(e)} className="w-full my-6" name="message" type="textarea" />
                <button className='text-sm bg-[#5A3AEC] lg:text-lg xl:text-xl hover:bg-[#9EE463] hover:text-[#5A3AEC] transition-all duration-300 font-medium text-white px-6 py-3 w-full'>
                    Submit
                </button>
            </form>
        </div>
    )
}
