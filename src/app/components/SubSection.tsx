import React from "react";
import Image from "next/image";
import Link from "next/link";

const SubSection = () => {
  return (
    <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
      <div className="text-center max-w-7xl px-6">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
          Browse The Range
        </h2>
        <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
          Explore our diverse collection of premium furniture designed to elevate your living space.
        </p>

        {/* Images in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href={"/shop"}>
            <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
              <Image
                src="/p1.png"
                alt="Dining"
                width={381}
                height={480}
                className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
              />
              <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
                Dining
              </p>
            </div>
          </Link>

          <Link href={"/shop"}>
            <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
              <Image
                src="/p2.png"
                alt="Living"
                width={381}
                height={480}
                className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
              />
              <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
                Living
              </p>
            </div>
          </Link>

          <Link href={"/shop"}>
            <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
              <Image
                src="/p3.png"
                alt="Bedroom"
                width={381}
                height={480}
                className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
              />
              <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
                Bedroom
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubSection;











// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p1.png"
//                 alt="Dining"
//                 width={450}
//                 height={600}
//                 className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Dining
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={450}
//                 height={600}
//                 className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={450}
//                 height={600}
//                 className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;











// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p1.png"
//                 alt="Dining"
//                 width={380}
//                 height={480}
//                 className="object-cover w-full max-w-[280px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Dining
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={380}
//                 height={480}
//                 className="object-cover w-full max-w-[280px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={380}
//                 height={480}
//                 className="object-cover w-full max-w-[280px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;






// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p1.png"
//                 alt="Dining"
//                 width={400}
//                 height={500}
//                 className="object-cover w-full max-w-[320px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Dining
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={400}
//                 height={500}
//                 className="object-cover w-full max-w-[320px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={400}
//                 height={500}
//                 className="object-cover w-full max-w-[320px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;









// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-6xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to
//           elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
//         <Link href={"/shop"}>
//           <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//             <Image
//               src="/p1.png"
//               alt="Dining"
//               width={381}
//               height={480}
//               className="object-cover w-full max-w-[300px] mx-auto"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//               Dining
//             </p>
//           </div></Link>
//           <Link href={"/shop"}>
//           <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//             <Image
//               src="/p2.png"
//               alt="Living"
//               width={381}
//               height={480}
//               className="object-cover w-full max-w-[300px] mx-auto"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//               Living
//             </p>
//           </div></Link>

// <Link href={"/shop"}>
//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p3.png"
//               alt="Bedroom"
//               width={381}
//               height={480}
//               className="object-cover w-full max-w-[300px] mx-auto"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//               Bedroom
//             </p>
//           </div></Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;







































// import React from "react";
// import Image from "next/image";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-4xl px-6">
//         <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg lg:text-xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to
//           elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p1.png"
//               alt="Dining"
//               width={381}
//               height={480}
//               className="object-cover"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
//               Dining
//             </p>
//           </div>

//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p2.png"
//               alt="Living"
//               width={381}
//               height={480}
//               className="object-cover"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
//               Living
//             </p>
//           </div>

//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p3.png"
//               alt="Bedroom"
//               width={381}
//               height={480}
//               className="object-cover"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
//               Bedroom
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;
