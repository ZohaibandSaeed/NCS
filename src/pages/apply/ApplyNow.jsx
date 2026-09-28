import React from 'react'
import Hero from '../../components/Hero'
import WhatsAppBanner from '../../components/WhatsAppBanner'

export default function ApplyNow() {
  return (
    <>
      <Hero 
        page="nicop" 
        title="Apply Now" 
        breadcrumb="Apply Now" 
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="px-6 py-12 sm:px-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Start Your Application</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Fill out the form below to apply for your NADRA Card, POC, or FRC. Our team will get back to you immediately to process your request.
                </p>
              </div>
              
              <form action="#" method="POST" className="space-y-8">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                      <input required type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-lg bg-gray-50" placeholder="e.g. Ali" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                      <input required type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-lg bg-gray-50" placeholder="e.g. Khan" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                      <input required id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-lg bg-gray-50" placeholder="e.g. ali@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone / WhatsApp Number <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                      <input required id="phone" name="phone" type="tel" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-lg bg-gray-50" placeholder="e.g. +44 7842 567985" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service-type" className="block text-sm font-semibold text-gray-700">Which service are you applying for? <span className="text-red-500">*</span></label>
                  <div className="mt-2">
                    <select id="service-type" name="service-type" className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-lg bg-gray-50" required>
                      <option value="">Please select a service...</option>
                      <option value="New NICOP">New NICOP (National Identity Card for Overseas Pakistanis)</option>
                      <option value="NICOP Renewal">NICOP Renewal</option>
                      <option value="Lost / Modification NICOP">Lost / Modification NICOP</option>
                      <option value="New POC">New POC (Pakistan Origin Card)</option>
                      <option value="POC Renewal">POC Renewal</option>
                      <option value="FRC">FRC (Family Registration Certificate)</option>
                      <option value="Other">Other Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Additional Information / Message</label>
                  <div className="mt-2">
                    <textarea id="message" name="message" rows={5} className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-lg bg-gray-50" placeholder="Please provide any extra details or questions you may have..." defaultValue={''} />
                  </div>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-lg text-lg font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors transform hover:-translate-y-0.5">
                    Submit Application
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
