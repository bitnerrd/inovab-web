import React from 'react'

const GlobalPartner = () => {
  return (
    <div className="py-6 px-2 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <h2 className="text-center text-sm font-semibold uppercase tracking-wider mb-10">
        A Global Network of Partners Using USDI
      </h2>
      
      <div className="overflow-hidden">
        <marquee scrollamount="5" behavior="scroll" direction="left">
          <div className="flex items-center gap-x-12">
            <img src="/src/assets/visa.png" alt="Visa" className="h-8 object-contain" />
            <img src="/src/assets/blackrock.png" alt="BlackRock" className="h-8 object-contain" />
            <img src="/src/assets/bnymellon.png" alt="BNY Mellon" className="h-8 object-contain" />
            <img src="/src/assets/worldpay.png" alt="Worldpay" className="h-8 object-contain" />
            <img src="/src/assets/moneygram.png" alt="MoneyGram" className="h-8 object-contain" />
            <img src="/src/assets/wintermute.png" alt="Wintermute" className="h-8 object-contain" />
            <img src="/src/assets/visa.png" alt="Visa" className="h-8 object-contain" />
            <img src="/src/assets/blackrock.png" alt="BlackRock" className="h-8 object-contain" />
            <img src="/src/assets/bnymellon.png" alt="BNY Mellon" className="h-8 object-contain" />
            <img src="/src/assets/worldpay.png" alt="Worldpay" className="h-8 object-contain" />
            <img src="/src/assets/moneygram.png" alt="MoneyGram" className="h-8 object-contain" />
            <img src="/src/assets/wintermute.png" alt="Wintermute" className="h-8 object-contain" />
          </div>
        </marquee>
      </div>
    </div>
  )
}

export default GlobalPartner
