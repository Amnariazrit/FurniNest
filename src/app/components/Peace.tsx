import Image from "next/image";
import Link from "next/link";
import React from "react";

const Peace = () => {
  return (
    <div className="w-full bg-[#FCF8F3] py-16">
      {/* Section Header and Image Section - Aligned in a row */}
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row gap-6 items-center">
        {/* Section Header */}
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
          <h2 className="font-Poppins font-bold text-4xl text-[#3A3A3A] mb-4">
            50+ Beautiful Rooms Inspiration
          </h2>
          <p className="font-Poppins font-medium text-lg text-[#616161] mb-6">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>

          {/* Explore More Button */}
          <div className="flex justify-start">
            <Link href={"/shop"} >
            <button className="bg-[#B88E2F] text-white font-Poppins font-semibold text-lg py-2 px-6 rounded-md hover:bg-[#9E7F2E] transition-all">
              Explore More
            </button></Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-6 relative">
          <div className="w-full sm:w-1/3 relative">
            <Image
              src="/Rectangle1.jpg"
              alt="Room 1"
              width={500}
              height={600}
              className="object-cover rounded-lg w-full h-auto"
            />
            {/* Text Overlay on Image */}
            <div className="absolute bottom-4 left-4 text-white bg-[#FFFFFFB8] p-4 rounded-xl max-w-[85%]">
              <p className="font-Poppins font-medium text-sm text-[#616161] mb-1">
                01 Bed Room
              </p>
              <h3 className="font-Poppins font-bold text-lg text-[#3A3A3A]">
                Inner Peace
              </h3>
            </div>
            {/* Yellow span with Right Arrow */}
            <span className="w-10 h-10 bg-[#B88E2F] flex items-center justify-center absolute bottom-4 right-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </div>

          {/* Second Image */}
          <div className="w-full sm:w-1/3 relative">
            <Image
              src="/Rectangle2.jpg"
              alt="Room 2"
              width={500}
              height={600}
              className="object-cover rounded-lg w-full h-auto"
            />
            {/* Dots aligned below second image */}
            <div className="absolute left-0 flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#B88E2F]"></span>{" "}
              {/* Yellow dot */}
              <span className="w-3 h-3 rounded-full bg-[#D8D8D8]"></span>{" "}
              {/* Gray dots */}
              <span className="w-3 h-3 rounded-full bg-[#D8D8D8]"></span>
              <span className="w-3 h-3 rounded-full bg-[#D8D8D8]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peace;
