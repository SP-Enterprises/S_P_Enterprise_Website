"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample companies data (you can replace with actual data)
const clients = [
  { id: 1, name: "Mimasa HomeMade Delicacy", logo: "/clients/mimasa_foods.png" },
  { id: 2, name: "Retro Blinds", logo: "/clients/retro_blinds.png" },
  { id: 3, name: "S.K. Fire Protection", logo: "/clients/SK_Fire.png" },
  { id: 4, name: "The Planning Paradise", logo: "/clients/the_planing_paradise.png" },
  { id: 5, name: "V-Care Enterprise", logo: "/clients/V-Care_Enterprise.png" },
];

const ClientsCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    
    
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-5 md:px-16 py-16" id="Clients">
      {/* <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8 text-purple-600">Our Clients</h2> */}
      <span className="service-name text-center">OUR CLIENTS</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
       Some of our clients are
      </h2>
      <Slider {...settings} className="text-center">
        {clients.map((client) => (
          <div key={client.id} className="px-4">
            <img
              src={client.logo}
              alt={client.name}
              className="mx-auto h-40 w-40 object-contain filter grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientsCarousel;
