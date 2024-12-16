import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import img from "../../assets/blogB.png";
import OurTeam from "@/components/OurTeam/OurTeam";
import Footer from "@/components/Footer/Footer";
export default function About() {
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
        smallTitle="Team"
        heading="Our Team"
      />
    </div>
    <OurTeam/>
    <Footer/>
    </>
    );
  }
  