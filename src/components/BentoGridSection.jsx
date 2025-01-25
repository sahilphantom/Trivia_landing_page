

import React from "react";

const BentoGridSection = () => {
    return (
      <section className="bg-[#FFFBF5] py-16">
        <div className="container w-[70%] m-auto mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Content */}
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold mb-4">Work around very <br />  talented people.</h2>
              <p className="text-gray-600 mt-3">
                With lots of unique blocks, you can easily build a page<br /> easily without any coding.
              </p>
            </div>
  
            {/* Bento Grid Images */}
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              {/* Left Image - Spans 7 columns */}
              <div className="col-span-12 lg:col-span-7 row-span-1">
                <div className="rounded-lg overflow-hidden h-full">
                  <img
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Person working on laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
  
              {/* Right Image - Spans 5 columns and offset */}
              <div className="col-span-12 lg:col-span-5 lg:col-start-6 lg:row-start-1 lg:translate-y-12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="People working at table"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default BentoGridSection
  
  