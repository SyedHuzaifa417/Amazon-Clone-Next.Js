import logo from "../../assets/logo.png";
import Image from "next/image";
import cartIcon from "../../assets/cart.png";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/store/nextSlice";
import { useEffect, useState } from "react";
import AccountDropdown from "./AccountDropdown";
import LocationDropdown from "./LocationDropDown";
import FavoritesModal from "../FavoritesModal";
import { useRouter } from "next/router";

const Header = () => {
  const [showAccountDropdown, setAccountDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: stateProps) => state.next
  );
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session, dispatch]);

  return (
    <div className="w-full h-[3.8rem] bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-2">
        <div className="flex items-center justify-center gap-2">
          <Link
            href={"/"}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-14"
          >
            <Image className="w-[6rem] object-cover " src={logo} alt="logo" />
          </Link>

          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-between h-14 hidden xl:inline-flex gap-1">
            <div
              onMouseEnter={() => setShowLocationDropdown(true)}
              onMouseLeave={() => setShowLocationDropdown(false)}
              className="relative text-md text-gray-100 flex flex-col justify-center px-2 border
  border-transparent cursor-pointer duration-300 h-14"
            >
              <div className="flex items-end gap-x-0.5 justify-center">
                <HiOutlineLocationMarker className="text-white font-bold text-lg" />
                <div className="text-xs">
                  <p>Deliver to</p>
                  <p className="text-white font-bold font-bodyFont">
                    {selectedCountry}
                  </p>
                </div>
              </div>
              {showLocationDropdown && (
                <LocationDropdown
                  onSelect={(country) => setSelectedCountry(country)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
          <form
            onSubmit={handleSearch}
            className="w-full flex items-center justify-center"
          >
            <input
              className="w-full h-10 rounded-lg px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-amazon_yellow"
              type="text"
              placeholder="Search Amazon"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0  rounded-r-lg"
            >
              <HiOutlineSearch />
            </button>
          </form>
        </div>

        <div className="flex items-stretch justify-center gap-2">
          <div
            onMouseEnter={() => setAccountDropdown(true)}
            onMouseLeave={() => setAccountDropdown(false)}
            className="relative text-xs text-gray-100 flex flex-col justify-center px-2 border
          border-transparent  cursor-pointer duration-300 h-14"
          >
            {userInfo ? (
              <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
                <Image
                  src={userInfo.image}
                  alt="userImage"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                  layout="fixed"
                  quality={100}
                  priority={true}
                />
                <div
                  className="text-xs text-gray-100 flec flex-col
                 justify-between"
                >
                  <p className="text-white font-bold">
                    Hello, {userInfo.name.split(" ")[0]}
                  </p>
                  <p>{userInfo.email}</p>
                </div>
              </div>
            ) : (
              <>
                <p>Hello, sign in</p>
                <p className="text-white font-bold flex items-center">
                  Account & Lists
                  <span className="text-gray-400">
                    <BiCaretDown />
                  </span>
                </p>
              </>
            )}
            {showAccountDropdown && (
              <AccountDropdown
                isSignedIn={!!userInfo}
                onSignIn={() => signIn()}
                onSignOut={() => signOut()}
              />
            )}
          </div>
          <div
            onClick={() => setShowFavoritesModal(true)}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-14 relative"
          >
            <p>Marked</p>
            <p className="text-white font-bold">& Favourites</p>
            {favoriteData.length > 0 && (
              <span className="absolute right-[16px] top-2.5 w-4 h-4  items-center justify-center text-amazon_yellow">
                {favoriteData.length}
              </span>
            )}
          </div>

          <Link
            href={"/cart"}
            className="flex items-center px-2  border
            border-transparent hover:border-white cursor-pointer duration-300 h-14 relative"
          >
            <Image
              className="w-auto object-cover h-8"
              src={cartIcon}
              alt="cartImg"
            />
            <p className="text-xs text-white font-bold mt-3">Cart</p>
            <span className="absolute text-amazon_yellow text-sm top-2 left-[30px] font-bold">
              {productData ? productData.length : 0}
            </span>
          </Link>
        </div>
      </div>
      <FavoritesModal
        isOpen={showFavoritesModal}
        onClose={() => setShowFavoritesModal(false)}
      />
    </div>
  );
};

export default Header;
