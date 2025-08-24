import { getPropertyBySlug } from '@/data/properties'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Bed, Bath, Square, Home, Check, Calendar, Phone } from 'lucide-react'
import Image from 'next/image'

interface PageProps {
  params: { slug: string }
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = getPropertyBySlug(params.slug)
  if (!property) return notFound()

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        {/* Gallery */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {property.images && property.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="relative h-64 md:h-96 md:col-span-8 rounded-xl overflow-hidden">
                <Image src={property.images[0]} alt={property.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" priority />
              </div>
              <div className="grid grid-rows-2 gap-4 md:col-span-4">
                <div className="relative h-32 md:h-44 rounded-xl overflow-hidden">
                  <Image src={property.images[1] || property.images[0]} alt={property.title} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="relative h-32 md:h-44 rounded-xl overflow-hidden">
                  <Image src={property.images[2] || property.images[0]} alt={property.title} fill className="object-cover" sizes="33vw" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <Home className="w-8 h-8" />
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-sm opacity-90">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold">{property.title}</h1>
              {property.subtitle && (
                <p className="mt-2 text-lg text-gray-100">{property.subtitle}</p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-white/90">
                <div className="text-3xl font-bold">
                  {property.priceFormatted}
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="inline-flex items-center gap-2"><Bed className="w-4 h-4" /> {property.beds} beds</span>
                  <span className="inline-flex items-center gap-2"><Bath className="w-4 h-4" /> {property.baths} baths</span>
                  <span className="inline-flex items-center gap-2"><Square className="w-4 h-4" /> {property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About this property</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{property.description}</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700 dark:text-gray-300">
                {property.yearBuilt && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs uppercase opacity-70">Year Built</div>
                    <div className="font-medium">{property.yearBuilt}</div>
                  </div>
                )}
                {property.lotSizeSqft && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs uppercase opacity-70">Lot Size</div>
                    <div className="font-medium">{property.lotSizeSqft.toLocaleString()} sqft</div>
                  </div>
                )}
                {property.dimensions && (property.dimensions.widthFt || property.dimensions.depthFt) && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs uppercase opacity-70">Dimensions</div>
                    <div className="font-medium">{property.dimensions.widthFt ?? '-'} × {property.dimensions.depthFt ?? '-'} ft</div>
                  </div>
                )}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <div className="text-xs uppercase opacity-70">Listing</div>
                  <div className="font-medium capitalize">{property.type}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Features</h3>
                <ul className="space-y-2">
                  {property.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-primary-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Amenities</h3>
                <ul className="space-y-2">
                  {property.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-primary-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - Schedule Viewing */}
          <div className="lg:col-span-1">
            <div id="schedule-viewing" className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Schedule a Viewing</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500" />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500" />
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500" />
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" /> Request Viewing
                </button>
                <Link href={`tel:+15551234567`} className="inline-flex items-center justify-center gap-2 w-full text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600">
                  <Phone className="w-4 h-4" /> Or call: +1 (555) 123-4567
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mt-8">
          <Link href="/properties" className="text-primary-600 hover:underline">← Back to properties</Link>
        </div>
      </div>
    </main>
  )
}


