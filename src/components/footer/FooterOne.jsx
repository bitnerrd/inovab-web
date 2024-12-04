import React from 'react'

const FooterOne = () => {
  return (
    <>
      <div className="w-full py-10 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `url('/src/assets/footerBg.png')`,
          backgroundSize: '80% 100%',
          backgroundPosition: 'center center'
        }}>
       
        <div className="text-center text-white relative z-10">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">
            Are you ready to get started? <br /> We got you covered!
          </h1>
          <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-medium rounded-full shadow-md hover:bg-gray-200 transition-all">
            Sign Up -- Free
          </button>
        </div>
      </div>
    </>
  )
}

export default FooterOne
