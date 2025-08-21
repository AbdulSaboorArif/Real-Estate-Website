// import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Search, Filter, MapPin, Bed, Bath, Square, Home, DollarSign, TrendingUp, Map } from 'lucide-react'

export default function PropertiesForSalePage() {
  const saleProperties = [
    {
      id: 1,
      title: "Luxury Family Home",
      price: "$750,000",
      location: "Suburban Heights",
      beds: 4,
      baths: 3,
      sqft: 2800,
      lotSize: "0.5 acres",
      yearBuilt: 2018,
      propertyTax: "$8,500/year",
      image: "/properties/house1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Investment Property",
      price: "$450,000",
      location: "University Area",
      beds: 3,
      baths: 2,
      sqft: 1600,
      lotSize: "0.25 acres",
      yearBuilt: 2015,
      propertyTax: "$5,200/year",
      image: "/properties/investment1.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Historic Townhouse",
      price: "$1,200,000",
      location: "Historic District",
      beds: 5,
      baths: 4,
      sqft: 3200,
      lotSize: "0.3 acres",
      yearBuilt: 1925,
      propertyTax: "$12,000/year",
      image: "/properties/townhouse1.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Modern Condo",
      price: "$380,000",
      location: "Downtown",
      beds: 2,
      baths: 2,
      sqft: 1100,
      lotSize: "N/A",
      yearBuilt: 2020,
      propertyTax: "$4,800/year",
      image: "/properties/condo1.jpg",
      featured: true
    },
    {
      id: 5,
      title: "Waterfront Estate",
      price: "$2,500,000",
      location: "Harbor View",
      beds: 6,
      baths: 5,
      sqft: 4500,
      lotSize: "1.2 acres",
      yearBuilt: 2019,
      propertyTax: "$25,000/year",
      image: "/properties/estate1.jpg",
      featured: true
    },
    {
      id: 6,
      title: "Starter Home",
      price: "$320,000",
      location: "Family Suburbs",
      beds: 3,
      baths: 2,
      sqft: 1400,
      lotSize: "0.2 acres",
      yearBuilt: 2012,
      propertyTax: "$4,200/year",
      image: "/properties/starter1.jpg",
      featured: false
    }
  ]

  const saleFilters = [
    { label: "All Properties", value: "all", count: saleProperties.length },
    { label: "Under $500K", value: "under500k", count: saleProperties.filter(p => parseInt(p.price.replace(/[$,]/g, '')) < 500000).length },
    { label: "$500K - $1M", value: "500k-1m", count: saleProperties.filter(p => {
      const price = parseInt(p.price.replace(/[$,]/g, ''));
      return price >= 500000 && price < 1000000;
    }).length },
    { label: "$1M+", value: "over1m", count: saleProperties.filter(p => parseInt(p.price.replace(/[$,]/g, '')) >= 1000000).length }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Properties for <span className="text-yellow-300">Sale</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
            Find your dream home with our exclusive selection of properties for sale.
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
                placeholder="Search properties for sale by location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              {saleFilters.map((filter) => (
                <button
                  key={filter.value}
                  className="px-6 py-3 rounded-lg border border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{filter.label}</span>
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sale-Specific Filters */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-medium text-gray-700">Sale Filters:</span>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Price Range</option>
                <option>$0 - $300,000</option>
                <option>$300,000 - $500,000</option>
                <option>$500,000 - $750,000</option>
                <option>$750,000 - $1,000,000</option>
                <option>$1,000,000+</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Property Type</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Land</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Year Built</option>
                <option>2020+</option>
                <option>2010-2019</option>
                <option>2000-2009</option>
                <option>1990-1999</option>
                <option>Pre-1990</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Lot Size</option>
                <option>Under 0.25 acres</option>
                <option>0.25 - 0.5 acres</option>
                <option>0.5 - 1 acre</option>
                <option>1+ acres</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                {/* Property Image */}
                <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                    <Home className="w-24 h-24 text-green-600" />
                  </div>
                  
                  {/* Sale Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      For Sale
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-green-600 mb-4">
                    {property.price}
                  </div>
                  
                  {/* Sale-Specific Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-medium text-gray-900">{property.yearBuilt}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Lot Size:</span>
                      <span className="font-medium text-gray-900">{property.lotSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Property Tax:</span>
                      <span className="font-medium text-gray-900">{property.propertyTax}</span>
                    </div>
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
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary bg-green-600 hover:bg-green-700">
                      Schedule Viewing
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                      <Map className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary border-green-600 text-green-600 hover:bg-green-50">
              Load More Properties
            </button>
          </div>
        </div>
      </section>

      {/* Buying Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-green-600">Buy</span> Instead of Rent?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the long-term benefits of homeownership and building equity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Build Equity
              </h3>
              <p className="text-gray-600">
                Every mortgage payment builds equity in your home, increasing your net worth over time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tax Benefits
              </h3>
              <p className="text-gray-600">
                Enjoy tax deductions on mortgage interest and property taxes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Freedom to Customize
              </h3>
              <p className="text-gray-600">
                Make your home truly yours with renovations and personal touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Market <span className="text-green-600">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about current market trends and property values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">$450K</div>
              <div className="text-gray-600">Average Home Price</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">3.2%</div>
              <div className="text-gray-600">Price Increase (YoY)</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">List Price to Sale Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Buy Your Dream Home?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact us today to schedule viewings and start your homeownership journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
              Contact Us
            </a>
            <a href="/properties" className="btn-secondary border-white text-white hover:bg-white hover:text-green-600">
              View All Properties
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
