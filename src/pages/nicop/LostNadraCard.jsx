import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import lostCardImg from '../../assets/nicop/lostcard.jpeg'

export default function LostNadraCard() {
  const pageData = {
    title: 'Apply for Lost Nadra Card Online',
    desc: 'Have you misplaced your NICOP or POC? Don\'t worry, Nadra Card Centre UK provides an easy and streamlined process to replace your lost Nadra card. It is essential to report a lost ID to prevent identity theft. Our online service lets you apply for a reprint or replacement without visiting an embassy.',
    heading: 'Steps for Lost Card Replacement',
    image: lostCardImg,
    benefits: [
      'Report your lost card to prevent unauthorized use',
      'Simple online application for a reprint',
      'Secure processing of your personal information',
      'Delivery of your new card directly to your doorstep',
      'Expert assistance throughout the application process',
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="Lost Nadra Card" 
        breadcrumb="Lost Nadra Card" 
      />
      <IntroSection data={pageData} />
      
      {/* Apply Now Button after Intro */}
      <div className="flex justify-center pb-12 bg-white">
        <Link 
          to="/apply-now" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Apply Now
        </Link>
      </div>

      <WhatsAppBanner />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply for a Duplicate NICOP</h2>
          <p className="mb-6 leading-relaxed">
            If you have lost your NADRA card, there is no need to panic. We offer a fast-track service to help you obtain a duplicate card. The process is simple, entirely online, and designed to minimize any disruption to your travel or legal requirements.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents for a Lost Card Application</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>A copy of your lost NICOP or the 13-digit NADRA tracking number</li>
            <li>Valid Pakistani or foreign passport copy</li>
            <li>Proof of address in the UK (if the address needs updating)</li>
            <li>A police report may be requested in some specific cases</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Urgent Replacement Service</h3>
          <p className="mb-8">
            Time is critical when replacing a lost identity document. By choosing our Executive or Urgent services, your application will be prioritized and processed as fast as possible, allowing you to receive your replacement card promptly without any hassle.
          </p>
          
          <div className="flex justify-center pt-4">
            <Link 
              to="/apply-now" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 no-underline"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
