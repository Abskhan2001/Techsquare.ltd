import React from "react";
import { FaChartLine, FaUserTie, FaCloud } from "react-icons/fa"; // Example icons

const ServicesSection = () => {
  return (
    <section className="w-[80%] mx-auto py-20 bg-white">
      <div className="text-center">
        {/* Small Title */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Services</h2>

        {/* Main Heading */}
        <h3 className="text-4xl font-bold text-gray-800 mb-6">
          Analytics that feels like it’s from the Services
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FaChartLine className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Analytics</h4>
            <p className="text-gray-600 mb-4">
              Get powerful insights to improve business performance and drive better decision-making.
            </p>
            <button className="text-blue-500 font-semibold">Read More →</button>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FaUserTie className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">User Growth</h4>
            <p className="text-gray-600 mb-4">
              Use our tools to track and enhance user growth, conversion rates, and user engagement.
            </p>
            <button className="text-blue-500 font-semibold">Read More →</button>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FaCloud className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Cloud Integration</h4>
            <p className="text-gray-600 mb-4">
              Seamlessly integrate with cloud platforms to enhance data accessibility and scalability.
            </p>
            <button className="text-blue-500 font-semibold">Read More →</button>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FaChartLine className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Analytics</h4>
            <p className="text-gray-600 mb-4">
              Get powerful insights to improve business performance and drive better decision-making.
            </p>
            <button className="text-blue-500 font-semibold">Read More →</button>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FaUserTie className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">User Growth</h4>
            <p className="text-gray-600 mb-4">
              Use our tools to track and enhance user growth, conversion rates, and user engagement.
            </p>
            <button className="text-blue-500 font-semibold">Read More →</button>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <FaCloud className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Cloud Integration</h4>
            <p className="text-gray-600 mb-4">
              Seamlessly integrate with cloud platforms to enhance data accessibility and scalability.
            </p>
            <button className="text-blue-500 font-semibold">Read More →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
