import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import frcFirstImg from '../../assets/frc/frcfirst.jpeg'

export default function NewFrc() {
  const pageData = {
    title: 'New FRC UK',
    desc: 'If you are a new FRC you can apply online from anywhere in the UK. Applying for Family Registration Certificate? When you start online from home the process is easy and convenient. You can fill in the application form provide your family information and submit the details required for your application. You might need the certificate for yourself or your family - our service can help you understand what to do next. Apply Now!',
    heading: 'Easy Application for a New FRC',
    image: frcFirstImg,
    benefits: [
      'Apply online from anywhere in the UK',
      'Process is easy and convenient from home',
      'Simply fill in the application form and family information',
      'Get help understanding what to do next'
    ],
  }

  return (
    <>
      <Hero 
        page="frc" 
        title="New FRC UK" 
        breadcrumb="New FRC UK" 
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Apply for a Family Registration Certificate</h3>
          <p className="mb-4 leading-relaxed">What is the procedure to apply for FRC from UK? The first process is very simple.</p>
          <p className="mb-4 leading-relaxed">There are five steps in the application process:</p>
          
          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 1: Fill in the Online Form</h4>
          <p className="mb-4">Use the Apply Now button and complete the form with your personal information, and any family information that is applicable.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 2: Provide Your Documents</h4>
          <p className="mb-4">The second step is to provide Your Documents.Step 2 is to submit Your Documents. Submit required paperwork and documentation. Unnecessary delays can be avoided with clear and accurate information.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 3: Application Review</h4>
          <p className="mb-4">Upon receipt of information our staff will review your application. However, if there is something else that is needed we will be in touch.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 4: Fill in the Formalities</h4>
          <p className="mb-4">The rest of the requirements will be explained to you. Other documentation or verification may be needed depending on the situation.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 5: Get Your Certificate</h4>
          <p className="mb-8">Once your application is processed your certificate will be issued based on the process applicable.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY FOR FRC NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FRC NADRA Online</h3>
          <p className="mb-4 leading-relaxed">An FRC NADRA application can be started online by Pakistani citizens living in the United Kingdom.</p>
          <p className="mb-4 leading-relaxed">You can use a computer tablet or mobile phone to provide your initial information.</p>
          <p className="mb-4 leading-relaxed">Request a FRC NADRA service by clicking on the Apply Now link and filling out the form carefully.</p>
          <p className="mb-8 leading-relaxed">We will look over your information and let you know what the next steps are relevant to your application.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FRC Pakistan NADRA Card</h3>
          <p className="mb-4 leading-relaxed">To apply for a FRC Pakistan (National Directory of Registration of Acceptable names) Card you have to start the application with your personal details and family details.</p>
          <p className="mb-4 leading-relaxed">The information that is needed could be based on the family situation and on the records of the family members.</p>
          <p className="mb-8 leading-relaxed">If you are not exactly certain of what is needed, begin the application and we will tell you what's next.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">START YOUR APPLICATION</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents for a Family Registration Certificate</h3>
          <p className="mb-4 leading-relaxed">When making out this application the applicant must have information about the applicant's identity and family available.</p>
          <p className="mb-2 leading-relaxed">You will be requested to submit:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Pakistani identity card information</li>
            <li>Passport details</li>
            <li>Details of parents and family members</li>
            <li>Marriage information if applicable</li>
            <li>Information about children if applicable.</li>
            <li>Additional supporting documents</li>
          </ul>
          <p className="mb-4 leading-relaxed">Information is crucial in an FRC application and should be accurate and clear.</p>
          <p className="mb-4 leading-relaxed">In case you are unsure which documents you need you should begin the application and our team will let you know what is necessary.</p>
          <p className="mb-8 leading-relaxed">Please check the application requirements.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">The way to get the best out of your FRC Services across the full UK.</h3>
          <p className="mb-4 leading-relaxed">Applicants based in London, Birmingham, Manchester, Glasgow, Leeds, Bradford, Leicester, Liverpool and elsewhere in the UK are able to start their application electronically.</p>
          <p className="mb-4 leading-relaxed">This way you can give details of yourself without having to make the initial application complicated.</p>
          <p className="mb-4 leading-relaxed">Service is provided for Pakistani families across England, Scotland, Wales and Northern Ireland.</p>
          <p className="mb-8 leading-relaxed">The NADRA CARD CENTRE team will be able to check on the information you provide and counsel you on the requirements that apply to you.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is a Family Registration Certificate?</h3>
          <p className="mb-4 leading-relaxed">What is a Family Registration Certificate?</p>
          <p className="mb-4 leading-relaxed">A Family Registration Certificate is a document that has details of the family members who are registered with Pakistani Identity Records.</p>
          <p className="mb-4 leading-relaxed">An FRC is required for a personal or official need and an application can be initiated online.</p>
          <p className="mb-4 leading-relaxed">Information that may be included may vary with the family records of the applicant.</p>
          <p className="mb-4 leading-relaxed">Ensure accuracy and consistency of details provided with existing documents.</p>
          <p className="mb-4 leading-relaxed">As far as the FRC is concerned Pakistan's families are the Pakistani Families - FRC NADRA.</p>
          <p className="mb-4 leading-relaxed">There are several reasons why a Pakistani family living in the UK might require an FRC.There are various reasons for which a Pakistani family in the UK may require an FRC.</p>
          <p className="mb-4 leading-relaxed">For any FRC NADRA services the first step is to fill out the online application form.</p>
          <p className="mb-4 leading-relaxed">You can submit your information at home and can get advice on the documents and information you need for your situation.</p>
          <p className="mb-8 leading-relaxed">When filling in your family details on the form if they have changed please give the up-to-date details if relevant.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">NADRA CARD CENTRE</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Long Does It Take?</h3>
          <p className="mb-4 leading-relaxed">The time involved may vary based on the information provided the number of family Once you start an application maintain your application and references to be used later.</p>
          <p className="mb-4 leading-relaxed">When further information and/or documents are requested supply them as soon as possible to prevent any delays.</p>
          <p className="mb-4 leading-relaxed">The NADRA CARD CENTRE team can also guide you on what you need to do after making the initial application.</p>
          <p className="mb-8 leading-relaxed">Ensure all the information provided is correct and consistent with supporting documents.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Track of Your Application</h3>
          <p className="mb-4 leading-relaxed">After beginning your application keep your application and reference information available for future use.</p>
          <p className="mb-4 leading-relaxed">If additional information or documents are requested, provide them as soon as possible to avoid unnecessary delays.</p>
          <p className="mb-4 leading-relaxed">The NADRA CARD CENTRE team can also guide you about what you need to do after completing the initial application.</p>
          <p className="mb-8 leading-relaxed">Make sure that all information submitted is accurate and matches your supporting documents.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">May I submit a new FRC from the UK?</h4>
              <p>Yes. The Pakistani citizens residing in U.K. can submit their application online by filling personal and family details.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What Is a Family Registration Certificate?</h4>
              <p>A Family Registration Certificate gives information regarding individuals enlisted within Pakistani ID records as family members.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can I Apply Online?</h4>
              <p>Yes. The first application is available online worldwide in the UK.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What are the documents necessary?</h4>
              <p>Documents may differ based on your particular factors. Information about identification, passport family may be needed.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What steps do I take to start my Application?</h4>
              <p>Click on Apply Now, fill in the online form and provide the requested information. Our team will then guide you through the next steps.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Start your new FRC Application Today!</h3>
          <p className="mb-4 leading-relaxed">It's preferable to begin your FRC application before it is necessary for you to obtain the certificate urgently.</p>
          <p className="mb-4 leading-relaxed">Our online service offers you the opportunity to start anywhere in the UK.</p>
          <p className="mb-4 leading-relaxed">If you are looking for information regarding family registration, or family registration information for yourself or your family, the first thing that needs to be done is to complete the family registration application and give accurate information.</p>
          <p className="mb-8 leading-relaxed">You can follow the remaining process with the help of the team of NADRA CARD CENTRE.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="mb-4 leading-relaxed">Apply Now to start your application.</p>
          <p className="mb-4 leading-relaxed">Fill in the form today and provide your information.</p>
          <p className="mb-8 leading-relaxed">Allow our staff to lead you down the road of further action.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

        </div>
      </section>
    </>
  )
}
