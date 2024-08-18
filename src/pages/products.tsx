import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "@/components/FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";
import { useRouter } from "next/router";

const Products = ({ data, deal }: { data: ProductProps[]; deal?: string }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { category, search } = router.query;

  let filteredData = data;

  if (category) {
    filteredData = filteredData.filter(
      (product: ProductProps) => product.category === category
    );
  }

  if (search) {
    const searchTerm = (search as string).toLowerCase();
    filteredData = filteredData.filter(
      (product: ProductProps) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
  }
  return (
    <div className="w-full px-6">
      <h1 className="text-2xl font-bold my-4">
        {deal === "today"
          ? "Today's Deals"
          : search
          ? `Search Results for "${search}"`
          : `Results for ${category || "All Products"}`}
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        {deal === "today"
          ? "Our best deals, updated daily. Limited time offers."
          : "Price and other details may vary based on product size and color."}
      </p>
      {filteredData && filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredData.map(
            ({
              id,
              title,
              price,
              description,
              category,
              rating,
              image,
            }: ProductProps) => (
              <div
                key={id}
                className="w-full bg-white text-black p-4 border border-gray-300
                                 rounded-lg group overflow-hidden"
              >
                <div className="w-full h-[260px] relative">
                  <Image
                    className="w-full h-full object-cover scale-90 hover:scale-100
                        transition-transform duration-300"
                    width={300}
                    height={300}
                    src={image}
                    alt="productImg"
                  />
                  <div
                    className="w-12 h-12 absolute bottom-20 right-0 border-[1px]
                        border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0
                        transition-transform duration-300"
                  >
                    <span
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: id,
                            title: title,
                            price: price,
                            description: description,
                            category: category,
                            image: image,
                            quantity: 1,
                          })
                        )
                      }
                      className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center
                            text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300
                            "
                    >
                      <HiShoppingCart />
                    </span>
                    <span
                      onClick={() =>
                        dispatch(
                          addToFavorite({
                            id: id,
                            title: title,
                            price: price,
                            description: description,
                            category: category,
                            image: image,
                            quantity: 1,
                          })
                        )
                      }
                      className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center
                            text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300
                            "
                    >
                      <FaHeart />
                    </span>
                  </div>
                </div>
                <h2 className="text-sm font-medium mb-1">{title}</h2>
                <div className="flex items-center justify-between mb-1">
                  <p>
                    <span className="text-yellow-400 mr-1">★★★★☆</span>
                    <span className="text-sm text-gray-500">{rating}</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Delivery{" "}
                    {new Date(
                      Date.now() + 7 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p className="text-lg font-bold mb-2">
                  <FormattedPrice amount={price} />
                </p>
                <p className="text-xs text-gray-600 text-justify mb-4">
                  {description.substring(0, 200)}
                </p>

                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: id,
                        title: title,
                        price: price,
                        description: description,
                        category: category,
                        image: image,
                        quantity: 1,
                      })
                    )
                  }
                  className="h-10 w-full font-medium rounded-md bg-amazon_blue text-white round-md hover:bg-amazon_yellow
                            hover:text-black duration-300 mt-2"
                >
                  Add to cart
                </button>
              </div>
            )
          )}
        </div>
      ) : (
        <h1 className="text-center text-3xl font-bodyFont font-semibold text-amazon_light">
          No Product Was Found!
        </h1>
      )}
    </div>
  );
};

export default Products;

export const getServerSideProps = async (context: any) => {
  const { category, deal, search } = context.query;
  let url = `${process.env.NEXTAUTH_URL}/api/products`;

  if (category) {
    url += `?category=${category}`;
  }

  const res = await fetch(url);
  let data = await res.json();

  if (deal === "today") {
    data = data.sort((a: ProductProps, b: ProductProps) => a.price - b.price);
    data = data.slice(0, 20); //limit to 20 products
  }

  return { props: { data, deal: deal === "today" ? "today" : null } };
};
