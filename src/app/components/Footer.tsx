import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border-t border-[#0000002B] py-16">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Section */}
        <div className="space-y-4">
          <h3 className="font-Poppins font-bold text-2xl text-[#000000]">
            Elegant Peace.
          </h3>
          <p className="font-Poppins text-lg text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-8 sm:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <h6 className="font-Poppins font-medium text-lg text-[#9F9F9F]">
              Links
            </h6>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                Home
              </Link>
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                About
              </Link>
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="space-y-8 sm:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <h6 className="font-Poppins font-medium text-lg text-[#9F9F9F]">
              Help
            </h6>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                Payment Options
              </Link>
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                Returns
              </Link>
              <Link
                href="/"
                className="font-Poppins font-medium text-lg text-[#000000]"
              >
                Policies
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h6 className="font-Poppins font-medium text-lg text-[#9F9F9F]">
            Newsletter
          </h6>
          <p className="font-Poppins text-sm text-[#9F9F9F]">
            Enter Your Email Address
          </p>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-[#000000] rounded-md"
            />
            <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-md hover:bg-[#9E7F2E] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-8 border-t border-[#D9D9D9] pt-4 text-center">
        <p className="font-Poppins font-medium text-lg text-[#000000]">
          &copy; 2025 Elegant Peace. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
