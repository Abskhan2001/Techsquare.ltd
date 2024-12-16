import React, { useState } from "react";
import Image from "next/image";
import clientImg from "../../assets/logo.png"; // Replace with actual image path

const Testimonials = () => {
  const testimonials = [
    {
      img: clientImg,
      name: "John Doe",
      company: "Tech Innovators",
      feedback:
        "“Outstanding dedication to excellence, exceptional support received. Impressive service!”",
    },
    {
      img: clientImg,
      name: "Jane Smith",
      company: "Creative Co.",
      feedback:
        "“Exceptional quality and attention to detail. A truly transformative experience!”",
    },
    {
      img: clientImg,
      name: "Michael Brown",
      company: "NextGen Solutions",
      feedback:
        "“Top-notch service and unparalleled expertise. Highly recommend!”",
    },
    {
      img: clientImg,
      name: "Alice Johnson",
      company: "Future Tech",
      feedback:
        "“Amazing attention to detail and remarkable service. Will return for more!”",
    },
    {
      img: clientImg,
      name: "Robert Wilson",
      company: "Pioneer Solutions",
      feedback:
        "“A wonderful experience with great results. Exceptional quality!”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of cards to display per page
  const cardsPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  // Get the current set of testimonials to display
  const currentTestimonials = testimonials.slice(
    currentIndex * cardsPerPage,
    currentIndex * cardsPerPage + cardsPerPage
  );

  // Handle bar click
  const handleBarClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      style={{

        padding: "50px 20px",
        textAlign: "center",
        maxWidth: "1200px", // Fixed width
        margin: "0 auto",
      }}
    >
      {/* Small Title */}
      <h4 className="font-semibold"
        style={{
          textTransform: "uppercase",
          fontSize: "14px",
          marginBottom: "10px",
          color:'var(--ytext)'

        }}
      >
        Testimonials
      </h4>

      {/* Heading */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#222",
          marginBottom: "40px",
        }}
      >
        What our customers are saying
      </h2>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              width: "300px", // Fixed card width
              height: "250px", // Fixed card height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              {/* Client Image */}
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  marginRight: "15px",
                }}
              />
              {/* Client Details */}
              <div>
                <h4
                  style={{
                    fontSize: "16px",
                    margin: 0,
                    color: "#222",
                  }}
                >
                  {testimonial.name}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "5px 0 0",
                    color: "#777",
                  }}
                >
                  {testimonial.company}
                </p>
              </div>
            </div>

            {/* Feedback */}
            <p
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: "#555",
              }}
            >
              {testimonial.feedback}
            </p>

            {/* Star Ratings */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#FFD700",
              }}
            >
              {"★".repeat(5)}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Bars */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => handleBarClick(index)}
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#333" : "#ddd",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
