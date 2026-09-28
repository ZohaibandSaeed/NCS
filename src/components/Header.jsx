import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoImg from '../assets/nadra_logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigation = [
    { name: 'HOME', href: '/' },
    {
      name: 'NICOP',
      href: '/new-nadra-card', // Default click for main menu item
      dropdown: [
        { name: 'New Nadra Card', href: '/new-nadra-card' },
        { name: 'Nicop Renewal Online', href: '/nicop-renewal' },
        { name: 'Cancellation NICOP', href: '/cancellation-nicop' },
        { name: 'Modification Nadra Card', href: '/modification-nadra-card' },
        { name: 'Lost Nadra Card', href: '/lost-nadra-card' },
        { name: 'Nadra Card Renewal', href: '/nadra-card-renewal' },
      ],
    },
    {
      name: 'POC',
      href: '/new-poc',
      dropdown: [
        { name: 'New POC Card', href: '/new-poc' },
        { name: 'POC Renewal Online', href: '/poc-renewal' },
        { name: 'Cancellation POC', href: '/cancellation-poc' },
        { name: 'Lost POC', href: '/lost-poc' },
      ],
    },
    {
      name: 'FRC',
      href: '/new-frc',
      dropdown: [
        { name: 'New FRC', href: '/new-frc' },
        { name: 'FRC Renewal', href: '/frc-renewal' },
      ],
    },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'CONTACT US', href: '/contact-us' },
  ]

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  const isRouteActive = (item) => {
    if (item.href === '/' && location.pathname === '/') return true;
    if (item.href !== '/' && location.pathname.startsWith(item.href)) return true;
    if (item.dropdown) {
      return item.dropdown.some(subItem => location.pathname === subItem.href);
    }
    return false;
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img className="h-16 w-auto object-contain" src={logoImg} alt="NADRA Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {navigation.map((item, idx) => {
              const isActive = isRouteActive(item)
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(idx)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center text-sm font-semibold transition-colors py-2 px-1 gap-1 ${
                      isActive ? 'text-emerald-600 font-bold' : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors ${
                          isActive ? 'text-emerald-600' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === idx && (
                    <div className="absolute left-0 top-full pt-2 w-56 transition-all duration-200 z-50">
                      <div className="rounded-md shadow-lg bg-white border border-gray-100 py-1 ring-1 ring-black/5">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`block px-4 py-2 text-sm font-medium transition-colors ${
                              location.pathname === subItem.href 
                                ? 'bg-emerald-50 text-emerald-700' 
                                : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/apply-now"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 transition-all duration-150"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item, idx) => {
              const isActive = isRouteActive(item)
              return (
                <div key={item.name} className="block">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(idx)}
                        className={`w-full flex justify-between items-center px-3 py-2.5 rounded-md text-base font-semibold text-left ${
                          isActive ? 'text-emerald-600 bg-emerald-50/50 font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === idx ? 'rotate-180 text-emerald-600' : 'text-gray-400'
                          }`}
                        />
                      </button>
                      {activeDropdown === idx && (
                        <div className="pl-6 space-y-1 bg-gray-50 py-2 rounded-md">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                location.pathname === subItem.href
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                        isActive ? 'text-emerald-600 bg-emerald-50/50 font-bold' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}
            <div className="pt-4 pb-2 border-t border-gray-100 px-3">
              <Link
                to="/apply-now"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 shadow-md"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
