import React from "react";
import Image from "next/image";
import img from "../../assets/Dashboard.png"; // Replace with the actual image path

const EntrepreneursSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2F4F7",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Small Title */}
      <h4 className="font-semibold"
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          color: "#333",
          fontSize: "14px",
          marginBottom: "20px",
          color:'var(--ytext)'
        }}
      >
        Helping Entrepreneurs Make More Money
      </h4>

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          color: "#222",
          fontSize: "24px",
          fontWeight: "600",
          maxWidth: "800px",
          marginBottom: "40px",
        }}
      >
        Focus on cutting-edge technologies and cost-quality efficiency
      </h2>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          gap: "40px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          {[
            {
              icon: "🌟", // Replace with your actual icons
              title: "Strategy & Business",
              description:
                "We design business models and growth strategies to be effective and competitive.",
            },
            {
              icon: "🚀",
              title: "Product Development",
              description:
                "We design business models and growth strategies to be effective and competitive.",
            },
            {
              icon: "🔮",
              title: "Futures Research",
              description:
                "We design business models and growth strategies to be effective and competitive.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "30px",
                  color: "#555",
                  marginRight: "15px",
                }}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    margin: "5px 0 0 0",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <Image
            src={img}
            alt="Focus on cutting-edge technologies"
            style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default EntrepreneursSection;
