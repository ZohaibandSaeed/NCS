import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import frcSecondImg from '../../assets/frc/frcsecond.jpeg'

export default function FrcRenewal() {
  const pageData = {
    title: 'Want A FRC Renewal Here\'s How Nadra Card Centre UK Can Do',
    desc: 'FRC is a Family Registration Certificate by Nadra for the citizens of Pakistan, which includes information about their family members including parents, children, and spouses. The FRC is typically used for proving blood relations between family members or for visa purposes because it provides information about the family composition.\n\nIn addition to marriage and adoption, FRCs are also used for other purposes hence you don\'t need to renew FRC because these don\'t have expiration dates.',
    heading: 'Family Registration Certificate: When You Need It?',
    image: frcSecondImg,
    benefits: [
      'Using a Family Registration Certificate is one of the ways to identify yourself with NADRA records.',
      'The composition of the family is provided by the FRC.',
      'You can apply for FRC online from the comfort of your own home, without having to come to a NADRA centre.',
      'A certificate by birth lists details about your family members, such as parents and siblings.',
      'For the marriage certificate, you will need to provide information about the names and addresses of your spouse and children.',
      'In case of adoption will need to list your guardian\'s name on the certificate.',
    ],
  }

  return (
    <>
      <Hero 
        page="frc" 
        title="FRC Renewal" 
        breadcrumb="FRC Renewal" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How To Get A Family Registration Certificate?</h2>
          <p className="mb-4 leading-relaxed">
            Family Registration Certificates (FRCs) are issued to applicants, which provide information about their family composition (by birth or marriage) according to their registration in NADRA. Those without 13-digit ID numbers and registered with NADRA won't appear in FRC if they aren't registered with NADRA.
          </p>
          <p className="mb-4 leading-relaxed">
            Despite losing your FRC, you can still print it from the soft copy given to you. You can get a new FRC without any hassle online with the help of the Nadra card centre UK. You will need to provide the required documents and information for your FRC new to the agent of Nadracardscentre.co.uk.
          </p>
          <p className="mb-8 leading-relaxed">
            After the verification of your application, it will pass to the Nadra head office. Hence you will receive your certificate at your doorstep or in your email inbox after the completion of the process.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">A NADRA Family Registration Certificate (FRC) Serves the Following Purposes:</h3>
          <p className="mb-4">
            You can utilize Family Registration Certificate (FRCs) by Nadra in a variety of ways, such as visa processing for immigration, study, and foreign/official visits.
          </p>
          <p className="mb-8">
            Using any NADRA Family Registration Certificate (FRC), before technology advanced as it does today. It was quite a challenge due to the lack of online applications and the single method of applying, which was to visit any NADRA center and submit all necessary documents in person. The advancement of technology, however, has permitted us to take advantage of numerous opportunities previously unavailable over time. As a result, we are becoming more and more able to do so.
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
