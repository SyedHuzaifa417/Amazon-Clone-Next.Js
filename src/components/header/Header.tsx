import logo from "../../assets/logo.png"
import Image from "next/image"
import cartIcon from "../../assets/cart.png";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";

const Header = () => {
 
        
    return (
    <div className="w-full h-[3.8rem] bg-amazon_blue text-lightText sticky top-0 z-50"> 
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-2">
          
            <div className="flex items-center justify-center gap-2">
              <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-14">
            <Image className="w-[6rem] object-cover "  src={logo} alt="logo"/>
            </Link>
          
            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-between h-14 hidden xl:inline-flex gap-1">  
                <div className="flex items-end gap-x-0.5 justify-center">   
                    <HiOutlineLocationMarker className="text-white font-bold text-lg"/>
                    <div className="text-xs">
                      <p>Deliver to</p>
                      <p className="text-white font-bold font-bodyFont">Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
          
            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
                <input className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-amazon_yellow" type="text" placeholder="Search Amazon"/>
                <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
             <HiOutlineSearch/>
                </span>
            </div>
     
            <div className="flex items-stretch justify-center gap-2">
             <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-14 relative">
               <p>Hello, sign in</p>
               <p className="text-white font-bold flex items-center">Accounts & Lists
                <span className="text-gray-400"><BiCaretDown/></span>
                </p>
             </div>

            <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-14 relative">
                <p>Returns</p>
                <p className="text-white font-bold">& Orders</p>
          
                </div>
        
            <Link href={"/cart"} className="flex items-center px-2  border
            border-transparent hover:border-white cursor-pointer duration-300 h-14 relative">
                <Image className="w-auto object-cover h-8" src={cartIcon} alt="cartImg"/>
                <p className="text-xs text-white font-bold mt-3">Cart</p>
                <span className="absolute text-amazon_yellow text-sm top-2 left-[30px] font-bold">0</span>
            </Link>
            </div>

        </div>
    </div>
    );
};

export default Header;