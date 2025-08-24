"use client"

import Footer from '@/components/Footer'
import Link from 'next/link'
import { Search, MapPin, Bed, Bath, Square, Calendar, DollarSign } from 'lucide-react'
import { properties as allProperties } from '@/data/properties'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'

export default function PropertiesForRentPage() {
  const rentals = useMemo(() => allProperties.filter(p => p.type === 'rent'), [])
  const [visible, setVisible] = useState(9)
  const list = rentals.slice(0, visible)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Properties for <span className="text-yellow-300">Rent</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
            Find your perfect rental home with flexible lease terms and great locations.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rental properties by location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <button className="px-6 py-3 rounded-lg border border-gray-300">All Rentals
                <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{rentals.length}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                {/* Property Visual */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200">
                  {/* badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">For Rent</span>
                  </div>
                  <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"

                  />
                  {property.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Featured</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{property.priceFormatted}</div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center"><Bed className="w-4 h-4 mr-1" /><span>{property.beds} beds</span></div>
                    <div className="flex items-center"><Bath className="w-4 h-4 mr-1" /><span>{property.baths} baths</span></div>
                    <div className="flex items-center"><Square className="w-4 h-4 mr-1" /><span>{property.sqft.toLocaleString()} sqft</span></div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Link href={`/properties/${property.slug}`} className="flex-1 btn-primary bg-blue-600 hover:bg-blue-700 text-center">View Details</Link>
                    <Link href={`/properties/${property.slug}#schedule-viewing`} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      <Calendar className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            {visible < rentals.length && (
              <button className="btn-secondary border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => setVisible(v => v + 9)}>
                Load More Rentals
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Rental Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Rental</span> Properties?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of renting with our flexible and affordable options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Down Payment</h3>
              <p className="text-gray-600">Rent without the large upfront costs associated with buying a home.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Lease Terms</h3>
              <p className="text-gray-600">Choose from various lease durations that fit your lifestyle and plans.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Square className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Included</h3>
              <p className="text-gray-600">Many of our rental properties include maintenance and repair services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Find Your Rental Home?</h2>
          <p className="text-xl text-gray-100 mb-8">Contact us today to schedule viewings and find your perfect rental property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">Contact Us</a>
            <a href="/properties" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">View All Properties</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
