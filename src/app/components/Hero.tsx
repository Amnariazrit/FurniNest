import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-100px)]">
      {/* Hero Image */}
      <div className="relative w-full h-full">
        <Image
          src="/Hero.png"
          alt="Hero Image"
          layout="fill" // Makes the image responsive, covering the whole container
          objectFit="cover" // Ensures the image covers the space without stretching
          priority
        />
      </div>

      {/* Fixed Pink Box */}
      <div
        className="absolute bg-[#FFF3E3] p-6 rounded-lg shadow-md"
        style={{
          width: "80%", // Pink box width as a percentage of the image container
          maxWidth: "400px", // Maximum width of the pink box
          top: "30%", // Fixed vertical position from the top
          right: "5%", // Fixed horizontal position from the right
        }}
      >
        <h6 className="font-poppins font-semibold text-[16px] uppercase tracking-[3px] text-[#333333] mb-4">
          New Arrival
        </h6>
        <h1 className="font-poppins font-bold text-[24px] lg:text-[28px] text-[#B88E2F] leading-tight mb-4">
          Discover Our New Collection
        </h1>
        <p className="font-poppins font-medium text-[14px] lg:text-[16px] text-[#333333] leading-[1.5] mb-6">
          Explore our newest collection of modern and luxurious furniture,
          crafted to transform your home.
        </p>
        <button className="bg-[#B88E2F] text-white font-poppins font-bold text-[14px] lg:text-[16px] py-3 px-6 rounded-md hover:bg-[#a37c28] transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
