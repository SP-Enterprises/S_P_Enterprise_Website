import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";


const Card = ({ star, title, testimonial, imgSrc, clientName, clientLink }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-purple-600 flex items-center gap-1">
        {Array.from({ length: 4 }, (_, i) => (
          <StarRoundedIcon key={i} />
        ))}
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">{testimonial}</p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{clientName}</h3>
          <Link href={clientLink} target="_blank" className="text-purple-600 font-[500]">
            @{clientName.toLowerCase().replace(/\s+/g, '')}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center">TESTIMONIAL</span>
        <h2 className="title text-center">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Modern look & trending design"
            testimonial="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
            imgSrc="/testimonials/1.png"
            clientName="Samir Khan"
            clientLink="https://github.com/"
          />
        </div>
        <div>
          <Card
            title="Layout and organized layers"
            testimonial="The design was clean and well-organized, making it easy to navigate and understand."
            imgSrc="/testimonials/2.png"
            clientName="Jane Doe"
            clientLink="https://github.com/janedoe"
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Design Quality & performance"
            testimonial="Exceptional quality and performance. The end product exceeded our expectations."
            imgSrc="/testimonials/3.png"
            clientName="John Smith"
            clientLink="https://github.com/johnsmith"
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Layout and organized layers"
            testimonial="The layout was well-structured, though there were minor issues that were quickly addressed."
            imgSrc="/testimonials/4.png"
            clientName="Emily Johnson"
            clientLink="https://github.com/emilyjohnson"
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Layout and organized layers"
            testimonial="The layout was well-structured, though there were minor issues that were quickly addressed."
            imgSrc="/testimonials/4.png"
            clientName="Samir Pathan"
            clientLink="https://github.com/emilyjohnson"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

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
