import { poppinsBold } from '@/helpers/fonts'
import React from 'react'
import ClientCard from './ClientCard'
import Person1 from '@/public/person1.png'
import Person2 from '@/public/person2.png'
import Person3 from '@/public/person3.png'

export const AboutClients = () => {
  return (
    <div className='mt-[40px] lg:mt-[120px] px-[24px] lg:px-[100px]'>
        <h3 className={`${poppinsBold.className} italic text-5xl text-center font-bold`}>
            What client say
        </h3>
        <article className='pt-7 lg:pt-14 flex flex-col lg:flex-row justify-between gap-[16px] lg:gap-x-6'>
            <ClientCard name='Karthik Tyagi' profilePic={Person1} review='We have been associated with Laundris Laundry Service for almost a year and in short have been extremely pleased. Their service has been excellent and the entire organization is dedicated towards professionalism.' />
            <ClientCard name='Rishabh Jain' profilePic={Person2} review='We have been associated with Laundris Laundry Service for almost a year and in short have been extremely pleased. Their service has been excellent and the entire organization is dedicated towards professionalism.' />
            <ClientCard name='Gaurav Singh' profilePic={Person3} review='We have been associated with Laundris Laundry Service for almost a year and in short have been extremely pleased. Their service has been excellent and the entire organization is dedicated towards professionalism.' />
        </article>
    </div>
  )
}

export default AboutClients