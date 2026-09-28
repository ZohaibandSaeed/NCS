import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import frcFirstImg from '../../assets/frc/frcfirst.jpeg'

export default function NewFrc() {
  const pageData = {
    title: 'Need a FRC Really Quick Contact Now Nadra Card Centre UK',
    desc: 'The National Database Regulatory Authority\'s (NADRA) records of family composition and your identity are verified by your Family Registration Certificate (FRC). Everyone needs visas to fly overseas, usually to pursue higher education, immigration, or official business, and certificates are an integral part of that process.\n\nAs a result, NADRA Family Registration Certificate or FRC is one of the most crucial requirements for obtaining power of attorney when selling or purchasing properties on behalf of others. Would you also like to apply for a new FRC but are unsure of the process? Please don\'t worry; we\'ll take care of it at Nadra card centre UK.',
    heading: 'Categories for the Application Of FRC',
    image: frcFirstImg,
    benefits: [
      'FRC by Birth: contains information about your parents and siblings, as well as information about your spouse.',
      'FRC by Marriage: includes the details of your spouse and children.',
      'FRC by Adoption: includes details about your guardian in case of adoption.',
    ],
  }

  return (
    <>
      <Hero 
        page="frc" 
        title="New FRC" 
        breadcrumb="New FRC" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ways to Apply for The Nadra Family Registration Certificate</h2>
          <p className="mb-4 leading-relaxed">
            You can apply for the new FRC card in the following two ways:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Visit the NADRA office</li>
            <li>Online via Nadra card centre UK's website</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nadra Office Application Process</h3>
          <p className="mb-4">
            Following the step-by-step instructions below visit your nearest NADRA Registration Center (NRC) to apply for a new FRC:
          </p>
          <ul className="list-decimal pl-6 mb-8 space-y-2">
            <li>Your first step will be to receive a token and then wait for your turn.</li>
            <li>Your name is called out and directed to your respective counter.</li>
            <li>A picture of you will be taken after your name is called out.</li>
            <li>Make sure that your data matches the existing NADRA records before you enter your data and review it.</li>
            <li>You will receive your FRC after smoothly completing all the above steps.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Process to Apply for Nadra Family Registration Certificate Online Via Nadra Card Centre UK</h3>
          <p className="mb-4">
            Here's how to Apply for NADRA Family Registration Certificate Online through the Nadra card centre UK:
          </p>
          <ul className="list-decimal pl-6 mb-8 space-y-2">
            <li>Visit the Nadra card centre UK online portal.</li>
            <li>Sign up for an account.</li>
            <li>Start your application by clicking on APPLY NOW button and selecting a relevant category.</li>
            <li>You will need to enter the details of your information in the online FRC application form.</li>
            <li>Use a debit card or credit card for the NADRA FRC new fee.</li>
            <li>When applying for NADRA FRC new online, you will need to scan and upload your passport-sized photo and carefully apply your finger imprints to the designated fields.</li>
            <li>Take care of all the details while uploading the required documents and filling in the information for the FRC application.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Remember These Key Points</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Locals, as well as overseas Pakistanis, can make online payments with credit card.</li>
            <li>Only overseas applicants can use a debit card to make payments.</li>
            <li>NADRA's e-Sahulat franchise also requires applicants to reside in Pakistan to make payments.</li>
            <li>It is recommended that the photographs uploaded with the form have dimensions not more diminutive than 350 x 467. Upload passport-size images with a white background.</li>
            <li>Take pictures professionally with the help of a sharp camera and upload a picture that is six months old.</li>
          </ul>
          
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
