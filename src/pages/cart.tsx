import React from "react";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";
import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import cartEmpty from "@/assets/cartEmpty.svg";
import CartPayment from "@/components/CartPayment";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { productData } = useSelector((state: stateProps) => state.next);

  return (
    <div className="max-w-screen-lglxl mx-auto px-4 sm:px-6 py-4">
      {productData.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg mb-4 lg:mb-0">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-lg sm:text-xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
            </div>
            <div className="overflow-y-auto max-h-[60vh] lg:max-h-[70vh]">
              {productData.map((item: StoreProduct) => (
                <div key={item.id} className="py-3 bg-gray-100 w-screen">
                  <CartProduct item={item} />
                </div>
              ))}
            </div>
            <ResetCart />
          </div>
          <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg">
            <CartPayment />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="bg-white w-full p-4 sm:p-6 rounded-lg shadow-lg mb-6">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mb-6 sm:mb-0 sm:mr-6 lg:mx-14">
                <Image
                  src={cartEmpty}
                  alt="emptyCart"
                  width={200}
                  height={200}
                  className="w-full max-w-[200px] h-auto"
                />
              </div>
              <div className="text-center lg:ml-11 sm:text-left">
                <h1 className="text-lg sm:text-xl font-medium mb-1">
                  Your Amazon Cart is empty
                </h1>
                <p className="text-sm text-gray-600 mb-4">
                  Shop today&apos;s deals
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/">
                    <button className="px-4 py-2 bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 rounded-full">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm  px-4 max-w-2xl text-justify">
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item&apos;s most recent price.
            <br /> Do you have a gift card or promotional code? We&apos;ll ask
            you to enter your claim code when it&apos;s time to pay.
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
