import React from "react";

const BuildCurrency = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-blue-500 font-semibold mb-2 uppercase tracking-wide">
            Transparency & Stability
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We #buidl currency for the digital economy.
          </h1>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur. Non volutpat risus faucibus pretium eni.
            Mauris bibendum amet diam in viverra. Maecenas sollicitudin sed.
          </p>
        </div>

        {/* Image and Text Section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
          {/* Image 1 */}
          <img
            src="/src/assets/currency1.png"
            alt="Cityscape"
            className="rounded-md shadow-md lg:col-span-1"
          />

          {/* Text with Background */}
          <div className="bg-[url('/src/assets/currency2.png')] col-span-1 h-80 md:mt-10 lg:mt-10 bg-cover bg-center p-6 rounded-md shadow-md lg:col-span-1 flex flex-col justify-center items-center text-center">
            <h2 className="text-xl font-semibold text-white mb-4">Lorem Ipsum Dolor</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur. Non volutpat risus faucibus pretium eni.
              Mauris bibendum amet diam in viverra. Maecenas sollicitudin sed.
            </p>
          </div>

          {/* Image 2 */}
          <img
            src="/src/assets/currency3.png"
            alt="People in office"
            className="rounded-md shadow-md col-span-1 lg:col-span-1 h-80 w-full"
          />

          {/* Image 3 */}
          <img
            src="/src/assets/currency4.png"
            alt="Chart on a paper"
            className="rounded-md shadow-md col-span-1 lg:col-span-1 md:mt-10 lg:mt-10"
          />
        </div>

        {/* Our Focus Section */}
        <div className="mt-20 flex flex-col lg:flex-row lg:items-center md:gap-6 lg:gap-40 text-justify">
          {/* Left: Heading */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:ml-40 lg:ml-40 font-bold text-gray-900">
              Our Focus
            </h2>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2">
            <p className="text-gray-600 leading-relaxed mt-5">
              Lorem ipsum dolor sit amet consectetur. Pretium amet neque ac mauris accumsan vitae
              dui. Habitant mollis at eu commodo amet. Eget magna sit amet nunc tincidunt, vitae
              gravida libero. Sed sit amet consectetur lorem. Nulla facilisi. Donec euismod, nisi
              vel consectetur interdum, nisl nisi cursus nisi, vitae tincidunt nisi nisi eget libero.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolorum fuga. Molestiae, harum enim voluptatem facilis, aut architecto amet reprehenderit id nesciunt non vitae deleniti nulla rerum eaque? Quia minima veritatis suscipit error repellat reprehenderit rem eum, sint adipisci dolorum cumque fugiat voluptatibus sed eaque porro aperiam rerum quidem veniam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCurrency;
