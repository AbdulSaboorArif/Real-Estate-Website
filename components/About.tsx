import Image from 'next/image'
import { CheckCircle, Users, Award, Globe, Home } from 'lucide-react'

const stats = [
  { icon: Users, number: "1000+", label: "Happy Clients" },
  { icon: Home, number: "500+", label: "Properties Sold" },
  { icon: Award, number: "25+", label: "Awards Won" },
  { icon: Globe, number: "15+", label: "Years Experience" }
]

const values = [
  "Transparency in all transactions",
  "Professional and ethical service",
  "Customer satisfaction guarantee",
  "Innovative real estate solutions",
  "Local market expertise",
  "24/7 customer support"
]

export default function About() {
  return (
    <section className="section-padding bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-primary-400">Our Company</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are a leading real estate company with over 15 years of experience 
              in helping clients find their dream properties. Our commitment to 
              excellence and customer satisfaction has made us the trusted choice 
              for real estate services.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team of experienced professionals understands the local market 
              dynamics and provides personalized service to meet your unique needs. 
              Whether you're buying, selling, or investing, we're here to guide 
              you every step of the way.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Our Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-white font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-600/20 rounded-full">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
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



