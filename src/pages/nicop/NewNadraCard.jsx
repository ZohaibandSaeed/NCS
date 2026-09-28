import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import newCardImg from '../../assets/nicop/newcard.jpeg'

export default function NewNadraCard() {
  const pageData = {
    title: 'Get A New NICOP Card Online with Nadra Card Centre UK',
    desc: 'Pakistani citizens living abroad and working abroad must have a NICOP document as proof of identity. In addition to the Computerized NIC (CNIC), NICOP can also be used outside Pakistan for personal identification. However, a valid entry or exit card must be produced at an entrance or exit terminal domestically or internationally. According to NADRA ordinances, NICOPs are available to Pakistani workers, immigrants, citizens, or dual nationals registered under NADRA. You can apply for the NICOP new through the Nadra card centre UK online.',
    heading: 'Benefits of NICOP New',
    image: newCardImg,
    benefits: [
      'Foreign passport holders are not required to obtain a visa to enter Pakistan',
      'All Pakistanis are entitled to the protection of their rights',
      'The full rights of a Pakistani citizen. They will be known as Pakistani citizens and will have all the rights',
      'NICOP holders can open bank accounts in Pakistan and apply for MRP (Machine Readable Passport)',
      'Proof of Pakistan citizenship',
      'Can sell and buy property in Pakistan and have evidence of Pakistan Citizenship.',
      'They can start a business or apply for a job.',
    ],
  }

  return (
    <>
      <Hero 
        page="nicop" 
        title="New Nadra Card" 
        breadcrumb="New Nadra Card" 
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

      {/* Extra Sections from Original Website */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How To Apply for a New NICOP Card?</h2>
          <p className="mb-6 leading-relaxed">NICOP (National Identity Card for Overseas Pakistanis) applications can be submitted at NADRA Registration Centers (NRCs) or via the Nadra card centre UK website.</p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">NADRA Registration Center (NRC)</h3>
          <p className="mb-4">Visit your nearest local NADRA Registration Center (NRC). They will assist you with your application for NICOP new card. During your visit to the NRC, you will follow these steps:</p>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>There will be a token issued to you.</li>
            <li>They will take your photographs when your token is on the screen.</li>
            <li>There will be a fingerprinting and signature process.</li>
            <li>After you enter the required data, you will receive a printed copy of the form for your review.</li>
            <li>Printed copies of your application form will be handed out to you.</li>
            <li>You will get a text message on your mobile number that your new NICOP has arrived in the collection centre.</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements for a New NICOP Nadra Card</h3>
          <p className="mb-4">Following are some requirements to apply for NICOP new card or to make changes to NICOP:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Schedule an appointment online.</li>
            <li>A photo and biometric of the applicant will be taken live.</li>
            <li>Required documents are required, including Pakistani passports or old IDs, marriage certificates, or matriculation certificates issued by Pakistan.</li>
            <li>New applicants must provide detailed birth certificates mentioning the names of their father and mother. An incomplete birth certificate will not be accepted.</li>
            <li>You will need your parents' CNIC/NICOP cards (updated after marriage) or brothers and sisters.</li>
            <li>A passport must be valid either for Pakistan or for another country.</li>
            <li>A NIKKAH Nama / Marriage Certificate is required for changing marital status.</li>
            <li>The applicant must fill out the application for their spouse's divorce/death certificate to change their marital status to divorced/widowed.</li>
            <li>You can change your date of birth (DOB) by showing a valid Pakistani passport or foreign passport, Matriculation Certificate, Service Book, or court order.</li>
            <li>To modify or update the parental name, a court order is required.</li>
            <li>NADRA will require the fingerprints of a Pakistani citizen who holds NICOP/CNIC if there are no blood relatives with NICOP/CNIC.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply Now for New NICOP with Nadra Card Centre UK Online</h3>
          <p className="mb-8">With Nadra Card Centre UK, you don't need to schedule any appointments or wait in huge lines. Just visit the website and click on APPLY NOW button to get your NICOP new card with simple steps. You can call or WhatsApp us anytime for any sort of assistance.</p>
          
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
