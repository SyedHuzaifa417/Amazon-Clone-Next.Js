import React from "react";
import ProductCard from "./ProductCard";
import BestSellersSlider from "./SwiperSlider";
import { products, products2, Kitchen, Men } from "./productData";

const ExploreProducts: React.FC = () => {
  return (
    <div className="max-w-[1480px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          Best Sellers in Kitchen & Dining
        </h2>
        <BestSellersSlider items={Kitchen} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {products2.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Best Sellers in Men Fashion</h2>
        <BestSellersSlider items={Men} />
      </div>
    </div>
  );
};

export default ExploreProducts;
