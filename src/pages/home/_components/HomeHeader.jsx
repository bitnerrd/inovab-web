import React from 'react'

const HomeHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 px-16 md:px-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-md text-center md:text-left">
        <h5 className="text-blue-300 text-sm mb-2">CLONEABLES FOR WEBFLOW</h5>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-base mb-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Non volutpat risus faucibus senectus mi. 
          Mauris bibendum amet diam in viverra. Massa scelerisque sed.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">GET USD!</button>
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">GET USD! WITH 5% DISCOUNT</button>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img src="/src/assets/homeHeader.png" alt="Decorative" className="w-full h-96" />
      </div>
    </div>
  )
}

export default HomeHeader
