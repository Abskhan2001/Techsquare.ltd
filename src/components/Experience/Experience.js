import React from "react";
import { FaChartLine, FaCode, FaBriefcase, FaUsers } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="w-[80%] mx-auto py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Expertise</h2>
        <p className="text-gray-600 text-lg">Let the number’s speak</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaChartLine className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">100+ Projects</h3>
          <p className="text-gray-600">Successfully delivered innovative projects across various industries.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaCode className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Developers</h3>
          <p className="text-gray-600">Our team of skilled developers crafts exceptional solutions.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <div className="bg-red-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaBriefcase className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Years of Experience</h3>
          <p className="text-gray-600">Over 10 years of experience in delivering quality solutions.</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <div className="bg-purple-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaUsers className="text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Clients</h3>
          <p className="text-gray-600">Partnered with clients from over 20 countries worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
