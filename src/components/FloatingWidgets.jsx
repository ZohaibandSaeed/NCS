import React, { useState, useEffect } from 'react'
import { MessageSquare, ArrowUp } from 'lucide-react'

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/447842567985"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/20 text-white cursor-pointer group"
        title="Chat on WhatsApp"
      >
        <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          Chat with Us!
        </span>
        <svg
          className="w-8 h-8 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.01-5.078-2.855-6.927C16.378 2.03 13.932 1.017 11.999 1.017c-5.409 0-9.809 4.397-9.812 9.802-.001 1.78.471 3.51 1.365 5.048L2.457 20.94l5.19-1.361z" />
        </svg>
      </a>

      {/* Floating Scroll To Top Widget */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white hover:bg-gray-50 active:scale-95 text-gray-700 border border-gray-200 transition-all rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </>
  )
}
