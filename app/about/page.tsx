// import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Award, Target, Heart, Shield, Star } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our clients' needs and satisfaction above everything else."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest and transparent communication."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for excellence in every property we handle and every service we provide."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Embracing new technologies and methods to better serve our clients."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team/sarah.jpg",
      description: "15+ years of real estate experience with a passion for helping families find their dream homes."
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image: "/team/michael.jpg",
      description: "Expert negotiator with a track record of securing the best deals for our clients."
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      image: "/team/emily.jpg",
      description: "Dedicated to ensuring all properties meet our high standards of quality and service."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
            Building dreams, one property at a time. We're your trusted partner in real estate.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, RealEstate has been at the forefront of the real estate industry, 
                helping thousands of families find their perfect homes. What started as a small local 
                agency has grown into a trusted name in real estate across the region.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been driven by a simple mission: to make the home-buying and 
                selling process as smooth and enjoyable as possible. We believe that everyone 
                deserves to find a place they can call home.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">13+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl flex items-center justify-center">
                <Users className="w-32 h-32 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-primary-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who make your real estate dreams come true.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's start your real estate journey together. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get in Touch
            </a>
            <a href="/properties" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              View Properties
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
