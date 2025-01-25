"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const SingleHero = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
      {/* Main Container for Images */}
      <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
        {/* Small Images Section */}
        <div className="flex flex-wrap sm:flex-col gap-4">
          {/* Image 1 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Outdoor sofa set 2.png"
                alt="Outdoor sofa set"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Outdoor sofa set_2 1.png"
                alt="Outdoor sofa set 2"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Stuart sofa 1.png"
                alt="Stuart sofa"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Maya sofa three seater (1) 1.png"
                alt="Maya sofa three seater"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>

        {/* Large Image and Content Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Large Image Section */}
          <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
            <Image
              src="/Asgaard sofa 3.png"
              alt="Asgaard sofa"
              width={1000}
              height={800}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-start gap-4 ml-20">
            {/* Heading */}
            <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
              Asgaard Sofa
            </h1>

            {/* Price */}
            <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
              Rs. 250,000.00
            </p>

            {/* Stars and Reviews Section */}
            <div className="flex items-center gap-2">
              {/* Stars */}
              <div className="flex gap-2">
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
              </div>
              <div className="w-[1px] h-full bg-[#9F9F9F] mt-2 self-end"></div>
              <p className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] pt-1">
                5 Customer Reviews
              </p>
            </div>

            {/* Product Description */}
            <p className="w-[424px] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Size Selection Section */}
            <div className="flex flex-col gap-2">
              <p className="font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">
                Size
              </p>
              <div className="flex items-center gap-4">
                <button className="w-[40px] h-[40px] rounded-[5px] bg-[#B88E2F] text-[#ffffff] font-[Poppins] text-[13px] leading-[19.5px]">
                  L
                </button>
                <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
                  XL
                </button>
                <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
                  XS
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <div className="w-[123px] h-[64px] flex items-center justify-between rounded-[10px] border-[1px] border-[#9F9F9F] bg-[#ffffff] px-4">
                <button
                  onClick={decreaseQuantity}
                  className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
                >
                  -
                </button>
                <p className="font-[Poppins] font-[500] text-[16px] text-[#000000]">
                  {quantity}
                </p>
                <button
                  onClick={increaseQuantity}
                  className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex items-center gap-4 mt-4">
              {/* Add to Cart Button */}
              <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
                <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">
                  Add To Cart
                </p>
              </button>

              {/* Compare Button */}
              <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
                <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">
                  Compare
                </p>
              </button>
            </div>
            <hr className="mt-6 border-[#D9D9D9]" />
            <div className="mt-4 flex flex-col gap-2">
              {/* SKU */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  SKU
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000]">
                  : SS001
                </p>
              </div>
              {/* Category */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  Category
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000]">
                  : Sofas
                </p>
              </div>
              {/* Tags */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  Tags
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000]">
                  : Sofa, Chair, Home, Shop
                </p>
              </div>
              {/* Share */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  Share
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000] flex gap-2">
                  : <RiFacebookCircleFill className="text-[20px]" />
                  <FaLinkedin className="text-[20px]" />
                  <AiFillTwitterCircle className="text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive Tab for Description, Additional Info, Reviews */}
      <div className="w-full flex flex-col items-center bg-white mt-7 border-t">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-8 px-6 py-4">
          <h4 className="font-[Poppins] font-[500] text-[24px] text-black">
            Description
          </h4>
          <h4 className="font-[Poppins] font-[400] text-[24px] text-[#9F9F9F]">
            Additional Information
          </h4>
          <h4 className="font-[Poppins] font-[400] text-[24px] text-[#9F9F9F]">
            Reviews [5]
          </h4>
        </div>

        {/* Description Content */}
        <div className="w-[90%] max-w-[1026px] mt-4">
          <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-justify text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-justify text-[#9F9F9F] mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>

      {/* Cloud Sofa Section */}
      <div className="w-full flex flex-row justify-center items-center gap-6 mt-6">
        <div className="flex-shrink-0">
          <Image
            src="/cloudsofa.jpg"
            alt="Cloud Sofa"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/cloudsofa2.jpg"
            alt="Cloud Sofa 2"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full bg-white py-8 border-t">
        <h2 className="text-center font-[Poppins] font-[500] text-[36px] leading-[54px] text-black">
          Related Products
        </h2>

        {/* Grid layout for images */}
        <div className="w-full max-w-screen-xl mx-auto px-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image Cards */}
            <div className="flex justify-center">
              <Image
                src="/Featured Products.png"
                alt="Product 1"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products.jpg"
                alt="Product 2"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (2).png"
                alt="Product 3"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (3).png"
                alt="Product 4"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 border-[1px] border-[#B88E2F] bg-white font-[Poppins] font-[600] text-[16px] leading-[24px] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHero;











// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FaStar } from "react-icons/fa";
// import { RiFacebookCircleFill } from "react-icons/ri";
// import { FaLinkedin } from "react-icons/fa";
// import { AiFillTwitterCircle } from "react-icons/ai";

// const SingleHero = () => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image and Content Section */}
//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* Large Image Section */}
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-start gap-4 ml-20">
//             {/* Heading */}
//             <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
//               Asgaard Sofa
//             </h1>

//             {/* Price */}
//             <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
//               Rs. 250,000.00
//             </p>

//             {/* Stars and Reviews Section */}
//             <div className="flex items-center gap-2">
//               {/* Stars */}
//               <div className="flex gap-2">
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               </div>
//               <div className="w-[1px] h-full bg-[#9F9F9F] mt-2 self-end"></div>
//               <p className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] pt-1">
//                 5 Customer Reviews
//               </p>
//             </div>

//             {/* Product Description */}
//             <p className="w-[424px] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] mt-4">
//               Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
//               stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
//               highs for a sound.
//             </p>

//             {/* Size Selection Section */}
//             <div className="flex flex-col gap-2">
//               <p className="font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">
//                 Size
//               </p>
//               <div className="flex items-center gap-4">
//                 <button className="w-[40px] h-[40px] rounded-[5px] bg-[#B88E2F] text-[#ffffff] font-[Poppins] text-[13px] leading-[19.5px]">
//                   L
//                 </button>
//                 <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
//                   XL
//                 </button>
//                 <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
//                   XS
//                 </button>
//               </div>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4">
//               <div className="w-[123px] h-[64px] flex items-center justify-between rounded-[10px] border-[1px] border-[#9F9F9F] bg-[#ffffff] px-4">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
//                 >
//                   -
//                 </button>
//                 <p className="font-[Poppins] font-[500] text-[16px] text-[#000000]">{quantity}</p>
//                 <button
//                   onClick={increaseQuantity}
//                   className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Buttons Section */}
//             <div className="flex items-center gap-4 mt-4">
//               {/* Add to Cart Button */}
//               <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
//                 <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">Add To Cart</p>
//               </button>

//               {/* Compare Button */}
//               <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
//                 <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">Compare</p>
//               </button>
//             </div>
//             <hr className="mt-6 border-[#D9D9D9]" />
//             <div className="mt-4 flex flex-col gap-2">
//   {/* SKU */}
//   <div className="flex justify-start items-center gap-2">
//     <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">SKU</p>
//     <p className="text-[16px] font-[Poppins] text-[#000]">: SS001</p>
//   </div>
//   {/* Category */}
//   <div className="flex justify-start items-center gap-2">
//     <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">Category</p>
//     <p className="text-[16px] font-[Poppins] text-[#000]">: Sofas</p>
//   </div>
//   {/* Tags */}
//   <div className="flex justify-start items-center gap-2">
//     <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">Tags</p>
//     <p className="text-[16px] font-[Poppins] text-[#000]">: Sofa, Chair, Home, Shop</p>
//   </div>
//   {/* Share */}
//   <div className="flex justify-start items-center gap-2">
//     <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">Share</p>
//     <p className="text-[16px] font-[Poppins] text-[#000] flex gap-2">
//       : <RiFacebookCircleFill className="text-[20px]" />
//       <FaLinkedin className="text-[20px]" />
//       <AiFillTwitterCircle className="text-[20px]" />
//     </p>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>

// <div className='w-[1440px] h-[744px] top-[1042px] border-[1px] border-[#D9D9D9] mt-7'>
//   <div className='w-[649px] h-[36px] top-[1090px] left-[396] flex justify-center items-center'>
//     <p className='w-[137px] h-[36px] top-[1090px] left-[396] font-[Poppins] font-[500] text-[24px] leading-[36px] text-black'>
//     Description
//     </p>
//     <p className='w-[137px] h-[36px] top-[1090px] left-[396] font-[Poppins] font-[400] text-[24px] leading-[36px] text-[#9F9F9F]'>
//     Additional Information
//     </p>
//     <p className='w-[137px] h-[36px] top-[1090px] left-[396] font-[Poppins] font-[400] text-[24px] leading-[36px] text-[#9F9F9F]'>
//     Reviews [5]
//     </p>
//   </div></div>
//     </div>
//   );
// };

// export default SingleHero;

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FaStar } from "react-icons/fa";

// const SingleHero = () => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image and Content Section */}
//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* Large Image Section */}
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-start gap-4 ml-20">
//             {/* Heading */}
//             <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
//               Asgaard Sofa
//             </h1>

//             {/* Price */}
//             <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
//               Rs. 250,000.00
//             </p>

//             {/* Stars and Reviews Section */}
//             <div className="flex items-center gap-2">
//               {/* Stars */}
//               <div className="flex gap-2">
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               </div>
//               <div className="w-[1px] h-full bg-[#9F9F9F] mt-2 self-end"></div>
//               <p className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] pt-1">
//                 5 Customer Reviews
//               </p>
//             </div>

//             {/* Product Description */}
//             <p className="w-[424px] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] mt-4">
//               Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
//               stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
//               highs for a sound.
//             </p>

//             {/* Size Selection Section */}
//             <div className="flex flex-col gap-2">
//               <p className="font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">
//                 Size
//               </p>
//               <div className="flex items-center gap-4">
//                 <button className="w-[40px] h-[40px] rounded-[5px] bg-[#B88E2F] text-[#ffffff] font-[Poppins] text-[13px] leading-[19.5px]">
//                   L
//                 </button>
//                 <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
//                   XL
//                 </button>
//                 <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
//                   XS
//                 </button>
//               </div>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4">
//               <div className="w-[123px] h-[64px] flex items-center justify-between rounded-[10px] border-[1px] border-[#9F9F9F] bg-[#ffffff] px-4">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
//                 >
//                   -
//                 </button>
//                 <p className="font-[Poppins] font-[500] text-[16px] text-[#000000]">{quantity}</p>
//                 <button
//                   onClick={increaseQuantity}
//                   className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
//               <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">Add To Cart</p>
//             </button>

//             {/* Compare Button */}
//             <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
//               <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">Compare</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react';
// import Image from 'next/image';
// import { FaStar } from "react-icons/fa";

// const SingleHero = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image and Content Section */}
//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* Large Image Section */}
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-start gap-4 ml-20">
//             {/* Heading */}
//             <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
//               Asgaard Sofa
//             </h1>

//             {/* Price */}
//             <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
//               Rs. 250,000.00
//             </p>

//             {/* Stars and Reviews Section */}
//             <div className="flex items-center gap-2">
//               {/* Stars */}
//               <div className="flex gap-2">
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               </div>
//               <div className="w-[1px] h-full bg-[#9F9F9F] mt-2 self-end"></div>
//               <p className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] pt-1">
//                 5 Customer Reviews
//               </p>
//             </div>

//             {/* Product Description */}
//             <p className="w-[424px] h-[80px] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] mt-4">
//               Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
//               stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
//               highs for a sound.
//             </p>

//             {/* Size Selection Section */}
//             <div className="flex flex-col gap-2">
//               <p className="font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">
//                 Size
//               </p>
//               {/* Size Buttons Container */}
//               <div className="flex items-center gap-4">
//                 <div className="w-[40px] h-[40px] rounded-[5px] bg-[#B88E2F] flex items-center justify-center">
//                   <button className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#ffffff]">
//                     L
//                   </button>
//                 </div>
//                 <div className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] flex items-center justify-center">
//                   <button className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#000000]">
//                     XL
//                   </button>
//                 </div>
//                 <div className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] flex items-center justify-center">
//                   <button className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#000000]">
//                     XS
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <p className="w-[38px] h-[21px] top-[581px] left-[734px] font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">
//                 Color
//               </p>
// <div className='w-[30px] h-[30px] top-[614px] left-[735px] rounded-[50px] bg-[#816DFA]'></div>
// <div className='w-[30px] h-[30px] top-[614px] left-[735px] rounded-[50px] bg-[#000000]'></div>
// <div className='w-[30px] h-[30px] top-[614px] left-[735px] rounded-[50px] bg-[#B88E2F]'></div>

// <div className='w-[123px] h-[64px] top-[676px] left-[735px] rounded-[10px] border-[1px] border-[#9F9F9F] bg-[#ffffff] align-[inner]'>
//   <p className='w-[9px] h-[24px] top-[696px] left-[750px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]'>
//     -</p>
//     <p className='w-[6px] h-[24px] top-[696px] left-[794px] font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#000000]'>
//     1</p>
//     <p className='w-[11px] h-[24px] top-[696px] left-[835px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]'>
//     +</p>
// </div>
// <button className='w-[215px] h-[64px] top-[676px] left-[876px] rounded-[15px] border-[1px] border-[#000000]'>
//   <p className='w-[119px] h-[30px] top-[693px] left-[924px] font-[Poppins] font-[400] text-[20px] leading-[30px] text-[#000000]'>
//     Add To Cart</p></button>

//     <button className='w-[215px] h-[64px] top-[676px] left-[1101px] rounded-[15px] border-[1px] border-[#000000]'>
//   <div className='w-[122px] h-[35px] top-[691px] left-[1148px] gap-[10px]'>
//     <p className='w-[16px] h-[35px] font-[Poppins] font-[400] text-[23px] leading-[34.5] text-[#000000]'>
//       +
//     </p>
//     <p className='w-[96px] h-[30px] font-[Poppins] font-[400] text-[20px] leading-[30px] text-[#000000]'>
//    Compare </p></div></button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react';
// import Image from 'next/image';
// import { FaStar } from "react-icons/fa";

// const SingleHero = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image and Content Section */}
//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* Large Image Section */}
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-start gap-4 ml-20">
//             {/* Heading */}
//             <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
//               Asgaard Sofa
//             </h1>

//             {/* Price */}
//             <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
//               Rs. 250,000.00
//             </p>

//             {/* Stars and Reviews Section */}
//             <div className="flex items-center gap-2">
//               {/* Stars */}
//               <div className="flex gap-2">
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//                 <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               </div>
//               {/* Horizontal Line under the reviews */}
//             <div className="w-[1px] h-full bg-[#9F9F9F] mt-2 self-end"></div>
//               {/* Reviews Text */}
//               <p className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] pt-1">
//                 5 Customer Reviews
//               </p>
//             </div>

//             <p className="w-[424px] h-[80px] top-[398px] left-[734px] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] mt-4">
//             Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
//             stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
//             highs for a sound.</p>
// <div className='w-[123px] h-[63px] top-[500px] left-[734px] rounded-[5px]'>
//   <p className='w-[27px] h-[21px] top-[500px] left-[734px] font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]'>
//     Size
//   </p>
//   <div className='w-[30px] h-[30px] top-[533px] left-[735px] rounded-[5px] bg-[#B88E2F]'>
//     <p className='w-[6px] h-[20px] top-[538px] left-[747px] text-center font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#ffffff]'>
//       L</p>
//   </div>
//   <div className='w-[30px] h-[30px] top-[533px] left-[781px] rounded-[5px] bg-[#F9F1E7]'>
//     <p className='w-[14px] h-[20px] top-[538px] left-[789px] text-center font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#000000]'>
//       XL</p>
//   </div>
//   <div className='w-[30px] h-[30px] top-[533px] left-[827px] rounded-[5px] bg-[#F9F1E7]'>
//     <p className='w-[16px] h-[20px] top-[538px] left-[834px] text-center font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#000000]'>
//       XS</p>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react';
// import Image from 'next/image';
// import { FaStar } from "react-icons/fa";

// const SingleHero = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image and Content Section */}
//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* Large Image Section */}
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-start gap-4 ml-20">
//             {/* Heading */}
//             <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
//               Asgaard Sofa
//             </h1>

//             {/* Price */}
//             <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
//               Rs. 250,000.00
//             </p>

//             {/* Stars */}
//             <div className="flex gap-2">
//               <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
//             </div>

//             <div className='w-[30px] top-[355px] left-[876px] border-[1px] border-[#9F9F9F] rotate-[-90°] align-[center]'></div>
//             <p className=" w-[125px] h-[20px] top-[360] left-[898] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F]">
//             5 Customer Review
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react';
// import Image from 'next/image';
// import { FaRegStar } from "react-icons/fa";

// const SingleHero = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image and Content Section */}
//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* Large Image Section */}
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-start gap-4 ml-20">
//             {/* Heading */}
//             <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
//               Asgaard Sofa
//             </h1>

//             {/* Price */}
//             <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
//               Rs. 250,000.00
//             </p>

//             {/* Stars */}
//             <div className="flex gap-2">
//               <FaRegStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaRegStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaRegStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaRegStar className="w-[20px] h-[20px] text-[#FFC700]" />
//               <FaRegStar className="w-[20px] h-[20px] text-[#FFC700]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react';
// import Image from 'next/image';
// import { FaRegStar } from "react-icons/fa";

// const SingleHero = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image Section */}
//         <div className="w-full sm:w-auto">
//           <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={1000}
//               height={800}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>
//         </div>
//       </div>

// <div className='w-[606.01px] h-[730px] top-[246px] left-[734px]'>
//   <h1 className='w-[282px] h-[63px] top-[246px] left-[735px] font-[Poppins] font-[400] text-[42px] leading-[63] text-[#000000]'>
//     Asgaard sofa</h1>
//     <p className='w-[173px] h-[36px] top-[309px] left-[735px] font-[Poppins] font-[500] text-[24px] leading-[36] text-[#9F9F9F]'>
//     Rs. 250,000.00
//     </p>
//     <div className='w-[124px] h-[20px] top-[360px] left-[734px]'>
//     <div className='w-[20px] h-[20px] top-[360px] left-[734px]'>
//     <FaRegStar className='w-[18px] h-[18px] top-[1px] left-[1px] fill-[#FFC700]' />
//     </div>

//     <div className='w-[20px] h-[20px] top-[360px] left-[760px]'>
//     <FaRegStar className='w-[18px] h-[18px] top-[1px] left-[1px] fill-[#FFC700]' />
//     </div>

//     <div className='w-[20px] h-[20px] top-[360px] left-[786px]'>
//     <FaRegStar className='w-[18px] h-[18px] top-[1px] left-[1px] fill-[#FFC700]' />
//     </div>

//     <div className='w-[20px] h-[20px] top-[360px] left-[812px]'>
//     <FaRegStar className='w-[18px] h-[18px] top-[1px] left-[1px] fill-[#FFC700]' />
//     </div>

//     <div className='w-[20px] h-[20px] top-[360px] left-[838px]'>
//     <FaRegStar className='w-[9.2px] h-[17.5px] top-[1.25px] left-[0.8px] fill-[#FFC700]' />
//     </div>
//     </div>
// </div>

//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react';
// import Image from 'next/image';

// const SingleHero = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
//       {/* Main Container for Images */}
//       <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
//         {/* Small Images Section */}
//         <div className="flex flex-wrap sm:flex-col gap-4">
//           {/* Image 1 */}
//           <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set 2.png"
//                 alt="Outdoor sofa set"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 2 */}
//           <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Outdoor sofa set_2 1.png"
//                 alt="Outdoor sofa set 2"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 3 */}
//           <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Stuart sofa 1.png"
//                 alt="Stuart sofa"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>

//           {/* Image 4 */}
//           <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]">
//             <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
//               <Image
//                 src="/Maya sofa three seater (1) 1.png"
//                 alt="Maya sofa three seater"
//                 width={300}
//                 height={200}
//                 layout="responsive"
//                 className="w-full h-full object-cover rounded-[10px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Large Image Section */}
//         <div className="w-full sm:w-auto">
//           <div className="w-full sm:w-[400px] md:w-[500px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
//             <Image
//               src="/Asgaard sofa 3.png"
//               alt="Asgaard sofa"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover rounded-[10px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleHero;

// import React from 'react'
// import Image from 'next/image'

// const SingleHero = () => {
//   return (
//     <div className='w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8'>
//       {/* Main Container for Images - Updated for Column Layout */}
//       <div className='flex flex-col items-center gap-6 px-6'>
//         {/* Image 1 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Outdoor sofa set 2.png"
//               alt="Outdoor sofa set"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>

//         {/* Image 2 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Outdoor sofa set_2 1.png"
//               alt="Outdoor sofa set 2"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>

//         {/* Image 3 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Stuart sofa 1.png"
//               alt="Stuart sofa"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>

//         {/* Image 4 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Maya sofa three seater (1) 1.png"
//               alt="Maya sofa three seater"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>
//       </div>
//       <div className='w-[481px] h-[500px] top-[246px] left-[171px] bg-[#F9F1E7]'>
//       <div className='w-[481px] h-[391px] top-[324px] left-[171px]'>
//         <Image src="/Asgaard sofa 3.png" alt="Asgaard sofa" width={6} height={6} />
//       </div>
//       </div>
//     </div>
//   )
// }

// export default SingleHero;

// import React from 'react'
// import Image from 'next/image'

// const SingleHero = () => {
//   return (
//     <div className='w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8'>
//       {/* Main Container for Images */}
//       <div className='flex flex-wrap justify-center gap-6 px-6'>
//         {/* Image 1 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Outdoor sofa set 2.png"
//               alt="Outdoor sofa set"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>

//         {/* Image 2 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Outdoor sofa set_2 1.png"
//               alt="Outdoor sofa set 2"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>

//         {/* Image 3 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Stuart sofa 1.png"
//               alt="Stuart sofa"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>

//         {/* Image 4 */}
//         <div className='w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]'>
//           <div className='w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//             <Image
//               src="/Maya sofa three seater (1) 1.png"
//               alt="Maya sofa three seater"
//               width={300}
//               height={200}
//               layout="responsive"
//               className='w-full h-full object-cover rounded-[10px]'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SingleHero;

// import React from 'react'
// import Image from 'next/image'

// const SingleHero = () => {
//   return (
//     <div className='w-[1440px] h-[820px] top-[211px] bg-[#FFFFFF]'>
//         <div className='w-[1241.01px] h-[730px] top-[246px] left-[99px]'>
//         <div className='w-[553px] h-[500px] top-[246px] left-[99px]'>
//         <div className='w-[76px] h-[416px] top-[246px] left-[99px]'>
//             <div className='w-[76px] h-[80px] top-[246px] left-[99px] rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//                 <Image src="/Outdoor sofa set 2.jpg"
//                 alt="Outdoor sofa set"
//                 width={4}
//                 height={4} className='w-[83px] h-[55px] top-[253px] left-[95px] ' />
//             </div>
//             <div className='w-[76px] h-[80px] top-[358px] left-[99px] rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//                 <Image src="/Outdoor sofa set_2 1.jpg"
//                 alt="Outdoor sofa set2"
//                 width={4}
//                 height={4} className='w-[99px] h-[66px] top-[353px] left-[87px] ' />
//             </div>

//             <div className='w-[76px] h-[80px] top-[470px] left-[99px] rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//                 <Image src="/Stuart sofa 1.jpg"
//                 alt="Stuart sofa "
//                 width={4}
//                 height={4} className='w-[77px] h-[115px] top-[426px] left-[99px] ' />
//             </div>

//             <div className='w-[76px] h-[80px] top-[582px] left-[99px] rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]'>
//                 <Image src="/Outdoor sofa set 2.jpg"
//                 alt="Maya sofa three seater"
//                 width={4}
//                 height={4} className='w-[74px] h-[44px] top-[600px] left-[100px] ' />
//             </div>
//         </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default SingleHero
