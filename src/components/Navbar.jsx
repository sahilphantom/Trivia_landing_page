import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
   <nav className="absolute top-0 left-0 right-0 z-[60] max-sm:px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-white text-2xl font-bold z-5">Trivia</div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300">
              Demos
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Pages
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Support
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-5  ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className=" md:hidden fixed inset-0 z-6 max-sm:px-4 ">
            {/* Blur background */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={toggleMenu}></div>

            {/* Menu content */}
            <div className="relative z-50 h-full flex flex-col">
              {/* Header with logo and close button */}
              <div className="flex justify-between items-center py-6 px-4 sm:px-6 ">
                <div className="text-white text-2xl font-bold">Trivia</div>
                <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Close menu">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu items */}
              <div className="flex-grow  overflow-y-auto">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                  <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
                    Demos
                  </a>
                  <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
                    Pages
                  </a>
                  <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
                    Support
                  </a>
                  <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
