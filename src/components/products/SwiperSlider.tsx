import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface BestSellerItem {
  name: string;
  imageUrl: string | StaticImageData;
  category: string;
}

interface BestSellersSliderProps {
  items: BestSellerItem[];
}

const BestSellersSlider: React.FC<BestSellersSliderProps> = ({ items }) => (
  <>
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={0}
      slidesPerView={6}
      navigation
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={`/products?category=${item.category}`}>
            <div className="w-40 h-40 mx-auto mb-10 relative">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="auto"
                className="object-contain w-auto h-auto "
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default BestSellersSlider;
