import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import img from "../../assets/blogB.png";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import ServicesSection from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import Image from 'next/image';
import featuresImg from '../../assets/Section Img.png';
export default function about() {
    return (
      <>
       <div
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "20px", 
      }}
    >
      <div style={{ marginTop: "5px" }}> {/* Wrapper for Navbar margin */}
        <Navbar />
      </div>
      <Banner
        smallTitle="About"
        heading="About Us"
      />
    </div>
    <About/>
    <section className="w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8 py-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image 
          src={featuresImg} 
          alt="Features Image" 
          className="rounded-xl" 
          width={500} 
          height={400} 
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-gray-800">
        {/* Small Title */}
        <p className="text-sm uppercase text-blue-500 font-medium mb-2">Features</p>
        
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4">
          We are always working to provide you the best features in all aspects.
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-8">
          At WEEKENDUX the chief determination is to clear the minds of our students about their goals, 
          while making them consistent in their ambitions and pushing them to be confident for their 
          journey towards the course of time.
        </p>

        {/* Additional Text */}
        <p className="text-gray-600">
          You will find every little thing on the internet in just a click of hand, but here we admire 
          that without knowledge and practice the internet may even also fail you in your life.
        </p>
      </div>
    </section>
    <Experience/>
    <ServicesSection/>
    <Footer/>
      </>
    );
  }
  