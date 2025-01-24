import { useState } from "react"
import React from "react"
const UpdatesSection = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setStatus("subscribing")
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  return (
    <section className="bg-[#FFFBF5] border-b-2 border-solid border-[rgb(240,193,124)] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get latest updates</h2>
          <p className="text-gray-600 mb-8">
            With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "subscribing"}
              className="w-full max-w-md bg-purple-600 text-white py-3 px-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-70"
            >
              {status === "subscribing" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-500">
            <p className="mb-1">We'll never share your details with third parties.</p>
            <p>
              View our{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>{" "}
              for more info.
            </p>
          </div>

          {status === "success" && <div className="mt-4 text-green-600">Thank you for subscribing!</div>}
        </div>
      </div>
    </section>
  )
}

export default UpdatesSection

