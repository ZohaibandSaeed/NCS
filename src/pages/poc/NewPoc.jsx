import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import newCardImg from '../../assets/poc/newcard.jpeg'

export default function NewPoc() {
  const pageData = {
    title: 'POC Card Pakistan',
    desc: 'A Pakistan Origin Card can help a foreign national whose origin is Pakistan to keep their connection with Pakistan while residing elsewhere. It is for those who are eligible and have a Pakistani origin and are seeking to visit Pakistan stay longer or conduct family property business and personal affairs. It can be helpful to the families who have to go abroad frequently to Pakistan. It may offer facilities to those who are eligible and under the applicable rules.',
    heading: 'What Is a Pakistan Origin Card?',
    image: newCardImg,
    benefits: [
      'Identity card issued to foreign nationals of Pakistani origin',
      'Allows visiting Pakistan, longer stays, and property or business affairs',
      'Maintains documentary and heritage connections with Pakistan',
      'Convenient online application from the UK without visiting Pakistan'
    ],
  }

  return (
    <>
      <Hero 
        page="poc" 
        title="POC Card Pakistan" 
        breadcrumb="New POC" 
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
      </div>

      <WhatsAppBanner />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          
          <div className="mb-10 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">What Is a Pakistan Origin Card?</h3>
            <p className="mb-3 leading-relaxed">
              Pak origin card is an identity card that is issued to foreign nationals with Pakistani origin. The following may apply: Persons who had previously acquired Pakistani nationality or have a qualified Pakistani family connection may be able to apply.
            </p>
            <p className="mb-3 leading-relaxed">
              Pakistan overseas card may come in handy for individuals who have not lost their Pakistani blood ties despite becoming citizens of another nation. Pakistani origin card can be issued to the eligible foreign nationals for maintaining documentary connections with Pakistan.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Who Can Apply?</h3>
          <p className="mb-8 leading-relaxed">
            Eligibility criteria include nationality, family relation, previous Pakistani nationality and supporting documents. A person can be eligible through either of the two Pakistani parents or grandparents or through any recognised connection depending on the criteria.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents Required</h3>
          <p className="mb-3 leading-relaxed font-semibold text-gray-900">The following may be common requirements for applicants:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1.5">
            <li>Current foreign passport</li>
            <li>Previous Pakistani passport (if available)</li>
            <li>The Pakistani identity documents if any</li>
            <li>Birth Register or Family Registers</li>
            <li>Documents that contain evidence of Pakistani origin</li>
            <li>Where applicable parents' / grandparents' Pakistani documents</li>
            <li>Recent photograph</li>
            <li>Additional documents requested during verification</li>
          </ul>
          <p className="mb-8 leading-relaxed font-medium text-emerald-800">
            You can apply online on Pakistan Overseas card. On Pakistan Overseas card you can apply online.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Pakistan Overseas Card Apply Online</h3>
          <p className="mb-4 leading-relaxed">
            Carefully fill out pakistan overseas card online which includes name, date of birth, nationality, address, passport information and family details. The information should be consistent with their official paperwork.
          </p>
          <p className="mb-4 leading-relaxed">
            It is a pakistan overseas card apply online procedure which is convenient for those who reside outside Pakistan. Before you have to apply for an overseas card in Pakistan online make sure you have all your documents ready.
          </p>
          <p className="mb-4 leading-relaxed">
            For families requiring assistance for pakistan overseas card apply online it is essential to be well-prepared.
          </p>
          <p className="mb-6 leading-relaxed">
            Pakistan overseas card apply online from abroad. Documents are prepared and then candidates apply online for the overseas card. Before you apply online for a overseas card in Pakistan review your information prior to applying. Application for an overseas card in Pakistan is very convenient. Get an overseas application with pakistan overseas card apply online. Overseas card for Pakistan is available for online application from families when their documents are ready. Start pakistan overseas card apply online after checking eligibility.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of a POC</h3>
          <p className="mb-8 leading-relaxed">
            A pakistan overseas card can provide more ease for the eligible holders when visiting Pakistan. It gives a legitimate method to declare Pakistani nationality without losing their citizenship of another country.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC UK Applications</h3>
          <p className="mb-4 leading-relaxed">
            British nationals of Pakistani ancestry might be eligible to apply via the poc uk. Families need to have their British identity documents and Pakistani records of their ties together before starting a poc uk application.
          </p>
          <p className="mb-6 leading-relaxed">
            Pre-checking documents before filling out an application with poc uk advice will minimize unnecessary problems.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">NEW POC Applications</h3>
          <p className="mb-8 leading-relaxed">
            Information and appropriate supporting documents are required for a NEW POC application. This is not a card renewal.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Pakistan Overseas Card for Overseas Families</h3>
          <p className="mb-4 leading-relaxed">
            It may also be useful to those who are of Pakistani origin and have to deal with family or property issues while retaining the foreign nationality.
          </p>
          <p className="mb-4 leading-relaxed">
            Pakistan origin card application is in need of thorough scrutiny prior submission.
          </p>
          <p className="mb-4 leading-relaxed">
            For a poc card pakistan application accurate information is required. Be sure to read the details about your poc card pakistan thoroughly. Make your poc card pakistan documents prior to submission. Review your poc card pakistan information. The card pakistan records should be the same as your poc card. Ensure the documents of poc card pakistan are clear. In a poc card pakistan applicant should verify names. Fill in your poc card pakistan application thoroughly. Justify the request for a poc card for Pakistan with evidence.
          </p>
          <p className="mb-4 leading-relaxed">
            Eligible applicants can benefit from a pak origin card. Review documents from your pak origin card. Review your pak origin card information. Maintain pak origin card system integrity.
          </p>
          <p className="mb-4 leading-relaxed">
            The pakistan overseas card may be helpful to eligible families.
          </p>
          <p className="mb-4 leading-relaxed">
            Pakistani origin card can present Pakistani origin. Carefully create your pakistani origin card application. Review your card/papers of origin in Pakistan. Look at the details for your card of origin in Pakistan.
          </p>
          <p className="mb-8 leading-relaxed">
            Eligible foreign nationals can be supported with a pakistan origin card. Review the documents related to your pakistan origin card.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Avoid Delays</h3>
          <p className="mb-4 leading-relaxed">
            Review all documents to be sure they are legible. Personal data must correspond to your official documents such as your passport.
          </p>
          <p className="mb-8 leading-relaxed">
            Check the names, dates, passport numbers and family information before submission and choose the correct type of application.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Preparation Matters</h3>
          <p className="mb-8 leading-relaxed">
            The first step in a successful application is having accurate information and documents that are well prepared. Before you start you need to check the information on your passport, birth certificate and Pakistani documents. If names have changed, have documentation available.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Applying With Family Documents</h3>
          <p className="mb-4 leading-relaxed">
            Some applicants prove their Pakistani origin by means of their father or mother or their grandparents. Family records may be relevant evidence.
          </p>
          <p className="mb-6 leading-relaxed">
            Parents applying for their children should ensure that the information provided is accurate.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/apply-now" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">APPLY NOW</Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ’s</h3>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">May British citizens apply for a POC?</h4>
              <p>Applications are accepted from all eligible British citizens from Pakistani origin if they fulfill the respective eligibility criteria. Some proof of identity and Pakistani origin may be asked for.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Is there any possibility to apply from abroad?</h4>
              <p>Yes. Applications may be made from overseas by eligible applicants. Normally you won't have to travel to Pakistan just to begin the application.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Which documents will be required?</h4>
              <p>Requirements are dependent upon one's situation. Foreign identity documents Pakistani records birth or family documents evidence of Pakistani origin may be required.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Can children apply?</h4>
              <p>Children may be eligible if they have a parent grandparent or other qualifying family member who is a citizen of Pakistan. The use of their application must comply with the corresponding requirements.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What is the time to process?</h4>
              <p>The time required for processing depends upon the type of application, the needed verification of information and completeness and accuracy of the information submitted.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">What if there is a different spelling of my documents?</h4>
              <p>Some disparities in names or personal information may make verification more challenging. Have any discrepancies resolved and submit supporting evidence where necessary.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Is there somebody out there that can help with the application?</h4>
              <p>Yes. If you are not sure if you are eligible or about the documents or the proper application type professional help can assist you in preparing properly.</p>
            </div>
          </div>

          <div className="mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Apply Today</h3>
            <p className="mb-3 leading-relaxed">
              Ready to begin? Plan, verify and take the next steps with assurance.
            </p>
            <p className="mb-4 leading-relaxed font-semibold text-emerald-800">
              Submit your application and supporting documents—Apply Now for help.
            </p>
            
            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Need Help?</h4>
            <p className="mb-3 leading-relaxed">
              Not sure about what documents you need? We can provide you with guidance and explanation on the requirements.
            </p>
            <p className="mb-4 leading-relaxed font-semibold text-emerald-800">
              Contact Us Today to get started.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Start Your Application</h4>
            <p className="mb-3 leading-relaxed">
              Prevent lack of information or unclear documents causing delays. Start your application carefully.
            </p>
            <p className="mb-3 leading-relaxed">
              Apply Now and advance to the next step in POC application.
            </p>
            <p className="mb-5 leading-relaxed">
              Pakistan overseas card apply online after getting all the documents ready. Carefully read your poc card pakistan details. Before submission of a Pakistan origin card check the details. Applicants may use the guidance of poc uk in preparing documents. Potential applicants for poc.uk should ensure that they are eligible first. Create a NEW POC with correct info. Check your NEW POC documents before submitting. The overseas card of Pak is still valid for those who are eligible. Regular visits can be facilitated by a pakistan overseas card.
            </p>

            <Link 
              to="/apply-now" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
            >
              APPLY NOW
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
