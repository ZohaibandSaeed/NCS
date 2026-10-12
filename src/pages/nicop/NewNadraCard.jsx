import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import newCardImg from '../../assets/nicop/newcard.jpeg'

export default function NewNadraCard() {
  const pageData = {
    title: 'New NADRA Card UK: Apply for Your Pakistani ID Card Online',
    desc: "In the UK if you require a new Pakistani ID card you can get it online without a trip to Pakistan. An overseas Pakistanis can get a new NADRA card to keep their ID valid for travel, property, banking, family records and other official needs. Many applicants do not know what document to apply for. You may require a NICOP or other identity card from the Pakistan's identity system depending on your citizenship and circumstances. Before applying verify if you're eligible and what documents required if you're not sure.",
    heading: 'Why Do You Need a New NADRA Card?',
    image: newCardImg,
    benefits: [
      'Valid ID for travel, property, banking, and official needs',
      'Apply online from the UK without traveling to Pakistan',
      'Assistance in determining eligibility and required documents',
      'Dedicated guidance for overseas Pakistanis and dual nationals'
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="New NADRA Card UK" 
        breadcrumb="New NADRA Card UK" 
      />
      <IntroSection data={pageData} />
      
      {/* Start Application Button after Intro */}
      <div className="flex flex-col items-center justify-center pb-12 bg-white">
        <Link 
          to="/apply-now" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        >
          START YOUR APPLICATION TODAY
        </Link>
      </div>

      <WhatsAppBanner />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          
          <div className="mb-10 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Do You Need a New NADRA Card?</h3>
            <p className="mb-3 leading-relaxed">
              An identity document is essential for the foreigners residing in Pakistan. You might need your information for the Pakistani authorities, banks, property, inheritance or family related papers.
            </p>
            <p className="mb-3 leading-relaxed">
              If your old card has been lost, damaged or a change in your personal information has occurred, it may not be a card renewal; it may be a new card or an update of your existing card. Correct application will depend on each person's situation.
            </p>
            <p className="mb-5 leading-relaxed">
              For those who are applying from outside the country a pak nadra card can make a big difference in their official identification. Having a valid Pak Nadra card can also be beneficial in the processing of Pakistani records from outside Pakistan. Ensure that your pak nadra card details are matching with supporting documents and check your Pak Nadra Card application thoroughly before submitting it.
            </p>
            <Link 
              to="/apply-now" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1"
            >
              APPLY NOW
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Apply for a New Card from the UK</h3>
          <p className="mb-4 leading-relaxed">
            The online process is created to make it easier for applications of overseas Pakistanis. Prior to the start, you should have your identity information and documents ready, including photos and anything you need to prove your identity.
          </p>
          <p className="mb-4 leading-relaxed">
            If you qualify to submit your application online you can apply for nadra card online from UK, and fill the required details online. Enter carefully your name, date of birth, address and other personal information as it is given on the supporting documents.
          </p>
          <p className="mb-4 leading-relaxed">
            Those who are particularly interested in applying for a nadra card online service should ensure that they choose the right document and application type before providing information. When applying for a nadra card online in the UK the information must be accurate and supporting documents must be submitted.
          </p>
          <p className="mb-4 leading-relaxed">
            Before looking for nadra card uk services it is important to familiarize yourself with the requirements of the application to prevent missing documents or incorrect information, which could delay the process. Before you start make sure that you have all your documents and personal information ready for the nadra card service in uk.
          </p>
          <p className="mb-6 leading-relaxed">
            If you need to apply nicop online uk make sure you have the documents requested for your particular application type. When you make your apply nicop online uk request you will have to include the proper information that supports your request. Prior to making use of the nicop online uk examine the document demands for your case.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">START NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">New NADRA Card for Pakistani Citizens</h3>
          <p className="mb-4 leading-relaxed">
            If you are obtaining an identity card for the first time you have lost your identity card, or the card you have is not usable, or you want to change your identity information, you may need to get a new identity card. Requirements may differ according to age citizenship, prior registration and document sought.
          </p>
          <p className="mb-4 leading-relaxed">
            The national id card system is meant for keeping official records of Pakistan citizens' ID's. While searching for details about national id card Pakistan the applicants should first find out what document belongs to their citizenship and overseas status. The process of national id card pakistan might differ from person to person so be sure to see national id card pakistan requirements prior to submitting documents.
          </p>
          <p className="mb-4 leading-relaxed">
            If you are applying for a nadra, be sure to include all of the correct information and supporting documents. The information on your nadra card must match up to the information in your supporting documents. For overseas Pakistanis a nadra card for pakistan could be used for identification purposes.
          </p>
          <p className="mb-4 leading-relaxed">
            Your pakistan nadra card is required to be in line with official records. Make sure that your nadra card for pakistan requirements is always accurate and with the right information, before uploading documents.
          </p>
          <p className="mb-4 leading-relaxed">
            Make sure to check your nadra card for pakistan application before submission. Information is crucial for a nadra card for pakistan request and applicants might be required to present supporting evidence for a nadra card for pakistan.
          </p>
          <p className="mb-6 leading-relaxed">
            Having a complete nadra card for pakistan application can be helpful in minimizing unnecessary delays. Make sure to check the nadra card as per your situation and apply the correct nadra card for pakistan category instead of guessing.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">When Should You Renew or Replace Your Card?</h3>
          <p className="mb-4 leading-relaxed">
            When the card is getting close to its expiration date it is necessary to renew the card by following the procedure. The renewal requirements may vary from a first application or replacement of an application.
          </p>
          <p className="mb-4 leading-relaxed">
            Renewal of pakistani id card is especially crucial for those who habitually use their identity card for official purposes. Pakistani ID Card renewal needs to be initiated prior to the expiry of the card. Verify the need to renew pakistani ID card requirement for your particular situation.
          </p>
          <p className="mb-4 leading-relaxed">
            In the event of losing a card or damage the proper application could be a replacement rather than an ordinary renewal. For the same reason updates to your name, marital status, address, or other record information may necessitate an update of your record.
          </p>
          <p className="mb-8 leading-relaxed">
            It is recommended for applicants who are researching the update of ID card pakistan from abroad to look into the current requirements before applying for ID card renewal. Those who want to renew their ID card pakistan should make their documents in advance.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Application Support for UK Residents</h3>
          <p className="mb-4 leading-relaxed">
            The Online Application support for the UK residents is provided by us. We provide Online Application support for the UK residents.
          </p>
          <p className="mb-4 leading-relaxed">
            It should not be difficult to use your Pakistani identity documents abroad. For those living in the UK who have work or study commitments or family responsibilities an online application might be easier to complete.
          </p>
          <p className="mb-4 leading-relaxed">
            While looking for nadra pakistan uk information try to not only look for general information, but the application category that corresponds to your circumstances. Make sure to verify the requirements of nadra pakistan uk before filling an application.
          </p>
          <p className="mb-4 leading-relaxed">
            The people who are looking for nadra pakistan uk service should make sure about the correct application category. The information that's included in the application should be all the information you'd want to have. Carefully review nadra pakistan uk application information and check your document before making a request to the nadra pakistan uk.
          </p>
          <p className="mb-8 leading-relaxed">
            People who wish to apply for nadra card online can save time if they have prepared all the things prior to opening the application.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents You May Need</h3>
          <p className="mb-4 leading-relaxed">
            The documents required depend on the type of application. Usual requested documents may consist of your current ID, proof of identity, pictures and family or citizenship documents if applicable.
          </p>
          <p className="mb-4 leading-relaxed">
            Check the documents for readability and check the information written on the nadra card with the application before sending it to Pakistan. Further verification might be needed if the information is not clear or there are conflicts of information between documents.
          </p>
          <p className="mb-4 leading-relaxed">
            With careful documentation the process can be smoother and time-consuming.
          </p>
          <p className="mb-8 leading-relaxed font-semibold text-emerald-800">
            Do you have any documents prepared? Call us today and we will help you with the next step.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply for Your New Card Today!</h3>
          <p className="mb-4 leading-relaxed">
            Your ID card should be accurate up-to-date and readily available when needed. When completing an application for the first time replacing an outdated document or updating information it's easy to make mistakes if the application category and documents are not correct.
          </p>
          <p className="mb-4 leading-relaxed">
            Ready to start? Get experienced help to apply for Pakistani identity documents.
          </p>
          <p className="mb-8 leading-relaxed">
            Would you like some help before you apply? Talk to our staff today about your needs and get started.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Is it possible to get a new NADRA card from UK?</h4>
              <p>Yes, some identity document applications are available online to overseas applicants who are eligible for making them online. This will vary depending on the document and your situation.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What papers are required to get a new card?</h4>
              <p>The requirements are different for the various applications. May require identity documentation, photographs, family information and supporting documentation. Review the requirements prior to submitting your application.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">If the previous card is expires am I allowed to apply online?</h4>
              <p>There are instances where a document may be renewed if it has expired. Eligibility and needs will vary based on the documents and your individual situation.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">How many days to get a new card application?</h4>
              <p>The processing time may be subject to changes depending on the type of application, verification needs and if more information is demanded. If you need the document for a current matter it's best to apply early.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What if I lose my card?</h4>
              <p>Normally a lost card will need an application for replacement, not a standard renewal. The information requested should be given according to your specific situation.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Am I able to make changes to my personal information?</h4>
              <p>Yes, in some cases personal data may be changed when applying for the relevant identity service. There may be supporting documents that need to be supplied for verification of the change.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Is there a need to go to Pakistan?</h4>
              <p>Depending on the document and circumstances, many overseas applications are available online. Before beginning, be sure to read the requirements of the application you are applying for.</p>
            </div>
          </div>

          <div className="mb-10 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Begin Your Application Now</h3>
            <p className="mb-3 leading-relaxed">
              Obtaining a new Pakistani identity document from the UK doesn't need to be a hassle. Once you have the information and other necessary supporting documents, and the right application you can carry on with the process from the UK.
            </p>
            <p className="mb-3 leading-relaxed">
              Apply now for your new identity document of Pakistan or speak to us if you are unclear of the application requirements.
            </p>
            <p className="mb-5 leading-relaxed font-medium text-emerald-800">
              Pay now and be provided with simple assistance throughout the application process until submission.
            </p>
            <Link 
              to="/apply-now" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1"
            >
              APPLY NOW
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
