import React from "react";
import Image from "next/image";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const JoinCompaniesSection = ({ backgroundColor = "#F2F4F7" }) => {
  return (
    <section
      style={{ backgroundColor }}
      className="w-full py-16"
    >
      <div className="container mx-auto max-w-screen-lg text-center">
        {/* Heading Text */}
        <h2 className="text-base  text-gray-500 mb-8">
          Join 4,000+ companies already growing
        </h2>

        {/* Logos Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          <div className="flex items-center justify-center">
            <Image src={logo1} alt="Company Logo 1" width={170} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo2} alt="Company Logo 2" width={170} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo3} alt="Company Logo 3" width={170} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo4} alt="Company Logo 4" width={170} height={50} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo5} alt="Company Logo 5" width={170} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCompaniesSection;
