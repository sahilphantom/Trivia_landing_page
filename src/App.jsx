import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatSection from './components/StatSection'
import LocationsSection from './components/LocationsSection'
import SetupSection from './components/SetupSection'
import UpdatesSection from './components/UpdatesSection'
import BentoGridSection from './components/BentoGridSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatSection />
      <LocationsSection />
      <BentoGridSection />
      <SetupSection />
      <UpdatesSection />
      <Footer />
    </div>
  )
}

export default App