import React from 'react'

const BrightFuture = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <img src="/src/assets/brightfuture1.png" alt="Rocket Illustration" className="w-full max-w-md mx-auto" />
        </div>
        <div className="md:w-2/5 mb-8 md:mb-0 order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl mb-4 tracking-wide leading-tight">
            Bright Future with Inovab Digital Lab
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Ulna felis odio nulla sit. In facilisis elementum pulvinar risus condimentum nulla lacus, ipsum egestas elementum ut nec lacus sapien fames et. Elementum in ut vestibulum.
          </p>
        </div>
      </div>

      {/* USDI Section */}
      <div className="mb-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/5 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl  mb-4">Get USDI</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Urna vestibulum pulvinar ut. Sagittis at netus vestibulum pulvinar eu non. Commodo pulvinar scelerisque vitae fatis arcu.
          </p>
          
          {/* Exchange Logos */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <img src="/src/assets/getUSDI1.png" alt="Binance" className="h-4 w-auto" />
            <img src="/src/assets/getUSDI2.png" alt="Coinbase" className="h-4 w-auto" />
            <img src="/src/assets/getUSDI3.png" alt="Crypto.com" className="h-4 w-auto" />
            <img src="/src/assets/getUSDI4.png" alt="Kraken" className="h-4 w-auto" />
            <img src="/src/assets/getUSDI5.png" alt="DEX" className="h-4 w-auto" />
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            View Full Markets
          </button>
        </div>
        
        <div className="md:w-1/2">
          <img src="/src/assets/brightfuture2.png" alt="USDI Illustration" className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Transparent Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <img src="/src/assets/brightfuture3.png" alt="Transparent Illustration" className="w-full max-w-md mx-auto" />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-500">#</span>Transparent
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Proin nulla felis urna feugiat amet diam elementum. A mi ornare consequat purus id. Sagittis ut commodo fitis tempus vulputate in at.
          </p>
          <div className="flex items-center gap-4">
            <div className="">
                <p className='text-sm'>Examined By</p>
            </div>
            <div className="w-16 h-16  rounded-lg">
                <img src="/src/assets/logo-ps.svg.png" alt="Transparent Illustration" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrightFuture
