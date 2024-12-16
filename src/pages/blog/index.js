import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import img from "../../assets/blogB.png";
import BlogSection from "@/components/Blog /Blog ";
import Footer from "@/components/Footer/Footer";
export default function blog() {
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
        smallTitle="Blog"
        heading="Our Blog"
      />
    </div>
    <BlogSection/>
    <Footer/>
     </>
    );
  }
  