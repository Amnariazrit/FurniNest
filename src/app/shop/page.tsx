"use client";

import Image from "next/image";
import Link from "next/link";
import Services from "../components/Services";
import ProductCards from "../item/page";

const Shop = () => {
  return (
    <div className="w-full relative">
      {/* Background Image with Navigation */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/Rectangle 1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
          <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
            Shop
          </h2>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Link
              href="/"
              className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Home
            </Link>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
              &#8594;
            </span>
            <Link
              href="/"
              className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-white py-8">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-full flex justify-center items-center">
            <p className="font-[Poppins] font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#000000]">
              Explore our wide range of products that suit every need and style.
              Shop now!
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductCards />

      <Services />
    </div>
  );
};

export default Shop;





































// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import Services from "../components/Services";
// import ProductCards from "../item/page";

// interface Product {
//   title: string;
//   price: number;
//   description: string;
//   productImageUrl: string;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// const Shop = () => {

//   return (
//     <div className="w-full relative">
//       {/* Background Image with Navigation */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//             Shop
//           </h2>
//           <div className="flex justify-center items-center gap-4 mt-2">
//             <Link
//               href="/"
//               className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Home
//             </Link>
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
//               &#8594;
//             </span>
//             <Link
//               href="/"
//               className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Shop
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Pink Container Section */}
//       <div className="w-full bg-[#F9F1E7] py-4 px-4 sm:px-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
//         {/* Filter Section */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/system-uicons--filtering.svg"
//             alt="Filter Icon"
//             width={24}
//             height={24}
//             className="object-contain"
//           />
//           <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//             Filter
//           </h3>
//         </div>

//         {/* View Options */}
//         <div className="flex items-center gap-4">
//           <Image
//             src="/menu.png"
//             alt="Menu Icon"
//             width={24}
//             height={24}
//             className="object-contain"
//           />
//           <Image
//             src="/view-list.png"
//             alt="View List Icon"
//             width={24}
//             height={24}
//             className="object-contain"
//           />
//         </div>

//         {/* Results Info */}
//         <div className="text-center">
//           <p className="font-[Poppins] font-[400] text-[14px] sm:text-[16px] text-[#000000]">
//             Showing 1–16 of 32 results
//           </p>
//         </div>

//         {/* Show and Sort Section */}
//         <div className="flex flex-wrap items-center gap-4">
//           <div className="flex items-center gap-2">
//             <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//               Show
//             </h3>
//             <div className="w-[55px] h-[30px] bg-white flex items-center justify-center">
//               <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
//                 16
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//               Sort by
//             </h3>
//             <div className="w-[100px] h-[30px] bg-white flex items-center justify-center">
//               <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
//                 Default
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="w-full bg-white py-8">
//         <div className="w-full max-w-screen-xl mx-auto px-4">
//           <div className="w-full flex justify-center items-center">
//             <p className="font-[Poppins] font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#000000]">
//               Explore our wide range of products that suit every need and style.
//               Shop now!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Products */}
//       <ProductCards />

//       {/* Pagination */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button className="bg-[#B88E2F] text-white py-2 px-4 rounded-lg font-medium">
//           1
//         </button>
//         <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//           2
//         </button>
//         <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//           3
//         </button>
//         <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//           Next
//         </button>
//       </div>

//       <Services />
//     </div>
//   );
// };

// export default Shop;

// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import Services from "../components/Services";
// import ProductCards from "../item/page";

// interface Product {
//   title: string;
//   price: number;
//   description: string;
//   productImageUrl: string;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// const Shop = () => {

//   return (
//     <div className="w-full relative">
//       {/* Background Image with Navigation */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//             Shop
//           </h2>
//           <div className="flex justify-center items-center gap-4 mt-2">
//             <Link
//               href="/"
//               className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Home
//             </Link>
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
//               &#8594;
//             </span>
//             <Link
//               href="/"
//               className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Shop
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Pink Container Section */}
//       <div className="w-full bg-[#F9F1E7] py-4 px-4 sm:px-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
//         {/* Filter Section */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/system-uicons--filtering.svg"
//             alt="Filter Icon"
//             width={24}
//             height={24}
//             className="object-contain"
//           />
//           <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//             Filter
//           </h3>
//         </div>

//         {/* View Options */}
//         <div className="flex items-center gap-4">
//           <Image
//             src="/menu.png"
//             alt="Menu Icon"
//             width={24}
//             height={24}
//             className="object-contain"
//           />
//           <Image
//             src="/view-list.png"
//             alt="View List Icon"
//             width={24}
//             height={24}
//             className="object-contain"
//           />
//         </div>

//         {/* Results Info */}
//         <div className="text-center">
//           <p className="font-[Poppins] font-[400] text-[14px] sm:text-[16px] text-[#000000]">
//             Showing 1–16 of 32 results
//           </p>
//         </div>

//         {/* Show and Sort Section */}
//         <div className="flex flex-wrap items-center gap-4">
//           <div className="flex items-center gap-2">
//             <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//               Show
//             </h3>
//             <div className="w-[55px] h-[30px] bg-white flex items-center justify-center">
//               <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
//                 16
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//               Sort by
//             </h3>
//             <div className="w-[100px] h-[30px] bg-white flex items-center justify-center">
//               <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
//                 Default
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="w-full bg-white py-8">
//         <div className="w-full max-w-screen-xl mx-auto px-4">
//           <div className="w-full flex justify-center items-center">
//             <p className="font-[Poppins] font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#000000]">
//               Explore our wide range of products that suit every need and style.
//               Shop now!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Products */}
//       <ProductCards />

//       {/* Pagination */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button className="bg-[#B88E2F] text-white py-2 px-4 rounded-lg font-medium">
//           1
//         </button>
//         <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//           2
//         </button>
//         <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//           3
//         </button>
//         <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//           Next
//         </button>
//       </div>

//       <Services />
//     </div>
//   );
// };

// export default Shop;
