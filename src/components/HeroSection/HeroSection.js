import React from "react";
import Image from "next/image";
import heroImage from "../../assets/hero.png"; // Main Hero Image
import img1 from "../../assets/review.png"; // Additional Images
import img2 from "../../assets/review.png";
import img3 from "../../assets/review.png";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between w-[80%] mx-auto py-20 space-x-12 relative"  style={{
      backgroundColor: 'var(----custom-gradien)',
       }}> 
      {/* Left Side - Text */}
      <div className="text-left w-1/2 z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Software Company Award Winning Company Jeddah Looking for a Software Company Jeddah
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Whetstonez consistently proves amazing results for their clients. Will grow your brand and business.
        </p>
        <button
          className="py-2 px-6 rounded-md font-bold"
          style={{
            backgroundColor: "var(--hover)",
            color: "var(--Wtext)",
          }}
        >
          Contact Us
        </button>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-1/1">
        {/* Main Hero Image */}
        <Image
          src={heroImage}
          alt="Hero Image"
          width={500}
          height={400}
          objectFit="cover"
        />

        {/* Overlay Images */}
        <div className="absolute top-0 left-0 right-0 bottom-0 p-4 space-y-6">
          <div className="absolute top-1/3 left-1 transform translate-x-2 translate-y-3">
            <Image
              src={img1}
              alt="Image 1"
              width={120}
              height={100}
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/3 right-0/5 left-1/2 transform translate-x-7 translate-y-0">
            <Image
              src={img2}
              alt="Image 2"
              width={120}
              height={100}
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/8 translate-y-4">
            <Image
              src={img3}
              alt="Image 3"
              width={120}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
