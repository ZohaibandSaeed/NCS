import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import renewCardImg from '../../assets/poc/renewcard.jpeg'

export default function PocRenewal() {
  const pageData = {
    title: 'Visit Nadra Card UK for Hassle Free POC Renewal',
    desc: 'If the POC is valid, it will allow the holder to travel and stay in Pakistan without requiring a visa, even after renunciation of their Pakistani nationality. Pakistani nationals who have renounced their nationality can apply for Pakistan Origin Cards (POCs).\n\nEvery POC holder is required to renew their card when it has surpass the expiry date. You can be recognized as Pakistan from it, that you have a Pakistani connection. You must have a POC card if you are a spouse or husband of a Pakistani national. Keep checking the expiry date of your POC card, as it does not last very long and you need to renew your POC card after the expiration.\n\nThere is a five-year validity period for POC cards. You cannot enter Pakistan without a visa if your POC card is about to expire, so you need to renew it as soon as possible.',
    heading: 'Pakistan Origin Card: Where to Renew It?',
    image: renewCardImg,
    benefits: [
      'The embassy no longer requires you to visit it to renew your POC.',
      'Online POC Renewal is available at Nadra Cards Centre UK website.',
      'Getting a POC application and verification done at Nadra Cards Centre UK website will be hassle-free!',
      'You don\'t have to worry about filling out and submitting your application form!',
      'We handle it for you with the details you have provided.',
    ],
  }

  return (
    <>
      <Hero 
        page="poc" 
        title="POC Renewal" 
        breadcrumb="POC Renewal" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Online POC Renewal: How Do I Do It?</h2>
          <p className="mb-4 leading-relaxed">
            It's never been easier process to renew a POC card! Hence to get your POC renewed online, you can simply apply through the Nadra cards centre UK website.
          </p>
          <p className="mb-4 leading-relaxed">
            The agent of Nadra Cards Centre UK will process the application for your POC Nadra card renewal.
          </p>
          <p className="mb-4 leading-relaxed">
            Your application processing starts after all the required documents are submitted, and it is forwarded to the Nadra Head Office. Upon receipt of your renewal application, the Nadra Head Office processes it, verifies it, and sends it for printing.
          </p>
          <p className="mb-8 font-semibold text-emerald-800">
            You will receive your card at your doorstep shortly after this!
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Renewal Of the POC Requires the Following Documentation</h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>An image the size of a passport is required to renew the POC card.</li>
            <li>An image of your passport's front page.</li>
            <li>A printed copy of your Pakistani passport and ID card.</li>
            <li>To apply for a POC card, you must complete the NADRA affidavit by a Pakistani national.</li>
            <li>An English-language marriage certificate.</li>
            <li>Parents' passports of the applicant.</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeframe for Processing and Delivering Your POC</h3>
          <p className="mb-4">
            Your application to renew your POC card can take between 2 to 3 weeks to process. If there are problems with verification or incomplete/invalid information, it can lead to late delivery.
          </p>
          <p className="mb-8">
            In the <Link to="/apply-now" className="text-emerald-600 hover:underline">POC application form</Link>, you indicate the UK address at which you would like to receive your Pakistan Origin Card.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC (Pakistan Origin Card) Fees for The Renewal</h3>
          <p className="mb-4">
            Different modes of delivery are available for POC applications. Depending on your choice, you'll also have to pay a different application fee.
          </p>
          <p className="mb-8">
            For Normal Renewal delivery of the POC card and for executive delivery. Kindly make a call on <a href="tel:02081441298" className="text-emerald-600 font-bold">02081441298</a> or send us message on Whatsapp <a href="https://wa.me/447842567985" className="text-emerald-600 font-bold">+44 7842 567985</a>. You can also send us email on <a href="mailto:support@nadracardscentre.co.uk" className="text-emerald-600 font-bold">support@nadracardscentre.co.uk</a> regarding any queries for fees or delivery time.
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
