import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import img from "../../assets/banner1.png";
import ServicesSection from "@/components/Services/Services";
import EntrepreneursSection from "@/components/EntrepreneursSection/EntrepreneursSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ /FAQ";
import Footer from "@/components/Footer/Footer";
import JoinCompaniesSection from "@/components/JoinCompaniesSection/JoinCompaniesSection";

export default function Services() {
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "20px", // Adds spacing above Navbar
      }}
    >
      <div style={{ marginTop: "5px" }}> {/* Wrapper for Navbar margin */}
        <Navbar />
      </div>
      <Banner
        smallTitle="About"
        heading="Services"
      />
    </div>
    <ServicesSection/>
    <EntrepreneursSection/>
    <Testimonials/>
    <FAQ/>
    <JoinCompaniesSection backgroundColor="white" />
    <Footer/>
    </>
  );
}
