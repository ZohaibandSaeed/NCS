import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import modifyImg from '../../assets/nicop/modify.jpeg'

export default function ModificationNadraCard() {
  const pageData = {
    title: 'Modification in Nadra Card / NICOP',
    desc: 'Need to update your details on your NICOP? Whether it\'s a change in marital status, a new address, or correcting a spelling mistake, we can help you apply for a modification in your Nadra Card. Our team will review your supporting documents to ensure a smooth update process.',
    heading: 'When to Apply for Modification',
    image: modifyImg,
    benefits: [
      'Change of marital status (Adding spouse name)',
      'Update of permanent or present address',
      'Correction of name, date of birth, or parent\'s details',
      'Upgrading signature or photograph',
      'Ensuring your official ID reflects your current accurate details',
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="Modification Nadra Card" 
        breadcrumb="Modification Nadra Card" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Update Your NICOP Details</h2>
          <p className="mb-6 leading-relaxed">
            If your personal details have changed, it is highly recommended to update your NADRA card as soon as possible to avoid any legal or travel issues. Whether you have recently married, moved to a new house, or found an error in your card, we offer a fast online modification service.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents for Modification</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Copy of your current NICOP/CNIC</li>
            <li>Valid Pakistani or foreign passport</li>
            <li>Marriage certificate (for marital status update)</li>
            <li>Proof of new address (for address change)</li>
            <li>Matriculation certificate or court order (for name/DOB change)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Online Process</h3>
          <p className="mb-8">
            You don't need to visit the consulate or embassy. With Nadra Card Centre UK, you can submit your modification application online. Our experts will verify your documents, process the application, and get your updated card delivered to your home.
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
