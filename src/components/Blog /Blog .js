import React from "react";
import Image from "next/image"; // Import Next.js Image component for optimized image loading
import blogImg1 from "../../assets/logo.png";

const BlogCard = ({ image, date, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Optimized Image */}
      <Image src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button className="text-blue-500 font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    { image: blogImg1, date: "Nov 25, 2024", title: "Scalable Apps", description: "Learn scalable practices..." },
    { image: blogImg1, date: "Nov 20, 2024", title: "Development Tools", description: "Top tools guide..." },
    { image: blogImg1, date: "Nov 18, 2024", title: "Agile Methodology", description: "Explore Agile transformations..." },
    { image: blogImg1, date: "Nov 15, 2024", title: "AI in Tech", description: "AI is shaping the future..." },
    { image: blogImg1, date: "Nov 10, 2024", title: "Mastering CSS Grid", description: "Step-by-step grid mastery..." },
    { image: blogImg1, date: "Nov 5, 2024", title: "JavaScript ES6", description: "Overview of essential ES6 features..." },
    { image: blogImg1, date: "Nov 1, 2024", title: "SEO Tips", description: "Improve your website’s SEO..." },
    { image: blogImg1, date: "Oct 28, 2024", title: "Cloud Trends", description: "Latest in cloud computing..." },
    { image: blogImg1, date: "Oct 20, 2024", title: "Mobile App Dev", description: "Efficient app dev tips..." },
  ];

  return (
    <section className="w-full py-16 bg-[#F2F4F7]">
      <div className="container mx-auto max-w-screen-lg text-center">
        {/* Section Title */}
        <p className="text-sm uppercase text-blue-500 font-medium mb-2">Blogs</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Blogs</h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
