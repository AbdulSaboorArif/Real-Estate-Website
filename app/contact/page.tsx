// import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@realestate.com", "support@realestate.com"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Real Estate Blvd", "Suite 100, City, State 12345"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with all your real estate needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-2">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a <span className="text-primary-600">Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="property-viewing">Property Viewing</option>
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="renting">Renting Property</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our <span className="text-primary-600">Office</span>
                </h3>
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="w-24 h-24 text-primary-600" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Main Office
                    </h4>
                    <p className="text-gray-600 mb-4">
                      123 Real Estate Blvd<br />
                      Suite 100<br />
                      City, State 12345
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                  <span>Quick Response</span>
                </h4>
                <p className="text-gray-600 mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Phone calls: Immediate response</p>
                  <p>• Emails: Within 24 hours</p>
                  <p>• Form submissions: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-primary-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-600">
                We serve the entire metropolitan area and surrounding suburbs, covering residential, commercial, and investment properties.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I schedule a property viewing?
              </h3>
              <p className="text-gray-600">
                You can schedule a viewing by calling us directly, filling out our contact form, or using our online booking system.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What documents do I need to rent/buy a property?
              </h3>
              <p className="text-gray-600">
                Required documents typically include proof of income, identification, credit history, and references. We'll provide a complete list during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
