import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logoImg from '../assets/nadra_logo.png'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 text-left flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img className="h-16 w-auto object-contain brightness-0 invert" src={logoImg} alt="NADRA Logo" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              We specialize in offering stress-free assistance to Pakistani nationals living in the UK, helping them apply, renew, or modify their identity cards online without any complications.
            </p>
          </div>

          {/* Information Column */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase">Information</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/faqs" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/nicop-renewal" className="hover:text-emerald-400 transition-colors">Nicop Renewal</Link></li>
              <li><Link to="/lost-nadra-card" className="hover:text-emerald-400 transition-colors">Lost Nicop</Link></li>
              <li><Link to="/modification-nadra-card" className="hover:text-emerald-400 transition-colors">Nicop Modification</Link></li>
              <li><Link to="/poc" className="hover:text-emerald-400 transition-colors">POC Renewal</Link></li>
              <li><Link to="/frc" className="hover:text-emerald-400 transition-colors">FRC</Link></li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="lg:col-span-3 text-left flex flex-col gap-4 text-sm font-medium">
            <h4 className="text-white font-bold text-base tracking-wide uppercase mb-0">Call Us</h4>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-bold">WhatsApp</p>
                <a href="https://wa.me/447842567985" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400">
                  +44 7842 567985
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-bold">Email</p>
                <a href="mailto:support@nadracardscentre.co.uk" className="text-white hover:text-emerald-400">
                  support@nadracardscentre.co.uk
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-bold">Our Address</p>
                <p className="text-white">Coventry, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Disclaimer */}
        <div className="border-t border-slate-900 pt-8 mt-8 text-center text-xs flex flex-col gap-4">
          <p className="text-gray-500 leading-relaxed max-w-4xl mx-auto">
            <span className="font-bold text-gray-400">Disclaimer:</span> We are independent third-party service provider. We have no affiliation with any government and nadra department. Our services include helping applicants in preparing and submitting their applications.
          </p>
          <p className="text-gray-600 font-medium">
            Copyrights © {new Date().getFullYear()} - Nadra Cards Centre All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
