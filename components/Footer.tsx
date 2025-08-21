import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press & Media", href: "#" },
    { name: "Partnerships", href: "#" }
  ],
  services: [
    { name: "Buy Property", href: "#" },
    { name: "Sell Property", href: "#" },
    { name: "Rent Property", href: "#" },
    { name: "Property Management", href: "#" },
    { name: "Investment Advisory", href: "#" }
  ],
  resources: [
    { name: "Property Guides", href: "#" },
    { name: "Market Reports", href: "#" },
    { name: "Mortgage Calculator", href: "#" },
    { name: "Property Valuation", href: "#" },
    { name: "Legal Resources", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Live Chat", href: "#" },
    { name: "Emergency Contact", href: "#" }
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Luxury Real Estate
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. We specialize in 
              luxury real estate and provide exceptional service to our clients.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>info@luxuryrealestate.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Market Trends
            </h3>
            <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest property updates, market insights, 
              and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2024 Luxury Real Estate. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-dark-700 hover:bg-primary-600 rounded-lg transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

