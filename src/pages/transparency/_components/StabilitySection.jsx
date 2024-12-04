import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-gray-800  hover:shadow-xl transform transition duration-500 ease-in-out hover:scale-105">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11z"
          />
        </svg>
        <h3 className="ml-4 text-lg font-medium">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const StabilitySection = () => {
  const features = [
    {
      title: "Unlimited Components",
      description: "Clarity gives you the freedom to create as many components as you need without limitations."
    },
    {
      title: "Responsive Design",
      description: "Our components are built with responsiveness in mind, ensuring they look great on any device."
    },
    {
      title: "Easy Integration",
      description: "Integrate seamlessly with your existing projects and frameworks with minimal effort."
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security features to keep your applications and data protected."
    },
    {
      title: "Performance Optimized",
      description: "Built with performance in mind, ensuring fast load times and smooth user experience."
    },
    {
      title: "Regular Updates",
      description: "Continuous improvements and updates to keep your application up-to-date with latest features."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to help you resolve any issues quickly."
    },
    {
      title: "Custom Theming",
      description: "Easily customize the look and feel to match your brand identity perfectly."
    },
    {
      title: "API Integration",
      description: "Seamless integration with various APIs and third-party services."
    },
    {
      title: "Scalable Architecture",
      description: "Built to scale with your growing needs and user base."
    },
    {
      title: "Documentation",
      description: "Comprehensive documentation and guides to help you get started quickly."
    },
    {
      title: "Community Driven",
      description: "Active community of developers contributing to continuous improvement."
    },
  ];

  return (
    <div className='bg-gradient-to-r from-blue-50 via-white to-blue-50'>
    <section className="py-20 px-4 sm:px-6 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Stability you can trust
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Adipiscing curabitur enim euismod
          libero aliquam fringilla. Adipiscing sed sit morbi morbi tortor. Ultrices
          nam diam ut donec urna tellus in eget viverra. Sit ut morbi.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
    </div>
  );
};

export default StabilitySection;