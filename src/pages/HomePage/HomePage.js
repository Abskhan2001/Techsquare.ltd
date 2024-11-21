import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import JoinCompaniesSection from "@/components/JoinCompaniesSection/JoinCompaniesSection";
import ServicesSection from "@/components/Services/Services";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import OurTeam from "@/components/OurTeam/OurTeam";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <JoinCompaniesSection/>
      <ServicesSection/>
      <About/>
      <Experience/>
      <CaseStudy/>
      <OurTeam/>
      <OurBlogs/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default HomePage;
