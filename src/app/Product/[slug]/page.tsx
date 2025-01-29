import Services from "@/app/components/Services";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      price,
      description,
      tags,
      discountPercentage,
      isNew,
      "imageUrl": productImage.asset->url,
      productImage
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex flex-col lg:flex-row">
            {/* Product Image */}
            <div className="relative w-full lg:w-1/2 h-96 lg:h-auto mb-6 lg:mb-0">
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h1>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-semibold text-green-600">
                    ${product.price}
                  </span>
                  {product.discountPercentage &&
                    product.discountPercentage > 0 && (
                      <span className="text-sm text-red-500 font-medium">
                        {product.discountPercentage}% off
                      </span>
                    )}
                </div>

                <p className="text-gray-600 text-base mb-6">
                  {product.description}
                </p>

                {product.tags?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700">Tags:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
              hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
}
























































// old code///////////

// import Services from "@/app/components/Services";
// import { Product } from "@/app/types/Product";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// import Image from "next/image";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       title,
//       price,
//       description,
//       tags,
//       discountPercentage,
//       isNew,
//       "imageUrl": productImage.asset->url,
//       productImage
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   return (
//     <div>
//     <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10">
//       <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex">
//         {/* Product Image */}
//         <div className="w-1/2 relative">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.title}
//             layout="responsive"
//             width={600}
//             height={400}
//             className="object-contain"
//           />
//           {product.isNew && (
//             <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//               New
//             </span>
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="w-1/2 p-6 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>

//             <div className="flex items-center justify-between mb-4">
//               <span className="text-2xl font-semibold text-green-600">${product.price}</span>
//               {product.discountPercentage && product.discountPercentage > 0 && (
//                 <span className="text-sm text-red-500 font-medium">
//                   {product.discountPercentage}% off
//                 </span>
//               )}
//             </div>

//             <p className="text-gray-600 text-base mb-6">{product.description}</p>

//             {product.tags?.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-sm font-medium text-gray-700">Tags:</h3>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {product.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           <button className="w-full bg-blue-600 text-white py-3 text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//     </div>
//      <Services />
//      </div>
//   );
// }

// import { Product } from "@/app/types/Product";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// import Image from "next/image";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       title,
//       price,
//       description,
//       tags,
//       discountPercentage,
//       isNew,
//       "imageUrl": productImage.asset->url,
//       productImage
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   return (
//     <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10">
//       <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex">
//         {/* Product Image */}
//         <div className="w-1/2 relative">
//         <Image
//   src={urlFor(product.imageUrl).url()}
//   alt={product.title}
//   layout="responsive"
//   width={600} // specify the width
//   height={400} // specify the height
//   className="object-contain" // use object-contain to fit the image inside the container
// />
//           {product.isNew && (
//             <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//               New
//             </span>
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="w-1/2 p-6">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>

//           <div className="flex items-center justify-between mb-4">
//             <span className="text-2xl font-semibold text-green-600">${product.price}</span>
//             {product.discountPercentage && product.discountPercentage > 0 && (
//               <span className="text-sm text-red-500 font-medium">
//                 {product.discountPercentage}% off
//               </span>
//             )}
//           </div>

//           <p className="text-gray-600 text-base mb-6">{product.description}</p>

//           {product.tags?.length > 0 && (
//             <div className="mb-6">
//               <h3 className="text-sm font-medium text-gray-700">Tags:</h3>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button className="w-full bg-blue-600 text-white py-3 text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Product } from "@/app/types/Product";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// import Image from "next/image";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       title,
//       price,
//       description,
//       tags,
//       discountPercentage,
//       isNew,
//       "imageUrl": productImage.asset->url,
//       productImage
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   return (
//     <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10">
//       <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
//         {/* Product Image */}
//         <div className="relative">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.title}
//             width={600}
//             height={400}
//             className="w-full h-96 object-cover"
//           />
//           {product.isNew && (
//             <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//               New
//             </span>
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h1>

//           <div className="flex items-center justify-between mb-4">
//             <span className="text-xl font-semibold text-green-600">${product.price}</span>
//             {product.discountPercentage && product.discountPercentage > 0 && (
//               <span className="text-sm text-red-500 font-medium">
//                 {product.discountPercentage}% off
//               </span>
//             )}
//           </div>

//           <p className="text-gray-600 text-sm mb-4">{product.description}</p>

//           {product.tags?.length > 0 && (
//             <div className="mb-4">
//               <h3 className="text-sm font-medium text-gray-700">Tags:</h3>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button className="w-full bg-blue-600 text-white py-3 text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }

// import { Product } from "@/app/types/Product";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// import Image from "next/image";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProduct(slug:string): Promise<Product> {
// return client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       title,
//       price,
//       description,
//       tags,
//       discountPercentage,
//       isNew,
//       "imageUrl": productImage.asset->url,
//       productImage
//     }`,
//     { slug }

//   )
// }

// export default async function ProductPage({params}: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);
//   return(
//     <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
// <div className="p-4">
// <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.title}
//             width={300}
//             height={300}
//             className="w-full h-48 object-cover"
//           />

// </div>
// <div className="p-4">
//   <h1 className="text-lg font-semibold text-gray-700">
//   {product.title}
//   </h1>
//   <p className="text-gray-500 text-sm mt-2">
//     {product.price}
//   </p>
// </div>
//       </div>
//     </div>
//   )
// }

// import { client } from '@/sanity/lib/client'; // Sanity clie
// import React from 'react';
// import IProducts from '@/app/types/Product';
// import Image from 'next/image';

// const ProductDetailPage = async ({ params: { title } }: { params: { title: string } }) => {
//   // Query to fetch product details based on the _id
//   const query = `*[_type == "product" && title == $title]{ // Fetch a single product
//   title,
//   _id,
//   price,
//   description,
//   isNew,
//   tags,
//   discountPercentage,
//   productImage {
//     asset -> {
//       url
//     }
//   }
// }`[0];

//   // Fetch product using the query
//   const product: IProducts | null = await client.fetch(query, { title });

//   // If the product is not found, show a "Product not found" message
//   if (!product) {
//     return (
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     );
//   }

//   // Render the product details
//   return (
//     <div key={product.title} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//       {product.price}
//     </div>
//   );
// };

// export default ProductDetailPage;

// import { client } from '@/sanity/lib/client'; // Sanity client
// import React from 'react';
// import IProducts from '@/app/types/Product';
// import Image from 'next/image';

// const ProductDetailPage = async ({ params: { _id } }: { params: { _id: string } }) => {
//   // Query to fetch product details based on the _id
//   const query = `*[_type == "product" && _id == $_id]{
//     title,
//     _id,
//     price,
//     description,
//     isNew,
//     tags,
//     discountPercentage,
//     "imageUrl":productImage {
//       asset -> {
//         _id,
//         url
//       }
//     }
//   }`;

//   // Fetch product using the query
//   const product: IProducts | null = await client.fetch(query, { _id });

//   // If the product is not found, show a "Product not found" message
//   if (!product) {
//     return (
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     );
//   }

//   // Render the product details
//   return (
//     <div
//       key={product._id}>
//       <div className="p-4">
//         <h2>{product.title}</h2>
//         {product.isNew && (
//           <span>New Arrival</span>)}
//         <p >{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <p className="text-lg font-bold text-gray-800">{product.price}</p>
//           {product.discountPercentage && product.discountPercentage > 0 && (
//             <span className="text-sm text-red-500">{product.discountPercentage}% OFF</span>
//           )}
//         </div>

//           <Image
//             src={product.imageUrl}
//             alt={product.title}
//             width={300}
//             height={300}
//             className="w-full h-48 object-cover"
//           />

//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

// import { client } from '@/sanity/lib/client'; // Sanity client
// import React from 'react';
// import IProducts from '@/app/types/Product'; // Assuming this interface exists
// import { product } from '@/sanity/schemaTypes/product';
// import Products from '@/app/components/Products';
// import Image from 'next/image';

// const ProductDetailPage = async ({params:{_id}}:{params:{_id: string}}) => {
//   // Query to fetch product details based on the title
//   const query = `*[_type == "product" && _id == $_id]{
//     title,
//     _id,
//     price,
//     description,
//     isNew,
//     tags,
//         discountPercentage
//     productImage: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//             _type: 'reference'
//           }[0]`;

//   // Fetch product using the title from the query
//   const products: IProducts | null = await client.fetch(query, {_id});

//   // If the product is not found, show a "Product not found" message
//   if (!products) {
//     return (
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     );
//   }

//   // Render the product details
//   return (
//     <div key={products._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-700">{products.title}</h2>
//         {products.isNew && (
//           <span className="text-sm text-green-500 font-medium">New Arrival</span>
//         )}
//         <p className="text-gray-500 text-sm mt-2">{products.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <p className="text-lg font-bold text-gray-800">${products.price.toFixed(2)}</p>
//           {products.discountPercentage && products.discountPercentage > 0 && (
//             <span className="text-sm text-red-500">{products.discountPercentage}% OFF</span>
//           )}
//         </div>
//         <Image
//           src={products.imageUrl}
//           alt={products.title}
//           width={300}
//           height={300}
//           className="w-full h-48 object-cover"
//         />
//       </div>

//     </div>
//   );
// };

// export default ProductDetailPage;

// import { client } from '@/sanity/lib/client';
// import React from 'react';
// import Image from 'next/image';
// import IProducts from '@/app/types/Product';

// const ProductDetailPage = async ({ params:{title} }: { params: { title: string } }) => {

//   // Query to fetch product based on the title
//   const query = `*[_type == "product" && title == $title]{
//     title,
//     price,
//     description,
//     isNew,
//     tags,
//     "imageUrl": productImage.asset_ref,
//     discountPercentage
//   }[0]`;

//   // Fetch product using the title
//   const product: IProducts | null = await client.fetch(query, { title });

//   // If the product is not found, return a message
//   if(!product){
//     return(
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     )
//   }

//   // Render the product details
//   return (
//     <div
//       key={product.title}
//       className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//     >
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
//         {product.isNew && (
//           <span className="text-sm text-green-500 font-medium">New Arrival</span>
//         )}
//         <p className="text-gray-500 text-sm mt-2">{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <p className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
//           {product.discountPercentage && product.discountPercentage > 0 && (
//             <span className="text-sm text-red-500">
//               {product.discountPercentage}% OFF
//             </span>
//           )}
//         </div>
//         <Image
//           src={product.imageUrl}
//           alt={product.title}
//           width={300}
//           height={300}
//           className="w-full h-48 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

// import IProducts from '@/app/types/Product';
// import { client } from '@/sanity/lib/client';
// import React from 'react';
// import Image from 'next/image';

// const page = async ({ params: { title } }: { params: { title: string } }) => {
//   // Query to fetch product based on the title
//   const query = `*[_type == "product" && title == $title]{
//     title,
//     price,
//     description,
//     _id,
//     isNew,
//     tags,
//     "productImageUrl": productImage.asset->url,
//     discountPercentage
//   }[0]`;

//   // Fetch product using the title
//   const product: IProducts | null = await client.fetch(query, { title });

//   // If the product is not found, return a message
//   if (!product) {
//     return (
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     );
//   }

//   // Render the product details
//   return (
//     <div
//       key={product._id}
//       className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//     >
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
//         {product.isNew && (
//           <span className="text-sm text-green-500 font-medium">New Arrival</span>
//         )}
//         <p className="text-gray-500 text-sm mt-2">{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <p className="text-lg font-bold text-gray-800">
//             ${product.price.toFixed(2)}
//           </p>
//           {product.discountPercentage && product.discountPercentage > 0 && (
//             <span className="text-sm text-red-500">
//               {product.discountPercentage}% OFF
//             </span>
//           )}
//         </div>
//         <Image
//           src={product.productImageUrl}
//           alt={product.title}
//           width={300}
//           height={300}
//           className="w-full h-48 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default page;

// import IProducts from '@/app/types/Product';
// import { client } from '@/sanity/lib/client';
// import React from 'react';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';

// const page = async ({ params: { title } }: { params: { title: string } }) => {
//   // Query to fetch product based on the title
//   const query = `*[_type == "product" && title == $title]{
//     title,
//     price,
//     description,
//      _id,
//     isNew,
//     tags,
//     "imageUrl": productImage.asset.ref, // Fetch the full image URL
//     discountPercentage
//   }[0]`;

//   // Fetch product using the title
//   const product: IProducts | null = await client.fetch(query, { title });

//   // If the product is not found, return a message
//   if (!product) {
//     return (
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     );
//   }

//   // Render the product details
//   return (
//     <div
//       key={product._id}
//       className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//     >
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
//         {product.isNew && (
//           <span className="text-sm text-green-500 font-medium">New Arrival</span>
//         )}
//         <p className="text-gray-500 text-sm mt-2">{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <p className="text-lg font-bold text-gray-800">
//             ${product.price.toFixed(2)}
//           </p>
//           {product.discountPercentage && product.discountPercentage > 0 && (
//             <span className="text-sm text-red-500">
//               {product.discountPercentage}% OFF
//             </span>
//           )}
//         </div>
//         <Image
//           src={urlFor(product.imageUrl).url()}
//           alt={product.title}
//           width={300}
//           height={300}
//           className="w-full h-48 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default page;

// import IProducts from '@/app/types/Product';
// import { client } from '@/sanity/lib/client';
// import React from 'react';
// import Image from 'next/image';

// const page = async ({ params: { id } }: { params: { id: string } }) => {
//   const query = `*[_type == "product" && _id == $id]{
//     title,
//     price,
//     description,
//     "id": _id,
//     isNew,
//     tags,
//     "imageUrl": productImage.asset->url, // Fetch the full image URL
//     discountPercentage
//   }[0]`;

//   const product: IProducts | null = await client.fetch(query, { id });

//   if (!product) {
//     return (
//       <div>
//         <h1>Product not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div
//       key={product.id}
//       className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//     >
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
//         {product.isNew && (
//           <span className="text-sm text-green-500 font-medium">New Arrival</span>
//         )}
//         <p className="text-gray-500 text-sm mt-2">{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <p className="text-lg font-bold text-gray-800">
//             ${product.price.toFixed(2)}
//           </p>
//           {product.discountPercentage && product.discountPercentage > 0 && (
//             <span className="text-sm text-red-500">
//               {product.discountPercentage}% OFF
//             </span>
//           )}
//         </div>
//         <Image
//           src={product.imageUrl}
//           alt={product.title}
//           width={300}
//           height={300}
//           className="w-full h-48 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default page;

// import IProducts from '@/app/types/Product'
// import { client } from '@/sanity/lib/client'
// import React from 'react'
// import Image from 'next/image'

// const page = async( {params:{id}}:{params:{id:string}}) => {
//     const query = `*[_type == "product" && _id == $id]{
//   title,
//     price,
//     description,
//     "id":_id,
//     isNew,
//     tags,
//     "imageUrl":productImage.asset._ref,

// }[0]`

// const product:IProducts | null = await client.fetch(query, {id})
// if(!product){
//     return(
//         <div><h1>Product not found</h1></div>)

// }

//   return (
//     <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//     <div className="p-4">
//       <h2 className="text-lg font-semibold text-gray-700">
//         {product.title}
//       </h2>
//       {product.isNew && (
//         <span className="text-sm text-green-500 font-medium">
//           New Arrival
//         </span>
//       )}
//       <p className="text-gray-500 text-sm mt-2">
//         {product.description}
//       </p>
//       <div className="mt-4 flex items-center justify-between">
//         <p className="text-lg font-bold text-gray-800">
//           ${product.price.toFixed(2)}
//         </p>
//         {product.discountPercentage > 0 && (
//           <span className="text-sm text-red-500">
//             {product.discountPercentage}% OFF
//           </span>
//         )}
//       </div>
//       <Image
//           src={product.imageUrl}
//             alt={product.title}
//             width={300}
//             height={300}
//             className="w-full h-48 object-cover"
//             />

//     </div>
//     </div>

//   )
// }

// export default page
