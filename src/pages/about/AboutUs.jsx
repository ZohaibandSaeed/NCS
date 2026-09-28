import React from 'react'
import Hero from '../../components/Hero'
import WhatsAppBanner from '../../components/WhatsAppBanner'

export default function AboutUs() {
  return (
    <>
      <Hero 
        page="nicop" 
        title="About Us" 
        breadcrumb="About Us" 
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Are We and What Do We Do?</h2>
          <p className="mb-8 leading-relaxed">
            Nadra UK is a trusted website for applying for Card Online. We're providing our services to avoid the hassle of the embassy. The Company is recognized and entrusted with its compliance. We help customers to apply for Overseas Card without any hassle from the embassy.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h3>
          <p className="mb-4 leading-relaxed">
            We provide you with a variety of ways to enjoy our reliable services:
          </p>
          <ul className="list-disc pl-6 mb-12 space-y-4 text-gray-600">
            <li>If you have misplaced or forgotten your Card and need to renew your Card, you may do so by utilizing our reliable services.</li>
            <li>We also offer door-to-door delivery of Card and other documents to your home.</li>
          </ul>
        </div>
      </section>

      <WhatsAppBanner />

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Overseas Card</h2>
          <p className="mb-4 leading-relaxed font-bold">
            Overseas Card saves your precious time:
          </p>
          <p className="mb-12 leading-relaxed">
            People are sometimes unaware that their Card has expired until they are in urgent need of it and they are no longer able to enjoy the many benefits that they could or were receiving. As a result, we provide online services to save you time and money while also delivering your identity cards to the UK in the shortest period possible.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overseas Delivery Information</h3>
          <p className="mb-4 leading-relaxed">
            The delivery and processing times for the Nadra UK are depending on the application category you select.
          </p>
          <ul className="list-disc pl-6 mb-12 space-y-4 text-gray-600">
            <li>The Card is delivered in approximately 31 days after the case officer approves it in the normal category.</li>
            <li>After submission, the delivery period for fast categories is generally 23 working days, and urgent Card gets delivered to your door 7-10 business days after submission.</li>
          </ul>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded mb-8">
            <p className="text-sm text-emerald-900">
              <span className="font-bold">We are not officially NADRA, we are only online service provider. Disclaimer:</span> We are independent third-party service provider. We have no affiliation with any government and nadra department. Our role is to assist and advice applicants in preparing and submitting their applications.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
