"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export default function Hero() {
  const [searchType, setSearchType] = useState("buy");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="Luxury Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your Dream
          <span className="block text-primary-400">Home Today</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-lg mx-auto">
          Discover luxury properties in the most prestigious locations. Your
          perfect home is waiting for you.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 mr-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
              500+
            </div>
            <div className="text-gray-300">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
              1000+
            </div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
              15+
            </div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
