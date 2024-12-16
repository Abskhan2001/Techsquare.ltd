import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import img from "../../assets/blogB.png";
import Head from "next/head";

const positions = [
  { title: "Position 1", description: "Brief description of the position and responsibilities." },
  { title: "Position 2", description: "Brief description of the position and responsibilities." },
  { title: "Position 3", description: "Brief description of the position and responsibilities." },
  { title: "Position 4", description: "Brief description of the position and responsibilities." },
];

const PositionCard = ({ title, description }) => (
  <div
    className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
  >
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      aria-label={`Apply for ${title}`}
    >
      Apply Now
    </button>
  </div>
);

export default function Career() {
  return (
    <>
      <Head>
        <title>Career - Join Our Team</title>
        <meta name="description" content="Explore open positions and join our amazing team." />
      </Head>
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
        <Banner smallTitle="Career" heading="Join Us" />
      </div>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">We&apos;re Hiring!</h1> {/* Escaped apostrophe */}
          <p className="text-lg text-gray-600 mb-8">
            Join our team and grow with us! Explore our open positions and find the one that suits you best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <PositionCard key={index} title={position.title} description={position.description} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
