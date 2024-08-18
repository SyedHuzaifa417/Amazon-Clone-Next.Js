import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "../assets/slider/kitchen.jpg";
import sliderImg_2 from "../assets/slider/books.jpg";
import sliderImg_3 from "../assets/slider/games.jpg";
import sliderImg_4 from "../assets/slider/toys.jpg";
import sliderImg_5 from "../assets/slider/beauty.jpg";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const slides = [
    { image: sliderImg_1, category: "kitchen" },
    { image: sliderImg_2, category: "home" },
    { image: sliderImg_3, category: "gaming" },
    { image: sliderImg_4, category: "toys" },
    { image: sliderImg_5, category: "women" },
  ];

  return (
    <div className="relative">
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Link href={`/products?category=${slide.category}`}>
              <div className="cursor-pointer">
                <Image
                  priority={index === 0}
                  src={slide.image}
                  alt={`${slide.category} category`}
                />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
      <div className="w-full h-96 bg-gradient-to-t from-[#e3e6e6] to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
