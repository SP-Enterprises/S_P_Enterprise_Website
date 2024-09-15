"use client";
export const metadata = {
  title: "Web Development Services - S.P. Enterprise",
  description: "Explore S.P. Enterprise's expert web development services. From custom designs to full-stack development, we help businesses build fast, responsive, and scalable websites.",
};

import Navbar from "@/components/Navbar";  // Import Navbar component
import Footer from "@/components/Footer";  // Import Footer component
import Image from "next/image";
import { useEffect } from "react";

export default function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-16 mt-10">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4 animate-fade-in">
            Web Development Services
          </h1>
          <p className="text-lg text-gray-700 leading-loose">
            At <span className="text-purple-600 font-bold">S.P. Enterprise</span>, 
            we specialize in creating cutting-edge web development solutions that 
            help your business thrive online. From sleek and responsive front-end 
            designs to robust and scalable back-end systems, our team ensures 
            seamless functionality and user experience.
          </p>
        </section>

        {/* Image Section */}
        <div className="flex justify-center mb-12">
          <Image 
            src="/web-development/web-development-banner.jpg" // Add your banner image
            alt="Web Development"
            width={1000}
            height={500}
            className="rounded-lg shadow-lg animate-fade-in-slow"
          />
        </div>

        {/* Services Details Section */}
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {/* Web Development Feature 1 */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg bg-white transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/web-development/custom-development.svg" // Custom image
              alt="Custom Development"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-purple-600">Custom Development</h3>
            <p className="text-gray-600">
              Tailored solutions for your business needs. From e-commerce to corporate websites,
              we build customized platforms that stand out.
            </p>
          </div>

          {/* Web Development Feature 2 */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg bg-white transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/web-development/full-stack.svg" // Full stack image
              alt="Full Stack Development"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-purple-600">Full Stack Development</h3>
            <p className="text-gray-600">
              From front-end UI/UX to back-end functionality, our full stack development services ensure a seamless experience.
            </p>
          </div>

          {/* Web Development Feature 3 */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg bg-white transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/web-development/responsive-design.svg" // Responsive design image
              alt="Responsive Design"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-purple-600">Responsive Design</h3>
            <p className="text-gray-600">
              Our websites are optimized for all devices, ensuring a smooth experience whether on mobile, tablet, or desktop.
            </p>
          </div>

          {/* Add more features as needed */}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
