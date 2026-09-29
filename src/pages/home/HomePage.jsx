import React from 'react'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import HomeDetailedContent from '../../components/HomeDetailedContent'
import InfoBanner from '../../components/InfoBanner'
import ServicesGrid from '../../components/ServicesGrid'
import ContactBanner from '../../components/ContactBanner'
import ProcessSteps from '../../components/ProcessSteps'

export default function HomePage() {
  return (
    <>
      <Hero page="home" />
      <IntroSection page="home" />
      <ServicesGrid />
      <HomeDetailedContent />
      <InfoBanner />
      <ContactBanner />
      <ProcessSteps />
    </>
  )
}
