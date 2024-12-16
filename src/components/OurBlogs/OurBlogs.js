import React from "react";
import Image from "next/image";
import blogImg1 from "../../assets/blog1.jpg"; // Replace with actual image paths
import blogImg2 from "../../assets/ui:ux.jpeg";
import blogImg3 from "../../assets/blog3.avif";

const blogs = [
  {
    img: blogImg1,
    date: "December 6, 2023",
    title: "How to Build Scalable Web Applications",
    description: "Learn the best practices for building scalable and high-performance web apps in today's fast-evolving tech landscape.",
  },
  {
    img: blogImg2,
    date: "December 10, 2023",
    title: "Designing Intuitive User Interfaces",
    description: "Explore key principles for creating intuitive and user-friendly UI designs for websites and apps.",
  },
  {
    img: blogImg3,
    date: "December 12, 2023",
    title: "The Future of AI in Web Development",
    description: "Delve into how artificial intelligence is shaping the future of web development and what to expect in the next few years.",
  },
];

const OurBlogs = () => {
  return (
    <section className="w-[80%] mx-auto py-20 ">
      {/* Heading Section */}
      <div className="mb-6">
        <p className="text-ttext font-semibold text-lg">Blogs</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">OUR BLOGS</h2>
      </div>

      {/* Blog Cards Section */}
      <div className="flex justify-between items-center mb-6">
        <div></div> {/* Empty div for alignment */}
        <button className="text-blue-500 hover:text-blue-600 font-semibold">
          View All &rarr;
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            {/* Blog Image */}
            <Image
              src={blog.img}
              alt={`Blog ${index + 1}`}
              width={400}
              height={250}
              className="object-cover w-full h-64"
            />

            {/* Blog Content */}
            <div className="p-6 flex flex-col">
              {/* Date */}
              <p className="text-sm text-gray-600 mb-2">{blog.date}</p>
              {/* Blog Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
              {/* Blog Description */}
              <p className="text-gray-600 mb-4">{blog.description}</p>
            </div>

            {/* Read More Button Positioned at Bottom Left */}
            <div className="p-4  text-white flex justify-start items-center mt-auto" 
           > 
              <button className="text-white font-semibold hover:bg-blue-600 p-2 rounded-md" 
              style={{
                backgroundColor:'var(--ytext)',
                width:'150'
              }}
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlogs;
