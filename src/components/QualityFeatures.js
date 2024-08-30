import Image from "next/image";
import Link from "next/link";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
        <div className="mt-4 flex items-center gap-2">
          <Link href="#pricing">
            <button className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-purple-600 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="services">
      <span className="service-name text-center">Our Services</span>
      <h2 className="title text-center">Our Amazing Services</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Web Design"
          desc="Transform your online presence with our expert web design services. 
          At S.P.Enterprise, we create visually stunning, user-friendly websites tailored to your brand's needs. Our designs focus on delivering a seamless user experience, responsive layouts, and effective navigation to engage your audience and drive results. Whether you're looking to build a new site or refresh an existing one, our team combines creativity with the latest technology to bring your vision to life."
        />
        
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Graphic Design"
          desc="Elevate your brand with our exceptional graphic design services. 
          At S.P.Enterprise, we craft compelling visuals that captivate and communicate. From logos and marketing materials to social media graphics and infographics, our designs are tailored to your brand's identity and goals. We blend creativity with strategic insight to create impactful designs that resonate with your audience and enhance your brand’s presence. Let us help you make a lasting impression with designs that stand out."
        />
        <QualityFeature
          imgSrc="/features/5.svg"
          title="Logo Design"
          desc="Make your brand unforgettable with our professional logo design services. 
          At S.P.Enterprise, we specialize in creating distinctive and memorable logos that embody your brand's essence. Our approach combines creativity with strategic thinking to deliver a logo that not only stands out but also communicates your brand’s values and identity. Whether you're launching a new business or refreshing an existing brand, we design logos that make a lasting impact and set you apart from the competition."
        />
        <QualityFeature
          imgSrc="/features/6.svg"
          title="Monogram Design"
          desc="Enhance your brand's elegance with our bespoke monogram design services. At S.P.Enterprise, we specialize in crafting sophisticated and personalized monograms that capture your unique identity. Our designs blend artistry with precision, creating distinctive symbols that serve as a stylish representation of your brand or personal mark. Perfect for logos, stationery, and branding materials, our monograms are designed to leave a lasting impression and add a touch of refinement to your brand's image."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
