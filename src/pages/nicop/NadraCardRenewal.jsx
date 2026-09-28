import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import renewCardImg from '../../assets/nicop/renewcard.jpeg'

export default function NadraCardRenewal() {
  const pageData = {
    title: 'Nadra Card Renewal Services',
    desc: 'Keeping your Nadra Card valid is crucial for your legal identity and travel needs. Our Nadra Card Renewal services cover all types of identity documents including CNIC, SNIC, and NICOP. We make the renewal process seamless and quick, saving you from long queues and complex paperwork.',
    heading: 'Benefits of Timely Renewal',
    image: renewCardImg,
    benefits: [
      'Avoid travel restrictions and immigration issues',
      'Ensure uninterrupted access to banking and property rights',
      'Keep your biometric and facial records up to date',
      'Hassle-free online service with prompt delivery',
      'Valid ID is required for almost all legal transactions in Pakistan',
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="Nadra Card Renewal" 
        breadcrumb="Nadra Card Renewal" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">NADRA Card Renewal Process</h2>
          <p className="mb-6 leading-relaxed">
            Renewing your NADRA card has never been easier. Whether you hold a CNIC or a NICOP, keeping your identity document valid is crucial for traveling to Pakistan and maintaining your citizenship rights. Our online renewal process is straightforward and fast.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents for Renewal</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Copy of the expired or soon-to-expire NADRA card</li>
            <li>Valid Pakistani or British/Foreign Passport</li>
            <li>Recent passport-sized photograph</li>
            <li>Proof of current residence (if the address needs updating)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Hassle-Free Online Renewal</h3>
          <p className="mb-8">
            Forget about taking a day off work or standing in long queues at the consulate. Submit your documents via our secure online portal or through WhatsApp, and our experts will process your renewal application immediately. We offer various processing times to suit your urgency.
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
