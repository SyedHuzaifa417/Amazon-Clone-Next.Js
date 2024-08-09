import React from "react";
import {LuMenu} from "react-icons/lu";


const HeaderBottom = () =>{
  
    return <div className="w-full h-10 text-sm bg-amazon_light text-white px-2 flex
    items-center">
        <p className="flex font-bold items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300 ">
            <LuMenu className="text-white font-bold text-xl"/>All
        </p>
        <p className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Today&#39;s Deals
            </p>
        <p className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Customer Service
        </p>
        <p className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Registry
        </p>
        <p className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Gift Cards
        </p>
        <p className=" md:inline-flex flex items-center gap-1 h-10 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Sell
        </p>
       
    
    </div>
};

export default HeaderBottom;