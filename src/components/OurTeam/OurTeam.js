import React, { useState } from "react";
import Image from "next/image";
import ceoImg from "../../assets/sevp.png"; // Replace with your actual image path
import teamImg1 from "../../assets/logo.png";
import teamImg2 from "../../assets/logo.png";
import teamImg3 from "../../assets/Logo.png";
import teamImg4 from "../../assets/logo.png";

const teamData = [
  { img: teamImg1, name: "Alice Johnson", title: "Designer" },
  { img: teamImg2, name: "John Doe", title: "Developer" },
  { img: teamImg3, name: "Emma Watson", title: "Manager" },
  { img: teamImg4, name: "Michael Brown", title: "Marketer" },
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  const visibleTeam = teamData.slice(currentIndex, currentIndex + 3);

  return (
    <section className="w-[80%] mx-auto py-20">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg">Get to Know</p>
        <h2 className="text-3xl font-bold text-gray-800">Our Founder</h2>
      </div>

      {/* CEO Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
        {/* Left Side */}
        <div className="text-center pb-20  w-[50%] bg-white shadow-md rounded-lg flex flex-col items-center justify-center"
          style={{ width: "422px", height: "446px" }}>
          <Image
            src={ceoImg}
            alt="CEO Image"
            width={400}
            height={400}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Yasir Zubair</h3>
          <p className="text-gray-600">CEO</p>
        </div>

        {/* Right Side */}
        <div className="w-[50%] ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">CEO Message</h3>
          <p className="text-gray-600 mb-80">
            At the heart of our success is our commitment to innovation, quality,
            and our incredible team. We aim to set benchmarks and create value
            for our clients and stakeholders.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
        <button className="text-blue-500 hover:text-blue-600 font-semibold">
          View All &rarr;
        </button>
      </div>

      {/* Team Cards Section */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTeam.map((team, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md h-[400px] rounded-lg flex flex-col items-center"
            >
              <Image
                src={team.img}
                alt={team.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">{team.name}</h4>
              <p className="text-gray-600">{team.title}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
