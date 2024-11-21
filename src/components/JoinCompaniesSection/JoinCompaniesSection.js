import React from "react";
import Image from "next/image";
import logo1 from "../../assets/logo1.png"; // Example logos, replace with your actual logo images
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const JoinCompaniesSection = () => {
  return (
    <section className="w-full bg-[#F2F4F7] py-20">
      <div className="container mx-auto text-center">
        {/* Heading Text */}
        <h2 className="text-xl  text-gray-800 mb-8">
          Join 4,000+ companies already growing
        </h2>

        {/* Logos Container */}
        <div className="flex justify-center gap-12">
          <div className="flex items-center justify-center">
            <Image src={logo1} alt="Company 1" width={100} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo2} alt="Company 2" width={100} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo3} alt="Company 3" width={100} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo4} alt="Company 4" width={100} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo5} alt="Company 5" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCompaniesSection;
