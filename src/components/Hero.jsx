import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ page, title, breadcrumb, onNavigate }) {
  // If it's a subpage (NICOP, POC, FRC, or a custom title is provided)
  if (page !== 'home' || title) {
    const defaultTitles = {
      nicop: 'National Identity Card for Overseas Pakistanis – NICOP',
      poc: 'Pakistan Origin Card – POC',
      frc: 'Family Registration Certificate – FRC',
    }

    const defaultBreadcrumbs = {
      nicop: 'National Identity Card for Overseas Pakistanis – NICOP',
      poc: 'Pakistan Origin Card – POC',
      frc: 'Family Registration Certificate – FRC',
    }

    const currentTitle = title || defaultTitles[page] || defaultTitles.nicop
    const currentBreadcrumb = breadcrumb || defaultBreadcrumbs[page] || defaultBreadcrumbs.nicop

    return (
      <section 
        id="home" 
        className="relative bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[440px]"
        style={{ backgroundImage: 'url("/handandcard.png")' }}
      >
        {/* Semi-transparent green overlay for the tint effect */}
        <div className="absolute inset-0 bg-[#0f5128]/85 md:bg-[#0c4420]/80 backdrop-brightness-[0.85] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white py-12">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl mx-auto">
            {currentTitle}
          </h1>
          
          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-200/90">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">{currentBreadcrumb}</span>
          </div>
        </div>
      </section>
    )
  }

  // Otherwise, render the main Homepage Hero (Family Hero - 100% Match)
  return (
    <section id="home" className="relative bg-gradient-to-r from-[#40b154] to-[#125827] overflow-hidden text-white pt-16 pb-24 lg:pt-20 lg:pb-32 flex items-center min-h-[580px] lg:min-h-[640px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="mb-4">
              <span className="text-white font-medium uppercase tracking-widest text-sm sm:text-base border-b-2 border-white/60 pb-1.5 inline-block">
                ID Card For Overseas Pakistanis
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-2xl">
              NADRA Card Services for Pakistanis in the UK
            </h1>
            
            <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl font-normal">
              Welcome to NADRA Card Centre, a support service for Pakistani families residing in the United Kingdom and require help in getting Pakistani identity documents. When you are looking for pakistan nadra card uk services we want to make you understand, organize and facilitate your searching process. For making an application it is made through the proper official channel, we assist applicants in clarifying and understanding the requirements, preparing information, checking documents, filling in application details and what comes next.
            </p>
            
            <div>
              <Link
                to="/apply-now"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#13401d] hover:bg-[#0b2912] active:scale-98 text-white font-bold tracking-wider uppercase text-sm sm:text-base rounded-md transition-all shadow-md shadow-black/10 cursor-pointer"
              >
                APPLY NOW
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Curved/masked frame for the family photo */}
              <div className="relative rounded-bl-[160px] md:rounded-bl-[240px] rounded-tr-[40px] overflow-hidden shadow-2xl border-l-[10px] border-b-[10px] border-white bg-emerald-950/20 w-full aspect-[4/3] lg:aspect-auto">
                <img
                  src="/family.png"
                  alt="Happy Pakistani Family"
                  className="w-full h-full object-cover lg:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[80px] fill-white">
          <path d="M0,60 C300,130 900,10 1200,70 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}
