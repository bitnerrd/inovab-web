import React from 'react'

const WhyChoose = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 via-white to-blue-50'>
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why businesses choose USDI</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          USDI works seamlessly across applications and platforms around the globe, using blockchain infrastructure that's faster, less expensive, and more customizable than legacy rails.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-blue-100 p-4 rounded-lg max-w-sm">
          <div className="mb-4">
            <span className="bg-white p-3 rounded-lg inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Stable & regulated</h3>
          <p className="text-gray-800 mb-4">USDI is regulated and fully reserved. Reserves are transparently held at regulated financial institutions with published monthly.</p>
          <div className="flex items-start space-x-2">
            <span className="text-blue-500">•</span>
            <p className="text-sm text-gray-800">Unregulated stablecoins often lack the safe rails, compliance controls and reserve attestations for the benefit of stablecoin holders.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-100 p-4 rounded-lg max-w-sm">
          <div className="mb-4">
            <span className="bg-white p-3 rounded-lg inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant settlement</h3>
          <p className="text-gray-800 mb-4">USDI transactions can settle in seconds worldwide 24 day, every day.</p>
          <div className="flex items-start space-x-2">
            <span className="text-blue-500">•</span>
            <p className="text-sm text-gray-800">Legacy payments can take multiple days to settle and often incur high fees, or weekends, or bank holidays.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-100 p-4 rounded-lg max-w-sm">
          <div className="mb-4">
            <span className="bg-white p-3 rounded-lg inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Near-zero cost</h3>
          <p className="text-gray-800 mb-4">USDI payments can be made for less than ½ cent, so it's affordable for anyone to send USDI.</p>
          <div className="flex items-start space-x-2">
            <span className="text-blue-500">•</span>
            <p className="text-sm text-gray-800">Traditional payments cost through multiple intermediaries, introducing additional cost that's passed on to the sender.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="bg-blue-100 p-4 rounded-lg max-w-sm">
          <div className="mb-4">
            <span className="bg-white p-3 rounded-lg inline-block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Open, global access</h3>
          <p className="text-gray-800 mb-4">Businesses and people with an internet connection and digital wallet can send and receive USDI.</p>
          <div className="flex items-start space-x-2">
            <span className="text-blue-500">•</span>
            <p className="text-sm text-gray-800">Senders and receivers typically need bank accounts and specific apps or platforms to transact.</p>
          </div>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default WhyChoose
