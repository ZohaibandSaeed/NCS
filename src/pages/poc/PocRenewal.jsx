import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import renewCardImg from '../../assets/poc/renewcard.jpg'

export default function PocRenewal() {
  const pageData = {
    title: 'POC Card Renewal UK',
    desc: 'If your POC is coming up to Christmas you can begin your application online anywhere in the UK! There is an online POC renewal process which is easier for people of Pakistani origin residing in Britain. You can complete the application form, enter your details and get information on what documents and other information you\'ll need. You don\'t have to wait until your current card expires if you want to renew it. Early start time allows for more time to meet any other requirements.',
    heading: 'Easy POC Renewal in UK',
    image: renewCardImg,
    benefits: [
      'Begin your application online anywhere in the UK',
      'Complete the application form and enter your details easily',
      'Get information on what documents you\'ll need',
      'Don\'t wait until your current card expires to renew'
    ],
  }

  return (
    <>
      <Hero 
        page="poc" 
        title="POC Card Renewal UK" 
        breadcrumb="POC Card Renewal UK" 
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

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Renew Your POC Online</h3>
          <p className="mb-4 leading-relaxed">How do you get the application running? First it's easy.</p>
          <p className="mb-4 leading-relaxed">There are five steps in the application process:</p>
          
          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 1: Fill in the Online Form</h4>
          <p className="mb-4">First complete the Online Form.Fill in the Online Form (Step 1). You will be taken to a form complete with your personal information and current POC details and click on the Apply Now button.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 2: Provide Your Documents</h4>
          <p className="mb-4">The meaning is the same—step 2 is to provide your documents. Submit required paperwork and documentation. Straightforward papers and information can prevent unnecessary delays.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 3: Application Review</h4>
          <p className="mb-4">After receiving information from you our staff will review the application. If more information or paperwork is required we will contact you. Now that you have identified your advance plan you need to fill out the proper paperwork.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 4: Requirements</h4>
          <p className="mb-4">The rest of the requirements will be explained to you. Photographs, fingerprints, forms or other documents may be necessary depending on one's situation.</p>

          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-6">Step 5: Get Your Card</h4>
          <p className="mb-8">The last step is to get your card. Once your application is processed your renewed POC will be delivered per applicable delivery process.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">RENEW POC NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC Card Renewal Online</h3>
          <p className="mb-4 leading-relaxed">Poc card renewal can be started from the computer tablet and mobile phone. The first application can be done online making it not a difficult process.</p>
          <p className="mb-4 leading-relaxed">In case you've to renew poc card click on Apply Now and give your details with care. We will look at the application and provide feedback on the procedures.</p>
          <p className="mb-4 leading-relaxed">Early application will provide sufficient time to submit any extra information if required.</p>
          <p className="mb-8 leading-relaxed">Fill out the form for POC RENEWAL.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">NADRA POC Renewal Fee</h3>
          <p className="mb-4 leading-relaxed">One major aspect that the applicants ask is how much does it cost to start their application? The relevant fees may vary depending on the service and situation of the applicant.</p>
          <p className="mb-4 leading-relaxed">To find out the nadra poc renewal fee please provide your details so that our team can tell you what the fees are.</p>
          <p className="mb-4 leading-relaxed">The renewal fee for nadra poc could vary based on the extent of the service and processing alternative chosen.</p>
          <p className="mb-4 leading-relaxed">Inquiries regarding the nadra poc renewal fee can be made after you've begun your application.</p>
          <p className="mb-4 leading-relaxed">The knowledge of applicable nadra poc renewal fee is always useful before making an application for it.</p>
          <p className="mb-8 leading-relaxed">In case you have any questions regarding nadra poc renewal fee please fill the online form with your information.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC Card Renewal Fee</h3>
          <p className="mb-4 leading-relaxed">It is important to have information about NADRA poc card renewal fee before starting the process.</p>
          <p className="mb-4 leading-relaxed">The applicable NADRA poc card renewal fee can depend on the service and requirements of the application.</p>
          <p className="mb-4 leading-relaxed">When applying for the poc card you should get information about the NADRA poc card renewal fee and enter the correct information.</p>
          <p className="mb-4 leading-relaxed">Upon reading the information you provide our team can explain the NADRA poc card renewal fee that will apply to your situation.</p>
          <p className="mb-4 leading-relaxed">Check the poc card renewal charge based on the service that you need.</p>
          <p className="mb-8 leading-relaxed">If you need any questions answered regarding the poc card renewal fee please speak with our staff once the initial form has been completed.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC Renewal Services</h3>
          <p className="mb-4 leading-relaxed">Each applicant will have various needs. There may be others who need to renew a card they already have or others who have something different going on in their lives.</p>
          <p className="mb-4 leading-relaxed">It is possible to apply for nadra poc renewal from the comfort of your own home, no matter where you are located in the UK.</p>
          <p className="mb-4 leading-relaxed">For those who need their nadra card renewed they must submit their current card details and correct personal information.</p>
          <p className="mb-4 leading-relaxed">Perhaps you don't know what's required for nadra poc renewal; now you can begin the process and our team will guide you.</p>
          <p className="mb-4 leading-relaxed">The process of renewal of nadra may need some extra documents depending upon the applicant.</p>
          <p className="mb-4 leading-relaxed">It may be possible to have more time if additional information is requested, if nadra poc started early.</p>
          <p className="mb-8 leading-relaxed">Our team will also inform you about nadra poc renewal after applying for it.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents for POC Renewal</h3>
          <p className="mb-4 leading-relaxed">The documents needed may depend on the situation. Applicants must bring their current POC with them and any relevant identity documents.</p>
          <p className="mb-2 leading-relaxed">May be required to submit:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Previous POC or existing card info</li>
            <li>If applicable, provide information about Pakistan passports.</li>
            <li>British passport or other form of ID.</li>
            <li>Proof of UK residence (where applicable)</li>
            <li>Recent photograph</li>
            <li>Fingerprints or fingerprint form (where applicable)</li>
            <li>Additional supporting documents</li>
          </ul>
          <p className="mb-4 leading-relaxed">When applying it is crucial to provide information that is clear and accurate.</p>
          <p className="mb-4 leading-relaxed">If you do not know which documents are required you can begin the application and our staff will be able to tell you the rest of what you need.</p>
          <p className="mb-8 leading-relaxed">Please review the requirements for the application.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">REVIEW THE APPLICATION REQUIREMENTS</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC Renewal for the Entire UK</h3>
          <p className="mb-4 leading-relaxed">Interested applicants residing in London, Birmingham, Manchester, Glasgow, Leeds, Bradford, Leicester, Liverpool, and other areas of the UK can apply online.</p>
          <p className="mb-4 leading-relaxed">The online process allows you to provide your information from home.</p>
          <p className="mb-4 leading-relaxed">It's good to start early rather than late, if your card is nearing the end of its validity.</p>
          <p className="mb-8 leading-relaxed">Applicants can get our service for all of England, Scotland, Wales, and Northern Ireland.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">START YOUR APPLICATION</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is the POC Card Renewal Fee?</h3>
          <p className="mb-4 leading-relaxed">The renewal fee for the poc may vary depending on the type of service and application.</p>
          <p className="mb-4 leading-relaxed">Show your information using the online form in order to find out about the applicable poc renewal fee.</p>
          <p className="mb-4 leading-relaxed">The renew fee for the poc may vary depending on the case of the applicant.</p>
          <p className="mb-4 leading-relaxed">The applicants who ask for the renewal of the poc should give a precise information; if the information is not precise then the applicable fees will not be explained.</p>
          <p className="mb-4 leading-relaxed">To learn more about the poc renewal fee reach out to our staff once you've started your application.</p>
          <p className="mb-8 leading-relaxed">The poc renewal fee should be established based on your specific application and not previous information.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Long Does POC Renewal Take?</h3>
          <p className="mb-4 leading-relaxed">Processing times may differ depending on the information that is provided documents that are required and the verification that must be completed.</p>
          <p className="mb-4 leading-relaxed">Careful documents and accurate information must be submitted when beginning the application.</p>
          <p className="mb-4 leading-relaxed">If there is a specific deadline please inform our team after submitting the application we will explain to you what you can do.</p>
          <p className="mb-8 leading-relaxed">If you have a card running out of time don't wait until the very end.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Track of Your Application</h3>
          <p className="mb-4 leading-relaxed">Once you've started your application keep your application and reference information on hand for later use.</p>
          <p className="mb-4 leading-relaxed">Where extra documentation or information is required provide this as early as possible as this will help to minimise delays.</p>
          <p className="mb-4 leading-relaxed">Always be sure that the information you give is correct and in line with other supporting documents.</p>
          <p className="mb-8 leading-relaxed">We can help you with what you need to do after you've made the initial application too!</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can I Renew My POC from the UK?</h4>
              <p>Yes. Cultural Interns are able to apply online in the UK, submitting their personal and existing card data.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">How to begin POC Card Renewal?</h4>
              <p>Click on Apply Now, fill in the online form and provide the required documents. We will help you with the following steps.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What is the POC Renewal Fee?</h4>
              <p>Depending on the service and situation of the application the applicable charges may vary. Once you've provided us with your information reach out to our team for advice.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Which Records Must Be Provided?</h4>
              <p>Documents can vary. Existing POCs, passport documents, photographs, proof of residence and other supporting documents may be necessary.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can I Apply Online?</h4>
              <p>Yes. The first application is available online and can be made from anywhere in the UK from a computer, tablet or mobile phone.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Start your POC renewal today!</h3>
          <p className="mb-4 leading-relaxed">It's more beneficial to apply early if your POC is expired or coming up for renewal.</p>
          <p className="mb-4 leading-relaxed">The process can be started online from anywhere in the UK, and your information can be provided from home.</p>
          <p className="mb-4 leading-relaxed">The first one is easy. Complete the application and enter correct information and follow the instructions for the rest of the form.</p>
          <p className="mb-8 leading-relaxed">Don't wait until your card is in dire need.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="mb-4 leading-relaxed">Please click on Apply Now and complete the form today.</p>
          <p className="mb-8 leading-relaxed">Enter your details and our team will help you with the rest of the process.</p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

        </div>
      </section>
    </>
  )
}
