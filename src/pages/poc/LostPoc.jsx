import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import lostCardImg from '../../assets/poc/lostcard.jpeg'

export default function LostPoc() {
  const pageData = {
    title: 'Get Help Now from Nadra Card Centre UK If You Your POC Lost',
    desc: 'It can be frustrating to lose important documents, which is why we at Nadra card centre UK understand that! In addition, when a Pakistan Origin Cardholder loses their POC Nadra Card, it can be an extremely frustrating experience to have to deal with the lengthy process of reprinting the card at the Embassy.\n\nWith so much on the line, we\'re here to help! If you lost your POC card, Nadra card centre UK can renew it without you having to visit the Embassy.',
    heading: 'What to Do If You Lost Your POC Nadra Card',
    image: lostCardImg,
    benefits: [
      'The loss of the POC will result in losing the right to visit Pakistan without a visa for a foreigner.',
      'Pakistan does not allow foreigners to open bank accounts without a POC.',
      'You will also need POC cards when buying or selling a property as a foreigner!',
      'POC cards are mandatory for all foreigners who want to remain connected to Pakistan.',
      'Moreover, you will also lose your identification as a Pakistani citizen if you lose your POC card.',
    ],
  }

  return (
    <>
      <Hero 
        page="poc" 
        title="Lost POC" 
        breadcrumb="Lost POC" 
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
          <p className="mb-8 leading-relaxed">
            Reprinting a Pakistan Origin Card can avoid any issues that may arise due to a lost document. There is a lot of hassle in reprinting your POC application at your Embassy or consulate! However, if your card is lost, stolen, damaged, or destroyed, you can quickly get a new one through the Nadra Card Centre UK website. AS the team of the Nadra card centre UK is always available for your help and to solve your queries through their experienced team.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Application for A Lost POC Through NadraCardsCentre.co.uk</h3>
          <p className="mb-6 leading-relaxed">
            To get your lost POC, you must submit all required documents and pay a one-time fee to Nadra Card Centre UK. NCC (Nadra Card Centre UK) assigns you a case agent to handle all documentation related to your POC Lost request. You will need to provide all the required information about your lost POC and documents for the cancellation of your lost POC card. Your Lost POC card application will be sent to Nadra's Head Office for verification, approval, and reprinting after our agent completes the paperwork. After reprinting the lost POC, the Nadra card centre will deliver it to your desired address.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Reprinting Lost POC Documents Requirements</h3>
          <p className="mb-6 leading-relaxed">
            No one desire to lost their important documents and cards especially when it Pakistan Origin Card. Here at Nadra card centre UK. A Nadra Card can be pretty frustrating to lose, and reprinting it at the Embassy is very time-consuming. Whenever you are in need, you can count on us! When your POC card is lost or you misplace it, Nadra Card Centre UK can assist you in the process of its reprinting without having to visit your Embassy.
          </p>
          <p className="mb-4 font-bold">To get a lost POC, you will need the following documents:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Duplicate cards or exact number on the POC lost.</li>
            <li>A valid passport.</li>
            <li>A recent photo that is at least passport-sized.</li>
            <li>A valid marriage certificate in the case of a lost POC based on the spouse.</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Hassle Free Application for Lost Nadra POC with Nadra Card Centre</h3>
          <p className="mb-8">
            Click on <b>APPLY NOW</b> button and submit your application. You can also contact us through Whatsapp <a href="https://wa.me/447842567985" className="text-emerald-600 font-bold">(+44 7842 567985)</a> and share details to get reprinting (duplicate) for your lost POC (Paskitan Origin Card).
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
