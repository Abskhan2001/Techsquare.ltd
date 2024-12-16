import React, { useState } from "react";
import Image from "next/image";
import sampleImg from "../../assets/Rectangle.png"; 
import SevpImg from '../../assets/Sevp.png';
import sparksapp from '../../assets/sparksapp.png' 
import ezpick from "../../assets/ezpick.png";
import dinvanoapp from "../../assets/divanoapp.png";
import  carhub from '../../assets/carhub.png'
import zappta from '../../assets/zappta.png'
import gip from '../../assets/gip.png'
import flygo from '../../assets/flygo.png'
import aca from '../../assets/aca.png'
import chal from '../../assets/chal.png'
import im from '../../assets/Group.png'
import vector from '../../assets/Vector.png'

const caseStudies = {
  AppDev: {
    title: "App Development",
    points: [
      {
        label: "Sparks",
        title: "Sparks App",
        description: `There has been developed a new design of the Spark with new
features implemented for smartphones, tablets support, customized landing pages and color identification of services.`,
        img: sparksapp,
      },
      {
        label: "Jetour",
        title: "Jetour App",
        description: `Jetour Motors Services Mobile App is designed for the customer to get the advance booking for the services and maintenance form the service center. Sometime customer can track their maintenance record to avoid delays in maintenance.`,
        img: SevpImg,
      },
      {
        label: "Ezpick",
        title: "Ezpick Logistics",
        description: `The School Dismissal software minimizes congestion and wait times, enhances security, provides peace of mind for parents and schools while ensuring a smooth and orderly dismissal process.`,
        img: ezpick,
      },
      {
        label: "Divano",
        title: "Divano Furniture App",
        description: `Divano is your go-to destination for chic and comfortable furniture. Explore curated collections, transform your space effortlessly and indulge in a seamless E-commerce experience.`,
        img: dinvanoapp,
      },
    ],
  },
  WebDev: {
    title: "Web Development",
    points: [
      {
        label: "CarHub",
        title: "CarHub Website",
        description: `Carhub is a digitalized solution for automotive services enabling
service providers to give their location, service and price to you under one platform, with an emphasis on improving your experience, quality and convenience when doing your car services. This will include the shops & mobility shops depending on the service provider.`,
        img: carhub,
      },
      {
        label: "Zappta",
        title: "Zappta Website",
        description: `Zappta is introducing a whole new adventurous shopping experience for its customers. Zappta is a global online market-place, where people come together not only to sell, buy and collect the items they love but also have a chance to win their loved products for free.`,
        img: zappta,
      },
      {
        label: "Gip Capital",
        title: "Gip Capital Website",
        description: `There has been developed a new design of GIB Capital. The main activity of GIB Capital is providing a full range of financial services including the following activities: Dealing as principal, Agent, Underwriter, Arranging, Advising, Managing investment funds, Client’s portfolios and Custody.`,
        img: gip,
      },
      {
        label: "FlyGo",
        title: "FlyGo website",
        description: `We're dedicated to making your travel dreams a reality with expertly curated itineraries, local insights and seamless booking options. Explore the world with confidence and ease, thanks to Flygo.`,
        img: flygo,
      },
    ],
  },
  UIUX: {
    title: "UI/UX Design",
    points: [
      {
        label: "Children World ",
        title: "Children World International School",
        description: `Children’s World International Schools is an educational institution that seeks to create leaders and encourage scientific research with updated Arabic minds that can execute the incorporation between knowledge and practice in harmony with the 21st century needs.`,
        img: chal,
      },
      {
        label: "ACA Follow-Up ",
        title: "App Design",
        description: `The ACA Follow Up App is a specialized application designed to streamline & monitor student behavior within a school environment tailored for educational institutions. This app allows for efficient tracking and management of student conduct, ensuring a conducive learning atmosphere.`,
        img: aca,
      },
      {
        label: "iMange School",
        title: "iMange School",
        description: `iManage School is a streamline administrative tasks and enhance academic efficiency with our comprehensive school management software, designed for seamless communication, efficient resource allocation and holistic student information management.`,
        img: im,
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
      <div className="flex flex-col items-start mb-2">
  <Image
    src={vector}
    alt="Vector"
    width={170}
    height={40}
    className="object-cover mb-4"
  />
</div>

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
                className="flex items-center cursor-pointer"
                onClick={() => setActivePoint(point)}
              >
                <span
                  className={`w-4 h-4 rounded-full mt-16 mr-4 ${
                    activePoint.label === point.label ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></span>
                <p
                  className={`text-gray-800 mt-16 ${
                    activePoint.label === point.label ? "font-bold text-ttext" : ""
                  }`}
                  style={{
                    width: "200px", // Fixed width for all text
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Prevent text overflow
                    textOverflow: "ellipsis", // Add ellipsis for overflowed text
                  }}
                >
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
              width={400} 
              height={300} 
              className="object-cover"
            />
          </div>

          {/* Text Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {activePoint.title}
            </h3>
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
