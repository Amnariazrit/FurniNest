import Image from "next/image";

export default function Carousel() {
  return (
    <div className="carousel w-full relative overflow-hidden">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[600px] lg:h-[700px]">
        <Image
          src="/Furniture.jpg"
          alt="Furniture Image"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[600px] lg:h-[700px]">
        <Image
          src="/Furniture1.webp"
          alt="Furniture Image 1"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[600px] lg:h-[700px]">
        <Image
          src="/Furniture2.webp"
          alt="Furniture Image 2"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-[600px] lg:h-[700px]">
        <Image
          src="/Hero.png"
          alt="Hero Image 3"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-gray-800 text-white shadow-lg">
            ❯
          </a>
        </div>

        {/* Pink Box */}
        <div
          className="absolute bg-[#FFF3E3] p-4 md:p-6 lg:p-8 rounded-lg shadow-md"
          style={{
            width: "80%",
            maxWidth: "400px",
            top: "20%", // Adjusted for smaller screens
            right: "10%", // Adjusted for smaller screens
          }}
        >
          <h6 className="font-poppins font-semibold text-[12px] md:text-[14px] lg:text-[16px] uppercase tracking-[3px] text-[#333333] mb-4">
            New Arrival
          </h6>
          <h1 className="font-poppins font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#B88E2F] leading-tight mb-4">
            Discover Our New Collection
          </h1>
          <p className="font-poppins font-medium text-[12px] md:text-[14px] lg:text-[16px] text-[#333333] leading-[1.5] mb-6">
            Explore our newest collection of modern and luxurious furniture,
            crafted to transform your home.
          </p>
          <button className="bg-[#B88E2F] text-white font-poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-[#a37c28] transition">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}



















// import Image from "next/image";

// export default function Carousel() {
//   return (
//     <div className="carousel w-full relative overflow-hidden">
//       {/* Slide 1 */}
//       <div id="slide1" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Furniture.jpg"
//           alt="Furniture Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide4" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 2 */}
//       <div id="slide2" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Furniture1.webp"
//           alt="Furniture Image 1"
//           layout="fill"
//           objectFit="cover"
//           priority
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 3 */}
//       <div id="slide3" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Furniture2.webp"
//           alt="Furniture Image 2"
//           layout="fill"
//           objectFit="cover"
//           priority
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 4 */}
//       <div id="slide4" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Hero.png"
//           alt="Hero Image 3"
//           layout="fill"
//           objectFit="cover"
//           priority
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//         <div
//         className="absolute bg-[#FFF3E3] p-6 rounded-lg shadow-md"
//         style={{
//           width: "80%", // Pink box width as a percentage of the image container
//           maxWidth: "400px", // Maximum width of the pink box
//           top: "30%", // Fixed vertical position from the top
//           right: "5%", // Fixed horizontal position from the right
//         }}
//       >
//         <h6 className="font-poppins font-semibold text-[16px] uppercase tracking-[3px] text-[#333333] mb-4">
//           New Arrival
//         </h6>
//         <h1 className="font-poppins font-bold text-[24px] lg:text-[28px] text-[#B88E2F] leading-tight mb-4">
//           Discover Our New Collection
//         </h1>
//         <p className="font-poppins font-medium text-[14px] lg:text-[16px] text-[#333333] leading-[1.5] mb-6">
//           Explore our newest collection of modern and luxurious furniture,
//           crafted to transform your home.
//         </p>
//         <button className="bg-[#B88E2F] text-white font-poppins font-bold text-[14px] lg:text-[16px] py-3 px-6 rounded-md hover:bg-[#a37c28] transition">
//           BUY NOW
//         </button>
//       </div>
//       </div>
      
//     </div>
//   );
// }













// import Image from "next/image";

// export default function Carousel() {
//   return (
//     <div className="carousel w-full relative overflow-hidden">
//       {/* Slide 1 */}
//       <div id="slide1" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Furniture.jpg"
//           alt="Furniture Image"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide4" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 2 */}
//       <div id="slide2" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Furniture1.webp"
//           alt="Hero Image 1"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 3 */}
//       <div id="slide3" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Furniture2.webp"
//           alt="Hero Image 2"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 4 */}
//       <div id="slide4" className="carousel-item relative w-full h-[600px]">
//         <Image
//           src="/Hero.png"
//           alt="Hero Image 3"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle bg-gray-800 text-white shadow-lg">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }












// import Image from "next/image";

// export default function Carousel() {
//   return (
//     <div className="carousel w-full relative overflow-hidden">
//       {/* Slide 1 */}
//       <div id="slide1" className="carousel-item relative w-full">
//         <Image
//           src="/Furniture.jpg"
//           alt="Furniture Image"
//           layout="responsive"
//           width={1920}
//           height={1080}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide4" className="btn btn-circle bg-gray-800 text-white">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 2 */}
//       <div id="slide2" className="carousel-item relative w-full">
//         <Image
//           src="/Hero1.webp"
//           alt="Hero Image 1"
//           layout="responsive"
//           width={1920}
//           height={1000}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 3 */}
//       <div id="slide3" className="carousel-item relative w-full">
//         <Image
//           src="/Hero.png"
//           alt="Hero Image 2"
//           layout="responsive"
//           width={1920}
//           height={1000}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle bg-gray-800 text-white">
//             ❯
//           </a>
//         </div>
//       </div>

//       {/* Slide 4 */}
//       <div id="slide4" className="carousel-item relative w-full">
//         <Image
//           src="/Hero2.jpg"
//           alt="Hero Image 3"
//           layout="responsive"
//           width={1920}
//           height={1000}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }










// import Image from "next/image";

// export default function Carousel(){
//     return (
//         <>
//         <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <Image
//       src="/Furniture.jpg"
//       alt="Hero Image"
//       width={0}
//       height={0}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <Image
//       src="/Hero1.webp"
//       alt="Hero Image"
//       width={0}
//       height={0}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//       src="/Hero.png"
//       alt="Hero Image"
//       width={0}
//       height={0}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//       src="/Hero2.jpg"
//       alt="Hero Image"
//       width={0}
//       height={0}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//         </>
//     )
// }