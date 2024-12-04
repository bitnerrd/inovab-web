import React from 'react'

const WhyShould = () => {
  return (
    <div className="relative h-[400px] w-full bg-[url('/src/assets/homebg.png')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Why Should You Use<br />First Digital USD?
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Fusce sed accumsan adipiscing ornare eleifeat. Adipiscing enim eget sed nisl magna vitae dictum. Sapien arcu id enim tempus.
        </p>
      </div>
    </div>
  )
}

export default WhyShould
