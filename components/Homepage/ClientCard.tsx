import { poppinsBold } from '@/helpers/fonts'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ClientCard = ({ profilePic, name, review } : { profilePic: StaticImageData, name: string, review: string }) => {
  return (
    <div className='border border-[#E7E7E7] p-6'>
        <Image 
            src={profilePic}
            alt='profile-pic'
            className='w-[72px] h-[72px] rounded-full'
        />
        <p className={`pt-4  text-sm`}>
            {review}
        </p>
        <p className='w-[32px] h-[6px] bg-[#9EE463] my-4'></p>
        <p className={`${poppinsBold.className} italic`}>{name}</p> 
    </div>
  )
}

export default ClientCard