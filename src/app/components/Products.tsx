import React from "react";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/Images.jpg",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.000.000",
    },
    {
      id: 2,
      image: "/image2.jpg",
      name: "Leviosa",
      description: "Modern sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 8.500.000",
    },

    {
      id: 3,
      image: "/image3.jpg",
      name: "Lolito",
      description: "Luxury lamp",
      price: "Rp 1.200.000",
      originalPrice: "Rp 1.800.000",
    },
    {
      id: 4,
      image: "/image4.jpg",
      name: "Respira",
      description: "Minimalist chair",
      price: "Rp 4.500.000",
      originalPrice: "Rp 5.000.000",
    },
    {
      id: 5,
      image: "/Image5.jpg",
      name: "Grifo",
      description: "Classic armchair",
      price: "Rp 3.000.000",
      originalPrice: "Rp 4.000.000",
    },
    {
      id: 6,
      image: "/image6.jpg",
      name: "Muggo",
      description: "Stylish mug",
      price: "Rp 150.000",
      originalPrice: "Rp 200.000",
    },
    {
      id: 7,
      image: "/image7.jpg",
      name: "Pingky",
      description: "Modern shelf",
      price: "Rp 3.500.000",
      originalPrice: "Rp 4.200.000",
    },
    {
      id: 8,
      image: "/image8.jpg",
      name: "Potty",
      description: "Elegant flower pot",
      price: "Rp 2.000.000",
      originalPrice: "Rp 2.500.000",
    },
  ];

  return (
    <div className="container mx-auto mt-14 border border-[#B88E2F] p-8">
      {/* Section Heading */}
      <h2 className="text-center font-poppins font-bold text-2xl md:text-3xl text-[#3A3A3A] mb-8">
        Our Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-[#B88E2F] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 relative"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={285}
              height={300}
              className="object-cover w-full h-auto"
            />

            {/* Add to Cart Button */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-[#B88E2F] text-white font-semibold rounded-full shadow-lg">
                Add to Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="bg-[#F4F5F7] p-4">
              <h3 className="font-poppins font-semibold text-lg text-[#3A3A3A]">
                {product.name}
              </h3>
              <p className="font-poppins text-sm text-[#898989]">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <h4 className="font-poppins font-semibold text-md text-[#3A3A3A]">
                  {product.price}
                </h4>
                <p className="font-poppins text-sm text-[#B0B0B0] line-through">
                  {product.originalPrice}
                </p>
              </div>
            </div>

            {/* Share, Compare, Like Buttons */}
            <div className="absolute bottom-2 left-2 flex space-x-4 text-white font-poppins text-sm">
              <span className="hover:text-[#B88E2F] cursor-pointer">Share</span>
              <span className="hover:text-[#B88E2F] cursor-pointer">
                Compare
              </span>
              <span className="hover:text-[#B88E2F] cursor-pointer">Like</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 border border-[#B88E2F] text-[#B88E2F] font-poppins font-medium text-lg rounded hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
