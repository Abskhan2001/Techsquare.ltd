import React, { useState } from "react";

const QuestionCard = ({ question, isActive, onClick }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "15px",
        cursor: "pointer",
        transition: "transform 0.3s",
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
      aria-expanded={isActive} // Accessibility
    >
      {/* Plus Icon */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#007BFF",
          marginRight: "10px",
          transform: isActive ? "rotate(45deg)" : "rotate(0)",
          transition: "transform 0.3s",
        }}
      >
        +
      </div>

      {/* Question */}
      <p
        style={{
          fontSize: "16px",
          color: "#333",
          margin: 0,
        }}
      >
        {question}
      </p>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "What do I need to know before contacting you?",
    "How can I schedule a consultation?",
    "What is your approach to project management?",
    "Can you help with custom software development?",
    "What industries do you specialize in?",
    "How do you ensure quality in your projects?",
  ];

  return (
    <div
      style={{
        backgroundColor: "#F2F4F7",
        padding: "50px 20px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h4
              className="font-semibold"
              style={{
                textTransform: "uppercase",
                fontSize: "14px",
                color: "var(--ytext)",
                marginBottom: "10px",
              }}
            >
              FAQs
            </h4>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#222",
                marginBottom: "10px",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#555",
              }}
            >
              We hope this section will help you better understand issues
              related to software.
            </p>
          </div>
          <button
            className="font-semibold"
            style={{
              backgroundColor: "var(--ytext)",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>

        {/* FAQ Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              question={question}
              isActive={activeIndex === index}
              onClick={() => toggleQuestion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
