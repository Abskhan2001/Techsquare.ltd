import React, { useState } from "react";
import Image from "next/image";
import sampleImg from "../../assets/Rectangle.png"; 
import  Jetour from "../../assets/Sevp.png"; 

const caseStudies = {
  AppDev: {
    title: "App Development",
    points: [
      {
        label: "Sparks",
        title: "Sparks Project",
        description: `This project showcases our expertise in mobile app development, delivering cutting-edge solutions.`,
        img: sampleImg,
      },
      {
        label: "Jetour",
        title: "Jetour App",
        description: `A comprehensive app tailored to the automotive industry, enhancing user experiences.`,
        img: Jetour,
      },
      {
        label: "Ezpick",
        title: "Ezpick Logistics",
        description: `An innovative app streamlining logistics operations for better efficiency and tracking.`,
        img: sampleImg,
      },
      {
        label: "Divano",
        title: "Divano Furniture App",
        description: `A beautifully designed app for furniture shopping, providing a seamless user experience.`,
        img: sampleImg,
      },
    ],
  },
  WebDev: {
    title: "Web Development",
    points: [
      {
        label: "Landing Page",
        title: "Landing Page Design",
        description: `We created a stunning landing page with a focus on user engagement and conversions.`,
        img: sampleImg,
      },
      {
        label: "Corporate Site",
        title: "Corporate Website",
        description: `A sleek and professional website designed to represent the corporate brand.`,
        img: sampleImg,
      },
      {
        label: "Portfolio",
        title: "Portfolio Website",
        description: `A personalized portfolio website to showcase creative work and attract new clients.`,
        img: sampleImg,
      },
      {
        label: "E-learning",
        title: "E-learning Platform",
        description: `Developed a responsive web platform to facilitate online learning for students globally.`,
        img: sampleImg,
      },
    ],
  },
  UIUX: {
    title: "UI/UX Design",
    points: [
      {
        label: "Mobile App UI",
        title: "Mobile App Interface",
        description: `Designed an intuitive and user-friendly mobile app interface.`,
        img: sampleImg,
      },
      {
        label: "Web Dashboard",
        title: "Web Dashboard Design",
        description: `Created a visually appealing and functional web dashboard for analytics.`,
        img: sampleImg,
      },
      {
        label: "E-commerce UI",
        title: "E-commerce User Interface",
        description: `Optimized the user experience for an e-commerce platform to boost conversions.`,
        img: sampleImg,
      },
    ],
  },
  Marketing: {
    title: "Digital Marketing",
    points: [
      {
        label: "SEO Campaign",
        title: "Search Engine Optimization",
        description: `Enhanced website visibility through targeted SEO strategies.`,
        img: sampleImg,
      },
      {
        label: "Social Media",
        title: "Social Media Marketing",
        description: `Boosted brand presence with engaging social media campaigns.`,
        img: sampleImg,
      },
      {
        label: "Email Marketing",
        title: "Email Campaigns",
        description: `Improved customer retention through personalized email marketing efforts.`,
        img: sampleImg,
      },
    ],
  },
};

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState("AppDev");
  const [activePoint, setActivePoint] = useState(caseStudies["AppDev"].points[0]);

  const { title, points } = caseStudies[activeTab];

  return (
    <section className="w-[80%] mx-auto py-20">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-0">
          Customer <br /> Case Study
        </h2>
        <p className="text-gray-600 max-w-lg text-xl lg:text-left">
          Read how we have helped different customers at different stages of their journey.
        </p>
      </div>

      {/* Navbar Section */}
      <nav className="bg-white shadow-md py-4 px-6 rounded-lg flex justify-between items-center mb-12">
        <ul className="flex space-x-6 text-gray-700">
          {Object.keys(caseStudies).map((key) => (
            <li
              key={key}
              className={`hover:text-blue-500 cursor-pointer ${
                activeTab === key ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => {
                setActiveTab(key);
                setActivePoint(caseStudies[key].points[0]); // Reset to the first point of the selected tab
              }}
            >
              {key.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to readable */}
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="flex flex-col space-y-8 relative">
          {/* Centered Vertical Line */}
          <div className="absolute left-10 top-0 rounded-xl bottom-0 w-1 bg-blue-500 transform -translate-x-1/2"></div>
          <ul className="space-y-8 pl-8">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-center  cursor-pointer"
                onClick={() => setActivePoint(point)}
              >
                <span
                  className={`w-4 h-4 rounded-full mt-16 mr-4 ${
                    activePoint.label === point.label ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></span>
                <p
                  className={`text-gray-800 mt-16 ${
                    activePoint.label === point.label ? "font-bold text-blue-500" : ""
                  }`}
                  style={{
                    width: "200px", // Fixed width for all text
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Prevent text overflow
                    textOverflow: "ellipsis", // Add ellipsis for overflowed text
                  }}
                >
                  {point.label}
                  {point.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Image Column */}
          <div className="rounded-lg overflow-hidden">
  <Image
    src={activePoint.img}
    alt={activePoint.title}
    width={400} // Fixed width
    height={300} // Fixed height
    className="object-cover"
  />
</div>

          {/* Text Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{activePoint.title}</h3>
            <p className="text-gray-600 mb-6">{activePoint.description}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
