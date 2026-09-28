import React from 'react'
import { Link } from 'react-router-dom'
import newCardImg from '../assets/nicop/newcard.jpeg'
import renewCardImg from '../assets/nicop/renewcard.jpeg'
import modifyCardImg from '../assets/nicop/modify.jpeg'
import lostCardImg from '../assets/nicop/lostcard.jpeg'

export default function ServicesGrid({ onNavigate }) {
  const cards = [
    {
      title: 'New Nadra Card',
      description: 'Apply for a new National Identity Card for Overseas Pakistanis (NICOP).',
      image: newCardImg,
      pageKey: 'new-nadra-card',
    },
    {
      title: 'Nadra Card Renewal',
      description: 'Renew your expired or soon-to-expire Nadra Card easily online.',
      image: renewCardImg,
      pageKey: 'nadra-card-renewal',
    },
    {
      title: 'Modification in Nadra Card',
      description: 'Update your marital status, address, or other details on your Nadra Card.',
      image: modifyCardImg,
      pageKey: 'modification-nadra-card',
    },
    {
      title: 'Lost Nadra Card',
      description: 'Apply for a duplicate Nadra Card if you have lost or misplaced yours.',
      image: lostCardImg,
      pageKey: 'lost-nadra-card',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 sm:text-4xl">
            24/7 Assistance at Nadra Card Centre
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-semibold text-base sm:text-lg uppercase tracking-wider">
            We strictly comply with the regulations of Nadra-HQs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-150 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-emerald-500/20 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with rotation on hover */}
                <div className="bg-white rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                <Link
                  to={`/${card.pageKey}`}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 font-bold transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
