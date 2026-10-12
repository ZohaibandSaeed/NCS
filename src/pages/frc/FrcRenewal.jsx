import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import frcSecondImg from '../../assets/frc/frcsecond.jpeg'

export default function FrcRenewal() {
  const pageData = {
    title: 'FRC Renewal UK',
    desc: 'If you require FRC Renewal you can submit your application online anywhere in the UK. Need a new or replacement Family Registration Certificate? The procedure is easy and hassle-free starting online from home. When the information in your family changes or if you require an up to date certificate for an official need please use our online form to provide your details. We will look at your data and inform you of the documents and other requirements. It could be a regular application or we can help you with a specific need our services have been made easier for the Pakistani families residing in Britain. Fill out your application now!',
    heading: 'Easy FRC Renewal in UK',
    image: frcSecondImg,
    benefits: [
      'Submit your application online anywhere in the UK',
      'Easy and hassle-free procedure starting online from home',
      'Our staff will check your data and advise on documents',
      'Dedicated support for Pakistani families throughout the UK'
    ],
  }

  return (
    <>
      <Hero 
        page="frc" 
        title="FRC Renewal UK" 
        breadcrumb="FRC Renewal UK" 
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
        <p className="text-gray-600 text-sm mt-3">Fill in the form online and send your information to start your application</p>
      </div>

      <WhatsAppBanner />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          
          <div className="mb-10 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy FRC Renewal in UK</h3>
            <p className="mb-3 leading-relaxed">
              FRC Renewal can be a simple process. You can start the application process from home without making it difficult.
            </p>
            <p className="mb-3 leading-relaxed">
              When a new certificate is required fill in your personal data and family information. Our staff will check through the information and inform you if any further documents/paperwork are needed.
            </p>
            <p className="mb-3 leading-relaxed">
              We want everyone and every family to make it easier to process throughout England, Scotland, Wales and Northern Ireland.
            </p>
            <p className="mb-5 leading-relaxed font-medium text-emerald-800">
              If you are required to submit your certificate at a later time please do not delay.
            </p>
            <Link 
              to="/apply-now" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1"
            >
              START YOUR APPLICATION
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Apply for FRC Renewal Online</h3>
          <p className="mb-3 leading-relaxed">What is the procedure to obtain a reissue of the certificate from UK? The first one is simple.</p>
          <p className="mb-6 leading-relaxed font-semibold text-gray-900">There are five steps in the application process:</p>
          
          <div className="space-y-6 mb-10">
            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Completed an online form (Step 1)</h4>
              <p className="text-gray-700">Click on Apply Now and complete the online form providing details about yourself and any existing certificate.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 2: Submit Your Documents</h4>
              <p className="text-gray-700">Submit required documentation and information. If you can document the application in a clear and accurate way, this will assist in moving the application forward without any delays.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 3: Application Review</h4>
              <p className="text-gray-700">Our staff will review the application once we have received your information. Should any other information or documents be required we will reach out to you.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 4: Formalities</h4>
              <p className="text-gray-700">The rest of the requirements will be guided. More verification or supporting documents may be needed depending on your situation.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Step 5: Receive Your Certificate</h4>
              <p className="text-gray-700">At the end of Step 5 you will receive your Certificate. Once your application is processed your new certificate will be issued following the appropriate procedure.</p>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY FOR FRC NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Registration Certificate Online</h3>
          <p className="mb-4 leading-relaxed">A Family Registration Certificate gives information about the members of the family registers enrolled in Pakistan.</p>
          <p className="mb-4 leading-relaxed">You can apply online for a new certificate on a computer tablet or mobile phone.</p>
          <p className="mb-6 leading-relaxed">FRC NADRA application form enables you to fill in your basic details at home. Our team will then guide you about the next steps.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">START ONLINE APPLICATION</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">When Do You Need FRC Renewal?</h3>
          <p className="mb-4 leading-relaxed">Requests for an updated certificate may be for various reasons. Family information can change or you might need a new document for an official need.</p>
          <p className="mb-4 leading-relaxed">Where there has been a change in family circumstances in the recent past it is helpful to see if the information on the existing certificate is correct.</p>
          <p className="mb-4 leading-relaxed">FRC Renewal can assist applicants in preparing the application to get their new document started if they need it.</p>
          <p className="mb-8 leading-relaxed">The initial step is to complete the online form and give accurate information about the situation.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FRC Pakistan NADRA Card Services</h3>
          <p className="mb-4 leading-relaxed">Apply online for FRC Pakistan NADRA Card service from anywhere in the UK.</p>
          <p className="mb-4 leading-relaxed">This information may be different based on your family record and for the type of your application.</p>
          <p className="mb-4 leading-relaxed">It is important that applicants write the correct information regarding the family members in the certificate.</p>
          <p className="mb-6 leading-relaxed">If you are not certain what documents are required, our staff will let you know if they have reviewed your application.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents for FRC Renewal</h3>
          <p className="mb-4 leading-relaxed">Depending on your situation and the information that is to be updated there may be a variety of documents that are required.</p>
          <p className="mb-3 leading-relaxed">When starting the application applicants will need their current certificate information and supporting ID documents.</p>
          <p className="mb-2 leading-relaxed font-semibold text-gray-900">You will be required to submit:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1.5">
            <li>Existing certificate information (if available)</li>
            <li>Information about Pakistani identity card.</li>
            <li>Pakistani passport information</li>
            <li>Check for British passport if applicable.</li>
            <li>Provide information about marriages if applicable.</li>
            <li>Details of parents and other family members</li>
            <li>Documentation in addition to your regular paperwork (if applicable)</li>
          </ul>
          <p className="mb-4 leading-relaxed">Clear and accurate information is important for a successful application.</p>
          <p className="mb-6 leading-relaxed">If you don't know what documents are required, you can begin the application and our team will inform you of any remaining documents.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">REVIEW THE APPLICATION REQUIREMENTS</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FRC NADRA for Families Living in the UK</h3>
          <p className="mb-4 leading-relaxed">The families of Pakistanis living in London, Birmingham, Manchester, Glasgow, Leeds, Bradford, Leicester, Liverpool and other parts of the UK can start their application online.</p>
          <p className="mb-4 leading-relaxed">The FRC NADRA process is a convenient way to submit the initial information without making the process difficult.</p>
          <p className="mb-4 leading-relaxed">You can submit your application from anywhere in England, Scotland, Wales or Northern Ireland.</p>
          <p className="mb-4 leading-relaxed">We will look at the information you give and let you know what the rules are.</p>
          <p className="mb-4 leading-relaxed">If your current certificate does not contain up-to-date information, you should review the requirements which apply before you apply.</p>
          <p className="mb-4 leading-relaxed">When a new certificate is required for personal or official use, the renewal of FRC may be required.</p>
          <p className="mb-4 leading-relaxed">Ensure that the information you give is accurate and matches your identification and family documents.</p>
          <p className="mb-6 leading-relaxed">If further information is required our staff will inform you and describe what they require.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">NADRA CARD CENTRE</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Long Does It Take?</h3>
          <p className="mb-4 leading-relaxed">Processing times may take longer based on information submitted family records to be processed and further verification needed.</p>
          <p className="mb-4 leading-relaxed">Clear documents and accurate information should be provided by applicants when they initiate their application.</p>
          <p className="mb-4 leading-relaxed">Let us know after your application is received if you have a specific deadline so we can inform you of what is available.</p>
          <p className="mb-8 leading-relaxed">It is advisable to start early as opposed to waiting for the certificate to be urgently needed.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Track of Your Application</h3>
          <p className="mb-4 leading-relaxed">Once you have started your application be sure to save your application and reference information for future use.</p>
          <p className="mb-4 leading-relaxed">If additional documents and/or information are requested send them promptly to prevent delays.</p>
          <p className="mb-4 leading-relaxed">You can also get directions from our team on what you should do after the initial application has been completed.</p>
          <p className="mb-8 leading-relaxed">Always remember to make sure that the information in FRC Renewal is correct and matches the supporting information.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Do you think you may be able to apply for FRC Renewal from the UK?</h4>
              <p>Yes. The citizens of Pakistan who reside in UK can start their application online by submitting personal and family details.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What is a Family Registration Certificate?</h4>
              <p>Family Registration Certificate contains details of family members registered with Pakistani identity records. May be needed for various personal or official reasons.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can I Apply Online?</h4>
              <p>Yes. Access the application online and fill out the form to provide the necessary information.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Which documents do you need?</h4>
              <p>There are many different documents that can be used depending on your situation. May need to provide identity information passport information existing certificate information and supporting documents.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What are the steps to make my application?</h4>
              <p>Click on Apply Now, fill in the online form and provide accurate information. Our staff will help you through the rest of the process.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">If my family information has changed can I apply?</h4>
              <p>If there have been changes in your family information please give the information in the application form. Our team is able to explain the applicable requirements.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">It's time to Start Your FRC Renewal Today!</h3>
          <p className="mb-4 leading-relaxed">It's best if you make your application before you really require the certificate.</p>
          <p className="mb-4 leading-relaxed">Our online service can begin in any part of the UK.</p>
          <p className="mb-4 leading-relaxed">The first thing you need to do, whether you are looking for a new certificate for yourself or your loved ones is to complete the application form and make sure to fill in all the correct details.</p>
          <p className="mb-4 leading-relaxed">The NADRA CARD CENTRE team is available to assist you to go through the appropriate procedure and discuss what to do next.</p>
          <p className="mb-8 leading-relaxed font-medium text-emerald-800">Please don't wait until your certificate is urgently required.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="mb-4 leading-relaxed">If you're looking to apply click on Apply Now.</p>
          <p className="mb-4 leading-relaxed">Fill in the form today and provide your information.</p>
          <p className="mb-8 leading-relaxed">Fill out the form and follow our team's instructions for the rest of the requirements.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/apply-now" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">NADRA CARD CENTRE</Link>
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

        </div>
      </section>
    </>
  )
}
