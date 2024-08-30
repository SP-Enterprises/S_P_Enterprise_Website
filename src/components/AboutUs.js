import Image from "next/image";
import { useEffect } from "react";

const AboutCard = ({ title, desc, index }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-in");
          } else {
            entry.target.classList.remove("zoom-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".zoom-card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="zoom-card w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left transition-transform duration-500 ease-out">
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">{desc}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="w-full bg-purple-600 text-white" id="about us">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-purple-200">
            About Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center">
            Get to Know Our Story
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <AboutCard
            title="Our Mission"
            desc="To deliver exceptional and innovative design solutions that elevate brands and captivate audiences."
          />
          <AboutCard
            title="Our Vision"
            desc="To be the leading design consultancy, known for creativity, excellence, and our commitment to client success."
          />
          <AboutCard
            title="Our Values"
            desc="Integrity, collaboration, and a relentless pursuit of perfection are at the core of everything we do."
          />
          <AboutCard
            title="Our Team"
            desc="A diverse group of passionate designers, strategists, and problem solvers dedicated to making your vision a reality."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
