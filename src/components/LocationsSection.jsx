import React from "react"

const LocationsSection = () => {
    const locations = [
      {
        title: "Beauview",
        seats: 37,
        image: "https://images.pexels.com/photos/9044058/pexels-photo-9044058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Haleyborough",
        seats: 12,
        image: "https://images.pexels.com/photos/3798146/pexels-photo-3798146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Jeromyshire",
        seats: 28,
        image: "https://images.pexels.com/photos/21933950/pexels-photo-21933950/free-photo-of-pond-in-courtyard-of-alhambra-in-granada-in-spain.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ]
  
    return (
      <section className="bg-[#FFFBF5]  py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular locations</h2>
            <p className="text-gray-600 mt-8 mb-16  max-w-2xl mx-auto max-sm:px-5">
              With lots of unique blocks, you can easily build a page<br /> 
              easily without any coding.
            </p>
          </div>
  
          {/* Locations Grid */}
          <div className="grid grid-cols-1 w-[70%] m-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="group">
                <div className="mb-4 rounded-lg overflow-hidden shadow-gray-400 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.title}
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl text-center font-semibold mb-1">{location.title}</h3>
                <p className="text-gray-600 text-center ">{location.seats} seats</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default LocationsSection
  
  