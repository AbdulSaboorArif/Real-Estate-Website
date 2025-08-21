import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "Property Buyer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "The team made buying my dream home an incredible experience. They were professional, responsive, and truly understood what I was looking for. I couldn't be happier with my new home!"
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "Selling my property was seamless with their expertise. They got me an excellent price and handled everything professionally. Highly recommend their services!"
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    role: "Real Estate Investor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "Their investment advice and property selection have been invaluable to my portfolio. They have a deep understanding of market trends and always find the best opportunities."
  },
  {
    id: 4,
    name: "David Thompson",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "As a first-time buyer, I was nervous about the process. The team guided me through every step and made it so easy. I'm now a proud homeowner!"
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-primary-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card group hover:bg-dark-700 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-400 text-sm">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary-400/30 flex-shrink-0" />
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              4.9/5 Average Rating
            </h3>
            <p className="text-lg text-gray-100 mb-6">
              Based on 500+ verified reviews from our satisfied clients
            </p>
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Read All Reviews
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "500+", label: "Verified Reviews" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl lg:text-3xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

