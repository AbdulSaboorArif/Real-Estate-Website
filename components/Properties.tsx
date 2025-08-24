import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react'
import { properties } from '@/data/properties'

export default function Properties() {
  const featured = properties.filter(p => p.featured).slice(0, 6)
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-primary-400">Properties</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties in the most 
            desirable locations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <div key={property.id} className="group">
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow">
                {/* Property Visual */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                  {property.images && property.images.length > 0 ? (
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  ) : null}
                </div>
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-600">
                      {property.priceFormatted}
                    </div>
                    <Link href={`/properties/${property.slug}`} className="btn-primary text-sm py-2 px-4">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/properties" className="btn-secondary text-lg py-4 px-8">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}


