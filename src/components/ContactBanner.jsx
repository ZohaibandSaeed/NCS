import React from 'react'

export default function ContactBanner() {
  return (
    <section className="relative w-full bg-white font-sans">
      
      {/* Top Header Area (on white background) */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-4 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide">
          We strictly comply with the regulations of Nadra-HQs
        </h3>
        
        {/* Zig-zag divider shape */}
        <div className="flex justify-center mt-3 mb-6 select-none opacity-40">
          <svg className="w-24 h-3 text-gray-500" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0,5 L10,2 L20,8 L30,2 L40,8 L50,2 L60,8 L70,2 L80,8 L90,2 L100,5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Overlapping Image Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 -mb-28 sm:-mb-36 md:-mb-44">
        <div className="bg-white p-4 shadow-xl border border-gray-100 rounded-none w-full">
          {/* Zoom container on hover */}
          <div className="relative group overflow-hidden cursor-pointer w-full aspect-video">
            <img
              src="/flagandcard.png"
              alt="Regulations compliance and security"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Green Area */}
      <div className="bg-[#13401d] pt-36 sm:pt-48 md:pt-56 pb-16 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
            Feel Free To Contact Us
          </h2>
          
          <div className="w-full max-w-4xl border-t border-white/20 my-5 sm:my-6"></div>
          
          <p className="text-gray-100/90 text-sm sm:text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
            NADRA CARD CENTRE, Contact us today by fill up Apply Now form and we will contact you.
          </p>
          
          <div>
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#7cb006] hover:bg-[#6b9905] active:scale-98 text-white font-bold uppercase text-xs sm:text-sm tracking-wider rounded-md transition-all shadow-md"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
