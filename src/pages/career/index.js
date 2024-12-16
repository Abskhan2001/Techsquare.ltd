import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import img from "../../assets/blogB.png";
import Footer from "@/components/Footer/Footer";
export default function career() {
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
        smallTitle="Career"
        heading="Join Us"
      />
    </div>
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">We're Hiring!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Join our team and grow with us! Explore our open positions and find the one that suits you best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Position 1", "Position 2", "Position 3", "Position 4"].map((title, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600">
                Brief description of the position and responsibilities.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
     </>
    );
  }
  