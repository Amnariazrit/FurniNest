import React from "react";
import Image from "next/image";

const LastSec = () => {
  return (
    <div className="w-full py-16 bg-[#F9F9F9] mt-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-Poppins font-medium text-lg text-gray-600 tracking-wide">
          Share your setup with
        </h2>
        <h3 className="font-Poppins font-bold text-3xl text-gray-800">
          #FuniroFurniture
        </h3>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {[
          "/Rectangle 36.jpg",
          "/Rectangle 37.jpg",
          "/Rectangle 38.jpg",
          "/Rectangle 39.jpg",
          "/Rectangle 40.jpg",
          "/Rectangle 41.jpg",
          "/Rectangle 43.jpg",
          "/Rectangle 44.jpg",
          "/Rectangle 45.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={src}
              alt={`Funiro Image ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastSec;
