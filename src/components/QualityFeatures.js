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
          desc={
            <>
              Boost your online presence with {" "}
              <span className="text-purple-600 aquire-bold" >S.P.</span><span className="aquire-bold">Enterprise.</span> We design stunning, user-friendly websites tailored to your brand, ensuring seamless navigation and responsiveness. Let us bring your vision to life with creativity and cutting-edge technology.</>
          }
        />

        <QualityFeature
          imgSrc="/features/3.svg"
          title="Graphic Design"
          desc={
            <>
              Elevate your brand with {" "}
              <span className="text-purple-600 aquire-bold" >S.P.</span><span className="aquire-bold">Enterprise.</span> We craft compelling visuals, from logos to social media graphics, tailored to your brand's identity. Our creative, strategic designs captivate and make a lasting impression.            </>
          }
        />
        <QualityFeature
          imgSrc="/features/5.svg"
          title="Logo Design"
          desc={
            <>
              Make your brand unforgettable with {" "}
              <span className="text-purple-600 aquire-bold" >S.P.</span><span className="aquire-bold">Enterprise</span> logo design. We create distinctive, memorable logos that capture your brand's essence and values. Whether launching or rebranding, our logos leave a lasting impact and set you apart.            </>
          }
        />
        <QualityFeature
          imgSrc="/features/6.svg"
          title="Monogram Design"
          desc={
            <>
              Elevate your brand with bespoke monogram design from {" "}
              <span className="text-purple-600 aquire-bold" >S.P.</span><span className="aquire-bold">Enterprise.</span> We craft sophisticated, personalized symbols that reflect your unique identity. Perfect for logos and branding, our monograms add elegance and leave a lasting impression.            </>
          }
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
