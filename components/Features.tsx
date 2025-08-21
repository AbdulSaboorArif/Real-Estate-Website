import { Shield, Home, Users, Award, Clock, Phone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Your investment is protected with our secure and transparent processes."
  },
  {
    icon: Home,
    title: "Premium Properties",
    description: "Access to exclusive luxury properties in prime locations worldwide."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Professional real estate experts with years of experience."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in real estate services."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your real estate needs."
  },
  {
    icon: Phone,
    title: "Easy Contact",
    description: "Multiple ways to reach us for personalized service."
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="text-primary-400">Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide exceptional real estate services with a focus on quality, 
            transparency, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their perfect property with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

