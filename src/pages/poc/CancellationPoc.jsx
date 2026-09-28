import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import IntroSection from '../../components/IntroSection'
import WhatsAppBanner from '../../components/WhatsAppBanner'
import modifyCardImg from '../../assets/poc/modifycard.jpg'

export default function CancellationPoc() {
  const pageData = {
    title: 'Apply For POC Cancellation',
    desc: 'Canceling your POC has never been a simple process. However, with the help of Nadra cards centre UK, you can easily cancel your POC card online anytime through your mobile phone or desktop. We at Nadra Cards Centre UK assist you with all aspects of POC cancellation and with complex problems you may encounter.\n\nNadra Cards Centre UK provides you with services of online POC cancellation along with full guidance. As well as providing POC cancellation services, Nadra cards centre UK also tackles all the complex problems that may arise during the process. We have a team of experienced professionals that can help you through your entire process from start to finish.',
    heading: 'Reasons for POC Cancellation',
    image: modifyCardImg,
    benefits: [
      'Death-Related Cancellations to avoid confusion and harmful consequences.',
      'Resumption of Pakistani Nationality or Cancellation Of Dual Nationality.',
      'POC Cancellation in Case of Divorce from a Pakistani spouse.',
      'Surrendering of POC cards if you hold more than one ID card.',
    ],
  }

  return (
    <>
      <Hero 
        page="poc" 
        title="POC Cancellation" 
        breadcrumb="POC Cancellation" 
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Details on POC Cancellation Categories</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Pakistan Origin Card Death-Related Cancellations</h3>
          <p className="mb-6 leading-relaxed">
            To avoid losing POC, it needs to be canceled as soon as possible. If a POC has been issued for someone who has since died, it must be canceled as soon as possible. This is to avoid confusion and any harmful consequences that may result from not canceling it right away. It is possible to apply for the cancellation of the POC Card UK by the immediate family members of a deceased POC holder. The support team of the Nadra cards centre UK will help through the whole process of POC cancellation.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Resumption of Pakistani Nationality or Cancellation Of Dual Nationality</h3>
          <p className="mb-6 leading-relaxed">
            If the Federal Government announces a dual nationality agreement with a country where the applicant holds dual nationality or reclaims Pakistani nationality after formally surrendering Pakistani nationality, ex-Pakistanis who previously obtained POC may apply for cancellation of their POC. It is because now they don't need a Pakistan origin card. They can apply for a new NICOP (National Identity Card for Overseas Pakistanis) through our website.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC Cancellation in Case of Divorce</h3>
          <p className="mb-6 leading-relaxed">
            When a Pakistani spouse divorces a foreign spouse, the Pakistani spouse can apply for the cancellation of the ex-spouse's POC nadra card. The POC nadra card is used as proof that the spouse is Pakistani. A divorced person must cancel their card as soon as possible if they are separated from the relationship. Rather than receiving it from the person who needs it, this card must be given to the person who needs it. When a person is married to a Pakistani, they can have a POC nadra card holder. Divorce, in such a case, requires the cancellation of this card immediately.
          </p>
          
          <p className="mb-8 leading-relaxed font-semibold">
            Citizens with more than one ID card who wish to cancel their POC cards must visit NADRA offices (inside and abroad) or can cancel their POC cards online at the Nadra card centre UK ( Nadracardscentre.co.uk ). You can view the relevant cancellation requirements by selecting the correct identity document after clicking on APPLY NOW button available on our website.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">POC (Pakistan Origin Card) Fees for Cancellation</h3>
          <p className="mb-8 leading-relaxed">
            The application fee will also vary depending on the option you choose. The POC cancellation process completes seven days after you provide the complete and necessary documents. Kindly Contact us through these channels to get the desired details.
            <br /><br />
            Email at <a href="mailto:support@nadracardscentre.co.uk" className="text-emerald-600 font-bold">support@nadracardscentre.co.uk</a><br />
            Call us at <a href="tel:02081441298" className="text-emerald-600 font-bold">02081441298</a><br />
            Whatsapp Nadra Card Centre UK on <a href="https://wa.me/447842567985" className="text-emerald-600 font-bold">+44 7842 567985</a>.
          </p>
          
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
