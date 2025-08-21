'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Info, Building2, Phone, ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false)

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">RealEstate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            
            {/* Properties Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center space-x-1">
                <span>Properties</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/properties/rent" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Properties for Rent
                  </Link>
                  <Link href="/properties/sell" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Properties for Sale
                  </Link>
                  <Link href="/properties" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-primary-600 transition-colors">
                    All Properties
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <Link href="/" className="mobile-nav-link">
                Home
              </Link>
              
              <Link href="/about" className="mobile-nav-link">
                About Us
              </Link>
              
              {/* Mobile Properties Submenu */}
              <div>
                <button
                  onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                  className="mobile-nav-link w-full text-left flex items-center justify-between"
                >
                  Properties
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPropertiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPropertiesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link href="/properties/rent" className="mobile-nav-link text-sm">
                      Properties for Rent
                    </Link>
                    <Link href="/properties/sell" className="mobile-nav-link text-sm">
                      Properties for Sale
                    </Link>
                    <Link href="/properties" className="mobile-nav-link text-sm">
                      All Properties
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="mobile-nav-link">
                Contact Us
              </Link>
              
              <div className="pt-4 space-y-3">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <Link href="/contact" className="btn-primary w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
