import Image from 'next/image'
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Contemporary Penthouse",
    location: "Manhattan, NY",
    price: "$3,800,000",
    beds: 4,
    baths: 3,
    sqft: "3,800",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Oceanfront Estate",
    location: "Miami Beach, FL",
    price: "$4,200,000",
    beds: 6,
    baths: 5,
    sqft: "5,500",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Aspen, CO",
    price: "$1,800,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Urban Loft",
    location: "Chicago, IL",
    price: "$950,000",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Garden Villa",
    location: "San Francisco, CA",
    price: "$2,800,000",
    beds: 3,
    baths: 3,
    sqft: "2,900",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  }
]

export default function Properties() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-primary-400">Properties</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties in the most 
            desirable locations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group">
              <div className="relative overflow-hidden rounded-xl bg-dark-800">
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center gap-6 text-gray-300 text-sm mb-4">
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
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-400">
                      {property.price}
                    </div>
                    <button className="btn-primary text-sm py-2 px-4">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="text-center mt-16">
          <button className="btn-secondary text-lg py-4 px-8">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}

