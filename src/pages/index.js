import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import JoinCompaniesSection from "@/components/JoinCompaniesSection/JoinCompaniesSection";
import ServicesSection from "@/components/Services/Services";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import OurTeam from "@/components/OurTeam/OurTeam";
import OurBlogs from "@/components/OurBlogs/OurBlogs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} pt-5`}>
      <Navbar />
      <HeroSection/>
      <JoinCompaniesSection/>
      <ServicesSection/>
      <About/>
      <Experience/>
      <CaseStudy/>
      <OurTeam/>
      <OurBlogs/>
    </div>
  );
}
