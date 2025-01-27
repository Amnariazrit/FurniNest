import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonExclamation } from "react-icons/bs";


export default function Header() {
  return (
    <div>
      {/* Mobile Header (Visible on small screens) */}
      <div className="flex items-center justify-between px-4 h-[80px] bg-white shadow-md lg:hidden">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="logo"
            width={50}
            height={32}
            className="w-12 h-auto"
          />
          <h1 className="font-montserrat font-bold text-[24px] text-black">
            Elegant Peace
          </h1>
        </div>

        {/* Hamburger Menu */}
        <Menu />
      </div>

      {/* Desktop Header (Visible on medium to large screens) */}
      <header className="hidden lg:block w-full h-[100px] bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="logo"
              width={50}
              height={32}
              className="w-12 h-auto"
            />
            <h1 className="font-montserrat font-bold text-[34px] leading-[41px] text-black">
              Elegant Peace
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8">
            <Link
              href="./"
              className="font-poppins font-medium text-[16px] leading-[24px] text-black hover:text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="./shop"
              className="font-poppins font-medium text-[16px] leading-[24px] text-black hover:text-gray-600 transition"
            >
              Shop
            </Link>
            <Link
              href="./blog"
              className="font-poppins font-medium text-[16px] leading-[24px] text-black hover:text-gray-600 transition"
            >
              Blog
            </Link>
            <Link
              href="./contact"
              className="font-poppins font-medium text-[16px] leading-[24px] text-black hover:text-gray-600 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <BsPersonExclamation className="text-2xl text-black cursor-pointer hover:text-gray-600" />
            <FiSearch className="text-2xl text-black cursor-pointer hover:text-gray-600" />
            <GoHeart className="text-2xl text-black cursor-pointer hover:text-gray-600" />
            <Link href="/cart">
              <AiOutlineShoppingCart className="text-2xl text-black cursor-pointer hover:text-gray-600" />
            </Link>
            
          </div>
        </div>
      </header>
    </div>
  );
}
