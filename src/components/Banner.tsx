import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "../assets/slider/kitchen.jpg";
import sliderImg_2 from "../assets/slider/books.jpg";
import sliderImg_3 from "../assets/slider/games.jpg";
import sliderImg_4 from "../assets/slider/toys.jpg";
import sliderImg_5 from "../assets/slider/beauty.jpg";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={3000}
      >
        <div>
          <Image priority src={sliderImg_1} alt="sliderImg" />
        </div>
        <div>
          <Image src={sliderImg_2} alt="sliderImg" />
        </div>
        <div>
          <Image src={sliderImg_3} alt="sliderImg" />
        </div>
        <div>
          <Image src={sliderImg_4} alt="sliderImg" />
        </div>
        <div>
          <Image src={sliderImg_5} alt="sliderImg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
