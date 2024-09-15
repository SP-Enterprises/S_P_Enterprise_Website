"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-purple-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, btnText, trail, plans }) => {
  const scrollToSubscribe = () => {
    document.getElementById("Subscribe").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500"> {title} </span>
      </div>
      <div className="flex flex-col gap-5">
        {plans.map((plan, index) => (
          <Plan key={index} title={plan} />
        ))}
      </div>

      <div className="mx-auto">
        <h2 className="text-4xl text-center leading-none flex items-center pb-4 mb-4">
        </h2>
        <button 
          onClick={scrollToSubscribe}
          className="w-fit capitalize text-base hover:bg-purple-600 hover:shadow-md hover:shadow-purple-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-purple-600 hover:border-purple-600 hover:text-white rounded-full"
        >
          {btnText}
        </button>
        {trail && (
          <span className="block text-purple-600 mt-5 font-semibold animate-bounce cursor-pointer">
            {trail}
          </span>
        )}
      </div>
    </div>
  );
};


const Pricing = () => {
  const [plan, setPlan] = useState("Web Design");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center">PRICING PLAN</span>
        <h2 className="title text-center">Choose your pricing policy</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-auto bg-slate-100 p-2 rounded-full">
        <div
          className={`${plan === "Web Design" ? "left-2" : "left-[150px] w-[128px]"
            } transition-all duration-500 absolute top-[.37rem] h-[55px] w-[138px] rounded-full bg-purple-600`}
        ></div>
        <button
          onClick={() => setPlan("Web Design")}
          className={`
          ${plan === "Web Design" ? "text-white" : "text-purple-600"}
          z-[1] capitalize text-base  border-2 border-transparent py-3 px-6  rounded-full`}
        >
          Web Design
        </button>
        <button
          onClick={() => setPlan("Graphic Design")}
          className={`
          ${plan === "Graphic Design" ? "text-white" : "text-purple-600"}
          z-[1] capitalize text-base  border-2 border-transparent py-3 px-2   rounded-full`}
        >
          Graphic Design
        </button>
      </div>

      {plan === "Web Design" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Basic Web Design Package"
            title="Ideal for individuals or small businesses just starting out with a simple online presence."
            price="$xxxx"
            btnText="Get Started Now"
            plans={[
              "Consultation: 30-minute session to discuss website goals and requirements.",
              "UI/UX Design: Basic user experience and interface design to ensure ease of navigation.",
              "Design: 1 design concept for up to 3 pages (e.g., Home, About, Contact).",
              "Responsive Design: Basic mobile and tablet responsiveness.",
              "Revisions: 1 round of feedback and minor adjustments.",
              "Final Deliverables: Website files ready for deployment.",
              "SEO: Basic SEO setup, including meta tags and descriptions.",
              "Support: Email support for 1 month after project completion.",
            ]}
          />
          <PricingCard
            name="Standard Web Design Package"
            title="Best suited for growing businesses looking to expand their online presence with more features."
            price="$xxxx"
            btnText="Get Started Now"
            trail="Exclusive curated for You"
            plans={[
              "Consultation: 1-hour session to discuss website goals, content strategy, and design preferences.",
              "UI/UX Design: User-centered interface design ensuring a seamless user experience.",
              "Design: 1 design concept for up to 5 pages (e.g., Home, About, Services, Blog, Contact).",
              "Responsive Design: Advanced mobile and tablet responsiveness with custom layouts.",
              "Revisions: 2 rounds of feedback and adjustments.",
              "Final Deliverables: Website files ready for deployment, including HTML, CSS, and any necessary scripts.",
              "SEO: Enhanced SEO setup, including keyword optimization, meta tags, and descriptions.",
              "Support: Email and phone support for 2 months after project completion.",
              "Additional Feature: Integration with basic contact forms and social media links.",
            ]}
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-purple-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Premium Web Design Package"
              title="Comprehensive package for businesses requiring a fully customized, feature-rich website."
              price="$xxxx"
              btnText="Get Started Now"
              trail="Exclusive curated for You"
              plans={[
                "Consultation: 2-hour strategy session to cover website goals, brand identity, and long-term vision.",
                "UI/UX Design: Fully tailored user experience with unique user interface design for optimal engagement.",
                "Design: 2 design concepts for up to 8 pages (e.g., Home, About, Services, Blog, Portfolio, Contact, Testimonials, FAQs).",
                "Responsive Design: Fully customized mobile, tablet, and desktop designs with unique layouts.",
                "Revisions: Unlimited rounds of feedback and revisions during the design phase.",
                "Final Deliverables: Complete website files, including HTML, CSS, JavaScript, and custom graphics.",
                "SEO: Comprehensive SEO setup, including on-page optimization, meta tags, descriptions, and Google Analytics integration.",
                "Support: Priority email, phone, and chat support for 3 months after project completion.",
                "Additional Features: Integration with e-commerce platforms, blog setup, advanced forms, and custom animations.",
              ]}
            />
          </div>
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Basic Design Package"
            title="Perfect for startups or small businesses looking for a simple and effective brand identity."
            price="$XXX"
            btnText="Get Started Now"
            plans={[
              "Consultation: 30-minute session to discuss design goals and preferences.",
              "Logo Design: 1 initial concept with 2 revisions.",
              "Monogram Design: Simple monogram design (if requested).",
              "File Formats: Final logo delivered in PNG and JPEG formats.",
              "Branding Guide: Basic color palette and font suggestions.",
              "Digital Marketing: Basic strategy consultation for online brand visibility.",
              "Turnaround Time: 5 business days.",
            ]}
          />
          <PricingCard
            name="Standard Design Package"
            title="Ideal for businesses looking to establish a more comprehensive and polished brand identity."
            price="$XXX"
            btnText="Get Started Now"
            trail="Exclusive curated for You"
            plans={[
              "Consultation: 1-hour session to discuss design goals, brand identity, and style preferences.",
              "Logo Design: 2 initial concepts with 3 revisions.",
              "Monogram Design: Customized monogram design.",
              "File Formats: Final logo delivered in PNG, JPEG, and vector formats (SVG, EPS).",
              "Branding Guide: Detailed branding guide with color palette, typography, and usage guidelines.",
              "Digital Marketing: Social media kit and consultation for online campaigns.",
              "Social Media Kit: Branded social media profile pictures and cover images.",
              "Turnaround Time: 7 business days.",
            ]}
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-purple-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Premium Design Package"
              title="Best for established businesses or those looking for a highly customized and professional brand identity."
              price="$XXX"
              btnText="Get Started Now"
              trail="Exclusive curated for You"
              plans={[
                "Consultation: 2-hour strategy session to discuss design goals, brand identity, market positioning, and long-term vision.",
                "Logo Design: 3 initial concepts with unlimited revisions until satisfaction.",
                "Monogram Design: Premium, highly detailed monogram design.",
                "File Formats: Final logo delivered in all necessary formats, including PNG, JPEG, vector (SVG, EPS), and high-resolution print files.",
                "Branding Guide: Comprehensive branding guide with color palette, typography, logo usage, and brand messaging.",
                "Digital Marketing: Comprehensive digital marketing strategy with campaign management support.",
                "Social Media Kit: Complete set of branded social media assets, including profile pictures, cover images, and post templates.",
                "Stationery Design: Custom business card, letterhead, and envelope design.",
                "Turnaround Time: 10 business days.",
                "Support: Priority email and phone support for 1 month after project completion.",
              ]}
            />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default Pricing;


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
