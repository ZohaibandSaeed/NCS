import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import newCardImg from '../../assets/poc/newcard.jpeg'

export default function NewPoc() {
  const pageData = {
    title: 'Apply Your New POC Online with Nadra Card Centre UK',
    desc: 'The national identity card for overseas Pakistani (NICOP) is required for Pakistani nationals planning to migrate or move abroad to pursue educational or career goals. To visit and regularly work in Pakistan, Pakistani overseas residents and foreigners should apply for a new POC (Pakistan Origin Card), which offers many benefits.\n\nPakistan Origin Card (POC) applications can now be quickly submitted online with desktop and mobile platforms from anywhere in the world through nadracardscentre.co.uk. Interested in finding out how?\n\nLet\'s get started. Nadra card centre UK helps to apply for the POC new card online.',
    heading: 'Some Benefits of POC',
    image: newCardImg,
    benefits: [
      'Entry into Pakistan without a visa multiple times.',
      'Ignore all government registration forms, including the foreigner registration office, or leave Pakistan indefinitely without filing a police report.',
      'It is possible to purchase and sell movable and immovable property, including ownership, dealing with, and disposal in Pakistan.',
      'Bank accounts can be opened and used in Pakistan.',
      'The country has designated routes, ports, and locations for swift immigration into and out of the country.',
      'National Identity Card can be replaced with proof of identity.',
      'There is a possibility of finding work.',
    ],
  }

  return (
    <>
      <Hero 
        page="poc" 
        title="New POC" 
        breadcrumb="New POC" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How To Apply for New POC Online</h2>
          <p className="mb-4 leading-relaxed">
            Here is an overview of the online application process for the new POC (Pakistan Origin Card), which you can access both on mobile and on desktop at the website of Nadra card centre UK.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Click on <b>APPLY NOW</b> button and select the NEW POC option and enter your basic details mentioned in the form.</li>
            <li>You will receive a confirmation email and SMS once you have entered all the required information.</li>
            <li>Choose the type of query you want. A new card may be requested, a renewal application submitted, data modified, or a POC cancel.</li>
            <li>One of Nadra Card Centre UK representatives will contact you back for further processing.</li>
            <li>Your application process will begin once you select your preferred option. All documents must be attached in the online form.</li>
            <li>Payment for your new POC application can be made online by providing your debit or credit card details.</li>
          </ul>
          <p className="mb-8 font-semibold text-emerald-800">
            You can call us on 02081441298 or Whatsapp us on +44 7526 583434 anytime to get assistance.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents for New POC Application</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Are you looking for information about Pakistan Origin Card (POC) requirements? NADRA's official website lists the following documents. Check it out!</li>
            <li>Nadra card centre UK must receive the original card and a copy of the CNIC/NICOP.</li>
            <li>If applicants are over 21, they must request cancellation of the CNIC/CRC/NICOP before applying for a new POC.</li>
            <li>A foreign national's application requires an affidavit.</li>
            <li>The NICOP application is recommended for overseas Pakistanis with dual nationalities who have renounced their Pakistani CNIC.</li>
            <li>Documents proving your relationship with Pakistani parents/grandparents, including CNICs, POCs, NICOPs, and passports.</li>
            <li>Describe the relationship you have with your siblings/relatives who are Pakistani citizens and provide their CNIC/POC/passport.</li>
            <li>Your spouse's CNIC/NICOP/Passport and attested copy of their marriage certificate.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">To Qualify for POC (Pakistan Origin Card), You Must</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Having surrendered your Pakistani citizenship, you were previously a Pakistani national.</li>
            <li>Your parents are of Pakistani origin or ever held Pakistani citizenship, and you are a foreign national married to a Pakistani citizen.</li>
            <li>Your parents or grandparents were Pakistani nationals, and you are a foreign national.</li>
            <li>A Pakistani relative is or was a Pakistani national, and you are a foreign national.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Go with Nadra Card Centre UK</h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2 font-semibold text-gray-800">
            <li>We will save your time.</li>
            <li>co.uk is 100% Legitimate.</li>
            <li>You will receive the card at your doorstep.</li>
            <li>Professional team to handle all processes.</li>
            <li>Everything is available on the internet.</li>
            <li>One solution for all Nadra card-related concerns.</li>
          </ol>
          
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
