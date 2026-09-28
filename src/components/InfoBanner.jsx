import React from 'react'

export default function InfoBanner() {
  return (
    <section 
      className="relative bg-cover bg-center py-16 md:py-20 px-4 overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: 'url("/handandcard.png")' }}
    >
      {/* Dark green overlay for the tint */}
      <div className="absolute inset-0 bg-[#0c401e]/85 md:bg-[#0a3518]/80 backdrop-brightness-[0.9] z-0"></div>

      {/* Centered border container */}
      <div className="relative z-10 w-full max-w-5xl border border-white/20 px-6 py-10 md:px-16 md:py-12 text-center text-white">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-normal mb-3 max-w-4xl mx-auto">
          For More Information on Urgent NEW NICOP, Pakistan Nadra Card, FRC, POC, Nadra Card Renewal
        </h3>
        
        <p className="text-gray-200/90 text-sm sm:text-base font-medium mb-6">
          Please Contact Nadra Card Centre
        </p>

        {/* WhatsApp Button */}
        <div>
          <a
            href="https://wa.me/447842567985"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#7cb006] hover:bg-[#6b9905] active:scale-98 text-white font-bold uppercase text-sm sm:text-base rounded-md transition-all shadow-md shadow-black/10 cursor-pointer"
          >
            <svg
              className="w-5 h-5 fill-white shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.01-5.078-2.855-6.927C16.378 2.03 13.932 1.017 11.999 1.017c-5.409 0-9.809 4.397-9.812 9.802-.001 1.78.471 3.51 1.365 5.048L2.457 20.94l5.19-1.361z" />
            </svg>
            CHAT WITH US ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
