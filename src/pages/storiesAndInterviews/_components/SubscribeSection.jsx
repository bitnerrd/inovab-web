import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center max-w-xl">
        <p className="text-sm text-blue-500 mb-2 mt-10">Our blog</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Stories and interviews</h1>
        <p className="text-gray-600 mb-6">
          Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          We care about your data in our <a href="#" className="text-blue-500 underline">privacy policy</a>.
        </p>
      </div>
    </div>
  );
};

export default SubscribeSection;
