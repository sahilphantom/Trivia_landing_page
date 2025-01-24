import { Twitter, Facebook, Instagram, Linkedin, Heart } from "lucide-react"
import React from "react"

const  Footer = () => {
  const footerSections = {
    Company: ["About us", "Contact us", "Careers", "Press"],
    Product: ["Features", "Pricing", "News", "Help desk", "Support"],
    Services: ["Digital Marketing", "Content Writing", "SEO for Business", "UI Design"],
    Legal: ["Privacy Policy", "Terms & Conditions", "Return Policy"],
    "Contact us": {
      email: "support@brainwave.io",
      phone: "+133-394-3439-1435",
    },
  }

  return (
    <footer className="bg-[#FFFBF5] py-16">
      <div className="container w-[80%] m-auto mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-gray-600 font-medium mb-4">{title}</h3>
              <ul className="space-y-3">
                {Array.isArray(items) ? (
                  items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))
                ) : (
                  <>
                    <li>
                      <a href={`mailto:${items.email}`} className="text-purple-600 font-bold hover:text-purple-700">
                        {items.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${items.phone}`} className="text-purple-600 font-bold hover:text-purple-700">
                        {items.phone}
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-green-500 fill-current" />
              <span>By Sahil</span>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

