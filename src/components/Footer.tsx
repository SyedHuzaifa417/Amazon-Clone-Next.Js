import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-amazon_light text-gray-400 mt-6">
      {visible && (
        <div
          onClick={scrollToTop}
          className="bg-[#37475A] text-white text-sm py-3 text-center cursor-pointer hover:bg-[#485769]"
        >
          Back to top
        </div>
      )}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-around">
          <div className="mb-6 sm:mb-0 sm:px-8">
            <h5 className="text-xl font-bold tracking-tight text-gray-200">
              Get to Know Us
            </h5>
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  About Amazon
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Investor Relations
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Amazon Devices
                </Link>
              </li>
              <li>
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Amazon Science
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h5 className="text-xl font-bold tracking-tight text-gray-200">
              Make Money with Us
            </h5>
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Sell products on Amazon
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Sell on Amazon Business
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Sell apps on Amazon
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Become an Affiliate
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Advertise Your Products
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Self-Publish with Us
                </Link>
              </li>
              <li>
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Host an Amazon Hub
                </Link>
              </li>
              <li>
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  See More Make Money with Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h5 className="text-xl font-bold tracking-tight text-gray-200">
              Amazon Payment Products
            </h5>
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Amazon Business Card
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Shop with Points
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Reload Your Balance
                </Link>
              </li>
              <li>
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Amazon Currency Converter
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h5 className="text-xl font-bold tracking-tight text-gray-200">
              Let Us Help You
            </h5>
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Amazon and COVID-19
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Your Account
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Your Orders
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Shipping Rates & Policies
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Returns & Replacements
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Manage Your Content and Devices
                </Link>
              </li>
              <li>
                <Link href="/WorkInProgress" className="hover:text-gray-300">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-700 my-5"></div>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row justify-around items-center">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Amazon Logo"
              className="w-[6rem] object-cover "
            />
          </Link>
        </div>
        <p>
          &copy; 1998-2024 All rights reserved.{" "}
          <a
            className="hover:text-white hoverunderline decoration-[1px]
            cursor-pointer font-bodyFont underline duration-250"
            href="https://www.linkedin.com/in/syed-huzaifa-bukhari-b866421b3/"
            target="_blank"
          >
            SyedHuzaifa
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
