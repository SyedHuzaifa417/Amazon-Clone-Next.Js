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
  <Swiper
    modules={[Navigation, Scrollbar]}
    spaceBetween={10}
    slidesPerView={2}
    navigation
    scrollbar={{ draggable: true }}
    breakpoints={{
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 6 },
    }}
  >
    {items.map((item, index) => (
      <SwiperSlide key={index}>
        <Link href={`/products?category=${item.category}`}>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4 sm:mb-6 relative">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
              className="object-contain"
            />
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default BestSellersSlider;
