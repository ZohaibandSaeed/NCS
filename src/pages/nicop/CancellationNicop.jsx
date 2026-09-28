import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'

export default function CancellationNicop() {
  const pageData = {
    title: 'Cancellation of NICOP / Nadra Card',
    desc: 'If you need to cancel your NICOP due to surrendering Pakistani nationality, or in the unfortunate event of the death of a family member, Nadra Card Centre UK can assist you with the formal cancellation process. We ensure all paperwork is properly filed to update the NADRA database accurately and swiftly.',
    heading: 'Reasons for NICOP Cancellation',
    benefits: [
      'Surrendering of Pakistani Nationality (for dual nationals where restricted)',
      'Reporting the death of a Pakistani citizen to update records',
      'Avoid potential misuse of the identity document',
      'Comply with international and Pakistani legal requirements',
      'Dedicated support for sensitive cases',
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="Cancellation NICOP" 
        breadcrumb="Cancellation NICOP" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Process for Cancellation of NICOP</h2>
          <p className="mb-6 leading-relaxed">
            The cancellation of a NADRA card is a formal process required in cases such as the surrendering of Pakistani nationality or the passing away of a citizen. Our team ensures that your cancellation request is processed efficiently with the required documentation.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents for Cancellation</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Original NICOP/CNIC of the applicant (if available)</li>
            <li>Valid foreign passport showing new nationality (for surrendering nationality)</li>
            <li>Original death certificate (in case of a deceased citizen)</li>
            <li>Applicant’s proof of relationship with the deceased</li>
            <li>Completed cancellation form</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Nadra Card Centre UK?</h3>
          <p className="mb-8">
            We provide 24/7 support and handle all the paperwork on your behalf. There is no need to visit the embassy or wait in long queues. Simply contact us, submit the required documents online, and we will take care of the rest.
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
