import React from 'react'
import { ClipboardList, MailOpen, Fingerprint, Send, ChevronRight } from 'lucide-react'

export default function ProcessSteps() {
  const steps = [
    {
      num: 'Step 1',
      title: 'Complete the form',
      desc: 'Complete the whole form on our website to provide primary details.',
      icon: ClipboardList,
    },
    {
      num: 'Step 2',
      title: 'Provide paperworks',
      desc: 'Provide us the required paperwork via digital upload or email.',
      icon: MailOpen,
    },
    {
      num: 'Step 3',
      title: 'Fingerprints validation',
      desc: 'Proofread the processed form and provide your physical fingerprints.',
      icon: Fingerprint,
    },
    {
      num: 'Step 4',
      title: 'Dispatch card',
      desc: 'Send the completed form to us, and we handle the official submission.',
      icon: Send,
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 sm:text-4xl">
            How The Process Works
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-base sm:text-lg">
            Apply for your Pakistan Overseas Card Online at any time from anywhere and get it delivered to your doorstep.
            Acquiring your card is now quicker and easier than ever before!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center"
              >
                {/* Step number tag */}
                <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 font-bold text-xs px-2.5 py-1 rounded-full border border-emerald-100">
                  {step.num}
                </div>

                {/* Circle Icon */}
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center text-white mb-6 mt-2 shadow-inner">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* pipeline banner */}
        <div className="bg-white border border-gray-150 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
            How the PROCESS WILL WORK?
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="h-12 px-8 bg-emerald-50 text-emerald-800 font-extrabold text-base border border-emerald-100 rounded-xl flex items-center justify-center tracking-wider shadow-sm">
                APPLY
              </div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-gray-400 rotate-90 sm:rotate-0" />
            
            <div className="flex flex-col items-center">
              <div className="h-12 px-8 bg-emerald-600 text-white font-extrabold text-base rounded-xl flex items-center justify-center tracking-wider shadow-md shadow-emerald-600/10">
                PROGRESS
              </div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-gray-400 rotate-90 sm:rotate-0" />
            
            <div className="flex flex-col items-center">
              <div className="h-12 px-8 bg-emerald-800 text-emerald-300 font-extrabold text-base rounded-xl flex items-center justify-center tracking-wider shadow-sm">
                PLACED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
