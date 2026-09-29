import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import lostCardImg from '../../assets/nicop/lostcard.jpeg'

export default function LostNadraCard() {
  const pageData = {
    title: 'Lost NADRA Card UK',
    desc: 'If you have lost your NADRA card you can begin your application online from anywhere in the UK. Losing an identity card can be inconvenient and you may need to apply for a new one for a variety of reasons. You can start the process online if you have lost your card and need to take the next step. If you have lost your card you can fill in the online application and provide your details. Our team will review the application and advise you on the documents and other requirements for your application. Whether you have lost misplaced or suffered damage to your card our lost nadra card uk service can help you begin the application process.',
    heading: 'Easy Process for a Lost NADRA Card',
    image: lostCardImg,
    benefits: [
      'Begin your application online from anywhere in the UK',
      'Simple process without complex requirements',
      'Expert guidance on necessary documents',
      'Designed for Pakistani citizens living across the UK'
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="Lost NADRA Card UK" 
        breadcrumb="Lost NADRA Card UK" 
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

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What to Do If You Have Lost Your NADRA Card</h3>
          <p className="mb-4 leading-relaxed">If you know that i have lost my nadra card you should begin the replacement process rather than waiting to urgently need your identity document.</p>
          <p className="mb-4 leading-relaxed">Start by providing your personal details and information about your existing card. You should ensure that the information that you provide is accurate and matches your supporting documents.</p>
          <p className="mb-4 leading-relaxed">If you believe that the card has been stolen you should take the appropriate steps regarding the loss.</p>
          <p className="mb-8 leading-relaxed">You can begin your application online and our team will guide you through the next requirements.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for a Lost NADRA Card</h3>
          
          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 1: Fill in the Online Form</h4>
          <p className="mb-4">Click on the Apply Now button and fill in the online form with your personal details and existing NADRA card information.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 2: Provide Your Documents</h4>
          <p className="mb-4">Provide the required documents and supporting information. Providing documents that are clear and accurate will help to keep your application moving without any unnecessary delays.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 3: Application Review</h4>
          <p className="mb-4">Once we receive your information our staff will review the application. If we need any further information or paperwork we will contact you.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 4: Complete the Requirements</h4>
          <p className="mb-4">You will be guided through the remaining requirements for your application. This may include photographs, fingerprints, forms or other supporting documents depending on your circumstances.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 5: Receive Your Card</h4>
          <p className="mb-8">Once your application is processed your replacement card will be sent to the address provided in your application.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">REPLACE MY NADRA CARD</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Lost NADRA Card UK Online</h3>
          <p className="mb-4 leading-relaxed">If you have lost your card while living in Britain, you can begin your lost nadra card uk application online.</p>
          <p className="mb-4 leading-relaxed">The online process means that you can provide your initial information via a computer,tablet or mobile phone. You do not need to wait to be able to visit somewhere before you begin the process.</p>
          <p className="mb-8 leading-relaxed">For Pakistani citizens living in London, Birmingham, Manchester, Glasgow, Leeds, Bradford, Leicester, Liverpool and other areas of the UK, our service provides a convenient way to start your application.</p>
          
          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents for a Lost NADRA Card</h3>
          <p className="mb-4 leading-relaxed">The documents required can vary depending on your circumstances and the type of application.</p>
          <p className="mb-4 leading-relaxed">When your nadra card lost situation arises it is useful to have your existing card information and relevant identity documents to hand.</p>
          <p className="mb-2 leading-relaxed">You may be required to provide:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Previous NADRA card details if available</li>
            <li>Pakistani passport or passport information</li>
            <li>British passport if applicable</li>
            <li>Proof of UK residence if applicable</li>
            <li>Recent photograph</li>
            <li>Fingerprints or fingerprint form if applicable</li>
            <li>Other supporting documents depending on your application</li>
          </ul>
          <p className="mb-8 leading-relaxed">If you no longer have a copy of your card provide the information that you have available. Our team can advise you of what is required for your particular situation.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">REVIEW THE APPLICATION REQUIREMENTS</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">NADRA Card Lost UK Services</h3>
          <p className="mb-4 leading-relaxed">A nadra card lost situation can arise for different reasons. You may have mislaid your card you may have lost it while travelling or you may discover that it is no longer where you keep it.</p>
          <p className="mb-4 leading-relaxed">Our nadra card lost uk service is designed to make the initial application easier for Pakistani citizens living in Britain.</p>
          <p className="mb-4 leading-relaxed">If your nadra card lost uk application requires further information our team will advise what is required.</p>
          <p className="mb-8 leading-relaxed">You can begin the application for yourself or another eligible applicant by completing the online form.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What If I Lost My NADRA ID Card?</h3>
          <p className="mb-4 leading-relaxed">If you have lost your identity document do not delay the replacement process.</p>
          <p className="mb-4 leading-relaxed">When someone states i lost my nadra id card the first thing to do is to provide the relevant personal and card information via the application form.</p>
          <p className="mb-4 leading-relaxed">If you do not have all the old card information available then provide the details that you have. Our team can guide you regarding the remaining requirements.</p>
          <p className="mb-8 leading-relaxed">The nadra id card lost process may require various documents depending on the applicant and circumstances.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Long Does It Take to Replace a Lost NADRA Card?</h3>
          <p className="mb-4 leading-relaxed">The processing time can vary depending on the information provided documents required and processing involved in your application.</p>
          <p className="mb-4 leading-relaxed">Applicants should provide clear documents and accurate information when beginning their application.</p>
          <p className="mb-8 leading-relaxed">If you need your replacement card sooner let our team know after submitting the application so that we can advise you of the available options.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Track of Your Application</h3>
          <p className="mb-4 leading-relaxed">Once you have started your application keep track of your application and reference information for future reference.</p>
          <p className="mb-4 leading-relaxed">If you are asked to provide any additional information or documents do so as soon as possible to avoid any unnecessary delays.</p>
          <p className="mb-8 leading-relaxed">When your nadra card lost situation has been reported via the application make sure that the information you provide is accurate and that you are consistent with any supporting documents.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What Should I Do If I Have Lost My NADRA Card?</h4>
              <p>If you have lost my nadra card you can begin the replacement application online. Fill in the form and provide your available card and personal information.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can I Replace a Lost NADRA Card from the UK?</h4>
              <p>Yes. Pakistani citizens living in the UK can begin the lost nadra card uk application online by providing their details and required information.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What If I Lost My NADRA ID Card Abroad?</h4>
              <p>If i lost my nadra id card while living abroad I can begin the application from the country in which I currently reside subject to applicable requirements.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What Documents Are Needed?</h4>
              <p>The required documents can vary. Your previous card details passport information photograph, proof of residence and other supporting documentation may be required.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can I Apply Online for a Lost NADRA Card?</h4>
              <p>Yes. You can begin the nadra id card lost application online by filling in the form and providing accurate information.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Begin Your Application Today!</h3>
          <p className="mb-4 leading-relaxed">If your NADRA card has been lost it is best that you begin the replacement process before you urgently need your identity document.</p>
          <p className="mb-4 leading-relaxed">You can begin your lost nadra card application online from anywhere in the UK.</p>
          <p className="mb-4 leading-relaxed">Whether you have mislaid your card at home lost it while travelling or no longer have it at your disposal, the first thing to do is to fill in the application form.</p>
          <p className="mb-8 leading-relaxed">Do not wait to urgently need your card.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="mb-8 leading-relaxed">To begin your application click Apply Now. Fill in the form today and provide your details. Start your application and let our team guide you through the next steps.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>
          
        </div>
      </section>
    </>
  )
}
