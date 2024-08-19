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
    <div className="relative w-full">
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        className="max-w-screen-2xl mx-auto"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[25/9] lg:aspect-[25/9]"
          >
            <Link href={`/products?category=${slide.category}`}>
              <div className="cursor-pointer">
                <Image
                  priority={index === 0}
                  src={slide.image}
                  alt={`${slide.category} category`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
      <div className="w-full h-16 sm:h-24 md:h-32 lg:h-40 bg-gradient-to-t from-[#e3e6e6] to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
