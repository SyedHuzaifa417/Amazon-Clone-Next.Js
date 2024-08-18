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
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div
              className="flex items-center justify-between border-b-[1px]
                        border-b-gray-400 pb-1"
            >
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Subtotal</p>
            </div>
            <div>
              {productData.map((item: StoreProduct) => (
                <div key={item.id} className="py-3 flex flex-col gap-2">
                  <CartProduct item={item} />
                </div>
              ))}

              <ResetCart />
            </div>
          </div>

          <div
            className="bg-white w-72 px-6 h-64 col-span-1 rounded-lg flex
                    items-center justify-center"
          >
            <CartPayment />
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-white h-80 col-span-5 flex items-start
                justify-start py-14 px-10 rounded-lg shadow-lg "
          >
            <div className="mb-6 mr-14">
              <Image src={cartEmpty} alt="emptyCart" width={400} />
            </div>
            <div>
              <h1 className="text-xl font-medium mb-1">
                Your Amazon Cart is empty
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                Shop today&apos;s deals
              </p>
              <div className="flex space-x-4">
                <Link href="/">
                  <button className="px-4 py-2 bg-yellow-400 text-black  font-semibold hover:bg-yellow-500 rounded-full">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <p className=" col-span-4 font-normal text-sm">
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item&apos;s most recent price.
            <br /> Do you have a gift card or promotional code? We&apos;ll ask
            you to enter your claim code when it&apos;s time to pay.
          </p>
        </>
      )}
    </div>
  );
};

export default CartPage;
