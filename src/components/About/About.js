import React from "react";
import { FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa"; // Example icons
import Image from "next/image"; // Assuming you are using Next.js for image optimization
import img3 from "../../assets/aboutrev.png"; // Example image
import cardimg from "../../assets/rounded.png";

const About = () => {
  return (
    <section className="w-[80%] mx-auto py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Left Side */}
        <div className="lg:w-[50%] text-center lg:text-left">
          {/* Small Title */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>

          {/* Main Heading */}
          <h3 className="text-4xl font-bold text-gray-800 mb-6">About Our Company</h3>

          {/* Rows */}
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="flex items-center justify-start space-x-4">
              <FaRocket className="text-4xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Innovative Solutions</h4>
                <p className="text-gray-600">
                  We provide innovative solutions to help your business grow and succeed in the digital age.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-start space-x-4">
              <FaUsers className="text-4xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Customer-Centric</h4>
                <p className="text-gray-600">
                  We focus on delivering exceptional value and service to our customers to help them achieve their goals.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-start space-x-4">
              <FaShieldAlt className="text-4xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Security First</h4>
                <p className="text-gray-600">
                  Security is our top priority, ensuring that all your data and processes are secure at every step.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-[40%] relative ">
          {/* Card at the top-left */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative w-full">
              <Image
                src={cardimg}
                alt="Main Image"
                width={500}
                height={400}
                objectFit="cover"
                className="w-full h-full object-cover rounded-lg"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h4>
              <p className="text-gray-600 mb-4">
                Our mission is to create value for our customers by providing innovative and sustainable solutions.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Overlay Images */}
          <div className="absolute bottom-20 top-0 left-0 right-0  p-4 space-y-2">
            <div className="absolute top-0 right-1 transform translate-x-20 translate-y-0">
              <Image
                src={img3}
                alt="Image 1"
                width={200}
                height={40}
             
                className="rounded-lg"
              />
            </div>

            <div className="absolute top-12 right-1 transform translate-x-20 translate-y-1">
              <Image
                src={img3}
                alt="Image 2"
                width={200}
                height={100}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="absolute  bottom-50 top-16 right-1 transform translate-x-20 translate-y-12">
              <Image
                src={img3}
                alt="Image 3"
                width={200}
                height={100}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
