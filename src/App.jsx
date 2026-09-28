import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWidgets from './components/FloatingWidgets'

// Pages
import HomePage from './pages/home/HomePage'
import NewNadraCard from './pages/nicop/NewNadraCard'
import NicopRenewal from './pages/nicop/NicopRenewal'
import CancellationNicop from './pages/nicop/CancellationNicop'
import ModificationNadraCard from './pages/nicop/ModificationNadraCard'
import LostNadraCard from './pages/nicop/LostNadraCard'
import NadraCardRenewal from './pages/nicop/NadraCardRenewal'

import NewPoc from './pages/poc/NewPoc'
import PocRenewal from './pages/poc/PocRenewal'
import CancellationPoc from './pages/poc/CancellationPoc'
import LostPoc from './pages/poc/LostPoc'

import NewFrc from './pages/frc/NewFrc'
import FrcRenewal from './pages/frc/FrcRenewal'

import AboutUs from './pages/about/AboutUs'
import Faqs from './pages/faqs/Faqs'
import ContactUs from './pages/contact/ContactUs'

import ApplyNow from './pages/apply/ApplyNow'

function App() {
  const location = useLocation()

  // We can pass current path to header if it needs to highlight active link
  // The old manual navigation logic is no longer needed since we use real links.

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-900">
      {/* Navigation Header */}
      <Header currentPage={location.pathname} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-nadra-card" element={<NewNadraCard />} />
          <Route path="/nicop-renewal" element={<NicopRenewal />} />
          <Route path="/cancellation-nicop" element={<CancellationNicop />} />
          <Route path="/modification-nadra-card" element={<ModificationNadraCard />} />
          <Route path="/lost-nadra-card" element={<LostNadraCard />} />
          <Route path="/nadra-card-renewal" element={<NadraCardRenewal />} />

          <Route path="/new-poc" element={<NewPoc />} />
          <Route path="/poc-renewal" element={<PocRenewal />} />
          <Route path="/cancellation-poc" element={<CancellationPoc />} />
          <Route path="/lost-poc" element={<LostPoc />} />

          <Route path="/new-frc" element={<NewFrc />} />
          <Route path="/frc-renewal" element={<FrcRenewal />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/apply-now" element={<ApplyNow />} />
        </Routes>
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Floating utility indicators */}
      <FloatingWidgets />
    </div>
  )
}

export default App
