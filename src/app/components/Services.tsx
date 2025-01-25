"use client";
import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { FaTrophy, FaTruck, FaPhoneAlt } from "react-icons/fa";

// Service data
const services = [
  {
    id: 1,
    icon: <FaTrophy className="text-blue-500 text-4xl" />,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    id: 2,
    icon: <PiSealCheckFill className="text-yellow-500 text-4xl" />,
    title: "Warranty Protection",
    description: "Warranty Protection",
  },

  {
    id: 3,
    icon: <FaTruck className="text-orange-500 text-4xl" />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },

  {
    id: 4,
    icon: <FaPhoneAlt className="text-gray-500 text-4xl" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAF3EA]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
          What Shoppex Offer!
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 text-center border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-sm line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
