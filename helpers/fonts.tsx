import { Poppins } from "next/font/google"

export const poppins = Poppins({
    weight: ['100', '500', '900'],
    // weight: ['500', '900'],
    subsets: ['latin'],
})

export const poppinsMedium = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})

export const poppinsItalic = Poppins({
    weight: ['700'],
    subsets: ['latin'],
    style: 'italic'
})

export const poppinsBold = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})