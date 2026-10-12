import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import renewCardImg from '../../assets/nicop/renewcard.jpeg'

export default function NadraCardRenewal() {
  const pageData = {
    title: 'nadra card Renewal UK',
    desc: 'For nadra card in the UK you can apply for the nadra card Renewal Online. Looking to renew nadra card in UK? The Pakistani nadra card renewal application process is easy, simple and convenient as it can be completed online from anywhere in the UK. When the nadra card is about to expire or has already expired you can submit your Pakistani nadra card renewal application online without any hassle. Fill out the application form on our website submit the documents and information required and our team will take you through the rest of the steps. Whether you need a normal application or a quicker service our nadra card renewal uk process is created to make the nadra card renewal easier for overseas Pakistanis. Start Your Application Today',
    heading: 'Easy Renewal of nadra card UK',
    image: renewCardImg,
    benefits: [
      'The process of renewal of nadra card uk does not need to be complicated',
      'Start your application from your home as a Pakistani citizen living in Britain',
      'No complex forms, simple initial online submission',
      'Expert guidance regarding documents and requirements',
      'Services available throughout England, Scotland, Wales and Northern Ireland'
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="nadra card Renewal UK" 
        breadcrumb="nadra card Renewal UK" 
      />
      <IntroSection data={pageData} />
      
      {/* Apply Now Button after Intro */}
      <div className="flex flex-col items-center justify-center pb-12 bg-white">
        <Link 
          to="/apply-now" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        >
          APPLY NOW
        </Link>
        <p className="text-gray-600 text-sm mt-3">Fill the form online and send your information to start your application.</p>
      </div>

      <WhatsAppBanner />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          
          <div className="mb-10 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Renewal of nadra card UK</h3>
            <p className="mb-3 leading-relaxed">
              The process of renewal of nadra card uk does not need to be complicated. With our online service you are able to start your application from your home as a Pakistani citizen living in Britain.
            </p>
            <p className="mb-3 leading-relaxed">
              You do not have to fill out complex forms. The initial application can be done online. After submitting your information our team will examine it and give you guidance regarding documents and other requirements of your renewal of nadra card in uk application.
            </p>
            <p className="mb-3 leading-relaxed">
              Our aim is to make nadra card renewal uk easy for families, individuals, students, workers and other Pakistani citizens living throughout England, Scotland, Wales and Northern Ireland.
            </p>
            <p className="mb-5 leading-relaxed font-medium text-emerald-800">
              Do not delay if your card is coming to the end of its life.
            </p>
            <Link 
              to="/apply-now" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1"
            >
              START YOUR nadra card RENEWAL
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Renew nadra card Online</h3>
          <p className="mb-3 leading-relaxed">How to renew nadra card from the UK? It's easy to do.</p>
          <p className="mb-6 leading-relaxed font-semibold text-gray-900">There are five steps in the application process:</p>
          
          <div className="space-y-6 mb-10">
            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 1: Fill in the Online Form</h4>
              <p className="text-gray-700">Click on the Apply Now button fill in the online form with your personal data and existing nadra card information.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 2: Give Your Documents</h4>
              <p className="text-gray-700">Provide necessary paperwork and supporting materials for the application. It's important to have clear and accurate documentation in place to assist in the renewal of nadra card in uk process.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 3: Application’s Review</h4>
              <p className="text-gray-700">Once we receive your information then our staff will review the application and they will reach out to you if we need any more information or paperwork.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 4: Filling the Formalities</h4>
              <p className="text-gray-700">You will be directed through the rest of the requirements. Sometimes there will be verification, photos, fingerprints, forms and so on depending on your situation.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 5: Get Your Card</h4>
              <p className="text-gray-700">After processing your application your renewed card will be sent to your UK address as specified in your application. It is a simple procedure which can be done without making the renewal of nadra card in uk difficult.</p>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">RENEW nadra card NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Online nadra card Renewal</h3>
          <p className="mb-4 leading-relaxed">Overseas Pakistanis can renew their nadra card online.</p>
          <p className="mb-4 leading-relaxed">Our online nadra card renewal service is designed for Pakistanis living in the United Kingdom and are in need to renewing their documents.</p>
          <p className="mb-4 leading-relaxed">With nadra card renewal online you can start your application using your computer, tablet or mobile phone. You do not need to spend time looking for complicated forms and do not need to try to understand the steps before starting.</p>
          <p className="mb-4 leading-relaxed">The nadra card renewal process online makes it easy to submit your information and provides you with information of the next steps of your application.</p>
          <p className="mb-6 leading-relaxed">For those seeking Pakistani nadra card renewal online just click on the Apply Now button and fill in the form.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY FOR nadra card RENEWAL ONLINE</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Renew Your nadra card?</h3>
          <p className="mb-4 leading-relaxed">It is necessary for Pakistanis to keep their nadra card updated. When you need to go somewhere or face official business or property related things or other requirements that require valid document an expired card will cause problems.</p>
          <p className="mb-4 leading-relaxed">Our nadra card renewal uk service is an easy option for those who are looking to submit their application online without the hassle of paperwork.</p>
          <p className="mb-4 leading-relaxed">You can start your Pakistani nadra card renewal application if your nadra card has expired by filling the online form.</p>
          <p className="mb-8 leading-relaxed font-medium text-emerald-800">Do not wait until you urgently need your nadra card.</p>

          <div className="mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">NADRA Card Renewal Fee in the UK</h3>
            <p className="leading-relaxed">
              The fee for the card renewal varies according to the type of card you choose and its speed for processing. For people who are applying from the UK, the renewal of the NADRA fee in the UK might differ based on whether you pick normal, pressing or executive processing. Please ensure that you carefully review the NADRA card renewal fee before making your application. If you want to pick the best processing method, it is essential to know the NADRA card renewal fee UK. Ensure you have the latest card renewal fee for Nadra and UK card renewal fee before you apply for renewal.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents Required for nadra card Renewal</h3>
          <p className="mb-4 leading-relaxed">The documents needed may be different depending on the applicant and the circumstances. Applicants are advised that they should have their current nadra card information and relevant identity/travel documents ready when they begin the application.</p>
          <p className="mb-2 leading-relaxed font-semibold text-gray-900">In some cases you will be requested to submit:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1.5">
            <li>Previous or old nadra card</li>
            <li>Pakistani passport or relevant passport information</li>
            <li>British Passport if applicable</li>
            <li>Evidence of UK residency if applicable</li>
            <li>Recent photograph</li>
            <li>Fingerprints or fingerprint form if applicable</li>
            <li>Additional supporting documents depending on your application</li>
          </ul>
          <p className="mb-4 leading-relaxed">Clear and accurate information is crucial for a successful nadra card renewal online application.</p>
          <p className="mb-6 leading-relaxed">If you're not sure which documents you need so you should start the application and we will inform you about the rest.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">CLICK HERE TO REVIEW THE APPLICATION REQUIREMENTS</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">nadra card Renewal UK Services</h3>
          <p className="mb-4 leading-relaxed">We know that each applicant will have their own needs. A few applicants need a regular nadra card renewal uk and some might want to complete their application urgently.</p>
          <p className="mb-4 leading-relaxed">We offer various services which we will try to make flexible for the applicant in accordance to his or her needs.</p>
          <p className="mb-4 leading-relaxed">Apply for online nadra card renewal whether it's for yourself or another eligible applicant by filling out the application form.</p>
          <p className="mb-4 leading-relaxed">It is easy to start your application in the nadra card renewal uk process and it is open for applicants in the UK.</p>
          <p className="mb-6 leading-relaxed">If you need to apply urgently please get in touch with our team following your application to discuss the options available.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Are the Requirements for nadra card Renewal?</h3>
          <p className="mb-4 leading-relaxed">nadra card is for the benefit of eligible Pakistanis residing overseas. Pakistani citizens residing in the UK who already have an existing nadra card may need to apply for renewal when their card expires.</p>
          <p className="mb-4 leading-relaxed">You can apply online for your nadra card renewal in London, Birmingham, Manchester, Glasgow, Leeds, Bradford, Leicester, Liverpool or anywhere else you live in the UK.</p>
          <p className="mb-4 leading-relaxed">Do not complicate the process more than you need to. The first step in applying for a nadra card renewal online is to fill in the form on this website.</p>
          <p className="mb-8 leading-relaxed">After providing your information you will give our team a call if you're not sure if your situation calls for nadra card renewal.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">nadra card Renewal Online for the Entire UK</h3>
          <p className="mb-4 leading-relaxed">If you are in London or any other part of Britain our nadra card renewal online process provides you with an easy way to start your application.</p>
          <p className="mb-4 leading-relaxed">Some overseas Pakistanis have been postponing their nadra card renewal uk as they feel the procedure will require a lot of paperwork or multiple visits. It's easier to get started online.</p>
          <p className="mb-4 leading-relaxed">The Pakistani nadra card renewal application can be submitted online from the comfort of your home and information is to be submitted on the online form.</p>
          <p className="mb-6 leading-relaxed">Our team will then walk you through the applicable process for your application.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">START ONLINE nadra card RENEWAL</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Long Does It Take for nadra card to Renew?</h3>
          <p className="mb-4 leading-relaxed">It may take longer depending on the service chosen the amount of information provided in the application and the time needed for verification and processing.</p>
          <p className="mb-8 leading-relaxed">Hence, applicants need to provide accurate information and clear documents while initiating the renewal of nadra card UK renewal application.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Track of and Manage Your Application</h3>
          <p className="mb-4 leading-relaxed">After beginning your nadra card online renewal you should be sure to have your application information and reference information on hand for future use.</p>
          <p className="mb-4 leading-relaxed">If further documents or information are needed you should make sure to submit that information quickly to avoid delays.</p>
          <p className="mb-4 leading-relaxed">Our team can also assist you with what you need to do after you've completed your nadra card renewal online application.</p>
          <p className="mb-8 leading-relaxed">When it comes to nadra card renewal in UK it is always best to ensure that the information you have provided is accurate and consistent with the supporting documents.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ’s</h3>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">How to Renew nadra card Online?</h4>
              <p>To renew nadra card click on the Apply Now button and fill in the form and provide the required documents.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Is There a Way to Do nadra card Renewal Online?</h4>
              <p>Yes. With our online nadra card renewal service you can start the application on the web. To renew nadra card online fill form with information.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What Paperwork Is Required?</h4>
              <p>The documents can vary depending on your circumstances. Your current nadra card, passport details, your photo, proof of residence and other supporting documents may be required.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What Are the Steps to Renew nadra card?</h4>
              <p className="mb-2">For nadra card renewal online click the Apply Now button on this page and fill out the application form.</p>
              <p>Before filling the form to apply for nadra card renewal online ensure that the details provided are accurate.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Begin Your nadra card Renewal Now!</h3>
          <p className="mb-4 leading-relaxed">The nadra card is a critical ID card. If your card is expired or its expiration date is coming up it's better to apply now than to face needless hassles at the last minute.</p>
          <p className="mb-4 leading-relaxed">You can easily apply for a nadra card renewal uk from anywhere in the UK with our service.</p>
          <p className="mb-4 leading-relaxed">You can renew nadra card online and give your details and get directions concerning subsequent steps.</p>
          <p className="mb-4 leading-relaxed">The initial task is the same, regardless of whether you need nadra card renewal, nadra card renewal online or nadra card online renewal: You need to fill out the application form.</p>
          <p className="mb-8 leading-relaxed font-medium text-emerald-800">Please do not wait until your nadra card is urgently needed.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="mb-3 leading-relaxed">To renew nadra card please apply now.</p>
          <p className="mb-3 leading-relaxed">Fill out the form today and start your application for renewal of nadra card uk.</p>
          <p className="mb-3 leading-relaxed">Complete the form to renew your nadra card online.</p>
          <p className="mb-8 leading-relaxed">Do not wait to start your nadra card online renewal application. Let our team help you through the process.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

        </div>
      </section>
    </>
  )
}
