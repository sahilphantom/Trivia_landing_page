import { useState } from "react"
import { CheckCircle, ChevronDown } from "lucide-react"
import React from "react"

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b  border-gray-200/10">
      <button className="flex w-full items-center justify-between py-4 text-left" onClick={onClick}>
        <span className="text-[15px] font-medium text-gray-800">{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="pb-4 text-gray-600">{content}</div>}
    </div>
  )
}

function SetupSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqItems = [
    {
      title: "How to setup Shade Pro?",
      content:
        "With lots of unique blocks, you can easily build a page with coding. Build your next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.",
    },
    {
      title: "Can I use Shade Pro for my clients?",
      content: "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      title: "How often do you release update?",
      content: "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      title: "How can I access old version?",
      content: "With lots of unique blocks, you can easily build a page without coding.",
    },
  ]

  const features = [
    {
      title: "Noise Free Locations",
      description: "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      title: "24/7 Hour Support",
      description: "With lots of unique blocks, you can easily build a page without coding.",
    },
  ]

  return (
    <section className="bg-[#1C1C27] py-20">
      <div className="container w-[70%] m-auto mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white leading-tight">We are always here<br /> for your backup.</h2>
              <p className="text-gray-400">
                We share common trends and strategies for<br /> creating & improving your rental income.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-white  font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-400 w-[320px] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="bg-white rounded-2xl p-6">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SetupSection

