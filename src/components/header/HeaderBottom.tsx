import Link from "next/link";
import React from "react";
import { LuMenu } from "react-icons/lu";

const HeaderBottom = () => {
  return (
    <div
      className="w-full h-10 text-sm bg-amazon_light text-white px-2 flex
    items-center"
    >
      <Link href={"/products"}>
        <p
          className="flex font-bold font-bodyFont items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300 "
        >
          <LuMenu className="text-white font-bold text-xl" />
          All
        </p>
      </Link>
      <Link href={"/products?deal=today"}>
        <p
          className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300"
        >
          Today&#39;s Deals
        </p>
      </Link>
      <Link href={"/WorkInProgress"}>
        <p
          className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300"
        >
          Customer Service
        </p>
      </Link>
      <Link href={"/WorkInProgress"}>
        <p
          className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300"
        >
          Registry
        </p>
      </Link>
      <Link href={"/products?category=toys"}>
        {/* to be changed to giftCards when we have gift card in data */}
        <p
          className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300"
        >
          Toys
        </p>
      </Link>
    </div>
  );
};

export default HeaderBottom;
