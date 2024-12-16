import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import img from "../../assets/blogB.png";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/ContactUs/ContactUs";
import { FiPhone, FiMail } from "react-icons/fi"; 
import officeLogo from "../../assets/logo.png";

export default function About() {
  return (
    <>
      {/* Header Section */}
      <div
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "20px",
        }}
      >
        <div style={{ marginTop: "5px" }}>
          <Navbar />
        </div>
        <Banner smallTitle="Contact" heading="Contact Us" />
      </div>

      {/* Contact Info Section */}
      <section className="w-full">
        <div className="container mx-auto max-w-screen-lg grid grid-cols-1 sm:grid-cols-2">
          {/* Phone Box */}
          <div className="border border-black p-4  flex items-center space-x-4">
            <FiPhone size={30} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">0300-9159783</p>
            </div>
          </div>


          {/* Working Hours Box */}
          <div className="border border-black  p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
            <p className="text-gray-600">10AM - 7PM</p>
          </div>
             {/* Email Box */}
             <div className="border border-black p-4 flex items-center space-x-4">
            <FiMail size={30} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">Abs.khan2001@gmail.com</p>
            </div>
          </div>

          {/* Holiday Box */}
          <div className="border border-black p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Holiday</h3>
            <p className="text-gray-600">Saturday - Sunday</p>
          </div>
        </div>
      </section>
  
      {/* Additional Sections */}
      <ContactUs />
          {/* Visit Our Office Section */}
          <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto max-w-screen-lg text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Visit Our Office</h2>

          {/* Office Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-md bg-white w-[200px] h-[235px] flex flex-col items-center justify-center space-y-4 p-4"
              >
                {/* Office Logo */}
                <img
                  src={officeLogo.src}
                  alt="Office Logo"
                  className="w-16 h-16 object-contain"
                />

                {/* Office Location */}
                <h3 className="text-lg font-semibold text-gray-800">Islamabad</h3>

                {/* Address */}
                <p className="text-sm text-gray-600 text-center">
                  One Constitution Avenue, Islamabad
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Google Map Section */}
      <section className="w-full py-16">
        <div className="container mx-auto max-w-screen-lg text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Find Us on Google Map</h2>

          {/* Map */}
          <div className="w-full h-[544px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.3481984811476!2d73.04952327655435!3d33.6844198234476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95e5c2c3a6cf%3A0x8d774a5b8b1a9c5d!2sConstitution%20Ave%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697649838293!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
