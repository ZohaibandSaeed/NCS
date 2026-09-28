import React from 'react'
import { Link } from 'react-router-dom'
import manPhoneImg from '../assets/man_phone.png'
import nicopCardImg from '../assets/nicop_card.png'
import { CheckCircle2 } from 'lucide-react'

export default function IntroSection({ page, data }) {
  
  // RENDER FOR HOME PAGE
  if (page === 'home') {
    const points = [
      'Talk to one of our best consultants today',
      'Our experts are able to find new growth',
      'Find more information on our website',
    ]

    return (
      <section className="py-16 sm:py-20 bg-gray-50 overflow-hidden text-left font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Container */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-150 aspect-[4/5] sm:aspect-auto">
                  <img
                    src={manPhoneImg}
                    alt="Smiling consultant with smartphone"
                    className="w-full h-full object-cover sm:h-[480px]"
                  />
                </div>

                <div className="absolute -left-6 bottom-12 w-48 hidden sm:block bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-100">
                  <img
                    src={nicopCardImg}
                    alt="NICOP Mockup"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Text Container */}
            <div className="order-1 lg:order-2 text-left flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                Apply For Nadra Card Online
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                There are numerous reasons to obtain your Overseas Card for administrative work, 
                some of which are listed below:
              </p>

              <ul className="space-y-4 mb-8">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-semibold text-base sm:text-lg">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                  The quickest administration of the Card is 7-10 working days. Yet at the same time, 
                  if you’re planning to travel within 2-3 days or in a week, relax. We’ll provide you 
                  with an accommodation letter. You can easily travel by showing your Expired Card 
                  and Submission letter to the Airline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // RENDER FOR SUBPAGES (NICOP, POC, FRC)
  const pageData = {
    nicop: {
      title: 'Get A New NICOP Card Online with Nadra Card Centre UK',
      desc: 'Pakistani citizens living abroad and working abroad must have a NICOP document as proof of identity. In addition to the Computerized NIC (CNIC), NICOP can also be used outside Pakistan for personal identification. However, a valid entry or exit card must be produced at an entrance or exit terminal domestically or internationally. According to NADRA ordinances, NICOPs are available to Pakistani workers, immigrants, citizens, or dual nationals registered under NADRA. You can apply for the NICOP new through the Nadra card centre UK online.',
      heading: 'Benefits of NICOP New',
      benefits: [
        'Foreign passport holders are not required to obtain a visa to enter Pakistan',
        'All Pakistanis are entitled to the protection of their rights',
        'The full rights of a Pakistani citizen. They will be known as Pakistani citizens and will have all the rights',
        'NICOP holders can open bank accounts in Pakistan and apply for MRP (Machine Readable Passport)',
        'Proof of Pakistan citizenship',
        'Can sell and buy property in Pakistan and have evidence of Pakistan Citizenship.',
        'They can start a business or apply for a job.',
      ],
    },
    poc: {
      title: 'Get A New POC Card Online with Nadra Card Centre UK',
      desc: 'The Pakistan Origin Card (POC) program is designed to provide eligible foreign nationals of Pakistani origin with visa-free entry, stay privileges, and property acquisition rights in Pakistan. It is issued to foreign spouses of Pakistani nationals, former Pakistani citizens who have renounced their nationality, and their children.',
      heading: 'Benefits of POC New',
      benefits: [
        'Visa-free entry into Pakistan for multiple visits',
        'Indefinite stay in Pakistan without police reporting requirements',
        'Right to acquire and own immovable property in Pakistan',
        'Permission to open bank accounts and make investments in local businesses',
        'Official recognition of Pakistani ancestry and heritage',
      ],
    },
    frc: {
      title: 'Apply Family Registration Certificate (FRC) Online',
      desc: 'Family Registration Certificate (FRC) is a crucial official document issued by NADRA that registers and displays your family composition (by birth or by marriage) in the national database. It is essential for obtaining foreign visas, proving relationships, and resolving legal or inheritance matters.',
      heading: 'Required Documents for FRC',
      benefits: [
        'Proof of family relationship according to official records',
        'Identity cards (CNIC/NICOP) of all family members',
        'Essential document required by foreign embassies for family visas',
        'Accurate representation of family tree from birth or marriage registration',
        'Simple verification process with quick online delivery',
      ],
    },
  }

  const currentData = data || pageData[page] || pageData.nicop

  return (
    <section className="py-12 bg-white text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title with Top Border/Line */}
        <div className="border-t border-gray-300 pt-8 mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#7cb006] leading-tight">
            {currentData.title}
          </h2>
        </div>

        {/* Description and Image Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
          {/* Paragraph Text */}
          <div className="lg:col-span-8">
            <p className="text-[#6b7280] text-base sm:text-[17px] leading-relaxed font-normal">
              {currentData.desc}
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="border border-emerald-700/30 rounded-lg overflow-hidden max-w-sm w-full bg-white shadow-sm">
              <img
                src={currentData.image || "/girlhodingcard.png"}
                alt={currentData.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {currentData.heading}
          </h3>
          <ul className="space-y-4 text-gray-600">
            {currentData.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-base sm:text-[17px] leading-relaxed">
                <span className="text-gray-400 mt-1.5 shrink-0 select-none">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Now Button */}
        <div className="mt-8">
          <Link
            to="/apply-now"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-[#7cb006] hover:bg-[#6b9905] transition-colors shadow-sm"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </section>
  )
}
