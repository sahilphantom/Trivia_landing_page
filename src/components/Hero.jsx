import React from 'react'
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { hero } from '../assets';


const Hero = () => {
  return (
    <div
    className="min-h-screen relative flex items-center justify-center"
    style={{
      backgroundImage: `url(${hero})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-green-400 uppercase tracking-wider mb-4">
          Shared space in your town
        </p>
        <h1 className="text-white text-5xl font-bold mb-12 leading-tight">
          Rent desk space in a<br />shared office environment
        </h1>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-2 flex items-center gap-2 max-w-2xl mx-auto mb-8">
          <div className="flex-1 flex items-center gap-2 px-4 py-2">
            <MapPin className="text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Location" 
              className="w-full outline-none"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 py-2 border-l">
            <Calendar className="text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Date" 
              className="w-full outline-none"
            />
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Search Place
          </button>
        </div>

        {/* Virtual Tour Link */}
        <a href="#tour" className="text-white/80 hover:text-white flex items-center justify-center gap-2 transition-colors">
          <span className="w-8 h-8 rounded-full border border-white/30 inline-flex items-center justify-center">
            <span className="sr-only">Play</span>
            ▶
          </span>
          Take virtual tour of our spaces
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2.5 left-1/2  -translate-x-1/2">
          <ChevronDown className="text-white  animate-bounce" size={32} />
        </div>
      </div>
    </div>
  )
}

export default Hero
