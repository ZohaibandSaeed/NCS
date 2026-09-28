import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import renewCardImg from '../../assets/nicop/renewcard.jpeg'

export default function NicopRenewal() {
  const pageData = {
    title: 'Apply Now For Nadra Card Renewal- NICOP Renewal',
    desc: 'If you are a Pakistani citizen living in the UK and your National Identity Card for overseas Pakistanis or smart NICOP has expired, been lost or damaged, it is very important to renew it. You can conveniently renew your National Identity Card for overseas Pakistanis with the assistance of a trusted service provider offering online NICOP application support at nadracardscentre.co.uk. Our experts assist you throughout the complete end-to-end process of your online NICOP renewal. We provide hassle-free services for overseas Pakistanis, allowing them to renew their NICOP from home without visiting the consulate. CNIC and NICOP are both national identification cards. These cards share the same citizenship number or nadra ID number. The only difference between the smart ID card and the smart NICOP is the microchip.',
    heading: 'How to renew NICOP online from the UK?',
    image: renewCardImg,
    benefits: [
      'Travel to Pakistan without the need for a visa',
      'Maintain your status and rights as a Pakistani citizen',
      'Required for property transactions in Pakistan',
      'Necessary for banking and financial matters in Pakistan',
      'Seamless application process with our dedicated support',
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="NICOP Renewal Online" 
        breadcrumb="NICOP Renewal Online" 
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

      {/* Extra Sections from Original Website */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the process for a NICOP renewal UK to have hassle-free travelling?</h2>
          <p className="mb-6 leading-relaxed">
            <b>National Identity Card for Overseas Pakistanis</b> (NICOP) is the only form of identification that allows you to travel internationally, so if you don't have one, you can't travel. If your Pakistani passport has expired and you are planning to travel, you can easily apply online for your NICOP renewal Uk and Pakistani passport through Pak identity app without any hassle. nadracardscentre.co.uk provides 24/7 assistance in applying to NICOP.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Renew Your NICOP in the UK</h3>
          <p className="mb-4">Our application process is simple and hassle-free, making it easy to renew Nicop online Uk by using Pak identity with confidence.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 1: Connect With Our Team</h4>
          <p className="mb-4">Visit the website then click our WhatsApp, call our agent or either you can email to us. Then our support team will contact you and will answer the queries submitted by you.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 2: Submit the Query:</h4>
          <p className="mb-4">After receiving your message, email, or call, a member of our team will send you an enquiry link based on your requirements. Simply complete the form and submit your enquiry, and our team will get back to you shortly.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 3: Complete Your Application</h4>
          <p className="mb-2">Our team of experts will guide you throughout the process of your application submission. Thins you need to check carefully before submission of your application form:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Name</li>
            <li>Date of Birth</li>
            <li>Father Name</li>
            <li>Spouse data</li>
            <li>Present address</li>
            <li>Permanent address</li>
          </ul>
          <p className="mb-4">Because correct information reduces your approval time.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 4: Biometric Verification</h4>
          <p className="mb-4">Where it is required to provide one of your relative biometric verification according to the given instructions.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 5: Application Processing</h4>
          <p className="mb-4">After verifying all the documents and information provided, we will proceed with processing your application.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 6: Get Your Renewed NICOP</h4>
          <p className="mb-8">Once your NICOP is approved your NICOP will be delivered according to the service and address selected by you.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What Documents are required for Nicop Renewal UK?</h3>
          <p className="mb-4">For the NICOP Renewal online, applicants must provide the following documents:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><b>Valid Identification Proof:</b> A scanned copy of your national identification card and a valid old passport are required as proof of identification.</li>
            <li><b>Residential Proof:</b> In case you want to change the address on your card, you have to provide proof of residence.</li>
            <li><b>Supporting Documentation:</b> When updating the information on your card, supporting documents may be required.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Fees associated with an identity card renewal service</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Smart NICOP (Normal) service fee £89, processed in 6-7 working weeks.</li>
            <li>Smart NICOP (Urgent) service fee £130, processed in 3-4 working week.</li>
            <li>Smart NICOP (Executive) service fee £150, processed in 7-10 working days.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">FAQs</h3>
          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">How long does a NICOP renewal UK last?</h4>
              <p>Normally, a NICOP renewal for overseas Pakistanis will bring a 10-year extension to the life of the card through the Pakistani id card. However, in the case of children, the NICOP renewal lasts for 5 years.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Where can I apply for the NICOP renewal online?</h4>
              <p>You can have the Pakistan national identity card renewal from the Nadra Cards Centre. The best available third-party service provider that is keen to provide you with hassle-free online services to renew the NICOP card.</p>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Link 
              to="/apply-now" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
