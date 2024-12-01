'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { HeroSection } from '@/components/Services/HeroSection'
import { services } from '@/helpers/constants'
import { OfferingsSection } from '@/components/Services/OfferingsSection'
import { WhyChooseUsSection } from '@/components/Services/WhyChooseUsSection'
import { WhyUsSection } from '@/components/Services/WhyUsSection'
import { HowItWorksSection } from '@/components/Services/HowItWorksSection'
import { GetInTouchSection } from '@/components/Services/GetInTouchSection'
import { FaqSection } from '@/components/Services/FaqSection'
import { OtherQuestionsSection } from '@/components/Services/OtherQuestionsSection'

export default function ServicePage() {
  const params = useParams()
  const serviceName = params.serviceName as string
  const service = services[serviceName as keyof typeof services]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="min-h-screen">
      <HeroSection title={service.heroSection.title} heading={service.heroSection.heading} subheading={service.heroSection.description} />
      <OfferingsSection title={service.offeringsSection.title} offerings={service.offeringsSection.offerings} />
      <WhyChooseUsSection title={service.whyChooseUsSection.title} description={service.whyChooseUsSection.description} points={service.whyChooseUsSection.points} />
      <WhyUsSection heading={service.WhyUsSection.heading} title={service.WhyUsSection.title} points={service.WhyUsSection.points} />
      <HowItWorksSection points={service.howItWorksSection} />
      <GetInTouchSection />
      <FaqSection faq={service.faqSection} />
      <OtherQuestionsSection />
    </div>
  )
}
