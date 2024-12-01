import React from 'react'
import Image from 'next/image'
export const ClientsWeServed = () => {
    const clientImages = [
        "/magicpin.png",
        "/bluebayhome.png",
        "/fabrikcare.png",
        "/filo.png",
        "/oyerickshaw.png",
        "/wheelseye.png",
    ]

    return (
        <div className='standard-margin-top px-6 lg:px-[100px]'>
            <h6 className='text-xl text-center lg:text-[40px] xl:text-5xl font-bold text-[#212121] mb-6 lg:mb-[56px]'>
                Clients We’ve Worked With
            </h6>
            <div className='flex flex-wrap justify-center gap-3 lg:gap-6'>
                {clientImages.map((image, index) => (
                    <Image className='w-[100px] h-[50px] lg:w-[160px] lg:h-[80px]' src={image} alt={`client-${index}`} width={160} height={80} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ClientsWeServed