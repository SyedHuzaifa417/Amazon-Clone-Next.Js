import Banner from "@/components/Banner";
import ExploreProducts from "@/components/products/ExploreProducts";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <Banner />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#e3e6e6] to-transparent"></div>
      </div>
      <div className="relative z-20 mt-4 sm:-mt-[90px] md:-mt-[100px] lg:-mt-[150px] xl:-mt-[200px] 2xl:-mt-[250px]">
        <ExploreProducts />
      </div>
    </div>
  );
}
