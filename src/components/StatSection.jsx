import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const AnimatedNumber = ({ target }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      })
    }
  }, [controls, inView])

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="text-5xl font-bold text-gray-900"
    >
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {target}
      </motion.span>
    </motion.h2>
  )
}

function StatsSection() {
  const stats = [
    { number: 6, text: "Offices are available on different countries" },
    { number: 238, text: "Seats are available right now with dedicated support" },
    { number: 1395, text: "People are using our co-work spaces right now" },
  ]

  return (
    <div className="bg-[#FFFBF5] border-b-2 border-solid border-[rgb(240,193,124)] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <AnimatedNumber target={stat.number} />
              <p className="text-gray-600 text-lg text-center ml-5 mt-6 w-[330px] max-sm:w-auto">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSection

