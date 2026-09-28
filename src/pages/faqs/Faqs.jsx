import React, { useState } from 'react'
import Hero from '../../components/Hero'

const faqs = [
  {
    question: 'Is NICOP the Same as Dual Citizenship?',
    answer: 'Overseas Pakistani nationals and dual nationals from Pakistan, including their children, are entitled to apply for a National Identity Card for Overseas Pakistanis (NICOP). In addition to allowing visa-free entry into Pakistan, NICOP cardholders also enjoy numerous other benefits.'
  },
  {
    question: 'Is NICOP Citizenship?',
    answer: 'Pakistani citizens with residence references abroad are eligible to obtain the National Identity Card for Overseas Pakistanis (NICOP). If a citizen of Pakistan holds dual nationality, they can apply for NICOP and travel to Pakistan without a visa.'
  },
  {
    question: 'What is the NICOP card processing time in the UK?',
    answer: 'It usually takes six to eight weeks for a NICOP application to be processed. Delivery can be delayed if you provide missing or incorrect information or have problems verifying the data. On your NICOP application form, you should specify the address you wish to receive your new NICOP (recorded delivery or by DHL).'
  },
  {
    question: 'Is it Possible to Enter Pakistan Without NICOP?',
    answer: 'POC Cards are available to Pakistani nationals who want to surrender their citizenship. NADRA Head Quarters in Islamabad processes and finalizes all NICOP applications. To live in the United States for more than six months, Pakistanis must apply for the NICOP.'
  },
  {
    question: 'NICOP Card Benefits: What are They?',
    answer: 'If you hold a foreign passport, you can enter Pakistan without a visa through NICOP. All Pakistanis have the right and equal protection of the law. Overseas Pakistanis with NICOP are fully recognized as citizens.'
  },
  {
    question: 'What are the Criteria for NICOP Verification?',
    answer: 'The form can be verified by anyone with a valid Social Security number or a Social Security number with a photo (over 18 years old). In the absence of the documents listed in Para-c: Pakistani or foreign passport, resident permit, work permit, permanent residence card, travel document, or undertaking duly verified by two witnesses.'
  },
  {
    question: 'Does an expired NICOP prevent you from traveling to Pakistan?',
    answer: 'The NICOP must be kept up-to-date to be accepted into Pakistan since expired NICOP cannot be admitted into Pakistan.'
  },
  {
    question: 'How do NADRA Cards Differ from NICOP Cards?',
    answer: 'National identification cards (NICOP and CNIC) are both national identification cards. The citizen number and the NADRA ID number are the same for each individual. In addition, each of these cards has a microchip on it, and that is the only difference. Between NICOP and Smart NICOP, there is nothing to be confused about.'
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Hero 
        page="nicop" 
        title="FAQS" 
        breadcrumb="FAQS" 
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Find answers to common questions about NICOP, POC, FRC, and our services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 text-emerald-600 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 py-5 border-t border-gray-100' : 'max-h-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
