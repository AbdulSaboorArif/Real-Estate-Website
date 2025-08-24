"use client"
// import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Search, MapPin, Bed, Bath, Square, Phone } from 'lucide-react'
import Image from 'next/image'
import { properties as allProperties } from '@/data/properties'
import React, { useState } from 'react'

export default function PropertiesPage() {
  const [visible, setVisible] = useState(9)
  const [filter, setFilter] = useState<'all' | 'rent' | 'sale'>('all')
  const filtered = allProperties.filter(p => filter === 'all' ? true : p.type === filter)
  const list = filtered.slice(0, visible)
  const filters = [
    { label: 'All Properties', value: 'all', count: allProperties.length },
    { label: 'For Rent', value: 'rent', count: allProperties.filter(p => p.type === 'rent').length },
    { label: 'For Sale', value: 'sale', count: allProperties.filter(p => p.type === 'sale').length },
  ] as const

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Find Your <span className="text-yellow-300">Dream</span> Property
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
            Discover amazing properties for rent and sale in prime locations.
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
                placeholder="Search by location, property type, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => { setFilter(f.value as any); setVisible(9) }}
                  className={`px-6 py-3 rounded-lg border ${filter===f.value ? 'border-primary-600 bg-primary-50' : 'border-gray-300 hover:border-primary-500 hover:bg-primary-50'} transition-colors`}
                >
                  <span className="font-medium text-gray-700">{f.label}</span>
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{f.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Filters */}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                {/* Property Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100">
                  {property.images && property.images.length > 0 ? (
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200" />
                  )}
                  
                  {/* Property Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.type === 'rent'
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    {property.priceFormatted}
                  </div>
                  
                  {/* Property Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link href={`/properties/${property.slug}`} className="flex-1 btn-primary text-center">View Details</Link>
                    <Link href={`/properties/${property.slug}#schedule-viewing`} className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"><Phone className="w-4 h-4" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            {visible < filtered.length && (
              <button className="btn-secondary" onClick={() => setVisible((v) => v + 9)}>
                Load More Properties
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let us know your requirements and we'll help you find the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </a>
            <a href="/properties/rent" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Browse Rentals
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
