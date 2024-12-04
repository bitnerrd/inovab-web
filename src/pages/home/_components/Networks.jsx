import React from 'react'

const Networks = () => {
  const networks = [
    {
    //   name: 'Ethereum',
      icon: '/src/assets/Container (2).png', // You'll need to add these icons to your public folder
      address: '0xc5567b067645fed5C967876A831022561614d9',
    },
    {
    //   name: 'BNB Chain',
      icon: '/src/assets/Container (1).png',
      address: '0xc5567b067645fed5C967876A831022561614d9',
    },
    {
    //   name: 'Solana',
      icon: '/src/assets/Container.png',
      address: '0x71e5d7237423cf556d7574dd0753c4235c3530aa5c7693a',
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Which Networks Are Supported?
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          USD+ is available on Ethereum and BNB Chain with planned support for an increasing number of blockchains.
        </p>
      </div>

      {/* Networks List */}
      <div className="space-y-4">
        {networks.map((network) => (
          <div
            key={network.name}
            className="flex flex-col md:flex-row items-center md:justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-8 mb-3 md:mb-0">
              <img
                src={network.icon}
                alt={network.name}
                className="h-14 w-auto"
              />
              <span className="font-medium">{network.name}</span>
            </div>
            <div className="text-gray-500 text-sm md:text-base font-mono truncate w-full md:max-w-[400px] text-center md:text-left">
              {network.address}
            </div>
          </div>
        ))}
      </div>

      {/* PeckShield Logo */}
      <div className="mt-12 text-center">
        <div className="text-sm text-gray-500 mb-2">Audited by</div>
        <img
          src="/src/assets/Link.png"
          alt="PeckShield"
          className="h-8 mx-auto"
        />
      </div>
    </div>
  )
}

export default Networks
