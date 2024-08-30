import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">HOW WE OPERATE</span>
      <h2 className="title text-center">Our Attributes</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Consultative Approach"
          desc="We start by understanding your unique business needs and objectives through comprehensive consultations. 
          Our team works closely with you to tailor solutions that align with your vision and goals."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Customized Web Design Solutions"
          desc="We offer bespoke web design services that include everything from initial design concepts to fully responsive websites. 
          Whether you need a simple landing page or a complex e-commerce site, our designs are crafted to enhance user experience and drive engagement."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Professional Graphic Design Services"
          desc="Our graphic design expertise covers logo creation, monogram design, branding kits, and more. 
          We deliver high-quality, visually compelling designs that reinforce your brand identity and make a lasting impression."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="End-to-End Support"
          desc="From initial consultation to post-launch support, we provide end-to-end assistance to ensure your project’s success.
           Our ongoing support helps you maintain and evolve your digital presence effectively."
        />
      </div>
    </section>
  );
};

export default Features;
