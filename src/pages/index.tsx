import Banner from "@/components/Banner";
import ExploreProducts from "@/components/products/ExploreProducts";

export default function Home() {
  return (
    <div className="mx-48">
      <div className="relative ">
        <Banner />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#e3e6e6] to-transparent"></div>
      </div>
      <div className="relative z-20 -mt-[400px]">
        <ExploreProducts />
      </div>
    </div>
  );
}
